window.BENCHMARK_DATA = {
  "lastUpdate": 1770383771672,
  "repoUrl": "https://github.com/sgheith/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cdaa29e7a2445f1e84144965a7b803be00f6b760",
          "message": "fix: memory leak in session removal - close MCP server properly (#471) (#472)\n\n- Add close() method to N8NDocumentationMCPServer that:\n  - Calls server.close() (MCP SDK cleanup)\n  - Clears internal cache\n  - Nullifies service references to help GC\n- Update removeSession() to call server.close() before releasing references\n\nRoot cause: removeSession() deleted server from map but didn't call cleanup\nEvidence: Production server memory grew ~1GB in 43 minutes (10% to 35%)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-05T18:30:51+01:00",
          "tree_id": "2e72fdb4e4336b7c17f579b885fbdeae90c0439c",
          "url": "https://github.com/sgheith/n8n-mcp/commit/cdaa29e7a2445f1e84144965a7b803be00f6b760"
        },
        "date": 1765095613127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68148804105efa21b592242a9e5f61f52c55c778",
          "message": "chore: update n8n to 2.6.3 and bump version to 2.33.6 (#571)",
          "timestamp": "2026-02-06T09:09:37+01:00",
          "tree_id": "7cc6335dd85928c7b9ef7c72680ceec376426d28",
          "url": "https://github.com/sgheith/n8n-mcp/commit/68148804105efa21b592242a9e5f61f52c55c778"
        },
        "date": 1770383771261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}