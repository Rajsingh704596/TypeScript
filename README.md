
---

# **TypeScript Guide**

TypeScript ek **superset of JavaScript** hai, jo static typing aur additional features provide karta hai. Ye JavaScript ka code compile karke plain JavaScript mein convert karta hai, jise browsers samajh sakte hain. TypeScript ka main goal hai **better tooling**, **error checking**, aur **code maintainability** provide karna.

---

## **Table of Contents**
1. [TypeScript Kya Hai?](#typescript-kya-hai)
2. [TypeScript ke Fayde](#typescript-ke-fayde)
3. [TypeScript Kaise Use Karein?](#typescript-kaise-use-karein)
   - [Installation](#installation)
   - [TypeScript File Banayein](#typescript-file-banayein)
   - [TypeScript Code Compile Karein](#typescript-code-compile-karein)
   - [Compiled JavaScript Run Karein](#compiled-javascript-run-karein)
4. [TypeScript Configuration (tsconfig.json)](#typescript-configuration-tsconfigjson)
5. [TypeScript ke Important Features](#typescript-ke-important-features)
6. [TypeScript ko Local Project Mein Use Karein](#typescript-ko-local-project-mein-use-karein)
7. [Kya TypeScript Global Install Karna Zaruri Hai?](#kya-typescript-global-install-karna-zaruri-hai)
8. [TypeScript vs JavaScript](#typescript-vs-javascript)

---

## **TypeScript Kya Hai?**
TypeScript ek **superset of JavaScript** hai, jo JavaScript mein **static typing** aur **additional features** add karta hai. Ye JavaScript ka code compile karke plain JavaScript mein convert karta hai, jise browsers samajh sakte hain.

---

## **TypeScript ke Fayde**
1. **Static Typing**: Variables, functions, aur objects ke data types define kar sakte hain.
2. **Better Tooling**: Autocompletion, type checking, aur refactoring tools provide karta hai.
3. **Early Error Detection**: Code run karne se pehle hi errors detect ho jate hain.
4. **Improved Readability**: Code maintain karne aur samajhne mein asani hoti hai.

---

## **TypeScript Kaise Use Karein?**

### **Installation**
TypeScript ko **globally** ya **locally** install kiya ja sakta hai.

- **Globally Install** (System-wide):
  ```bash
  npm install -g typescript
  ```

- **Locally Install** (Project-specific):
  ```bash
  npm install typescript --save-dev
  ```

---

### **TypeScript File Banayein**
Ek `.ts` file banayein, jisme TypeScript code likhein.

**Example: `index.ts`**
```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

---

### **TypeScript Code Compile Karein**
TypeScript code ko JavaScript mein compile karein.

- **Globally Installed TypeScript**:
  ```bash
  tsc index.ts
  ```

- **Locally Installed TypeScript**:
  ```bash
  npx tsc index.ts
  ```

---

### **Compiled JavaScript Run Karein**
Compile hone ke baad, generate hua JavaScript code run karein:
```bash
node index.js
```

Output:
```
Hello, World!
```

---

## **TypeScript Configuration (tsconfig.json)**
TypeScript project ko configure karne ke liye `tsconfig.json` file banayein. Ye file TypeScript compiler ke options define karti hai.

- **Generate `tsconfig.json`**:
  ```bash
  tsc --init
  ```

- **Example `tsconfig.json`**:
  ```json
  {
    "compilerOptions": {
      "target": "ES6",
      "module": "commonjs",
      "outDir": "./dist",
      "rootDir": "./src",
      "strict": true
    }
  }
  ```

---

## **TypeScript ke Important Features**
1. **Static Typing**:
   ```typescript
   let age: number = 25;
   let name: string = "John";
   let isActive: boolean = true;
   ```

2. **Interfaces**:
   ```typescript
   interface User {
     id: number;
     name: string;
   }

   const user: User = { id: 1, name: "Alice" };
   ```

3. **Classes**:
   ```typescript
   class Person {
     constructor(public name: string, public age: number) {}

     greet(): string {
       return `Hello, my name is ${this.name}`;
     }
   }

   const person = new Person("Bob", 30);
   console.log(person.greet());
   ```

4. **Generics**:
   ```typescript
   function identity<T>(arg: T): T {
     return arg;
   }

   let output = identity<string>("Hello");
   ```

---

## **TypeScript ko Local Project Mein Use Karein**
TypeScript ko local project mein use karne ke liye `npx` command ka use kiya ja sakta hai. Ye global installation ki zarurat nahi hoti.

1. **Initialize a Project**:
   ```bash
   npm init -y
   ```

2. **Install TypeScript Locally**:
   ```bash
   npm install typescript --save-dev
   ```

3. **Generate tsconfig.json Using npx**:
   ```bash
   npx tsc --init
   ```
4. **Compile TypeScript Code**:
   ```bash
   npx tsc index.ts
   ```
4. **Compile TypeScript Code (Watch Mode automatically Compile when we save file)**:
   ```bash
   npx tsc --watch
   ```

5. **Run Compiled JavaScript**:
   ```bash
   node index.js
   ```

---

## **Kya TypeScript Global Install Karna Zaruri Hai?**
Nahi, TypeScript ko **local project** mein bhi install kiya ja sakta hai aur `npx` command ke through use kiya ja sakta hai. Global installation sirf tab zaruri hai jab aap har project mein TypeScript ko directly use karna chahte hain.

---

## **TypeScript vs JavaScript**
| Feature               | TypeScript                          | JavaScript                     |
|-----------------------|-------------------------------------|--------------------------------|
| **Typing**            | Static typing (compile-time checks) | Dynamic typing (runtime checks)|
| **Tooling**           | Better tooling support              | Limited tooling support        |
| **Error Detection**   | Early error detection               | Runtime errors                 |
| **Learning Curve**    | Slightly steeper                    | Easier to learn                |
| **Use Case**          | Large-scale projects                | Small to medium projects       |

---

## **Conclusion**
- TypeScript JavaScript ka powerful extension hai, jo static typing aur advanced features provide karta hai.
- Isko **globally** ya **locally** install karke use kiya ja sakta hai.
- `npx` command ke through TypeScript ko local project mein use karna better option hai, kyunki ye project-specific hai aur global dependencies avoid karta hai.



---


