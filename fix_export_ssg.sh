#!/bin/bash
LC_ALL=C find "./out" -type f -exec sed -i '' 's#"/_next/#"./_next/#g' {} +
LC_ALL=C find "./out" -type f -exec sed -i '' 's#"/favicon.ico#"./favicon.ico#g' {} +
LC_ALL=C find "./out" -type f -exec sed -i '' 's/crossorigin=""/ /g' {} +