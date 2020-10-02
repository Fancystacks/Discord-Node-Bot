# Discord Bot With Node

## Initial Setup:

    - Create a Discord account
    - Navigate to https://discord.com/developers/applications Developer Portal
    - Set up a new BOT on your server
    - Acquire Client ID and Token from the OAuth2 section

## Download:

NPM Install dependencies

- dotenv
- discord.js

## Usage:

Set up `permissions` in discord so that the BOT has a high role in the heirarchy.

The BOT (Lil' Discord Bot below) can be used to kick [`$kick`] or ban a user [`$ban`].

<img src="https://user-images.githubusercontent.com/38336934/94970106-27ed6280-04c1-11eb-9c61-055462ea9fa5.png">

(_BOT also features interactive words with the user_)

## Adding a Webhook:

Webhooks can be added from the Server Settings.

<img src="https://user-images.githubusercontent.com/38336934/94970100-258b0880-04c1-11eb-8c72-53b689f5dbfc.png">

Use the Webhook (Captain Hook about) to make announcements to the channel with the command `$announce`.
