# Cache firebase data in SW.
```$xslt
https://alligator.io/angular/service-workers/
"dataGroups": [
{
  "name": "from-api",
  "urls": ["/dashboard", "/settings"],
  "cacheConfig": {
    "strategy": "freshness",
    "maxSize": 15,
    "maxAge": "1h",
    "timeout": "5s"
  }
}
],
```