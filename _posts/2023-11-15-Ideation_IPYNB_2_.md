---
toc: True
comments: False
layout: post
title: Ideation & Plans
type: plans
courses: {'compsci': {'week': 0}}
---

# Plans

## What we've done so far
- We've figured out a basic frontend using Nighthawk Pages
- Gotten basic projects up and running(LSB Stego, Color Matching, Binary Conversion)
## Future Plans
- Expanding Steganopgraphy to different types
- More image manipulation using color values
## Delegation
- Advik - Working with steganography and image manipulation
- Will - Also working on steganopgraphy, debugging
- Aashray - Frontend styling, UX/UI, ease of use, organization
- Yeongsu - Other applications of binary/boolean logic(Boolean Algebra, Color Matching, etc.)

# Image Manipulation

# LSB

### What is LSB?

LSB steganography is a technique where information is hidden within the least significant bits of digital data, often in images. The idea is to make small, subtle changes to the least significant bits of pixel values, which are less likely to be noticed by the human eye. This allows for the covert transmission of information without significantly altering the visual appearance of the image. You can think of it as a form of digital camouflage.

### What does it have to do with binary?

In the digital world, information is represented in binary which is 1s and 0s. For images, its information is stored in pixels. Each pixel has a color value and this is represented with binary. These digits can be separated into more significant bits (MSBs) and less significant bits (LSBs).

LSB steganography involves manipulating the least significant bits of these binary representations. Since the LSBs contribute less to the overall value of a pixel, changes in these bits are less likely to be noticed by the human eye. This property makes LSBs a suitable place to hide information without causing significant visual changes to the image.

So, in essence, LSB steganography exploits the binary representation of data in digital systems to conceal additional information within the least noticeable part of the data.

# Grayscale

### What is grayscale?

Grayscale is defined as “a range of gray shades from white to black, as used in a monochrome display or print out.” In other words, a black and white image.

### What does it have to do with binary?

Grayscale works by taking the red (R), green (G), and blue (B) values of each pixel and averaging them out. Then it takes this average value and assigns it to each R, G, & B value (note: when all the RGB values are the same number, you get a monochromatic color). So what does this have to do with binary? Well it all comes back to the data in the image! Since all the data is represented as binary, we can manipulate it to manipulate the image colors. 

This can also work for other things we want to do to the image. Want to increase the red? Maybe the green and blue? It can all be done with binary manipulation.

# LSB & Logic Gates

### Image Combination With XOR

You take the LSBs of each pixel from the image you want to hide and the image you want to hide it in. Let's say you're using the XOR logic gate. For each pixel, you XOR the LSBs of the two images. If the bits are the same, the result is 0; if they're different, the result is 1.

The new image is created by replacing the LSBs of the original image with the XORed values. The changes are subtle, as the LSBs have the least impact on the overall color.

To retrieve the hidden image, you or someone with the key (the original image used for hiding) XORs the LSBs of the resulting image with the LSBs of the key image. This extracts the hidden information.

# Binary to Text Conversion

### What is ASCII?

Before we get into converting text, we need to understand ASCII. ASCII stands for American Standard Code for Information Interchange, a standard for transmitting information between computers (usually text, symbols, emoticons, etc). Each character in ASCII has a unique number assigned to it. For example, ‘A’ in ASCII would be number 65. Using this number, we can convert ASCII to binary.

### How do we convert?

To convert the ASCII code to binary, we use a process of division by 2. We keep dividing the ASCII code by 2 and note the remainders until the quotient becomes zero. The sequence of remainders, read in reverse order, gives us the binary representation.

Here’s an example of this:

ASCII 'A' = 65

65 / 2 = 32 remainder **1**

32 / 2 = 16 remainder **0**

16 / 2 = 8 remainder **0**

8 / 2 = 4 remainder **0**

4 / 2 = 2 remainder **0**

2 / 2 = 1 remainder **0**

1 / 2 = 0 remainder **1**

Binary representation = **1000001**

We can also add padding, or leading zeros to the binary representation. This doesn’t change its value but it’s important if you’re working with fixed-size bit patterns.

# Boolean Algebra

### What is Boolean Algebra?

Boolean algebra is a branch of algebra that deals with variables that can only take on two values: true or false, often represented as 1 or 0. It's named after mathematician and logician George Boole, who developed the algebraic system.

Boolean algebra includes operations like AND, OR, and NOT, which are used to manipulate and analyze logical expressions. Here's a brief overview:

* AND Operation (&&): Returns true (1) only if both operands are true.
    * Example: A && B is true only if both A and B are true.
* OR Operation (||): Returns true (1) if at least one of the operands is true.
    * Example: A || B is true if either A or B or both are true.
* NOT Operation (!): Negates the value of the operand, turning true into false and vice versa.
    * Example: !A is true if A is false, and vice versa.

### Boolean Calculators

Boolean algebra calculators are tools that help you perform these operations on logical expressions. You input the expressions, and the calculator applies the rules of Boolean algebra to simplify or evaluate the expression.

For example, if you have the expression A && (B || C), the calculator would break it down step by step: \

1. Evaluate B || C.
2. Substitute the result into A && (B || C).
3. Perform the AND operation A && (B || C).

So let's make A `true`, B `false`, and C `true`.

1. Evaluate `false` || `true`.
2. Substitute the result into `true` && `true` and perform the AND operation to get `true`.

Boolean algebra calculators in the context of programming typically use these symbols for logical operations. They operate on Boolean values, which are often represented as true or false in programming languages. The goal is still to manipulate and evaluate logical expressions efficiently, but the syntax aligns with the conventions of the specific programming language being used.

# [Ideation](https://www.canva.com/design/DAF0Sklx86I/dHguDLYWbIvc1uE5g_CxOQ/edit?utm_content=DAF0Sklx86I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

### Home Page

* The homepage will contain information about all the projects
* It has a navbar

### Image Manipulator

* Image manipulation contains a separate sub-navbar that leads to different types of manipulation
* Display Images separately (the input and the output)

### Color Matching Game

* The color matching game uses a decimal and converts the binary back to hexadecimal in order to create a color.

### Binary-Text Converter

* This uses the ASCII table and the binary to convert between text and binary. 
