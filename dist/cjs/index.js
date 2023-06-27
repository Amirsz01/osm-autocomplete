'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".autocomplete{color:#474d43;display:flex;flex-direction:column;width:25.5rem}.autocomplete .autocomplete-form{align-items:center;background-color:#fff;border-radius:5px;box-shadow:0 2px 5px -1px rgba(50,50,93,.25),0 1px 3px -1px rgba(0,0,0,.3);display:flex;padding:.25rem .5rem;transition:box-shadow .3s cubic-bezier(.4,0,.2,1) 0ms}.autocomplete .autocomplete-input-wrapper{cursor:text;flex:1;font-size:1rem;font-weight:400;margin-left:.5rem}.autocomplete .autocomplete-input-wrapper input{border:0;color:inherit;font:inherit;height:1.4375em;padding-bottom:5px;padding-top:4px;width:100%}.autocomplete .autocomplete-input-wrapper input:focus{outline:0}.autocomplete .autocomplete-divider{border-color:#959d99;border-width:0 thin 0 0;height:2em;margin:.25rem}.autocomplete .autocomplete-button{background-color:transparent;border:0;border-radius:50%;color:#959d99;cursor:pointer;display:inline-flex;font-size:1.5rem;padding:.625rem;transition:background-color .15s cubic-bezier(.4,0,.2,1) 0ms}.autocomplete .autocomplete-button:hover{background-color:rgba(0,0,0,.1)}.autocomplete .autocomplete-button svg{fill:currentColor;height:1em;width:1em}.autocomplete .autocomplete-list-wrapper{background-color:#fff;border-radius:4px;box-shadow:0 2px 5px -1px rgba(50,50,93,.25),0 1px 3px -1px rgba(0,0,0,.3);color:inherit;display:none;transition:box-shadow .3s cubic-bezier(.4,0,.2,1) 0ms}.autocomplete .autocomplete-list-wrapper.active{display:block}.autocomplete .autocomplete-list-wrapper ul{list-style:none;margin:0;max-height:40em;overflow:auto;padding:.5rem 0}.autocomplete .autocomplete-list-wrapper ul li{cursor:pointer;overflow:hidden;padding:.375rem 1rem}.autocomplete .autocomplete-list-wrapper ul li.selected{background:rgba(0,0,0,.1)}.autocomplete .autocomplete-list-wrapper .autocomplete-options::-webkit-scrollbar{width:7px}.autocomplete .autocomplete-list-wrapper .autocomplete-options::-webkit-scrollbar-track{background:#f1f1f1;border-radius:25px}.autocomplete .autocomplete-list-wrapper .autocomplete-options::-webkit-scrollbar-thumb{background:#ccc;border-radius:25px}.autocomplete .autocomplete-list-wrapper .autocomplete-options::-webkit-scrollbar-thumb:hover{background:#b3b3b3}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FHRSxhQUFjLENBRmQsWUFBYSxDQUdiLHFCQUFzQixDQUZ0QixhQUdGLENBQ0EsaUNBR0Usa0JBQW1CLENBQ25CLHFCQUFzQixDQUZ0QixpQkFBa0IsQ0FLbEIsMEVBQXdGLENBTnhGLFlBQWEsQ0FJYixvQkFBdUIsQ0FDdkIscURBRUYsQ0FDQSwwQ0FFRSxXQUFZLENBRFosTUFBTyxDQUVQLGNBQWUsQ0FDZixlQUFnQixDQUNoQixpQkFDRixDQUNBLGdEQUNFLFFBQVMsQ0FHVCxhQUFjLENBRGQsWUFBYSxDQUViLGVBQWdCLENBRWhCLGtCQUFtQixDQURuQixlQUFnQixDQUpoQixVQU1GLENBQ0Esc0RBQ0UsU0FDRixDQUNBLG9DQUtFLG9CQUFxQixDQURyQix1QkFBd0IsQ0FIeEIsVUFBVyxDQUNYLGFBSUYsQ0FDQSxtQ0FRRSw0QkFBNkIsQ0FQN0IsUUFBUyxDQUlULGlCQUFrQixDQUVsQixhQUFjLENBTGQsY0FBZSxDQUlmLG1CQUFvQixDQUZwQixnQkFBaUIsQ0FEakIsZUFBaUIsQ0FNakIsNERBQ0YsQ0FDQSx5Q0FDRSwrQkFDRixDQUNBLHVDQUdFLGlCQUFrQixDQURsQixVQUFXLENBRFgsU0FHRixDQUNBLHlDQUlFLHFCQUFzQixDQUR0QixpQkFBa0IsQ0FHbEIsMEVBQXdGLENBSnhGLGFBQWMsQ0FEZCxZQUFhLENBSWIscURBRUYsQ0FDQSxnREFDRSxhQUNGLENBQ0EsNENBR0UsZUFBZ0IsQ0FGaEIsUUFBVyxDQUdYLGVBQWdCLENBRmhCLGFBQWMsQ0FHZCxlQUNGLENBQ0EsK0NBQ0UsY0FBZSxDQUNmLGVBQWdCLENBQ2hCLG9CQUNGLENBQ0Esd0RBQ0UseUJBQ0YsQ0FDQSxrRkFDRSxTQUNGLENBQ0Esd0ZBQ0Usa0JBQW1CLENBQ25CLGtCQUNGLENBQ0Esd0ZBQ0UsZUFBZ0IsQ0FDaEIsa0JBQ0YsQ0FDQSw4RkFDRSxrQkFDRiIsImZpbGUiOiJpbmRleC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG9jb21wbGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyNS41cmVtO1xuICBjb2xvcjogIzQ3NGQ0MztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcbn1cbi5hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZS1pbnB1dC13cmFwcGVyIHtcbiAgZmxleDogMTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG4uYXV0b2NvbXBsZXRlIC5hdXRvY29tcGxldGUtaW5wdXQtd3JhcHBlciBpbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBoZWlnaHQ6IDEuNDM3NWVtO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmF1dG9jb21wbGV0ZSAuYXV0b2NvbXBsZXRlLWlucHV0LXdyYXBwZXIgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmF1dG9jb21wbGV0ZSAuYXV0b2NvbXBsZXRlLWRpdmlkZXIge1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yaWdodC13aWR0aDogdGhpbjtcbiAgYm9yZGVyLWNvbG9yOiAjOTU5ZDk5O1xufVxuLmF1dG9jb21wbGV0ZSAuYXV0b2NvbXBsZXRlLWJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGNvbG9yOiAjOTU5ZDk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcbn1cbi5hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uYXV0b2NvbXBsZXRlIC5hdXRvY29tcGxldGUtYnV0dG9uIHN2ZyB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4uYXV0b2NvbXBsZXRlIC5hdXRvY29tcGxldGUtbGlzdC13cmFwcGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcbn1cbi5hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZS1saXN0LXdyYXBwZXIuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYXV0b2NvbXBsZXRlIC5hdXRvY29tcGxldGUtbGlzdC13cmFwcGVyIHVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXgtaGVpZ2h0OiA0MGVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMHB4O1xufVxuLmF1dG9jb21wbGV0ZSAuYXV0b2NvbXBsZXRlLWxpc3Qtd3JhcHBlciB1bCBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMC4zNzVyZW0gMXJlbTtcbn1cbi5hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZS1saXN0LXdyYXBwZXIgdWwgbGkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uYXV0b2NvbXBsZXRlIC5hdXRvY29tcGxldGUtbGlzdC13cmFwcGVyIC5hdXRvY29tcGxldGUtb3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogN3B4O1xufVxuLmF1dG9jb21wbGV0ZSAuYXV0b2NvbXBsZXRlLWxpc3Qtd3JhcHBlciAuYXV0b2NvbXBsZXRlLW9wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZS1saXN0LXdyYXBwZXIgLmF1dG9jb21wbGV0ZS1vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uYXV0b2NvbXBsZXRlIC5hdXRvY29tcGxldGUtbGlzdC13cmFwcGVyIC5hdXRvY29tcGxldGUtb3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjNiM2IzO1xufSJdfQ== */";
styleInject(css_248z);

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = react.useState(value);
    react.useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debouncedValue;
}

