using CatalogService as service from '../../srv/admin-service';
annotate service.Books with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'title',
                Value : title,
            },
            {
                $Type : 'UI.DataField',
                Label : 'stock',
                Value : stock,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Title',
            Value : title,
        },
        {
            $Type : 'UI.DataField',
            Value : to_author.fistName,
            Label : 'fistName',
        },
        {
            $Type : 'UI.DataField',
            Value : to_author.lastName,
            Label : 'lastName',
        },
        {
            $Type : 'UI.DataField',
            Value : to_categories.type,
            Label : 'Category',
        },
    ],
    UI.SelectionFields : [
        title,
    ],
);

annotate service.Books with {
    title @Common.Label : 'Title'
};

