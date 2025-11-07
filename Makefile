.PHONY: help build test check precommit clean dev preview lint format

# Default target
help:
	@echo "Available targets:"
	@echo "  make precommit  - Run build, check, and tests (use before committing)"
	@echo "  make build      - Build the Astro project"
	@echo "  make test       - Run all tests (check + unit tests)"
	@echo "  make check      - Run Astro check for type errors"
	@echo "  make lint       - Run ESLint"
	@echo "  make format     - Format code with Prettier"
	@echo "  make dev        - Start development server"
	@echo "  make preview    - Preview production build"
	@echo "  make clean      - Remove build artifacts"

# Pre-commit target: build, check, and test
precommit: clean build test
	@echo "✓ Pre-commit checks passed! Ready to commit."

# Build the project
build:
	@echo "Building project..."
	npm run build

# Run all tests
test:
	@echo "Running tests..."
	npm run test

# Run Astro check
check:
	@echo "Running Astro check..."
	npm run check

# Lint the code
lint:
	@echo "Running linter..."
	npm run lint

# Format the code
format:
	@echo "Formatting code..."
	npm run format

# Start development server
dev:
	npm run dev

# Preview production build
preview:
	npm run preview

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -rf dist .astro