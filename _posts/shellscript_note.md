---
layout: post
title: shell script
subtitle:
tags: [shell]
---

```shell
# 判斷branch是否存在
    # $branch=分支名稱
    IS_BRANCH_EXISTS=$(git ls-remote --quiet | grep -w ${branch})
    if [ -n "$IS_BRANCH_EXISTS" ]; then
        echo "exists!"
    else
        echo "not exists"
    fi

```