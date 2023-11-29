

export const convertViewCount = (views) => {
    if(views.length >= 8){
        return `${views[0]+views[1]}.${views[2]}M views`
    }else if(views.length >= 7){
        return `${views[0]}.${views[1]}M views`
    }else if(views.length >= 6){
        return `${views[0]+views[1]+views[2]}K views`
    }else if(views.length >= 5){
        return `${views[0]+views[1]}K views`
    }else if(views.length >= 4){
        return `${views[0]}K views`
    }else {
        return `${views} views`
    }
}