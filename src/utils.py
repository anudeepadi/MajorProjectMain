# %%writefile utils.py
from datetime import datetime

import pandas as pd
import streamlit as st
from streamlit_chat import message
import os

os.environ['OPENAI_API_KEY'] = "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"





def clear_conversation():
    """Clear the conversation history."""
    if (
        st.button("🧹 Clear conversation", use_container_width=True)
        or "conversation_history" not in st.session_state
    ):
        st.session_state.conversation_history = []
        st.session_state.total_cost = 0


def display_conversation(conversation_history):
    """Display the conversation history in reverse chronology."""

    for idx, item in enumerate(reversed(conversation_history)):
        # Display the messages on the frontend
        if item["role"] == "assistant":
            message(item["content"], is_user=False, key=f"ai_{idx}")
        elif item["role"] == "user":
            message(item["content"], is_user=True, key=f"human_{idx}")


def download_conversation():
    """Download the conversation history as a CSV file."""
    conversation_df = pd.DataFrame(
        st.session_state.conversation_history, columns=["role", "content"]
    )
    csv = conversation_df.to_csv(index=False)

    st.download_button(
        label="💾 Download conversation",
        data=csv,
        file_name=f"conversation_{datetime.now().strftime('%Y%m%d%H%M%S')}.csv",
        mime="text/csv",
        use_container_width=True,
    )


def calc_cost(token_usage):
    # https://openai.com/pricing
    return token_usage["total_tokens"] * 0.002 / 1000

