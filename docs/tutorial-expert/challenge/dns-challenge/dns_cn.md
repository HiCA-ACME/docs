---
sidebar_position: 23
slug: /tutorial-expert/challenge/dns-challenge/dns_cn.sh
---

# Core-Networks

<p><a href="https://www.core-networks.de/" className="button button--secondary button--lg text--no-decoration">获取 API Key</a></p>



import AccountConfCacheTip from './_account_conf_cache_tip.md';

<AccountConfCacheTip />

```bash
# highlight-start
export CN_User="CHANGE TO YOUR CN User"
export CN_Password="CHANGE TO YOUR CN Password"
# highlight-end

acme.sh --issue \
# highlight-start
  --dns dns_cn \
# highlight-end
  -d <域名> \
  -d <额外的域名> \
  --days 150 \
  --server https://acme.hi.cn/directory
```