export class Adaptor {
  searchString = '';
  size = 10;

  constructor(private query: any, private filter?: any, private model?: any) {
    this.searchString = '';
  }

  mapping() {
    const queryObject = {};
    Object.assign(queryObject, this.model);
    if (this.query.filters) {
      if (this.filter && this.model) {
        for (const subkey of Object.keys(this.query.filters)) {
          queryObject[this.filter[subkey]] = this.query.filters[subkey].value;
        }
      } else {
        for (const subkey of Object.keys(this.query.filters)) {
          queryObject[subkey] = this.query.filters[subkey].value;
        }
      }
    }
    this.addPercent(queryObject);
    return queryObject;
  }

  addPercent(queryObject) {
    for (const subkey of Object.keys(queryObject)) {
      if (queryObject[subkey].indexOf('%') === -1) {
        queryObject[subkey] = queryObject[subkey].toUpperCase() + '%';
      }
    }
  }

  setLocation(location) {
    this.searchString = location;
  }

  url() {
    this.paging().sort();
    return this.searchString;
  }

  paging() {
    this.searchString += `?page=${this.query.first && this.query.first !== 0 ? (this.query.first / this.query.rows) + 1 : 1}&size=${this.size}`;
    return this;
  }

  sort() {
    if (this.query.sortField != null) {
      this.searchString += (`&sort=${this.query.sortField},${this.query.sortOrder === 1 ? 'asc' : 'desc'}`);
    }
  }
}
