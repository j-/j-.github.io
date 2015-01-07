---
layout: default
title: Projects
---

{% for project in site.collections.projects.docs %}
	{% if project.relative_path != '_projects/index.md' %}
{% include project-simple.html %}
	{% endif %}
{% endfor %}