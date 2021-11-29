
# Blox Fruit Helper




## API Reference

#### Find Low Player Server

```http
  GET /server/low-player-server
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `sea` | `string` | **Required**. Name of sea [first-sea, second-sea, third-sea] |
| `expectPlayer` | `string` | **Not Required**. expect player in server  |



## Examples

Request
```
GET /server/low-player-server?sea=third-sea&expectPlayer=5

```

Response
```json
{
  "id": "8760a65e-fe94-40ea-9257-85a27f99e38f",
  "maxPlayers": 12,
  "playing": 10,
  "sea": "first-sea",
  "gameInstance": "2753915549",
  "launchScript": "Roblox.GameLauncher.joinGameInstance(2753915549, '8760a65e-fe94-40ea-9257-85a27f99e38f')"
}
```
