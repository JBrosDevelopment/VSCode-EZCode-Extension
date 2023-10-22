# __EZCode__

## VSCode Extension

This extension is for highlighting keywords to make coding esier! Have fun coding!
```
print Hello World!
```

# EZCode 2.0.0

![Main Image](EZCode_Wide_Logo.png)

---

<details open>
<summary><h2>Welcome!</h2></summary>

**Welcome to EZCode!** EZCode is a comprehensive programming language built off of Microsoft WinForms. EZCode strives to make it as easy as possible to build a Windows program ranging from a Visual Application to simple console programs. Refer to [Community](#community) to learn more on how to contribute and where to join our Discord Server!
</details>

<details open>
<summary><h2>Docs</h2></summary>

The [Official Docs](https://github.com/JBrosDevelopment/EZCode/wiki/EZCode-Docs) are on the our [GitHub Wiki Page](https://github.com/JBrosDevelopment/EZCode/wiki). Please refer to this for any detailed instrictions.
</details>

<details open>
<summary><h2>Community</h2></summary>

Contribute to the community in many ways including the [EZCode Project Repository](https://github.com/JBrosDevelopment/EZCode-Projects.git) for the community. Create a pull request and I will accept as soon as I can. There is also the [Discussion Board](https://github.com/JBrosDevelopment/EZCode/discussions) for anybody who has questions or wants to share. If you need any help, you can look over the [Wiki](https://github.com/JBrosDevelopment/EZCode/wiki) which includes instructions and documentation.

Please join our [Discord Server](https://discord.gg/DpBrp6Zy) to get closer to the community!
</details>

<details open>
<summary><h2>Example</h2></summary>

This is a simple example of a program where the `X_Scale` and `Y_Scale` print out a square of `char` characters. It outputs a 12 x 10 square of `%` with spaces between the. Look over this code and see if you can follow along with thte comments.

```ezcode
// Set dimensions of square
var x_Scale 12
var Y_Scale 10

// Character for square
var char %

// Create and set the 'txt' var to the correct dimensions
var txt
var interval 0
loop Y_Scale 
{
    interval + 1
    loop x_Scale 
    {
        txt + 'char'\_
    }

    // Check if this is the last row before adding a newline
    if interval <= Y_Scale : txt + \n
}

// Print the output
print 'txt'

// Outputs:
// % % % % % % % % % % % % 
// % % % % % % % % % % % % 
// % % % % % % % % % % % % 
// % % % % % % % % % % % % 
// % % % % % % % % % % % % 
// % % % % % % % % % % % % 
// % % % % % % % % % % % % 
// % % % % % % % % % % % % 
```
You can change the `X_Scale` and `Y_Scale` variables as well as the character being used for the square shape.
</details>

<details open>
<summary><h2>License</h2></summary>

EzCode is released under the [MIT License](LICENSE).
</details>

<details open>
<summary><h2>Overview</h2></summary>

EZCode is a multipurpose programming language built off of C# and WinForms. It has simple syntax and is designed to be user friendly. Use it no matter your programming experince. From just getting started to a seasoned developer, EZCode can help you develop your projects with a minimal amount of code. Download the **[Official Installer](https://github.com/JBrosDevelopment/EZCode/releases/latest)** and choose from the options on what to install.
