---
toc: False
comments: True
layout: post
title: Big Idea 5.6 Safe Computing
description: hacker
type: hacks
courses: {'compsci': {'week': 17}}
---

# Big Idea 5.6 Safe Computing
![Banner](https://media.istockphoto.com/id/875326436/photo/cybersecurity-digital-globe-with-blueprint.jpg?s=1024x1024&w=is&k=20&c=6fcixWvWK7g-e91eI3JQJbGo82iCJnmUNC-Yl2z-dt0=)

## Personal Identifiable Information (PII)
Personal Identifiable Information or PII is a type of information that is **specific** to you. For example, your age or race would be an example but something like your favorite cat isn’t (Will insists your diet is a PII but it’s not). 

There are times when we want to post our PII online. For example, you would want to upload it to your job profile or a site like LinkedIn because you want people to see it. However, be careful where you upload this data. It will be known by everyone since it’s public.

> Some things that you should be cautious about to upload (gray area) would be:
- Birth date
- Place of birth
- Address
- Phone number
- Maiden names
- Drivers License Number

> There are things, however, that you will most likely have to upload publicly OR can be found with a quick search. For example:
- Name
- Date of Birth
- SSN
- Bank Account info
- Email
- Picture
- What high school you attended
- What college you went to
- Properties you own
- State/City of residence
- Previous residence

You could upload this online (some you have to. Ex: home address for Amazon) but be careful where you upload it. You don’t want to post your mother’s maiden name on social media.

> Things that you should keep confidential would be: 
- Private credentials for accounts and what-not
- Two-factor authentication
- This is common for sensitive things like financial data
- Social security numbers
- Tax records
- Medical information
- Financial data

Most if not all financial and government documents should be kept private. However, there will be times when you need to share this. For example, if you are applying for a RealID (form of identification), you will need to submit your social security number.

### POPCORN HACK 1: 
> How do you decide what personal information to share online and what to keep confidential?


## Beware, Establish practices for your own Safety
#### Authentication
> Authentication measures protect devices and information from unauthorized access.
#### Strong Passwords
> The easier the password is to guess, the easier it is to make a mess.
Strong passwords:
- 10 or more characters 
- Must contain a symbol
- Must contain a number
- Must contain lowercase and uppercase letters
- Avoid dictionary words/things known about you (ex. “Password”, “123456”, your birthday, your name, your pet’s name, etc.)
> The above are things hackers can look for while guessing your password
#### Types of Authentication
- What the user knows (ex. passwords, answers to security questions, etc.)
- What you are (ex. biometric data like eye scan, palm print, thumbprint, etc.)
- What you have (ex. keycards, etc.)
#### Multi-factor Authentication
> When one or more of these authentication measures are used, it is considered multi-factor authentication.

#### Precautions
- Run Virus scans to help prevent malicious code from getting into and affecting your system. 
- Keeping the operating system and other software up to date can also fix errors that would allow a virus or malware to compromise a system. 

### POPCORN HACK 2: 
> How can multi-factor authentication enhance security?

## Nefarious Uses of Internet
### Virus and Malware
#### Virus
- Viruses can allow unauthorized access by modifying the operating system to accept any user without authentication. 
- Virus malicious programs that can copy themselves and gain access to systems that they are not supposed to be in. 
#### Malware
- Malware is often intended to damage a computing system or take partial control over its operation.
- Infiltrates a system by posing as legitimate programs or by attaching itself to legitimate programs, like an email attachment.
- Malware is often sent in attachments to things in email. Often they request you to click on an attachment and it starts the process of adding a virus to your computer.
> Phishing: Phishing is an attempt to trick a user into providing personal information (PII) by using social manipulation.
Phishing emails look like they’re from a trusted source. They may appear to be an email from a bank or credit card company or a store. They could also be from a Nigerian prince or a fish who is phishing.

They try to trick you into clicking a link and may try to scare you or lure you with the promise of something like money. The link could cause unexpected harm. They may install a virus or keylogger on your computer.
A keylogger records keystrokes made by the user which can be used to get credentials.
They could also turn your computer into a rogue access point or a fake wireless network which can be used to infect other computers.



## Factors to Increase Security of System
Encryption is a good way to increase security of a system.
- *Passwords* vs. *keys*: A password is something used to login or unlock an account, while a key is used to encrypt/decrypt the data being used or transferred by that account.<br>
[Demoing cryptography](https://gchq.github.io/CyberChef/)
- Symmetric Encryption - Basic ciphers or codes
- Symmetric encryption uses **one** key to encrypt and decrypt
    - Examples: Caesar Cipher, Morse Code, Rail Fence Cipher, PSK, etc.
- Asymmetric encryption is much more secure. It uses public keys to encrypt and private keys to decrypt.
    - Examples: RSA, Diffie-Hellman, Public Key Encryption

### "Alice and Bob"

Alice wants to send an encrypted message to her friend Bob.
With symmetric key encryption, the following process ensues:<br>
![Alice and Bob Symmetric](https://www.researchgate.net/profile/Martijn-Geurden/publication/327799148/figure/fig1/AS:673332223549445@1537546320191/The-use-of-symmetric-key-encryption-between-Alice-and-Bob-Franciscus-2016.jpg)<br><br>
Pretty simple, right! You know what else is simple? Trying to share the encryption/decryption key without letting anyone else know. Enter: Asymmetric Encryption<br><br>
![Bob Public](https://upload.wikimedia.org/wikipedia/commons/0/03/Public_key_encryption_alice_to_bob.svg) ![Alice Public](https://bjc.edc.org/March2019/bjc-r/img/3-lists/525px-Public_key_encryption.png)


### POPCORN HACK 3: 
> What are the key differences between symmetric and asymmetric encryption?



### SSL/TLS
Uses a Certificate Authority(CA) to generate a signed certificate that proves the server's legitamacy.<br><br>
![CA Diagram](https://media.discordapp.net/attachments/1173345543536259183/1187287947880452126/D9xiAn1zBsCsQAAAABJRU5ErkJggg.png?ex=65965711&is=6583e211&hm=5098ee9dfed78caa6b926f623b6e05662c459a01bc61cebf0f3e8f8b8feb2630&=&format=webp&quality=lossless&width=1036&height=671)


**Authentication**: SSL/TLS certificates ensure the identity of the server and sometimes the client. They contain information about the entity they are issued to, including the domain name and public key.

**Encryption**: SSL/TLS certificates facilitate encrypted communication between the client and server. They enable the encryption of data transmitted over the internet, preventing eavesdropping and unauthorized access.

**Certificate Authorities (CAs)**: CAs issue SSL/TLS certificates after verifying the identity of the certificate requester. They act as trusted third parties that sign and validate the authenticity of certificates.

**Public and Private Keys**: SSL/TLS certificates use asymmetric encryption, involving a public key to encrypt data and a private key to decrypt it. The public key is embedded in the certificate while the corresponding private key is securely held by the server.

**Handshake Protocol**: When a client connects to a server, they engage in a handshake protocol to establish a secure connection. This involves agreeing on encryption algorithms, exchanging keys, and verifying the authenticity of the certificates.

**Expiration and Renewal**: SSL/TLS certificates have a validity period. They need to be periodically renewed to maintain secure communication. Expired certificates can disrupt services and pose security risks.

**HTTPS**: SSL/TLS certificates are commonly used in web browsers to enable HTTPS connections. They signal a secure connection, ensuring data integrity, confidentiality, and authenticity between the web server and the user's browser. 
- Ex: When we used certbot to make our backend server run using HTTPS in the passion project

Firewall and antivirus
Firewall and antivirus software is a really good and easy way to protect your computer. Pretty much all computers come with this software and are enabled as a default. Just make sure to not disable it!

<img src="https://i.kym-cdn.com/entries/icons/original/000/042/184/handsomestaringeagle.jpg">

## Homework
1. Describe PII you have seen on a project in CompSci Principles.
2. Describe good and bad passwords? What is another step that is used to assist in authentication?
3. Try to describe Symmetric and Asymmetric encryption.
4. Provide an example of encryption we used in AWS deployment.
5. Create a python script that lets the user input a password that is checked by the program<br>
**BONUS**: Use online wordlists to compare the password, preventing dictionary attacks 



```python
# Code Here for Q5

```
