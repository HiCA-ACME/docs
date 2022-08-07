---
sidebar_position: 14
slug: /tutorial-expert/challenge/dns-challenge/dns_cloudns.sh
---

# CloudNS

```bash
# highlight-start
export CLOUDNS_AUTH_ID="CHANGE TO YOUR CLOUDNS_AUTH_ID"
export CLOUDNS_SUB_AUTH_ID="CHANGE TO YOUR CLOUDNS_SUB_AUTH_ID"
export CLOUDNS_AUTH_PASSWORD="CHANGE TO YOUR CLOUDNS_AUTH_PASSWORD"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_cloudns \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```