# TypeScript

TypeScript is a superset of JavaScript that adds static typing to the language. It is a powerful tool that can help you write more reliable and maintainable code.

## Declaring Types

```typescript
interface PersonInterface {
    name: string;
    age: number;
    job? : string; // Optional property
}

const person: PersonInterface = {
    name: 'John Doe',
    age: 30
};
// Only properties defined in the interface can be accessed
```
