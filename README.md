# QuickDraft

## Overview

QuickDraft is an automated content creation workflow built with n8n. It receives a topic via a Telegram message, generates three distinct pieces of content based on that topic using AI, selects the best one, and sends it back to the user.

## Workflow

The workflow is triggered by a message on Telegram and proceeds as follows:

1.  **Telegram Trigger**: The workflow starts when a user sends a message to a configured Telegram bot. The message text is used as the topic for content generation.

2.  **AI Content Generation**: The topic is passed to a Google Gemini-powered AI Agent. It generates three distinct content pieces in Thai, each approximately 400-500 words long, exploring different angles of the core topic.

3.  **Code - Parsing**: The output from the AI, which is a single text block, is processed by a Code node. This node splits the text into three separate content objects, each with a title and body.

4.  **AI Content Selection**: The three generated content pieces are passed to a second AI Agent. This agent reviews the candidates and selects the single best piece based on how informative, well-structured, and engaging it is.

5.  **Telegram Notification**: The selected content piece is sent back to the user on Telegram, completing the workflow.

## How to Use

1.  Set up the n8n workflow and provide the necessary credentials for the Telegram bot and Google Gemini API.
2.  Activate the workflow.
3.  Send a message to the configured Telegram bot with the topic you want to generate content about.
4.  The bot will reply with the generated and selected content piece.
