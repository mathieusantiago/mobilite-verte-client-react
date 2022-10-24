import TagManager from 'react-ga'

const _gTagsEvent = (category, action, label) => {
    TagManager.event({
        category: category,
        action: action,
        label: label,
    });
};

export default _gTagsEvent;