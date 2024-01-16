# Python Engineering Guidelines

## IDE

- IDE: VS Code or Pycharm
- Formatter: [Ruff](https://github.com/astral-sh/ruff)
- Linter: [Ruff](https://github.com/astral-sh/ruff)
- Import Sorting: [Ruff](https://github.com/astral-sh/ruff)

### VS Code Settings

  ```json
  "[python]": {
        "editor.defaultFormatter": "charliermarsh.ruff",
        "editor.codeActionsOnSave": {
            "source.fixAll.ruff": "always",
            "source.organizeImports.ruff": "always"
        }
    }
```

### Recommended VS Code Extensions
- Ruff
- Python
- Pylance
- Gitlens

## Package and Environment

- Package Management: [`pip`](https://pip.pypa.io/en/stable/)
- Environment: [`venv`](https://docs.python.org/3/library/venv.html)
