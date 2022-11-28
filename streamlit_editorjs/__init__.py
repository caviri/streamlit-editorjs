import os
import streamlit.components.v1 as components

_RELEASE = True

if not _RELEASE:
    _st_editorjs = components.declare_component("streamlit_editorjs", url="http://localhost:3000")
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _st_editorjs = components.declare_component("streamlit_editorjs", path=build_dir)


def st_editorjs(
    defaultValue=""
):
    """EDITORJS Editor component.

    Parameters
    ----------
    value : any
        The text value of this widget when it first renders. This will be
        cast to str internally.

    Returns
    -------
    json
        The current content of Editorjs editor.

    """


    return _st_editorjs(
        defaultValue=str(value)
    )


if _RELEASE:
    import streamlit as st
    # st.set_page_config(layout="wide")
    st.sidebar.title(":computer: EDITORJS Editor")
    value = st.sidebar.text_input("Placeholder", "Some placeholder text")

    content = st_editorjs(
        defaultValue=value
    )

    st.json(content)
    st.write(content)
