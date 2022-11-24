# 📝 Streamlit EditorJS

[![GitHub][github_badge]][github_link] [![PyPI][pypi_badge]][pypi_link] 

## Installation

```sh
pip install streamlit-editorjs
```

## Getting started

```python
import streamlit as st

from streamlit_editorjs import editorjs

# Spawn a new Quill editor
content = st_quill()

# Display editor's content as you type
content
```

## Development

```bash
cd streamlit_editorjs/frontend
yarn install
yarn build
yarn start .
```


```bash
streamlit run streamlit_editor/__init__.py

```


Based in editor quill for streamlit project.