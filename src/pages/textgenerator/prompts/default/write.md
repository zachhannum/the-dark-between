---
PromptInfo:
 id: writeWithChildren
 name: Write with Children Notes
 description: Write with children notes considered in context 
 author: Noureddine
 tags: writing
 version: 0.0.1
---
context: 
{{#each children}}
  {{this}}
{{/each}}
{{context}}