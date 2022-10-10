# デプロイまでの手順(testnet)

## compile

```
npx hardhat compile
```

## deploy

```
npx hardhat run scripts/deploy.js --network testnet
```

## verify

```
npx hardhat verify --network testnet <<Deployed contract address>>
```

# Error Handling

- TypeError: Derived contract must override function "\_beforeConsecutiveTokenTransfer". Two or more base classes define function with same name and parameter types.

このエラーが出たときには、「cmd + click」で ERC721EnumerableUpgradeable のコードに飛び、「cmd + f」で \_beforeConsecutiveTokenTransfer という名前の関数を探し、関数の宣言を削除して下さい。
