export const eventTypes = {
    UPDATE_DROP_DOWN: 'AL/UPDATE_DROP_DOWN'
};

export const labels = {
    ADVERTISER_LIST: 'Advertiser List'
}

export const urlMap = {
    json: 'json mock url appears here',
    xml: 'xml mock url appears ehre'
};

export const dataMockMap = {
    json: `[
        {
            "id": 1,
            "name": "MockAdvertiser",
            "external_id": "1",
            "impressions": 52721284,
            "clicks": 93149
        }
    ]`,    
    xml: `<?xml version="1.0" encoding="UTF-8" ?>
    <advertiser>
        <id>1</id>
        <name>MockAdvertiser</name>
        <external_id>1</external_id>
        <impressions>52721284</impressions>
        <clicks>93149</clicks>
    </advertiser>`
}