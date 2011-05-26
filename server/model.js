/*   
   Copyright 2011 Google Inc

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/


/*
  A Basic data holder
*/
exports.CategoryData = function(id, name, url) {
  this.id = id; 
  this.name = name;
  this.url = url;
  this.articles = [];
  this.categoryState = "";
  /*
   Adds an item in to the category
  */
  this.addItem = function(item) {
    this.articles.push(item);
  };
};

/*
  A data item in the category.
*/
exports.CategoryItem = function(id, title, shortDescription, category) {
  this.id = encodeURIComponent(id);
  this.title = title;
  this.shortDescription = shortDescription;
  this.thumbnail;
  this.categoryId = category.id;
  this.articleState = "";
  this.largeImage;
  this.imageState = "textonly"; // Assume there are no images
  this.url = function () { return "reader/" + categoryId + "/" + this.id + ".html"; }; 
  this.dataUrl = function () { return "reader/" + categoryId + "/" + this.id + ".json"; };
  this.thumbnailSrc = function() { 
    if(!!this.thumbnail == false) return "";
    return "src=\""+ this.thumbmail +"\"";
  }
  
  this.dataSrcLoStr = function() { 
    if(!!this.thumbnail == false) return "";
    return "data-src-lo=\""+ this.thumbmail +"\"";
  }

  this.largeImageSrc = function() { 
    if(!!this.largeImage == false) return "";
    return "src=\""+ this.largeImage +"\"";
  }
  
  this.dataSrcHiStr = function() { 
    if(!!this.largeImage == false) return "";
    return "data-src-hi=\""+ this.largeImage +"\"";
  }
};
