# MAD-TDD Workshop (Mob AI Driven Test Driven Development)

This repository contains **Cursor Rules** designed to enable AI-assisted Test-Driven Development (TDD). These rules teach AI coding assistants to follow proven TDD practices, ensuring high-quality, maintainable code.

## What are Cursor Rules?

Cursor Rules are specialized prompts that guide AI coding assistants (like Claude, GPT, etc.) to follow specific methodologies and best practices. Our rules encode decades of software engineering wisdom into AI-readable instructions.

## Included Rule Sets

### 🧪 **TDD Rules**
Complete Test-Driven Development methodology including:
- Red-Green-Refactor cycle discipline
- Baby steps approach
- Prediction-based testing
- Common pitfall avoidance

### 🎯 **Rules of Simple Design**
Kent Beck's four fundamental principles:
1. Tests Pass
2. Reveals Intent
3. No Duplication
4. Fewest Elements

### ⚖️ **Absolute Priority Premise (APP)**
Micah Martin's objective code quality measurement system:
- Mass-based code complexity scoring
- Guides toward simpler, functional approaches
- Helps choose between equivalent solutions

## How to Use

### For Cursor IDE:
1. Copy the desired rule sections from the workspace rules
2. Add them to your Cursor Rules (`.cursorrules` file or IDE settings)
3. **Set Rule Type to "Automatic"** in Cursor settings for seamless integration
4. The AI will automatically apply these methodologies

### For Other AI Tools:
1. Copy rule sections into your AI assistant's context
2. Reference them when asking for coding help
3. The AI will follow TDD and clean code practices

### Example Usage:
```bash
# The AI will now:
# - Write tests first
# - Take minimal steps
# - Refactor systematically
# - Apply simple design principles
# - Measure code complexity objectively
```

## Modular Design

**Pick what you need!** Each rule set works independently:
- Use only TDD rules for test-first development
- Add Simple Design rules for cleaner code
- Include APP for complexity measurement
- Combine all for comprehensive AI-assisted development

The stack is TypeScript and Vitest, but these rules work with any programming language and testing framework.


## Setup

```bash
# Installiere Abhängigkeiten
npm install

# Starte Tests
npm test

# Starte Tests im Watch-Modus
npm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to copy and use the rule files in your own projects! We only ask that you give us credit when you do.