const DEFAULT_OPTION = {
    lat: '0',
    lon: '0',
    type: '0',
    class: '0',
    osm_id: 0,
    licence: '0',
    osm_type: '0',
    place_id: 0,
    importance: 0,
    display_name: '',
    boundingbox: [],
};
const OpenStreetMapAutocomplete = ({ value, onChange, debounce = 500, placeholder = 'Search', noOptionName = 'No locations found', openStreetMapUrl = 'https://nominatim.openstreetmap.org' }) => {
    const [isActive, setActive] = react.useState(false);
    const inputRef = react.useRef(null);
    const [inputValue, setInputValue] = react.useState('');
    const debouncedValue = useDebounce(inputValue, debounce);
    const [options, setOptions] = react.useState([]);
    const [selectedOption, setSelectedOption] = react.useState(null);
    react.useEffect(() => {
        if (value) {
            if (inputRef.current) {
                setSelectedOption(value);
                setInputValue(value.display_name);
                inputRef.current.value = value.display_name;
            }
        }
    }, [value]);
    react.useEffect(() => {
        if (debouncedValue) {
            displayOptionsList();
            getGeocoding(debouncedValue);
        }
    }, [debouncedValue]);
    const getGeocoding = (address = '') => {
        if (!address)
            return;
        const url = `${openStreetMapUrl}/search?format=json&q=${address}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setOptions(data.filter((location, index, array) => array.findIndex((innerLocation) => innerLocation.display_name === location.display_name) === index)))
            .catch(() => setOptions([]));
    };
    const handleOnAutocomplete = (event) => {
        setInputValue(event.target.value);
    };
    const handleOnSearchClick = () => {
        if (inputRef.current) {
            displayOptionsList();
            setInputValue(inputRef.current.value);
        }
    };
    const displayOptionsList = () => {
        setActive(true);
    };
    const hideOptionsList = () => {
        setActive(false);
    };
    const handleOnSelectOption = (option) => {
        setSelectedOption(option);
        if (inputRef.current) {
            inputRef.current.value = option.display_name;
        }
        onChange(option);
        hideOptionsList();
    };
    return (jsxRuntime.jsxs("div", { className: 'autocomplete', children: [jsxRuntime.jsxs("form", { className: 'autocomplete-form', onBlur: hideOptionsList, children: [jsxRuntime.jsx("div", { className: 'autocomplete-input-wrapper', children: jsxRuntime.jsx("input", { type: 'text', ref: inputRef, placeholder: placeholder, onClick: displayOptionsList, onKeyUp: handleOnAutocomplete }) }), jsxRuntime.jsx("hr", { className: 'autocomplete-divider', role: 'none' }), jsxRuntime.jsx("button", { tabIndex: 0, type: 'button', onClick: handleOnSearchClick, className: 'autocomplete-button', children: jsxRuntime.jsx("svg", { children: jsxRuntime.jsx("path", { d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' }) }) })] }), jsxRuntime.jsx("div", { className: `autocomplete-list-wrapper ${isActive ? 'active' : ''}`, children: jsxRuntime.jsx("ul", { className: 'autocomplete-options', role: 'presentation', children: (options.length > 0
                        ? options
                        : [Object.assign(Object.assign({}, DEFAULT_OPTION), { display_name: noOptionName })]).map((option, index) => (jsxRuntime.jsx("li", { onClick: () => handleOnSelectOption(option), className: option.osm_id === (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.osm_id) ? 'selected' : '', children: option.display_name }, `${option.osm_id}-${index}`))) }) })] }));
};

exports.OpenStreetMapAutocomplete = OpenStreetMapAutocomplete;
//# sourceMappingURL=index.js.map
