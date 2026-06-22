---
layout: page
title: Photos
permalink: /photos/
---

## Memories from the Workshop!

<style>
    .grid-sizer,
    .grid-item {
        width: 33.333%;
    }
    .grid-item {
        float: left;
        padding: 5px;
    }
    .grid-item img {
        display: block;
        max-width: 100%;
    }
    .grid:after {
        content: '';
        display: block;
        clear: both;
    }
</style>
<div class="grid">
    <div class="grid-sizer"></div>

    {% for i in (0..428) %}
    <div class="grid-item">
        <a href="{{ "/assets/data/photos/" | append: i | append: ".jpeg" | relative_url }}" target="_blank">
            <img src="{{ "/assets/data/photos/" | append: i | append: ".jpeg" | relative_url }}" alt="Photo {{ i }}" />
        </a>
    </div>
    {% endfor %}
</div>
<script>
    $( document ).ready(function() {
        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer'
        });
        // layout Masonry after each image loads
        $grid.imagesLoaded().progress( function() {
            $grid.masonry();
        });  
    });
</script>
