# services Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [creat a service](#service-id#service-id)
    - [get service's information of question](#service-id#service-id)

## Full Setup
### Installation

```bash
git clone https://github.com/danivngopro/Forms.git
cd forms/questions
npm install
```

### Run 

```bash
docker-compose up --build -d
```

## Usage
#### HTTP paths 

| METHOD | ENDPOINT                                                         | DESCRIPTION                                       |
| ------ | :----------------------------------------------------------------| :----------------------------------------------   |
| Post   |                                                                  | create the service service                          |
| Get    |  getservicesById                                                  | get the service service's information               |

**---------------------------------------------------------------------------------------------------------------------------------**

### createserviceQuestionService
post a service question's services
#### Paramters
| Name         | Type            | Description                                                    |
| serviceId     | string          | the id of the service                                           |
| userId       | string          | id of the user that created the service                         |
| content      | Array<iSection> | array of the question id and theirs services id                 |
| questionId   | string          | the id of the question                                         |
| services      | Array<String>   | array of the services id the user selected                      |


#### example
```typescript
{
    "serviceId": "123412341234123412341234",
    "userId": "123456123456123456123456",
    "content":  [
        {
            "questionId": "111111111111111111111111",
            "services": ["123456781234567812345678"]
        }
    ]
}
```
**---------------------------------------------------------------------------------------------------------------------------------**
### getserviceQuestionsServicesInformation
get the service question's services
#### Paramters
| Name         | Type            | Description                                                    |
| serviceId     | string          | the id of the service                                           |

#### example
```typescript
/getservicesById?serviceId=634e8da60c68790b062e0cfa
```
**---------------------------------------------------------------------------------------------------------------------------------**
Footer