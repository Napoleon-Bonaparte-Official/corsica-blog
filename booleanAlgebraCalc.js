function evaluateExpression() {
    const expressionInput = document.getElementById('expression').value;
    const variables = extractVariables(expressionInput);

    const truthTable = generateTruthTable(variables);
    const results = evaluateForAllCombinations(expressionInput, variables, truthTable);

    displayTruthTable(variables, truthTable, results);
}

function extractVariables(expression) {
    const variableRegex = /[A-Za-z]+/g;
    const variables = new Set(expression.match(variableRegex));
    return [...variables];
}

function generateTruthTable(variables) {
    const numRows = Math.pow(2, variables.length);
    const truthTable = [];

    for (let i = 0; i < numRows; i++) {
        const row = {};
        for (let j = 0; j < variables.length; j++) {
            row[variables[j]] = Boolean(i & (1 << j));
        }
        truthTable.push(row);
    }

    return truthTable;
}

function evaluateForAllCombinations(expression, variables, truthTable) {
    const results = [];
    for (const row of truthTable) {
        const expressionWithValues = expression.replace(/[A-Za-z]+/g, match => row[match]);
        results.push({
            values: Object.values(row),
            result: eval(expressionWithValues)
        });
    }

    return results;
}

function displayTruthTable(variables, truthTable, results) {
    const tableElement = document.getElementById('truthTable');

    // Clear previous content
    tableElement.innerHTML = '';

    // Display header row with variable names
    const headerRow = document.createElement('tr');
    for (const variable of variables) {
        const headerCell = document.createElement('th');
        headerCell.textContent = variable;
        headerRow.appendChild(headerCell);
    }
    const resultHeader = document.createElement('th');
    resultHeader.textContent = 'Result';
    headerRow.appendChild(resultHeader);
    tableElement.appendChild(headerRow);

    // Display truth table rows
    for (let i = 0; i < truthTable.length; i++) {
        const row = truthTable[i];
        const result = results[i];
        const tableRow = document.createElement('tr');
        for (const variable of variables) {
        const cell = document.createElement('td');
        cell.textContent = row[variable] ? '1' : '0';
        tableRow.appendChild(cell);
        }
        const resultCell = document.createElement('td');
        resultCell.textContent = result.result ? '1' : '0';
        tableRow.appendChild(resultCell);
        tableElement.appendChild(tableRow);
    }
}