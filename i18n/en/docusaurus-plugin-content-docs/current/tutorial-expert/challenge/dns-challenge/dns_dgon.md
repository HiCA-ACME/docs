---
sidebar_position: 30
slug: /tutorial-expert/challenge/dns-challenge/dns_dgon.sh
---

# DigitalOcean

import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export DO_API_KEY="Change to your DigitalOcean KEY"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_dgon \
# highlight-end
  -d <Domain> \
  -d <AdditionalDomain> \
  --days 150 \
  --server https://acme.hi.cn/directory
```
