### This is for the social buttons

If there aren't groups added to SliceMachine yet,

```json
    "social_buttons" : {
      "type" : "Group",
      "config" : {
        "fields" : {
          "network" : {
            "config": {
              "label": "Social Network Name",
              "placeholder": "twitter, instagram, github ..."
            },
            "type": "Text"
          },
          "link" : {
            "type" : "Link",
            "config" : {
              "allowTargetBlank" : true,
              "label" : "Link"
            }
          },
          "icon" : {
            "type": "Image",
            "config": {
              "label": "",
              "constraint": {},
              "thumbnails": []
            }
          }
        },
        "label" : "Social Buttons"
      }
    }
```
