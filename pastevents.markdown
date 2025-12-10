---
layout: pastevents
title: Past Events
permalink: /past-events/
---

{% for event in site.pastevents %}
<div class="row" class="past-event">
    <div class="col-sm-4">
        <a href="/{{ event.year }}/">
            <img src="{{ event.pic | relative_url }}" class="img-responsive img-centered" alt="">
        </a>
    </div>
    <div class="col-sm-8">
        <a href="/{{ event.year }}/">
            <h4 class="speakers-name">{{ event.name }} - {{ event.year }}</h4>
        </a>
        <p class="text-muted">{{ event.caption }}</p>
        <p class="text-muted"><b>Venue</b>: {{ event.location }}</p>
        <p class="text-muted"><b>Hosted by</b>: <a href="{{ event.hosted-url }}">{{ event.hosted }}</a></p>
    </div>
</div>
<hr class="past-event-divider">
{% endfor %}