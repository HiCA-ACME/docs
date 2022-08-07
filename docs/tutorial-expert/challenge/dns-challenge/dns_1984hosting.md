---
sidebar_position: 17
slug: /tutorial-expert/challenge/dns-challenge/dns_1984hosting.sh
---

# 1984hosting

```bash
# highlight-start
export One984HOSTING_Username="CHANGE TO YOUR 1984HOSTING Username"
export One984HOSTING_Password="CHANGE TO YOUR 1984HOSTING Password"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_1984hosting \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```