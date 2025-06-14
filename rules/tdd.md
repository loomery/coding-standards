# TDD Rules

## Core Rules
1. Write a failing test first (Red)
2. Write minimal code to make the test pass (Green)
3. Refactor the code (Refactor)
   - MUST attempt at least one refactoring
   - If no improvement is possible, document why
   - Apply ATP (Absolute Transformation Premise) to measure improvements
   - Apply 4 Rules of Simple Design to guide refactoring
4. Repeat

## Test Writing Rules
1. One assertion per test
2. Test names should be descriptive
3. Tests should be independent
4. Tests should be fast
5. Tests should be repeatable

## Refactoring Rules
1. MUST attempt refactoring after each Green phase
2. Use ATP to measure code quality:
   - Calculate mass before and after refactoring
   - Aim for lower mass where possible
   - Document mass changes
3. Apply 4 Rules of Simple Design:
   - Tests must pass
   - No duplication
   - Reveals intent
   - Fewest elements
4. If no refactoring improves the code:
   - Document why no refactoring was possible
   - Explain why current state is optimal
   - Move to next test

## Code Writing Rules
1. Write minimal code to make test pass
2. No production code without failing test
3. No more production code than necessary
4. No duplication
5. Clear intent
6. Fewest elements possible

## Documentation Rules
1. Document mass calculations
2. Document refactoring decisions
3. Document when no refactoring is possible
4. Keep documentation up to date

## Process Rules
1. Commit after each Red-Green-Refactor cycle
2. Review mass changes
3. Review against 4 Rules of Simple Design
4. Document improvements or explain why none were possible
