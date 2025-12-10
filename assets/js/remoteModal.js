
$(() => {
    const locationHash = window.location.hash;

    if (locationHash == "")
        return;

    const $modal = $(locationHash);

    if($modal.length == 0 || $modal.show == undefined)
        return;

    $modal.modal('show');
});