---
layout: organizers
title: Organizers
permalink: /organizers/
---

## Chair

<div class="row" id="speakers">
    {% for person in site.organizers %}
        {% if person.organizer_type == "chair" %}
        <div class="col-sm-4 speakers-item">
            <a href="#{{ person.slug }}" class="speakers-link" data-toggle="modal">
                <div class="speakers-hover">
                    <div class="speakers-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src="{{ person.pic | relative_url }}" class="img-responsive img-centered" alt="">
            </a>
            <div class="speakers-caption">
                <h4 class="speakers-name">{{ person.name }}</h4>
                <p class="text-muted">{{ person.affiliation }}</p>
                <p class="text-muted">{{ person.role }}</p>
            </div>
        </div>
        {% endif %}
    {% endfor %}
</div>

## Steering Committee

<div class="row" id="speakers">
    {% for person in site.organizers %}
        {% if person.organizer_type == "sc" %}
        <div class="col-sm-4 speakers-item">
            <a href="#{{ person.slug }}" class="speakers-link" data-toggle="modal">
                <div class="speakers-hover">
                    <div class="speakers-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src="{{ person.pic | relative_url }}" class="img-responsive img-centered" alt="">
            </a>
            <div class="speakers-caption">
                <h4 class="speakers-name">{{ person.name }}</h4>
                <p class="text-muted">{{ person.affiliation }}</p>
                <p class="text-muted">{{ person.role }}</p>
            </div>
        </div>
        {% endif %}
    {% endfor %}
</div>

{% for person in site.organizers %}
    {% if person.organizer_type == "chair" or person.organizer_type == "sc" %}
        {% include people-modal.html person=person %}
    {% endif %}
{% endfor %}

<!-- Other organizers -->
{% assign roles = "tpc|web|publicity" | split: "|" %}
{% assign headings = "Technical program committee|Web chair|Publicity chair" | split: "|" %}

{% for role in roles %}
<h2>{{ headings[forloop.index0] }}</h2>
<div class="row organizers-secondary">
    {% for person in site.organizers %}
        {% if person.organizer_type == role %}
            {% include people-simple.html person=person %}
        {% endif %}
    {% endfor %}
</div>
{% endfor %}

