function evaluateExpression() {
    const expressionInput = document.getElementById('expression').value; //get text
    const variables = extractVariables(expressionInput); //remove variables

    const truthTable = generateTruthTable(variables);
    const results = evaluateForAllCombinations(expressionInput, variables, truthTable);

    displayTruthTable(variables, truthTable, results);
    translateExpression(expressionInput)//; //translates expressions
}

function extractVariables(expression) { //uses regex to take out the variables
    const variableRegex = /[A-Za-z]+/g;
    const variables = new Set(expression.match(variableRegex));
    return [...variables];
}

function translateExpression(expression) { //convert symbols to code (+ --> &&)
    let express = "";
    for (let i = 0; i < expression.length; i++) {
        if (expression.substring(i, i + 1) == "+") {
            express += " AND "
        }
        else if (expression.substring(i, i + 1) == "*") {
            express += " OR "
        }
        else if (expression.substring(i, i + 1) == "!") {
            express += " NOT "
        }
        else {
            express += expression.substring(i, i + 1)
        }
    }
    const tableElement = document.getElementById('express');
    tableElement.innerHTML = express;
    console.log(express);
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
    console.log(truthTable);
    return truthTable;
}

function evaluateForAllCombinations(expression, variables, truthTable) {
    const results = [];
    for (const row of truthTable) {
        const expressionWithValues = expression.replace(/[A-Za-z]+/g, match => row[match]);
        console.log(expression)
        console.log(expressionWithValues);
        results.push({
            values: Object.values(row),
            result: eval(expressionWithValues)
        });
    }

    return results;
}

function displayTruthTable(variables, truthTable, results) {
    const tableElement = document.getElementById('truthTable');

    tableElement.innerHTML = '';

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

    for (let i = 0; i < truthTable.length; i++) {
        const row = truthTable[i];
        const result = results[i];
        const tableRow = document.createElement('tr');
        for (const variable of variables) {
            const cell = document.createElement('td');
            cell.textContent = row[variable] ? 'true' : 'false';
            tableRow.appendChild(cell);
        }
        const resultCell = document.createElement('td');
        resultCell.textContent = result.result ? 'true' : 'false';
        tableRow.appendChild(resultCell);
        tableElement.appendChild(tableRow);
    }
}