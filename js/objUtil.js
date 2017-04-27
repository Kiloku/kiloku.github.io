/*
Finds the index of the first element in an array of objects which has the desired key/value pair. Returns -1 if no such element is found;
key (string): the key in the key/value pair you're looking for.
value (any): the value in the key value pair you're looking for.
*/
Array.prototype.objIndexOf = function arrayObjectIndexOf(key, value) 
{
    value = value || null;
    if(value)
    {
      for (var i = 0; i < this.length; i++) 
      {
          if (this[i][key] === value) return i;
      }
    }
    return -1;
};


/*Saves an object to the browser's localStorage, in JSON format. 
key (string): the name the object will be represented with in localStorage
value (object): the object to be saved.
*/
function saveObject(key, value)
{
  window.localStorage[key] = JSON.stringify(value);
  console.log("Local Storage setObject: " + key);
}

/*returns an object (stored in JSON format) from localStorage named "key"; Returns an empty object if the desired object does not exist in localStorage.
key (string): the name the desired object is represented with in localStorage.
*/
function loadObject(key)
{
  return JSON.parse(window.localStorage[key] || '{}');
}

/*
searchByValue reads a key and a term. 
It returns a new array, composed of the objects where the value for the specified key matches the term. 
Partial matches are possible. (eg. searching for 'che' will return the values 'cheese' and 'chess', if they're present in the array)
key (string): The key to be checked for the term. 
term (string): The search term requested
single (boolean, optional): If set to true, only return the first result as an object. Defaults to false.
*/
Array.prototype.searchByValue = function(key, term, single)
{
  single = single || false;
  
  var result = [];
  term = term.toLowerCase();
  for (var i = 0; i < this.length; i++)
  {
    if(this[i][key].toString().toLowerCase().indexOf(term) != -1)
    {
      if(single)
      {
        return this[i];
      }
      result.push(this[i]);
    }
  }
  return (result);
};
