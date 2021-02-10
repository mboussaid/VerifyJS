
<center>

<img src='img/logo.png' />
	</center>

	
# VerifyJS Documentation


this function allows you to add a keyup event handler and each time when you change the value this function checks if the value of the input match the regular expression if true then add your custom success classname else add your custom error classname 
> syntax 

```javascript

verify(element,regExp,successClass , errorClass);

```
> example 



create a success and error classNames 
```css
.success{
	backgroud:green;
	color:#fff;
}
.error{
	backgroud:red;
	color:#fff;
}


```

```html
<input id='test-input' type="text" placeholder="" />


```


```javascript
/// check if the length of the input is 8 at least
verify('#test-input',/^\w{8,}$/,'success','error');

/// example for email 
verify('#test-input',/^\w+@\w+.\w+$/,'success','error');

/// example for phone number
verify('#test-input',/^(+2126|06)\d{8}$/,'success','error');

/// example for url 
verify('#test-input',/^(http:\/\/|https:\/\/)\w+.\w+\.\w+/,'success','error');


```
