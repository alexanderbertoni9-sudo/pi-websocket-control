#!/bin/bash
sudo journalctl -u cloudflare | grep trycloudflare.com | tail -1