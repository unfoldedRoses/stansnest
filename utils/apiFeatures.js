class ApiFeatures{

    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const location = this.queryStr.location ? {
            address: {
                $regex: this.queryStr.location,
                $options: 'i'
            }
        } : {}

        this.query = this.query.find({ ...location })
        return this;
    }

    filter(){
        const queryCopy={...this.queryStr}
        console.log(queryCopy)
        //remove
        const RemoveFields=['location']
        RemoveFields.forEach(el=>delete queryCopy[el])
        this.query=this.query.find(queryCopy);
        return this;
    }
}

export default ApiFeatures