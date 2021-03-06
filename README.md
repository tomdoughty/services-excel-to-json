# Services excel to json

Every row of `data.xlsx` is mapped into a Service object based on the following values:

| Header   | Type      | Description                             | Required | Default                                    |
| -------- |---------- | --------------------------------------- | -------- | ------------------------------------------ |
| Name     | `string`  | Name of service                         | true     | N/A                                        |
| Title    | `string`  | Title used for display purpose          | false    | Name                                       |
| Redirect | `string`  | URL to redirect to from A to Z          | false    | `null`                                     |
| Slug     | `string`  | URL slug for service finder             | false    | Hyphen separated Name                      |
| Query    | `string`  | OData query for NHS Service Search API  | false    | `ServicesProvided/any (x: x eq '${Name}')` |
| Exclude  | `string`  | Excludes the row from the output JSON   | false    | `false`                                    |

The project is build and deployed to Netlify with the output JSON available on https://heuristic-pare-e9c44f.netlify.app/data.json.
