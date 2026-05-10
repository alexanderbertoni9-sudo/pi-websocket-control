#!/bin/bash
sudo journalctl -u cloudflare | grep trycloudflare.com | tail -1
sudo journalctl -u webhook -f