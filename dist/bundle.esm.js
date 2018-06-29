import React__default, { createElement } from 'react';
import ReactDOM__default, { unstable_renderSubtreeIntoContainer, unmountComponentAtNode } from 'react-dom';
import vue from 'vue';
import { BaseComponent, EventGroup, css, htmlElementProperties, elementContains, getDocument, getId, getNextElement, getNativeProps, getParent, getPreviousElement, getRTL, isElementFocusZone, isElementFocusSubZone, isElementTabbable, shouldWrapFocus, createRef, classNamesFunction, customizable, imageProperties, styled, assertNever, getRTLSafeKeyCode, format, getScrollbarWidth, Rectangle, divProperties, doesElementContainFocus, assign, focusFirstChild, getWindow, isDirectionalKeyCode, setVirtualParent, DelayedRender, inputProperties, textAreaProperties, autobind, getFirstTabbable, getLastTabbable, focusAsync } from '@uifabric/utilities';
import { __extends, __assign, __decorate } from 'tslib';
import { AnimationClassNames, getGlobalClassNames, getIcon, HighContrastSelector, focusClear, ZIndexes } from '@uifabric/styling';
import { loadStyles } from '@microsoft/load-themed-styles';
import { setInterval } from 'timers';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var vuera_cjs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(React__default);
var ReactDOM = _interopDefault(ReactDOM__default);
var Vue = _interopDefault(vue);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) { descriptor.writable = true; }
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) { defineProperties(Constructor.prototype, protoProps); }
    if (staticProps) { defineProperties(Constructor, staticProps); }
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) { Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) { continue; }
    if (!Object.prototype.hasOwnProperty.call(obj, i)) { continue; }
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) { break; }
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) { _i["return"](); }
      } finally {
        if (_d) { throw _e; }
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var VUE_COMPONENT_NAME = 'vuera-internal-component-name';

var wrapReactChildren = function wrapReactChildren(createElement$$1, children) {
  return createElement$$1('vuera-internal-react-wrapper', {
    props: {
      component: function component() {
        return React.createElement(
          'div',
          null,
          children
        );
      }
    }
  });
};

var VueContainer = function (_React$Component) {
  inherits(VueContainer, _React$Component);

  function VueContainer(props) {
    classCallCheck(this, VueContainer);

    /**
     * We have to track the current Vue component so that we can reliably catch updates to the
     * `component` prop.
     */
    var _this = possibleConstructorReturn(this, (VueContainer.__proto__ || Object.getPrototypeOf(VueContainer)).call(this, props));

    _this.currentVueComponent = props.component;

    /**
     * Modify createVueInstance function to pass this binding correctly. Doing this in the
     * constructor to avoid instantiating functions in render.
     */
    var createVueInstance = _this.createVueInstance;
    var self = _this;
    _this.createVueInstance = function (element, component, prevComponent) {
      createVueInstance(element, self, component, prevComponent);
    };
    return _this;
  }

  createClass(VueContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var component = nextProps.component,
          props = objectWithoutProperties(nextProps, ['component']);


      if (this.currentVueComponent !== component) {
        this.updateVueComponent(this.props.component, component);
      }
      /**
       * NOTE: we're not comparing this.props and nextProps here, because I didn't want to write a
       * function for deep object comparison. I don't know if this hurts performance a lot, maybe
       * we do need to compare those objects.
       */
      Object.assign(this.vueInstance.$data, props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.vueInstance.$destroy();
    }

    /**
     * Creates and mounts the Vue instance.
     * NOTE: since we need to access the current instance of VueContainer, as well as the Vue instance
     * inside of the Vue constructor, we cannot bind this function to VueContainer, and we need to
     * pass VueContainer's binding explicitly.
     * @param {HTMLElement} targetElement - element to attact the Vue instance to
     * @param {ReactInstance} reactThisBinding - current instance of VueContainer
     */

  }, {
    key: 'createVueInstance',
    value: function createVueInstance(targetElement, reactThisBinding) {
      var _components;

      var _reactThisBinding$pro = reactThisBinding.props,
          component = _reactThisBinding$pro.component,
          props = objectWithoutProperties(_reactThisBinding$pro, ['component']);

      // `this` refers to Vue instance in the constructor

      reactThisBinding.vueInstance = new Vue({
        el: targetElement,
        data: props,
        render: function render(createElement$$1) {
          return createElement$$1(VUE_COMPONENT_NAME, {
            props: this.$data
          }, [wrapReactChildren(createElement$$1, this.children)]);
        },

        components: (_components = {}, defineProperty(_components, VUE_COMPONENT_NAME, component), defineProperty(_components, 'vuera-internal-react-wrapper', ReactWrapper), _components)
      });
    }
  }, {
    key: 'updateVueComponent',
    value: function updateVueComponent(prevComponent, nextComponent) {
      this.currentVueComponent = nextComponent;

      /**
       * Replace the component in the Vue instance and update it.
       */
      this.vueInstance.$options.components[VUE_COMPONENT_NAME] = nextComponent;
      this.vueInstance.$forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { ref: this.createVueInstance });
    }
  }]);
  return VueContainer;
}(React.Component);

var makeReactContainer = function makeReactContainer(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    inherits(ReactInVue, _React$Component);

    function ReactInVue(props) {
      classCallCheck(this, ReactInVue);

      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */
      var _this = possibleConstructorReturn(this, (ReactInVue.__proto__ || Object.getPrototypeOf(ReactInVue)).call(this, props));

      _this.state = props;
      return _this;
    }

    createClass(ReactInVue, [{
      key: 'wrapVueChildren',
      value: function wrapVueChildren(children) {
        return {
          render: function render(createElement$$1) {
            return createElement$$1('div', children);
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            children = _state.children,
            _invoker = _state[''],
            rest = objectWithoutProperties(_state, ['children', '']);

        var wrappedChildren = this.wrapVueChildren(children);

        return React.createElement(
          Component,
          rest,
          children && React.createElement(VueContainer, { component: wrappedChildren })
        );
      }
    }]);
    return ReactInVue;
  }(React.Component), _class.displayName = 'ReactInVue' + (Component.displayName || Component.name || 'Component'), _temp;
};

var ReactWrapper = {
  props: ['component', 'passedProps'],
  render: function render(createElement$$1) {
    return createElement$$1('div', { ref: 'react' });
  },

  methods: {
    mountReactComponent: function mountReactComponent(component) {
      var _this2 = this;

      var Component = makeReactContainer(component);
      var children = this.$slots.default !== undefined ? { children: this.$slots.default } : {};
      ReactDOM.render(React.createElement(Component, _extends({}, this.$props.passedProps, this.$attrs, this.$listeners, children, {
        ref: function ref(_ref) {
          return _this2.reactComponentRef = _ref;
        }
      })), this.$refs.react);
    }
  },
  mounted: function mounted() {
    this.mountReactComponent(this.$props.component);
  },
  beforeDestroy: function beforeDestroy() {
    ReactDOM.unmountComponentAtNode(this.$refs.react);
  },
  updated: function updated() {
    /**
     * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
     * `$slots` or `$children`.
     */
    if (this.$slots.default !== undefined) {
      this.reactComponentRef.setState({ children: this.$slots.default });
    } else {
      this.reactComponentRef.setState({ children: null });
    }
  },

  inheritAttrs: false,
  watch: {
    $attrs: {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$attrs));
      },

      deep: true
    },
    '$props.component': {
      handler: function handler(newValue) {
        this.mountReactComponent(newValue);
      }
    },
    $listeners: {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$listeners));
      },

      deep: true
    },
    '$props.passedProps': {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$props.passedProps));
      },

      deep: true
    }
  }
};

function isReactComponent(component) {
  if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object') {
    return false;
  } else if (typeof component === 'function' && component.prototype && component.prototype.constructor.super && component.prototype.constructor.super.name.startsWith('Vue')) {
    return false;
  } else {
    return true;
  }
}

function VueResolver$$1(component) {
  return {
    components: { ReactWrapper: ReactWrapper },
    props: ['passedProps'],
    inheritAttrs: false,
    render: function render(createElement$$1) {
      return createElement$$1('react-wrapper', {
        props: {
          component: component,
          passedProps: this.$props.passedProps
        },
        attrs: this.$attrs,
        on: this.$listeners
      }, this.$slots.default);
    }
  };
}

/**
 * This mixin automatically wraps all React components into Vue.
 */
var VuePlugin = {
  install: function install(Vue$$1, options) {
    /**
     * We define a custom merging strategy for the `components` field. This strategy really just
     * wraps all the React components while leaving Vue components as is.
     */
    var originalComponentsMergeStrategy = Vue$$1.config.optionMergeStrategies.components;
    Vue$$1.config.optionMergeStrategies.components = function (parent) {
      var arguments$1 = arguments;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments$1[_key];
      }

      var mergedValue = originalComponentsMergeStrategy.apply(undefined, [parent].concat(args));
      var wrappedComponents = mergedValue ? Object.entries(mergedValue).reduce(function (acc, _ref) {
        var _ref2 = slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return _extends({}, acc, defineProperty({}, k, isReactComponent(v) ? VueResolver$$1(v) : v));
      }, {}) : mergedValue;
      return Object.assign(parent, wrappedComponents);
    };
  }
};

/* eslint-disable prefer-object-spread/prefer-object-spread */
function ReactResolver$$1(component) {
  return isReactComponent(component) ? component : function (props) {
    return React.createElement(VueContainer, _extends({}, props, { component: component }));
  };
}

/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */
function babelReactResolver$$1(component, props, children) {
  return isReactComponent(component) ? React.createElement(component, props, children) : React.createElement(VueContainer, Object.assign({ component: component }, props), children);
}

exports.ReactWrapper = ReactWrapper;
exports.VueWrapper = VueContainer;
exports.__vueraReactResolver = babelReactResolver$$1;
exports.VuePlugin = VuePlugin;
exports.VueInReact = ReactResolver$$1;
exports.ReactInVue = VueResolver$$1;
});

unwrapExports(vuera_cjs);
var vuera_cjs_1 = vuera_cjs.ReactWrapper;
var vuera_cjs_2 = vuera_cjs.VueWrapper;
var vuera_cjs_3 = vuera_cjs.__vueraReactResolver;
var vuera_cjs_4 = vuera_cjs.VuePlugin;
var vuera_cjs_5 = vuera_cjs.VueInReact;
var vuera_cjs_6 = vuera_cjs.ReactInVue;

/**
 * The days of the week
 */
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
/**
 * The months
 */
var MonthOfYear;
(function (MonthOfYear) {
    MonthOfYear[MonthOfYear["January"] = 0] = "January";
    MonthOfYear[MonthOfYear["February"] = 1] = "February";
    MonthOfYear[MonthOfYear["March"] = 2] = "March";
    MonthOfYear[MonthOfYear["April"] = 3] = "April";
    MonthOfYear[MonthOfYear["May"] = 4] = "May";
    MonthOfYear[MonthOfYear["June"] = 5] = "June";
    MonthOfYear[MonthOfYear["July"] = 6] = "July";
    MonthOfYear[MonthOfYear["August"] = 7] = "August";
    MonthOfYear[MonthOfYear["September"] = 8] = "September";
    MonthOfYear[MonthOfYear["October"] = 9] = "October";
    MonthOfYear[MonthOfYear["November"] = 10] = "November";
    MonthOfYear[MonthOfYear["December"] = 11] = "December";
})(MonthOfYear || (MonthOfYear = {}));
/**
 * First week of the year settings types
 */
var FirstWeekOfYear;
(function (FirstWeekOfYear) {
    FirstWeekOfYear[FirstWeekOfYear["FirstDay"] = 0] = "FirstDay";
    FirstWeekOfYear[FirstWeekOfYear["FirstFullWeek"] = 1] = "FirstFullWeek";
    FirstWeekOfYear[FirstWeekOfYear["FirstFourDayWeek"] = 2] = "FirstFourDayWeek";
})(FirstWeekOfYear || (FirstWeekOfYear = {}));
/**
 * The supported date range types
 */
var DateRangeType;
(function (DateRangeType) {
    DateRangeType[DateRangeType["Day"] = 0] = "Day";
    DateRangeType[DateRangeType["Week"] = 1] = "Week";
    DateRangeType[DateRangeType["Month"] = 2] = "Month";
    DateRangeType[DateRangeType["WorkWeek"] = 3] = "WorkWeek";
})(DateRangeType || (DateRangeType = {}));

var FocusZoneTabbableElements;
(function (FocusZoneTabbableElements) {
    /** Tabbing is not allowed */
    FocusZoneTabbableElements[FocusZoneTabbableElements["none"] = 0] = "none";
    /** All tabbing action is allowed */
    FocusZoneTabbableElements[FocusZoneTabbableElements["all"] = 1] = "all";
    /** Tabbing is allowed only on input elements */
    FocusZoneTabbableElements[FocusZoneTabbableElements["inputOnly"] = 2] = "inputOnly";
})(FocusZoneTabbableElements || (FocusZoneTabbableElements = {}));
var FocusZoneDirection;
(function (FocusZoneDirection) {
    /** Only react to up/down arrows. */
    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
    /** Only react to left/right arrows. */
    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
    /** React to all arrows. */
    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
})(FocusZoneDirection || (FocusZoneDirection = {}));

var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var NO_VERTICAL_WRAP = 'data-no-vertical-wrap';
var NO_HORIZONTAL_WRAP = 'data-no-horizontal-wrap';
var LARGE_DISTANCE_FROM_CENTER = 999999999;
var LARGE_NEGATIVE_DISTANCE_FROM_CENTER = -999999999;
var _allInstances = {};
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;
var FocusZone = /** @class */ (function (_super) {
    __extends(FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = createRef();
        _this._onFocus = function (ev) {
            var _a = _this.props, onActiveElementChanged = _a.onActiveElementChanged, doNotAllowFocusEventToPropagate = _a.doNotAllowFocusEventToPropagate, onFocusNotification = _a.onFocusNotification;
            if (onFocusNotification) {
                onFocusNotification();
            }
            if (_this._isImmediateDescendantOfZone(ev.target)) {
                _this._activeElement = ev.target;
                _this._setFocusAlignment(_this._activeElement);
            }
            else {
                var parentElement = ev.target;
                while (parentElement && parentElement !== _this._root.current) {
                    if (isElementTabbable(parentElement) && _this._isImmediateDescendantOfZone(parentElement)) {
                        _this._activeElement = parentElement;
                        break;
                    }
                    parentElement = getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
                }
            }
            if (onActiveElementChanged) {
                onActiveElementChanged(_this._activeElement, ev);
            }
            if (doNotAllowFocusEventToPropagate) {
                ev.stopPropagation();
            }
        };
        _this._onMouseDown = function (ev) {
            var disabled = _this.props.disabled;
            if (disabled) {
                return;
            }
            var target = ev.target;
            var path = [];
            while (target && target !== _this._root.current) {
                path.push(target);
                target = getParent(target, ALLOW_VIRTUAL_ELEMENTS);
            }
            while (path.length) {
                target = path.pop();
                if (target && isElementTabbable(target)) {
                    _this._setActiveElement(target, true);
                }
                if (isElementFocusZone(target)) {
                    // Stop here since the focus zone will take care of its own children.
                    break;
                }
            }
        };
        /**
         * Handle the keystrokes.
         */
        _this._onKeyDown = function (ev) {
            var _a = _this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
            if (disabled) {
                return;
            }
            if (document.activeElement === _this._root.current && _this._isInnerZone) {
                // If this element has focus, it is being controlled by a parent.
                // Ignore the keystroke.
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the default has been prevented, do not process keyboard events.
            if (ev.isDefaultPrevented()) {
                return;
            }
            if (isInnerZoneKeystroke &&
                isInnerZoneKeystroke(ev) &&
                _this._isImmediateDescendantOfZone(ev.target)) {
                // Try to focus
                var innerZone = _this._getFirstInnerZone();
                if (innerZone) {
                    if (!innerZone.focus(true)) {
                        return;
                    }
                }
                else if (isElementFocusSubZone(ev.target)) {
                    if (!_this.focusElement(getNextElement(ev.target, ev.target.firstChild, true))) {
                        return;
                    }
                }
                else {
                    return;
                }
            }
            else if (ev.altKey) {
                return;
            }
            else {
                switch (ev.which) {
                    case 32 /* space */:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    case 37 /* left */:
                        if (direction !== FocusZoneDirection.vertical && _this._moveFocusLeft()) {
                            break;
                        }
                        return;
                    case 39 /* right */:
                        if (direction !== FocusZoneDirection.vertical && _this._moveFocusRight()) {
                            break;
                        }
                        return;
                    case 38 /* up */:
                        if (direction !== FocusZoneDirection.horizontal && _this._moveFocusUp()) {
                            break;
                        }
                        return;
                    case 40 /* down */:
                        if (direction !== FocusZoneDirection.horizontal && _this._moveFocusDown()) {
                            break;
                        }
                        return;
                    case 9 /* tab */:
                        if (_this.props.allowTabKey ||
                            _this.props.handleTabKey === 1 /* all */ ||
                            (_this.props.handleTabKey === 2 /* inputOnly */ &&
                                _this._isElementInput(ev.target))) {
                            var focusChanged = false;
                            _this._processingTabKey = true;
                            if (direction === FocusZoneDirection.vertical ||
                                !_this._shouldWrapFocus(_this._activeElement, NO_HORIZONTAL_WRAP)) {
                                focusChanged = ev.shiftKey ? _this._moveFocusUp() : _this._moveFocusDown();
                            }
                            else if (direction === FocusZoneDirection.horizontal || direction === FocusZoneDirection.bidirectional) {
                                focusChanged = ev.shiftKey ? _this._moveFocusLeft() : _this._moveFocusRight();
                            }
                            _this._processingTabKey = false;
                            if (focusChanged) {
                                break;
                            }
                        }
                        return;
                    case 36 /* home */:
                        if (_this._isElementInput(ev.target) &&
                            !_this._shouldInputLoseFocus(ev.target, false)) {
                            return false;
                        }
                        var firstChild = _this._root.current && _this._root.current.firstChild;
                        if (_this._root.current &&
                            firstChild &&
                            _this.focusElement(getNextElement(_this._root.current, firstChild, true))) {
                            break;
                        }
                        return;
                    case 35 /* end */:
                        if (_this._isElementInput(ev.target) &&
                            !_this._shouldInputLoseFocus(ev.target, true)) {
                            return false;
                        }
                        var lastChild = _this._root.current && _this._root.current.lastChild;
                        if (_this._root.current &&
                            _this.focusElement(getPreviousElement(_this._root.current, lastChild, true, true, true))) {
                            break;
                        }
                        return;
                    case 13 /* enter */:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    default:
                        return;
                }
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._warnDeprecations({
            rootProps: undefined,
            allowTabKey: 'handleTabKey'
        });
        _this._id = getId('FocusZone');
        _this._focusAlignment = {
            left: 0,
            top: 0
        };
        _this._processingTabKey = false;
        return _this;
    }
    FocusZone.prototype.componentDidMount = function () {
        var this$1 = this;

        _allInstances[this._id] = this;
        if (this._root.current) {
            var windowElement = this._root.current.ownerDocument.defaultView;
            var parentElement = getParent(this._root.current, ALLOW_VIRTUAL_ELEMENTS);
            while (parentElement && parentElement !== document.body && parentElement.nodeType === 1) {
                if (isElementFocusZone(parentElement)) {
                    this$1._isInnerZone = true;
                    break;
                }
                parentElement = getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
            if (!this._isInnerZone) {
                this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
            }
            // Assign initial tab indexes so that we can set initial focus as appropriate.
            this._updateTabIndexes();
            if (this.props.defaultActiveElement) {
                this._activeElement = getDocument().querySelector(this.props.defaultActiveElement);
                this.focus();
            }
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
    };
    FocusZone.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = getNativeProps(this.props, htmlElementProperties);
        var Tag = this.props.elementType || 'div';
        return (createElement(Tag, __assign({ role: "presentation" }, divProps, rootProps, { className: css('ms-FocusZone', className), ref: this._root, "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param {boolean} forceIntoFirstElement If true, focus will be forced into the first element, even if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._root.current) {
            if (!forceIntoFirstElement &&
                this._root.current.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                this._isInnerZone) {
                var ownerZoneElement = this._getOwnerZone(this._root.current);
                if (ownerZoneElement !== this._root.current) {
                    var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
                    return !!ownerZone && ownerZone.focusElement(this._root.current);
                }
                return false;
            }
            else if (!forceIntoFirstElement &&
                this._activeElement &&
                elementContains(this._root.current, this._activeElement) &&
                isElementTabbable(this._activeElement)) {
                this._activeElement.focus();
                return true;
            }
            else {
                var firstChild = this._root.current.firstChild;
                return this.focusElement(getNextElement(this._root.current, firstChild, true));
            }
        }
        return false;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param {HTMLElement} element The child element within the zone to focus.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element) {
        var onBeforeFocus = this.props.onBeforeFocus;
        if (onBeforeFocus && !onBeforeFocus(element)) {
            return false;
        }
        if (element) {
            this._setActiveElement(element);
            if (this._activeElement) {
                this._activeElement.focus();
            }
            return true;
        }
        return false;
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     */
    FocusZone.prototype._onKeyDownCapture = function (ev) {
        if (ev.which === 9 /* tab */) {
            this._updateTabIndexes();
        }
    };
    FocusZone.prototype._setActiveElement = function (element, forceAlignemnt) {
        var previousActiveElement = this._activeElement;
        this._activeElement = element;
        if (previousActiveElement) {
            if (isElementFocusZone(previousActiveElement)) {
                this._updateTabIndexes(previousActiveElement);
            }
            previousActiveElement.tabIndex = -1;
        }
        if (this._activeElement) {
            if (!this._focusAlignment || forceAlignemnt) {
                this._setFocusAlignment(element, true, true);
            }
            this._activeElement.tabIndex = 0;
        }
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        var this$1 = this;

        if (target === this._root.current) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA') {
                return false;
            }
            if (this$1._isImmediateDescendantOfZone(target) &&
                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                EventGroup.raise(target, 'click', null, true);
                return true;
            }
            target = getParent(target, ALLOW_VIRTUAL_ELEMENTS);
        } while (target !== this._root.current);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        var this$1 = this;

        rootElement = rootElement || this._activeElement || this._root.current;
        if (!rootElement) {
            return null;
        }
        if (isElementFocusZone(rootElement)) {
            return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if (isElementFocusZone(child)) {
                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this$1._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev, useDefaultWrap) {
        var this$1 = this;

        if (useDefaultWrap === void 0) { useDefaultWrap = true; }
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement = undefined;
        var changedFocus = false;
        var isBidirectional = this.props.direction === FocusZoneDirection.bidirectional;
        if (!element || !this._root.current) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = (isForward
                ? getNextElement(this$1._root.current, element)
                : getPreviousElement(this$1._root.current, element));
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance === -1 && candidateDistance === -1) {
                        candidateElement = element;
                        break;
                    }
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation && useDefaultWrap) {
            if (isForward) {
                return this.focusElement(getNextElement(this._root.current, this._root.current.firstElementChild, true));
            }
            else {
                return this.focusElement(getPreviousElement(this._root.current, this._root.current.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var _this = this;
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if (targetRectTop < activeRectBottom) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var _this = this;
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if (targetRectBottom > activeRectTop) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function () {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            if (targetRect.bottom > activeRect.top &&
                targetRect.right <= activeRect.right &&
                _this.props.direction !== FocusZoneDirection.vertical) {
                distance = activeRect.right - targetRect.right;
            }
            else {
                if (!shouldWrap) {
                    distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function () {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(!getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            if (targetRect.top < activeRect.bottom &&
                targetRect.left >= activeRect.left &&
                _this.props.direction !== FocusZoneDirection.vertical) {
                distance = targetRect.left - activeRect.left;
            }
            else if (!shouldWrap) {
                distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === FocusZoneDirection.bidirectional &&
            (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + rect.width / 2;
            var top_1 = rect.top + rect.height / 2;
            if (!this._focusAlignment) {
                this._focusAlignment = { left: left, top: top_1 };
            }
            if (isHorizontal) {
                this._focusAlignment.left = left;
            }
            if (isVertical) {
                this._focusAlignment.top = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this._root.current;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = getParent(element, ALLOW_VIRTUAL_ELEMENTS);
        while (parentElement && parentElement !== this._root.current && parentElement !== document.body) {
            if (isElementFocusZone(parentElement)) {
                return parentElement;
            }
            parentElement = getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
        return this._root.current;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        var this$1 = this;

        if (!element && this._root.current) {
            this._defaultFocusElement = null;
            element = this._root.current;
            if (this._activeElement && !elementContains(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        // If active element changes state to disabled, set it to null.
        // Otherwise, we lose keyboard accessibility to other elements in focus zone.
        if (this._activeElement && !isElementTabbable(this._activeElement)) {
            this._activeElement = null;
        }
        var childNodes = element && element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!isElementFocusZone(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if (isElementTabbable(child)) {
                    if (this$1.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this$1._isInnerZone &&
                        ((!this$1._activeElement && !this$1._defaultFocusElement) || this$1._activeElement === child)) {
                        this$1._defaultFocusElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this$1._isInnerZone &&
                    ((!this$1._activeElement && !this$1._defaultFocusElement) || this$1._activeElement === child)) {
                    this$1._defaultFocusElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this$1._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element &&
            element.tagName &&
            (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        // If a tab was used, we want to focus on the next element.
        if (!this._processingTabKey &&
            element &&
            element.type &&
            ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward.
            // 3. when selection start is not the end of length and it is forward.
            // 4. We press any of the arrow keys when our handleTabKey isn't none or undefined (only losing focus if we hit tab)
            // and if shouldInputLoseFocusOnArrowKey is defined, if scenario prefers to not loose the focus which is determined by calling the
            // callback shouldInputLoseFocusOnArrowKey
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward) ||
                (selectionStart !== inputValue.length && isForward) ||
                (!!this.props.handleTabKey &&
                    !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(element)))) {
                return false;
            }
        }
        return true;
    };
    FocusZone.prototype._shouldWrapFocus = function (element, noWrapDataAttribute) {
        return !!this.props.checkForNoWrap ? shouldWrapFocus(element, noWrapDataAttribute) : true;
    };
    FocusZone.defaultProps = {
        isCircularNavigation: false,
        direction: FocusZoneDirection.bidirectional
    };
    return FocusZone;
}(BaseComponent));

// Please keep alphabetized
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use default.
     * @deprecated
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use image.
     * @deprecated
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType || (IconType = {}));

/**
 * The possible methods that can be used to fit the image.
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
})(ImageFit || (ImageFit = {}));
/**
 * The cover style to be used on the image
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle || (ImageCoverStyle = {}));
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use onLoadingStateChange instead
     * and rerender the Image with a difference src.
     * @deprecated
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState || (ImageLoadState = {}));

var getClassNames = classNamesFunction();
var KEY_PREFIX = 'fabricImage';
var ImageBase = /** @class */ (function (_super) {
    __extends(ImageBase, _super);
    function ImageBase(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = ImageCoverStyle.portrait;
        _this._imageElement = createRef();
        _this._frameElement = createRef();
        _this._onImageLoaded = function (ev) {
            var _a = _this.props, src = _a.src, onLoad = _a.onLoad;
            if (onLoad) {
                onLoad(ev);
            }
            _this._computeCoverStyle(_this.props);
            if (src) {
                _this.setState({
                    loadState: ImageLoadState.loaded
                });
            }
        };
        _this._onImageError = function (ev) {
            if (_this.props.onError) {
                _this.props.onError(ev);
            }
            _this.setState({
                loadState: ImageLoadState.error
            });
        };
        _this.state = {
            loadState: ImageLoadState.notLoaded
        };
        return _this;
    }
    ImageBase_1 = ImageBase;
    ImageBase.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: ImageLoadState.notLoaded
            });
        }
        else if (this.state.loadState === ImageLoadState.loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    ImageBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    ImageBase.prototype.render = function () {
        var imageProps = getNativeProps(this.props, imageProperties, ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, shouldStartVisible = _a.shouldStartVisible, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame, styles = _a.styles, theme = _a.theme;
        var loadState = this.state.loadState;
        var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            width: width,
            height: height,
            maximizeFrame: maximizeFrame,
            shouldFadeIn: shouldFadeIn,
            shouldStartVisible: shouldStartVisible,
            isLoaded: loadState === ImageLoadState.loaded ||
                (loadState === ImageLoadState.notLoaded && this.props.shouldStartVisible),
            isLandscape: coverStyle === ImageCoverStyle.landscape,
            isCenter: imageFit === ImageFit.center,
            isContain: imageFit === ImageFit.contain,
            isCover: imageFit === ImageFit.cover,
            isNone: imageFit === ImageFit.none,
            isError: loadState === ImageLoadState.error,
            isNotImageFit: imageFit === undefined
        });
        // If image dimensions aren't specified, the natural size of the image is used.
        return (createElement("div", { className: classNames.root, style: { width: width, height: height }, ref: this._frameElement },
            createElement("img", __assign({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: classNames.image, ref: this._imageElement, src: src, alt: alt, role: role }))));
    };
    ImageBase.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === ImageLoadState.notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = this._imageElement.current
                ? (src && (this._imageElement.current.naturalWidth > 0 && this._imageElement.current.naturalHeight > 0)) ||
                    (this._imageElement.current.complete && ImageBase_1._svgRegex.test(src))
                : false;
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: ImageLoadState.loaded
                });
            }
        }
    };
    ImageBase.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        // Do not compute cover style if it was already specified in props
        if ((imageFit === ImageFit.cover || imageFit === ImageFit.contain) &&
            this.props.coverStyle === undefined &&
            this._imageElement.current &&
            this._frameElement.current) {
            // Determine the desired ratio using the width and height props.
            // If those props aren't available, measure measure the frame.
            var desiredRatio = void 0;
            if (!!width && !!height) {
                desiredRatio = width / height;
            }
            else {
                desiredRatio = this._frameElement.current.clientWidth / this._frameElement.current.clientHeight;
            }
            // Examine the source image to determine its original ratio.
            var naturalRatio = this._imageElement.current.naturalWidth / this._imageElement.current.naturalHeight;
            // Should we crop from the top or the sides?
            if (naturalRatio > desiredRatio) {
                this._coverStyle = ImageCoverStyle.landscape;
            }
            else {
                this._coverStyle = ImageCoverStyle.portrait;
            }
        }
    };
    ImageBase.defaultProps = {
        shouldFadeIn: true
    };
    ImageBase._svgRegex = /\.svg$/i;
    ImageBase = ImageBase_1 = __decorate([
        customizable('Image', ['theme', 'styles'])
    ], ImageBase);
    return ImageBase;
    var ImageBase_1;
}(BaseComponent));

var GlobalClassNames = {
    root: 'ms-Image',
    rootMaximizeFrame: 'ms-Image--maximizeFrame',
    image: 'ms-Image-image',
    imageCenter: 'ms-Image-image--center',
    imageContain: 'ms-Image-image--contain',
    imageCover: 'ms-Image-image--cover',
    imageNone: 'ms-Image-image--none',
    imageLandscape: 'ms-Image-image--landscape',
    imagePortrait: 'ms-Image-image--portrait'
};
var getStyles = function (props) {
    var className = props.className, width = props.width, height = props.height, maximizeFrame = props.maximizeFrame, isLoaded = props.isLoaded, shouldFadeIn = props.shouldFadeIn, shouldStartVisible = props.shouldStartVisible, isLandscape = props.isLandscape, isCenter = props.isCenter, isContain = props.isContain, isCover = props.isCover, isNone = props.isNone, isError = props.isError, isNotImageFit = props.isNotImageFit, theme = props.theme;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    var ImageFitStyles = {
        position: 'absolute',
        left: '50% /* @noflip */',
        top: '50%',
        transform: 'translate(-50%,-50%)' // @todo test RTL renders transform: translate(50%,-50%);
    };
    return {
        root: [
            classNames.root,
            {
                overflow: 'hidden'
            },
            maximizeFrame && [
                classNames.rootMaximizeFrame,
                {
                    height: '100%',
                    width: '100%'
                }
            ],
            (isCenter || isContain || isCover) && {
                position: 'relative'
            },
            className
        ],
        image: [
            classNames.image,
            {
                display: 'block',
                opacity: 0
            },
            isLoaded && [
                'is-loaded',
                {
                    opacity: 1
                }
            ],
            isCenter && [classNames.imageCenter, ImageFitStyles],
            isContain && [
                classNames.imageContain,
                isLandscape && {
                    width: '100%',
                    height: 'auto'
                },
                !isLandscape && {
                    width: 'auto',
                    height: '100%'
                },
                ImageFitStyles
            ],
            isCover && [
                classNames.imageCover,
                isLandscape && {
                    width: 'auto',
                    height: '100%'
                },
                !isLandscape && {
                    width: '100%',
                    height: 'auto'
                },
                ImageFitStyles
            ],
            isNone && [
                classNames.imageNone,
                {
                    width: 'auto',
                    height: 'auto'
                }
            ],
            isNotImageFit && [
                !!width &&
                    !height && {
                    height: 'auto',
                    width: '100%'
                },
                !width &&
                    !!height && {
                    height: '100%',
                    width: 'auto'
                },
                !!width &&
                    !!height && {
                    height: '100%',
                    width: '100%'
                }
            ],
            isLoaded && shouldFadeIn && !shouldStartVisible && AnimationClassNames.fadeIn400,
            isLandscape && classNames.imageLandscape,
            !isLandscape && classNames.imagePortrait,
            !isLoaded && 'is-notLoaded',
            shouldFadeIn && 'is-fadeIn',
            isError && 'is-error'
        ]
    };
};

var Image = styled(ImageBase, getStyles);

var getClassNames$1 = classNamesFunction();
var IconBase = /** @class */ (function (_super) {
    __extends(IconBase, _super);
    function IconBase(props) {
        var _this = _super.call(this, props) || this;
        _this.onImageLoadingStateChange = function (state) {
            if (_this.props.imageProps && _this.props.imageProps.onLoadingStateChange) {
                _this.props.imageProps.onLoadingStateChange(state);
            }
            if (state === ImageLoadState.error) {
                _this.setState({ imageLoadError: true });
            }
        };
        _this.state = {
            imageLoadError: false
        };
        return _this;
    }
    IconBase.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, className = _a.className, styles = _a.styles, iconName = _a.iconName, imageErrorAs = _a.imageErrorAs;
        var isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
        var isImage = this.props.iconType === IconType.image || this.props.iconType === IconType.Image;
        var _b = this._getIconContent(iconName), iconClassName = _b.iconClassName, children = _b.children;
        var classNames = getClassNames$1(styles, {
            className: className,
            iconClassName: iconClassName,
            isImage: isImage,
            isPlaceholder: isPlaceholder
        });
        var containerProps = ariaLabel
            ? {
                'aria-label': ariaLabel
            }
            : {
                role: 'presentation',
                'aria-hidden': true
            };
        var RootType = isImage ? 'div' : 'i';
        var nativeProps = getNativeProps(this.props, htmlElementProperties);
        var imageLoadError = this.state.imageLoadError;
        var imageProps = __assign({}, this.props.imageProps, { onLoadingStateChange: this.onImageLoadingStateChange });
        var ImageType = (imageLoadError && imageErrorAs) || Image;
        return (createElement(RootType, __assign({ "data-icon-name": iconName }, nativeProps, containerProps, { className: classNames.root }), isImage ? createElement(ImageType, __assign({}, imageProps)) : children));
    };
    IconBase.prototype._getIconContent = function (name) {
        var iconDefinition = getIcon(name) || {
            subset: {
                className: undefined
            },
            code: undefined
        };
        return {
            children: iconDefinition.code,
            iconClassName: iconDefinition.subset.className
        };
    };
    return IconBase;
}(BaseComponent));

var getStyles$1 = function (props) {
    var className = props.className, iconClassName = props.iconClassName, isPlaceholder = props.isPlaceholder, isImage = props.isImage, styles = props.styles;
    return {
        root: [
            isImage && 'ms-Icon-imageContainer',
            isPlaceholder && 'ms-Icon-placeHolder',
            {
                display: 'inline-block'
            },
            isPlaceholder && {
                width: '1em'
            },
            isImage && {
                overflow: 'hidden'
            },
            iconClassName,
            className,
            styles && styles.root,
            styles && styles.imageContainer
        ]
    };
};

/**
 * Icons are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
var Icon = styled(IconBase, getStyles$1);

/**
 * Common constants and methods
 */
var TimeConstants = {
    MillisecondsInOneDay: 86400000,
    MillisecondsIn1Sec: 1000,
    MillisecondsIn1Min: 60000,
    MillisecondsIn30Mins: 1800000,
    MillisecondsIn1Hour: 3600000,
    MinutesInOneDay: 1440,
    MinutesInOneHour: 60,
    DaysInOneWeek: 7,
    MonthInOneYear: 12
};

/**
 * Returns a date offset from the given date by the specified number of days.
 * @param {Date} date - The origin date
 * @param {number} days - The number of days to offset. 'days' can be negative.
 * @return {Date} A new Date object offset from the origin date by the given number of days
 */
function addDays(date, days) {
    var result = new Date(date.getTime());
    result.setDate(result.getDate() + days);
    return result;
}
/**
 * Returns a date offset from the given date by the specified number of weeks.
 * @param {Date} date - The origin date
 * @param {number} weeks - The number of weeks to offset. 'weeks' can be negative.
 * @return {Date} A new Date object offset from the origin date by the given number of weeks
 */
function addWeeks(date, weeks) {
    return addDays(date, weeks * TimeConstants.DaysInOneWeek);
}
/**
 * Returns a date offset from the given date by the specified number of months.
 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param {Date} date - The origin date
 * @param {number} months - The number of months to offset. 'months' can be negative.
 * @return {Date} A new Date object offset from the origin date by the given number of months
 */
function addMonths(date, months) {
    var result = new Date(date.getTime());
    var newMonth = result.getMonth() + months;
    result.setMonth(newMonth);
    // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
    // Loop until we back up to a day the new month has.
    // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
    if (result.getMonth() !==
        ((newMonth % TimeConstants.MonthInOneYear) + TimeConstants.MonthInOneYear) % TimeConstants.MonthInOneYear) {
        result = addDays(result, -result.getDate());
    }
    return result;
}
/**
 * Returns a date offset from the given date by the specified number of years.
 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param {Date} date - The origin date
 * @param {number} years - The number of years to offset. 'years' can be negative.
 * @return {Date} A new Date object offset from the origin date by the given number of years
 */
function addYears(date, years) {
    var result = new Date(date.getTime());
    result.setFullYear(date.getFullYear() + years);
    // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
    // Loop until we back up to a day the new month has.
    // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
    if (result.getMonth() !==
        ((date.getMonth() % TimeConstants.MonthInOneYear) + TimeConstants.MonthInOneYear) % TimeConstants.MonthInOneYear) {
        result = addDays(result, -result.getDate());
    }
    return result;
}
/**
 * Returns a date that is the first day of the month of the provided date.
 * @param {Date} date - The origin date
 * @return {Date} A new Date object with the day set to the first day of the month.
 */
function getMonthStart(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
}
/**
 * Returns a date that is the last day of the month of the provided date.
 * @param {Date} date - The origin date
 * @return {Date} A new Date object with the day set to the last day of the month.
 */
function getMonthEnd(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0, 0);
}
/**
 * Returns a date that is the first day of the year of the provided date.
 * @param {Date} date - The origin date
 * @return {Date} A new Date object with the day set to the first day of the year.
 */
function getYearStart(date) {
    return new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0);
}
/**
 * Returns a date that is the last day of the year of the provided date.
 * @param {Date} date - The origin date
 * @return {Date} A new Date object with the day set to the last day of the year.
 */
function getYearEnd(date) {
    return new Date(date.getFullYear() + 1, 0, 0, 0, 0, 0, 0);
}
/**
 * Returns a date that is a copy of the given date, aside from the month changing to the given month.
 *  The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param {Date} date - The origin date
 * @param {number} month - The 0-based index of the month to set on the date.
 * @return {Date} A new Date object with the given month set.
 */
function setMonth(date, month) {
    return addMonths(date, month - date.getMonth());
}
/**
 * Compares two dates, and returns true if the two dates (not accounting for time-of-day) are equal.
 * @return {boolean} True if the two dates represent the same date (regardless of time-of-day), false otherwise.
 */
function compareDates(date1, date2) {
    if (!date1 && !date2) {
        return true;
    }
    else if (!date1 || !date2) {
        return false;
    }
    else {
        return (date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate());
    }
}
/**
 * Compare the date parts of two dates
 * @param {Date} date1 - The first date to compare
 * @param {Date} date2 - The second date to compare
 * @returns {Number} A negative value if date1 is earlier than date2, 0 if the dates are equal, or a positive value
 * if date1 is later than date2.
 */
function compareDatePart(date1, date2) {
    return getDatePartHashValue(date1) - getDatePartHashValue(date2);
}
/**
 * Gets the date range array including the specified date. The date range array is calculated as the list
 * of dates accounting for the specified first day of the week and date range type.
 * @param {Date} date - The input date
 * @param {DateRangeType} dateRangeType - The desired date range type, i.e., day, week, month, etc.
 * @param {DayOfWeek} firstDayOfWeek - The first day of the week.
 * @param {DayOfWeek[]} workWeekDays - The allowed days in work week. If not provided, assumes all days are allowed.
 * @returns {Date[]} An array of dates representing the date range containing the specified date.
 */
function getDateRangeArray(date, dateRangeType, firstDayOfWeek, workWeekDays) {
    var datesArray = new Array();
    var startDate;
    var endDate = null;
    if (!workWeekDays) {
        workWeekDays = [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday];
    }
    switch (dateRangeType) {
        case DateRangeType.Day:
            startDate = getDatePart(date);
            endDate = addDays(startDate, 1);
            break;
        case DateRangeType.Week:
        case DateRangeType.WorkWeek:
            startDate = getStartDateOfWeek(getDatePart(date), firstDayOfWeek);
            endDate = addDays(startDate, TimeConstants.DaysInOneWeek);
            break;
        case DateRangeType.Month:
            startDate = new Date(date.getFullYear(), date.getMonth(), 1);
            endDate = addMonths(startDate, 1);
            break;
        default:
            return assertNever(dateRangeType);
    }
    // Populate the dates array with the dates in range
    var nextDate = startDate;
    do {
        if (dateRangeType !== DateRangeType.WorkWeek) {
            // push all days not in work week view
            datesArray.push(nextDate);
        }
        else if (workWeekDays.includes(nextDate.getDay())) {
            datesArray.push(nextDate);
        }
        nextDate = addDays(nextDate, 1);
    } while (!compareDates(nextDate, endDate));
    return datesArray;
}
/**
 * Checks whether the specified date is in the given date range.
 * @param {Date} date - The origin date
 * @param {Date[]} dateRange - An array of dates to do the lookup on
 * @returns {bool} True if the date matches one of the dates in the specified array, false otherwise.
 */
function isInDateRangeArray(date, dateRange) {
    for (var _i = 0, dateRange_1 = dateRange; _i < dateRange_1.length; _i++) {
        var dateInRange = dateRange_1[_i];
        if (compareDates(date, dateInRange)) {
            return true;
        }
    }
    return false;
}
/**
 * Returns the week number for a date.
 * Week numbers are 1 - 52 (53) in a year
 * @param {navigatedDate} Date - A date to find the week number for.
 * @param {firstDayOfWeek} DayOfWeek - The first day of the week (0-6, Sunday = 0)
 * @param {firstWeekOfYear} FirstWeekOfYear - The first week of the year (1-2)
 * @return {weeksArray} The weeks number array for the current month.
 */
function getWeekNumbersInMonth(weeksInMonth, firstDayOfWeek, firstWeekOfYear, navigatedDate) {
    var selectedYear = navigatedDate.getFullYear();
    var selectedMonth = navigatedDate.getMonth();
    var dayOfMonth = 1;
    var fistDayOfMonth = new Date(selectedYear, selectedMonth, dayOfMonth);
    var endOfFirstWeek = dayOfMonth +
        (firstDayOfWeek + TimeConstants.DaysInOneWeek - 1) -
        adjustWeekDay(firstDayOfWeek, fistDayOfMonth.getDay());
    var endOfWeekRange = new Date(selectedYear, selectedMonth, endOfFirstWeek);
    dayOfMonth = endOfWeekRange.getDate();
    var weeksArray = [];
    for (var i = 0; i < weeksInMonth; i++) {
        // Get week number for end of week
        weeksArray.push(getWeekNumber(endOfWeekRange, firstDayOfWeek, firstWeekOfYear));
        dayOfMonth += TimeConstants.DaysInOneWeek;
        endOfWeekRange = new Date(selectedYear, selectedMonth, dayOfMonth);
    }
    return weeksArray;
}
/**
 * Returns the week number for a date.
 * Week numbers are 1 - 52 (53) in a year
 * @param {Date} date - A date to find the week number for.
 * @param {DayOfWeek} firstDayOfWeek - The first day of the week (0-6, Sunday = 0)
 * @param {firstWeekOfYear} firstWeekOfYear - The first week of the year (1-2)
 * @return {Number} The week's number in the year.
 */
function getWeekNumber(date, firstDayOfWeek, firstWeekOfYear) {
    // First four-day week of the year - minumum days count
    var fourDayWeek = 4;
    switch (firstWeekOfYear) {
        case FirstWeekOfYear.FirstFullWeek:
            return getWeekOfYearFullDays(date, firstDayOfWeek, TimeConstants.DaysInOneWeek);
        case FirstWeekOfYear.FirstFourDayWeek:
            return getWeekOfYearFullDays(date, firstDayOfWeek, fourDayWeek);
        default:
            return getFirstDayWeekOfYear(date, firstDayOfWeek);
    }
}
/**
 * Gets a new date with the time portion zeroed out, i.e., set to midnight
 * @param {Date} date - The origin date
 * @returns {Date} A new date with the time set to midnight
 */
function getDatePart(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
/**
 * Gets the date for the first day of the week based on the given date assuming
 * the specified first day of the week.
 * @param {Date} date - The date to find the beginning of the week date for.
 * @return {Date} A new date object representing the first day of the week containing the input date.
 */
function getStartDateOfWeek(date, firstDayOfWeek) {
    var daysOffset = firstDayOfWeek - date.getDay();
    if (daysOffset > 0) {
        // If first day of week is > date, go 1 week back, to ensure resulting date is in the past.
        daysOffset -= TimeConstants.DaysInOneWeek;
    }
    return addDays(date, daysOffset);
}
/**
 * Helper function to assist in date comparisons
 */
function getDatePartHashValue(date) {
    // Generate date hash value created as sum of Date (up to 31 = 5 bits), Month (up to 11 = 4 bits) and Year.
    /* tslint:disable:no-bitwise */
    return date.getDate() + (date.getMonth() << 5) + (date.getFullYear() << 9);
    /* tslint:enable:no-bitwise */
}
/**
 * Helper function for getWeekNumber.
 * Returns week number for a date
 * @param {date} Date - current selected date.
 * @param {firstDayOfWeek} DayOfWeek - The first day of week (0-6, Sunday = 0)
 * @param {numberOfFullDays} number - week settings.
 * @return {Number} The week's number in the year.
 */
function getWeekOfYearFullDays(date, firstDayOfWeek, numberOfFullDays) {
    var dayOfYear = getDayOfYear(date) - 1;
    var num = date.getDay() - (dayOfYear % TimeConstants.DaysInOneWeek);
    var lastDayOfPrevYear = new Date(date.getFullYear() - 1, MonthOfYear.December, 31);
    var daysInYear = getDayOfYear(lastDayOfPrevYear) - 1;
    var num2 = (firstDayOfWeek - num + 2 * TimeConstants.DaysInOneWeek) % TimeConstants.DaysInOneWeek;
    if (num2 !== 0 && num2 >= numberOfFullDays) {
        num2 -= TimeConstants.DaysInOneWeek;
    }
    var num3 = dayOfYear - num2;
    if (num3 < 0) {
        num -= daysInYear % TimeConstants.DaysInOneWeek;
        num2 = (firstDayOfWeek - num + 2 * TimeConstants.DaysInOneWeek) % TimeConstants.DaysInOneWeek;
        if (num2 !== 0 && num2 + 1 >= numberOfFullDays) {
            num2 -= TimeConstants.DaysInOneWeek;
        }
        num3 = daysInYear - num2;
    }
    return Math.floor(num3 / TimeConstants.DaysInOneWeek + 1);
}
/**
 * Helper function for getWeekNumber.
 * Returns week number for a date
 * @param {date} Date - current selected date.
 * @param {firstDayOfWeek} DayOfWeek - The first day of week (0-6, Sunday = 0)
 * @return {Number} The week's number in the year.
 */
function getFirstDayWeekOfYear(date, firstDayOfWeek) {
    var num = getDayOfYear(date) - 1;
    var num2 = date.getDay() - (num % TimeConstants.DaysInOneWeek);
    var num3 = (num2 - firstDayOfWeek + 2 * TimeConstants.DaysInOneWeek) % TimeConstants.DaysInOneWeek;
    return Math.floor((num + num3) / TimeConstants.DaysInOneWeek + 1);
}
/**
 * Helper function for getWeekNumber.
 * Returns adjusted week day number when firstDayOfWeek is other than Sunday
 * For Week Day Number comparison checks
 * @param {firstDayOfWeek} DayOfWeek - The first day of week (0-6, Sunday = 0)
 * @param {dateWeekDay} DayOfWeek - shifts number forward to 1 week in case passed as true
 * @return {DayOfWeek} The day of week adjusted to firstDayOfWeek. E.g. when FirstDyOfWeek is Monday (1), Sunday becomes = 7 (7 > 1).
 */
function adjustWeekDay(firstDayOfWeek, dateWeekDay) {
    return firstDayOfWeek !== DayOfWeek.Sunday && dateWeekDay < firstDayOfWeek
        ? dateWeekDay + TimeConstants.DaysInOneWeek
        : dateWeekDay;
}
/**
 * Returns the day number for a date in a year
 * The number of days since January 1st in the particular year.
 * @param {Date} date - A date to find the day number for.
 * @return {Number} The day's number in the year.
 */
function getDayOfYear(date) {
    var month = date.getMonth();
    var year = date.getFullYear();
    var daysUntilDate = 0;
    for (var i = 0; i < month; i++) {
        daysUntilDate += daysInMonth(i + 1, year);
    }
    daysUntilDate += date.getDate();
    return daysUntilDate;
}
/**
 * Returns the number of days in the month
 * @param {number} month - The month number to target (months 1-12).
 * @param {number} year - The year to target.
 * @return {Number} The number of days in the month.
 */
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

/* tslint:disable */
loadStyles([{ "rawString": ".root_c754aea6{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0}.root_c754aea6 *::-moz-focus-inner{border:0}.root_c754aea6 *{outline:transparent}.root_c754aea6 *{position:relative}.ms-Fabric--isFocusVisible .root_c754aea6 *:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_c754aea6 *::-moz-focus-inner{border:0}.root_c754aea6 *{outline:transparent}.root_c754aea6 *{position:relative}.root_c754aea6 *:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:2px solid WindowText}}.picker_c754aea6{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";font-size:14px;position:relative}html[dir='ltr'] .picker_c754aea6{text-align:left}html[dir='rtl'] .picker_c754aea6{text-align:right}.holder_c754aea6{-webkit-overflow-scrolling:touch;-webkit-box-sizing:border-box;box-sizing:border-box;display:none}.picker_c754aea6.pickerIsOpened_c754aea6 .holder_c754aea6{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block}.pickerIsOpened_c754aea6{position:relative}.frame_c754aea6{position:relative}.wrap_c754aea6{min-height:212px;padding:12px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:content-box;box-sizing:content-box}.wrap_c754aea6.goTodaySpacing_c754aea6{min-height:228px}.dayPicker_c754aea6{display:block}.header_c754aea6{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:28px;line-height:44px;width:100%}.divider_c754aea6{top:0;margin-top:-12px;margin-bottom:-12px}html[dir='ltr'] .divider_c754aea6{border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}html[dir='rtl'] .divider_c754aea6{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.monthAndYear_c754aea6,.year_c754aea6{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:600;padding:0 5px}.monthAndYear_c754aea6:hover,.currentYear_c754aea6:hover{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.table_c754aea6{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:inherit;margin-top:4px;width:197px}.table_c754aea6 td{margin:0;padding:0}.table_c754aea6 td:hover{outline:1px solid transparent}.dayWrapper_c754aea6,.weekday_c754aea6{width:28px;height:28px;padding:0;line-height:28px;font-size:12px;font-size:15px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dayWrapper_c754aea6 *::-moz-focus-inner,.weekday_c754aea6 *::-moz-focus-inner{border:0}.dayWrapper_c754aea6 *,.weekday_c754aea6 *{outline:transparent}.dayWrapper_c754aea6 *,.weekday_c754aea6 *{position:relative}.ms-Fabric--isFocusVisible .dayWrapper_c754aea6 *:focus:after,.ms-Fabric--isFocusVisible .weekday_c754aea6 *:focus:after{content:'';position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.dayWrapper_c754aea6 *::-moz-focus-inner,.weekday_c754aea6 *::-moz-focus-inner{border:0}.dayWrapper_c754aea6 *,.weekday_c754aea6 *{outline:transparent}.dayWrapper_c754aea6 *,.weekday_c754aea6 *{position:relative}.dayWrapper_c754aea6 *:after,.weekday_c754aea6 *:after{content:'';position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;pointer-events:none;border:2px solid WindowText}}.day_c754aea6{width:24px;height:24px;border-radius:2px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.dayIsToday_c754aea6,.dayIsToday_c754aea6:hover{position:relative;background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.dayIsToday_c754aea6,.dayIsToday_c754aea6:hover{border:1px solid WindowText}}.dayIsDisabled_c754aea6:before{border-top-color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.dayIsUnfocused_c754aea6,.dayIsDisabled_c754aea6{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-weight:400}.dayIsFocused_c754aea6:hover,.dayIsUnfocused_c754aea6:hover{cursor:pointer;background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.dayIsHighlighted_c754aea6:hover,.pickerIsFocused_c754aea6 .dayIsHighlighted_c754aea6{cursor:pointer}@media screen and (-ms-high-contrast: active){.dayIsHighlighted_c754aea6:hover,.pickerIsFocused_c754aea6 .dayIsHighlighted_c754aea6{border:2px solid Highlight}}.dayIsFocused_c754aea6:active,.dayIsHighlighted_c754aea6{background:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.dayIsFocused_c754aea6:active.day_c754aea6,.dayIsHighlighted_c754aea6.day_c754aea6{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:600}.dayIsHighlighted_c754aea6.dayDisabled_c754aea6,.dayIsHighlighted_c754aea6.dayDisabled_c754aea6:hover{background:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.dayBackground_c754aea6,.dayBackground_c754aea6:hover,.dayBackground_c754aea6:active{border-radius:2px}.dayHover_c754aea6,.dayHover_c754aea6:hover{cursor:pointer;background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.dayPress_c754aea6,.dayPress_c754aea6:hover{cursor:pointer;font-weight:600;background:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.dayPress_c754aea6 .dayIsToday_c754aea6,.dayPress_c754aea6:hover .dayIsToday_c754aea6{background:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.dayIsUnfocused_c754aea6:active,.dayIsFocused_c754aea6:active,.dayIsHighlighted_c754aea6,.dayIsHighlighted_c754aea6:hover,.dayIsHighlighted_c754aea6:active,.weekBackground_c754aea6,.weekBackground_c754aea6:hover,.weekBackground_c754aea6:active{background:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:600}.dayIsToday_c754aea6,.dayIsToday_c754aea6,.pickerIsFocused_c754aea6 .dayIsToday_c754aea6,.dayIsToday_c754aea6.day_c754aea6:active{position:relative;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-weight:600;background:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.showWeekNumbers_c754aea6 .weekNumbers_c754aea6{border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";-webkit-box-sizing:border-box;box-sizing:border-box;width:28x;padding:0}.showWeekNumbers_c754aea6 .weekNumbers_c754aea6 .dayWrapper_c754aea6{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.showWeekNumbers_c754aea6 .weekNumbers_c754aea6 .dayWrapper_c754aea6.weekIsHighlighted_c754aea6{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.showWeekNumbers_c754aea6 .table_c754aea6{width:225px}.showWeekNumbers_c754aea6 .table_c754aea6 .dayWrapper_c754aea6,.showWeekNumbers_c754aea6 .table_c754aea6 .weekday_c754aea6{width:30px}.showWeekNumbersRTL_c754aea6 .weekNumbers_c754aea6{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";-webkit-box-sizing:border-box;box-sizing:border-box}.showWeekNumbersRTL_c754aea6 .weekNumbers_c754aea6 .dayWrapper_c754aea6{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.showWeekNumbersRTL_c754aea6 .weekNumbers_c754aea6 .dayWrapper_c754aea6.weekIsHighlighted_c754aea6{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.showWeekNumbersRTL_c754aea6 .table_c754aea6:not(.weekNumbers_c754aea6){margin-right:30px}.showWeekNumbersRTL_c754aea6 .table_c754aea6 .dayWrapper_c754aea6,.showWeekNumbersRTL_c754aea6 .table_c754aea6 .weekday_c754aea6{width:30px}.monthComponents_c754aea6,.yearComponents_c754aea6,.decadeComponents_c754aea6{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-item-align:end;align-self:flex-end}.prevMonth_c754aea6,.nextMonth_c754aea6,.prevYear_c754aea6,.nextYear_c754aea6,.prevDecade_c754aea6,.nextDecade_c754aea6{width:28px;height:28px;display:block;text-align:center;line-height:28px;text-align:center;font-size:12px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";border-radius:2px;position:relative;background-color:transparent;border:none;padding:0}.prevMonth_c754aea6:hover,.nextMonth_c754aea6:hover,.prevYear_c754aea6:hover,.nextYear_c754aea6:hover,.prevDecade_c754aea6:hover,.nextDecade_c754aea6:hover{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": ";cursor:pointer;outline:1px solid transparent}.prevMonthIsDisabled_c754aea6,.nextMonthIsDisabled_c754aea6,.prevYearIsDisabled_c754aea6,.nextYearIsDisabled_c754aea6,.prevDecadeIsDisabled_c754aea6,.nextDecadeIsDisabled_c754aea6{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";pointer-events:none}.headerToggleView_c754aea6{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:4px 8px}.headerToggleView_c754aea6:hover{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";cursor:pointer}.currentYear_c754aea6,.currentDecade_c754aea6{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:0 5px;font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:28px;line-height:28px;font-weight:600}html[dir='ltr'] .currentYear_c754aea6,html[dir='ltr'] .currentDecade_c754aea6{margin-left:5px}html[dir='rtl'] .currentYear_c754aea6,html[dir='rtl'] .currentDecade_c754aea6{margin-right:5px}.optionGrid_c754aea6{position:relative;height:210px;width:196px;margin:4px 0 0 0}html[dir='rtl'] .optionGrid_c754aea6{margin:4px 0 0 0}.monthOption_c754aea6,.yearOption_c754aea6{width:60px;height:60px;line-height:60px;cursor:pointer;margin:0 10px 10px 0;font-size:13px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";text-align:center;border:none;padding:0;background-color:transparent;border-radius:2px}html[dir='ltr'] .monthOption_c754aea6,html[dir='ltr'] .yearOption_c754aea6{float:left}html[dir='rtl'] .monthOption_c754aea6,html[dir='rtl'] .yearOption_c754aea6{float:right}html[dir='rtl'] .monthOption_c754aea6,html[dir='rtl'] .yearOption_c754aea6{margin:0 0 10px 10px}.monthOption_c754aea6:hover,.yearOption_c754aea6:hover{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": ";background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";outline:1px solid transparent}.monthOption_c754aea6.isHighlighted_c754aea6,.yearOption_c754aea6.isHighlighted_c754aea6{background-color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.dayIsDisabled_c754aea6,.monthOptionIsDisabled_c754aea6,.yearOptionIsDisabled_c754aea6{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";pointer-events:none}.goToday_c754aea6{bottom:0;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";cursor:pointer;font-size:12px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:30px;line-height:30px;padding:0 10px;background-color:transparent;border:none;position:absolute !important;-webkit-box-sizing:content-box;box-sizing:content-box}[dir='ltr'] .goToday_c754aea6{right:13px}[dir='rtl'] .goToday_c754aea6{left:13px}.goToday_c754aea6:hover{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";outline:1px solid transparent}.goToday_c754aea6:active{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.goTodayInlineMonth_c754aea6{top:212px}.wrap_c754aea6.goTodaySpacing_c754aea6{padding-bottom:28px}.root_c754aea6.isPickingYears_c754aea6 .dayPicker_c754aea6,.root_c754aea6.isPickingYears_c754aea6 .monthComponents_c754aea6{display:none}.root_c754aea6.isPickingYears_c754aea6 .monthPicker_c754aea6{display:none}.root_c754aea6.isPickingYears_c754aea6 .yearPicker_c754aea6{display:block}@media (min-device-width: 460px){.wrap_c754aea6{padding:12px}.dayPicker_c754aea6,.monthPicker_c754aea6{min-height:200px}.header_c754aea6{height:28px;line-height:28px;width:100%}.dayWrapper_c754aea6,.weekday_c754aea6{width:28px;height:28px;line-height:28px;font-size:12px}.prevMonth_c754aea6,.nextMonth_c754aea6,.prevYear_c754aea6,.nextYear_c754aea6,.prevDecade_c754aea6,.nextDecade_c754aea6{font-size:12px;width:28px;height:28px;line-height:28px}.holder_c754aea6{display:inline-block;height:auto}.monthAndYear_c754aea6,.year_c754aea6{font-size:14px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.yearComponents_c754aea6{margin-left:1px}.goToday_c754aea6{padding:0 3px}[dir='ltr'] .goToday_c754aea6{right:20px}[dir='rtl'] .goToday_c754aea6{left:20px}.showWeekNumbers_c754aea6 .table_c754aea6 .dayWrapper_c754aea6,.showWeekNumbers_c754aea6 .table_c754aea6 .weekday_c754aea6{width:28px}.showWeekNumbersRTL_c754aea6 .table_c754aea6 .dayWrapper_c754aea6,.showWeekNumbersRTL_c754aea6 .table_c754aea6 .weekday_c754aea6{width:28px}.monthPickerVisible_c754aea6 .wrap_c754aea6{padding:12px}.monthPickerVisible_c754aea6 .dayPicker_c754aea6{margin:-10px 0;padding:10px 0}.monthPickerVisible_c754aea6 .dayPicker_c754aea6{-webkit-box-sizing:border-box;box-sizing:border-box;width:212px;min-height:200px}.monthPickerVisible_c754aea6 .monthPicker_c754aea6{display:block}.monthPickerVisible_c754aea6 .optionGrid_c754aea6{height:150px;width:196px}.monthPickerVisible_c754aea6 .toggleMonthView_c754aea6{display:none}.monthPickerVisible_c754aea6 .currentYear_c754aea6,.monthPickerVisible_c754aea6 .currentDecade_c754aea6{font-size:14px;margin:0;height:28px;line-height:28px;display:inline-block}.monthPickerVisible_c754aea6 .monthOption_c754aea6,.monthPickerVisible_c754aea6 .yearOption_c754aea6{width:40px;height:40px;line-height:40px;font-size:12px;margin:0 12px 16px 0}html[dir='rtl'] .monthPickerVisible_c754aea6 .monthOption_c754aea6,html[dir='rtl'] .monthPickerVisible_c754aea6 .yearOption_c754aea6{margin:0 0 16px 12px}.monthPickerVisible_c754aea6 .monthOption_c754aea6:hover,.monthPickerVisible_c754aea6 .yearOption_c754aea6:hover{outline:1px solid transparent}.monthPickerVisible_c754aea6 .monthOption_c754aea6:nth-child(4n+4),.monthPickerVisible_c754aea6 .yearOption_c754aea6:nth-child(4n+4){margin:0 0px 16px 0}html[dir='rtl'] .monthPickerVisible_c754aea6 .monthOption_c754aea6:nth-child(4n+4),html[dir='rtl'] .monthPickerVisible_c754aea6 .yearOption_c754aea6:nth-child(4n+4){margin:0 0 16px 0px}.monthPickerVisible_c754aea6 .goToday_c754aea6{font-size:12px;height:28px;line-height:28px;padding:0 10px}[dir='ltr'] .monthPickerVisible_c754aea6 .goToday_c754aea6{right:8px}[dir='rtl'] .monthPickerVisible_c754aea6 .goToday_c754aea6{left:8px}html[dir='ltr'] .monthPickerVisible_c754aea6 .goToday_c754aea6{text-align:right}html[dir='rtl'] .monthPickerVisible_c754aea6 .goToday_c754aea6{text-align:left}.monthPickerVisible_c754aea6 .root_c754aea6.isPickingYears_c754aea6 .dayPicker_c754aea6,.monthPickerVisible_c754aea6 .root_c754aea6.isPickingYears_c754aea6 .monthComponents_c754aea6{display:block}.monthPickerVisible_c754aea6 .root_c754aea6.isPickingYears_c754aea6 .monthPicker_c754aea6{display:none}.monthPickerVisible_c754aea6 .root_c754aea6.isPickingYears_c754aea6 .yearPicker_c754aea6{display:block}.calendarsInline_c754aea6 .wrap_c754aea6{padding:12px}.calendarsInline_c754aea6 .holder_c754aea6{height:auto}html[dir='ltr'] .calendarsInline_c754aea6 .table_c754aea6{margin-right:12px}html[dir='rtl'] .calendarsInline_c754aea6 .table_c754aea6{margin-left:12px}.calendarsInline_c754aea6 .dayPicker_c754aea6{width:auto}html[dir='ltr'] .calendarsInline_c754aea6 .monthPicker_c754aea6{margin-left:12px}html[dir='rtl'] .calendarsInline_c754aea6 .monthPicker_c754aea6{margin-right:12px}.calendarsInline_c754aea6 .goToday_c754aea6{padding:0 10px}[dir='ltr'] .calendarsInline_c754aea6 .goToday_c754aea6{right:14px}[dir='rtl'] .calendarsInline_c754aea6 .goToday_c754aea6{left:14px}html[dir='ltr'] .calendarsInline_c754aea6 .monthComponents_c754aea6{margin-right:12px}html[dir='rtl'] .calendarsInline_c754aea6 .monthComponents_c754aea6{margin-left:12px}.monthPickerOnly_c754aea6 .wrap_c754aea6{padding:12px}.monthPickerAsOverlay_c754aea6 .wrap_c754aea6{padding-bottom:28px;margin-bottom:6px}.monthPickerAsOverlay_c754aea6 .holder_c754aea6{height:240px;min-height:240px}.monthPickerAsOverlay_c754aea6 .holderWithButton_c754aea6{padding-top:6px;height:auto}}@media (max-device-width: 459px){.calendarsInline_c754aea6 .monthPicker_c754aea6,.calendarsInline_c754aea6 .yearPicker_c754aea6{display:none}.yearComponents_c754aea6{margin-top:2px}}.goToday_c754aea6{width:auto}.nextMonth_c754aea6,.prevMonth_c754aea6,.nextYear_c754aea6,.prevYear_c754aea6{display:inline-block}.nextMonth_c754aea6:hover,.prevMonth_c754aea6:hover,.nextYear_c754aea6:hover,.prevYear_c754aea6:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.nextMonth_c754aea6:active,.prevMonth_c754aea6:active,.nextYear_c754aea6:active,.prevYear_c754aea6:active{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.monthIsHighlighted_c754aea6{font-weight:600;background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.monthIsHighlighted_c754aea6.monthOption_c754aea6:hover{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.monthIsCurrentMonth_c754aea6{font-weight:600;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.monthIsCurrentMonth_c754aea6.monthOption_c754aea6:hover{font-weight:600;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": "}.monthOption_c754aea6:active{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": ";color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.topLeftCornerDate_c754aea6{border-top-left-radius:2px}.topRightCornerDate_c754aea6{border-top-right-radius:2px}.bottomLeftCornerDate_c754aea6{border-bottom-left-radius:2px}.bottomRightCornerDate_c754aea6{border-bottom-right-radius:2px}\n" }]);
var root = "root_c754aea6";
var picker = "picker_c754aea6";
var holder = "holder_c754aea6";
var pickerIsOpened = "pickerIsOpened_c754aea6";
var frame = "frame_c754aea6";
var wrap = "wrap_c754aea6";
var goTodaySpacing = "goTodaySpacing_c754aea6";
var dayPicker = "dayPicker_c754aea6";
var header = "header_c754aea6";
var divider = "divider_c754aea6";
var monthAndYear = "monthAndYear_c754aea6";
var year = "year_c754aea6";
var currentYear = "currentYear_c754aea6";
var table = "table_c754aea6";
var dayWrapper = "dayWrapper_c754aea6";
var weekday = "weekday_c754aea6";
var day = "day_c754aea6";
var dayIsToday = "dayIsToday_c754aea6";
var dayIsDisabled = "dayIsDisabled_c754aea6";
var dayIsUnfocused = "dayIsUnfocused_c754aea6";
var dayIsFocused = "dayIsFocused_c754aea6";
var dayIsHighlighted = "dayIsHighlighted_c754aea6";
var pickerIsFocused = "pickerIsFocused_c754aea6";
var dayDisabled = "dayDisabled_c754aea6";
var dayBackground = "dayBackground_c754aea6";
var dayHover = "dayHover_c754aea6";
var dayPress = "dayPress_c754aea6";
var weekBackground = "weekBackground_c754aea6";
var showWeekNumbers = "showWeekNumbers_c754aea6";
var weekNumbers = "weekNumbers_c754aea6";
var weekIsHighlighted = "weekIsHighlighted_c754aea6";
var showWeekNumbersRTL = "showWeekNumbersRTL_c754aea6";
var monthComponents = "monthComponents_c754aea6";
var yearComponents = "yearComponents_c754aea6";
var decadeComponents = "decadeComponents_c754aea6";
var prevMonth = "prevMonth_c754aea6";
var nextMonth = "nextMonth_c754aea6";
var prevYear = "prevYear_c754aea6";
var nextYear = "nextYear_c754aea6";
var prevDecade = "prevDecade_c754aea6";
var nextDecade = "nextDecade_c754aea6";
var prevMonthIsDisabled = "prevMonthIsDisabled_c754aea6";
var nextMonthIsDisabled = "nextMonthIsDisabled_c754aea6";
var prevYearIsDisabled = "prevYearIsDisabled_c754aea6";
var nextYearIsDisabled = "nextYearIsDisabled_c754aea6";
var prevDecadeIsDisabled = "prevDecadeIsDisabled_c754aea6";
var nextDecadeIsDisabled = "nextDecadeIsDisabled_c754aea6";
var headerToggleView = "headerToggleView_c754aea6";
var currentDecade = "currentDecade_c754aea6";
var optionGrid = "optionGrid_c754aea6";
var monthOption = "monthOption_c754aea6";
var yearOption = "yearOption_c754aea6";
var isHighlighted = "isHighlighted_c754aea6";
var monthOptionIsDisabled = "monthOptionIsDisabled_c754aea6";
var yearOptionIsDisabled = "yearOptionIsDisabled_c754aea6";
var goToday = "goToday_c754aea6";
var goTodayInlineMonth = "goTodayInlineMonth_c754aea6";
var isPickingYears = "isPickingYears_c754aea6";
var monthPicker = "monthPicker_c754aea6";
var yearPicker = "yearPicker_c754aea6";
var monthPickerVisible = "monthPickerVisible_c754aea6";
var toggleMonthView = "toggleMonthView_c754aea6";
var calendarsInline = "calendarsInline_c754aea6";
var monthPickerOnly = "monthPickerOnly_c754aea6";
var monthPickerAsOverlay = "monthPickerAsOverlay_c754aea6";
var holderWithButton = "holderWithButton_c754aea6";
var monthIsHighlighted = "monthIsHighlighted_c754aea6";
var monthIsCurrentMonth = "monthIsCurrentMonth_c754aea6";
var topLeftCornerDate = "topLeftCornerDate_c754aea6";
var topRightCornerDate = "topRightCornerDate_c754aea6";
var bottomLeftCornerDate = "bottomLeftCornerDate_c754aea6";
var bottomRightCornerDate = "bottomRightCornerDate_c754aea6";

var stylesImport = /*#__PURE__*/Object.freeze({
	root: root,
	picker: picker,
	holder: holder,
	pickerIsOpened: pickerIsOpened,
	frame: frame,
	wrap: wrap,
	goTodaySpacing: goTodaySpacing,
	dayPicker: dayPicker,
	header: header,
	divider: divider,
	monthAndYear: monthAndYear,
	year: year,
	currentYear: currentYear,
	table: table,
	dayWrapper: dayWrapper,
	weekday: weekday,
	day: day,
	dayIsToday: dayIsToday,
	dayIsDisabled: dayIsDisabled,
	dayIsUnfocused: dayIsUnfocused,
	dayIsFocused: dayIsFocused,
	dayIsHighlighted: dayIsHighlighted,
	pickerIsFocused: pickerIsFocused,
	dayDisabled: dayDisabled,
	dayBackground: dayBackground,
	dayHover: dayHover,
	dayPress: dayPress,
	weekBackground: weekBackground,
	showWeekNumbers: showWeekNumbers,
	weekNumbers: weekNumbers,
	weekIsHighlighted: weekIsHighlighted,
	showWeekNumbersRTL: showWeekNumbersRTL,
	monthComponents: monthComponents,
	yearComponents: yearComponents,
	decadeComponents: decadeComponents,
	prevMonth: prevMonth,
	nextMonth: nextMonth,
	prevYear: prevYear,
	nextYear: nextYear,
	prevDecade: prevDecade,
	nextDecade: nextDecade,
	prevMonthIsDisabled: prevMonthIsDisabled,
	nextMonthIsDisabled: nextMonthIsDisabled,
	prevYearIsDisabled: prevYearIsDisabled,
	nextYearIsDisabled: nextYearIsDisabled,
	prevDecadeIsDisabled: prevDecadeIsDisabled,
	nextDecadeIsDisabled: nextDecadeIsDisabled,
	headerToggleView: headerToggleView,
	currentDecade: currentDecade,
	optionGrid: optionGrid,
	monthOption: monthOption,
	yearOption: yearOption,
	isHighlighted: isHighlighted,
	monthOptionIsDisabled: monthOptionIsDisabled,
	yearOptionIsDisabled: yearOptionIsDisabled,
	goToday: goToday,
	goTodayInlineMonth: goTodayInlineMonth,
	isPickingYears: isPickingYears,
	monthPicker: monthPicker,
	yearPicker: yearPicker,
	monthPickerVisible: monthPickerVisible,
	toggleMonthView: toggleMonthView,
	calendarsInline: calendarsInline,
	monthPickerOnly: monthPickerOnly,
	monthPickerAsOverlay: monthPickerAsOverlay,
	holderWithButton: holderWithButton,
	monthIsHighlighted: monthIsHighlighted,
	monthIsCurrentMonth: monthIsCurrentMonth,
	topLeftCornerDate: topLeftCornerDate,
	topRightCornerDate: topRightCornerDate,
	bottomLeftCornerDate: bottomLeftCornerDate,
	bottomRightCornerDate: bottomRightCornerDate
});

var styles = stylesImport;
var DAYS_IN_WEEK = 7;
var CalendarDay = /** @class */ (function (_super) {
    __extends(CalendarDay, _super);
    function CalendarDay(props) {
        var _this = _super.call(this, props) || this;
        _this.days = {};
        _this._onKeyDown = function (callback, ev) {
            if (ev.which === 13 /* enter */ || ev.which === 32 /* space */) {
                callback();
            }
        };
        _this._onDayKeyDown = function (originalDate, weekIndex, dayIndex) {
            return function (ev) {
                _this._navigateMonthEdge(ev, originalDate, weekIndex, dayIndex);
            };
        };
        _this._onDayMouseDown = function (originalDate, weekIndex, dayIndex, dateRangeType) {
            return function (ev) {
                // set the press styling
                if (dateRangeType === DateRangeType.Month) {
                    _this._applyFunctionToDayRefs(function (ref, day$$1) {
                        if (ref && day$$1.originalDate.getMonth() === originalDate.getMonth()) {
                            ref.classList.add(styles.dayPress);
                        }
                    });
                }
                else {
                    // week or work week view
                    _this._applyFunctionToDayRefs(function (ref, day$$1, dayWeekIndex) {
                        if (ref && dayWeekIndex === weekIndex) {
                            ref.classList.add(styles.dayPress);
                            ref.classList.add(styles.dayIsHighlighted);
                        }
                        else if (ref) {
                            ref.classList.remove(styles.dayIsHighlighted);
                        }
                    });
                }
            };
        };
        _this._onDayMouseUp = function (originalDate, weekIndex, dayIndex, dateRangeType) {
            return function (ev) {
                // remove press styling
                if (dateRangeType === DateRangeType.Month) {
                    _this._applyFunctionToDayRefs(function (ref, day$$1) {
                        if (ref && day$$1.originalDate.getMonth() === originalDate.getMonth()) {
                            ref.classList.remove(styles.dayPress);
                        }
                    });
                }
                else {
                    // week or work week view
                    _this._applyFunctionToDayRefs(function (ref, day$$1, dayWeekIndex) {
                        if (ref && dayWeekIndex === weekIndex) {
                            ref.classList.remove(styles.dayPress);
                        }
                    });
                }
            };
        };
        _this._onDayMouseOver = function (originalDate, weekIndex, dayIndex, dateRangeType) {
            return function (ev) {
                // set the hover styling on every day in the same month
                if (dateRangeType === DateRangeType.Month) {
                    _this._applyFunctionToDayRefs(function (ref, day$$1) {
                        if (ref && day$$1.originalDate.getMonth() === originalDate.getMonth()) {
                            ref.classList.add(styles.dayHover);
                        }
                    });
                }
                else {
                    // week or work week view
                    _this._applyFunctionToDayRefs(function (ref, day$$1, dayWeekIndex) {
                        if (ref && dayWeekIndex === weekIndex) {
                            ref.classList.add(styles.dayHover);
                        }
                    });
                }
            };
        };
        _this._onDayMouseLeave = function (originalDate, weekIndex, dayIndex, dateRangeType) {
            return function (ev) {
                // remove the hover and pressed styling
                if (dateRangeType === DateRangeType.Month) {
                    _this._applyFunctionToDayRefs(function (ref, day$$1) {
                        if (ref && day$$1.originalDate.getMonth() === originalDate.getMonth()) {
                            ref.classList.remove(styles.dayHover);
                        }
                    });
                }
                else {
                    // week or work week view
                    _this._applyFunctionToDayRefs(function (ref, day$$1, dayWeekIndex) {
                        if (ref && dayWeekIndex === weekIndex) {
                            ref.classList.remove(styles.dayHover);
                        }
                    });
                }
            };
        };
        _this._onTableMouseLeave = function (ev) {
            if (ev.target.contains &&
                ev.relatedTarget &&
                ev.relatedTarget.contains &&
                ev.target.contains(ev.relatedTarget)) {
                return;
            }
            _this._applyFunctionToDayRefs(function (ref, day$$1) {
                if (ref) {
                    ref.classList.remove(styles.dayHover);
                    ref.classList.remove(styles.dayPress);
                }
            });
        };
        _this._onTableMouseUp = function (ev) {
            if (ev.target.contains &&
                ev.relatedTarget &&
                ev.relatedTarget.contains &&
                ev.target.contains(ev.relatedTarget)) {
                return;
            }
            _this._applyFunctionToDayRefs(function (ref, day$$1) {
                if (ref) {
                    ref.classList.remove(styles.dayPress);
                }
            });
        };
        _this._onSelectDate = function (selectedDate) {
            var _a = _this.props, onSelectDate = _a.onSelectDate, dateRangeType = _a.dateRangeType, firstDayOfWeek = _a.firstDayOfWeek, navigatedDate = _a.navigatedDate, autoNavigateOnSelection = _a.autoNavigateOnSelection, minDate = _a.minDate, maxDate = _a.maxDate, workWeekDays = _a.workWeekDays;
            var dateRange = getDateRangeArray(selectedDate, dateRangeType, firstDayOfWeek, workWeekDays);
            if (dateRangeType !== DateRangeType.Day) {
                dateRange = _this._getBoundedDateRange(dateRange, minDate, maxDate);
            }
            if (onSelectDate) {
                onSelectDate(selectedDate, dateRange);
            }
            // Navigate to next or previous month if needed
            if (autoNavigateOnSelection && selectedDate.getMonth() !== navigatedDate.getMonth()) {
                var compareResult = compareDatePart(selectedDate, navigatedDate);
                if (compareResult < 0) {
                    _this._onSelectPrevMonth();
                }
                else if (compareResult > 0) {
                    _this._onSelectNextMonth();
                }
            }
        };
        _this._onSelectNextMonth = function () {
            _this.props.onNavigateDate(addMonths(_this.props.navigatedDate, 1), false);
        };
        _this._onSelectPrevMonth = function () {
            _this.props.onNavigateDate(addMonths(_this.props.navigatedDate, -1), false);
        };
        _this._onHeaderSelect = function () {
            var onHeaderSelect = _this.props.onHeaderSelect;
            if (onHeaderSelect) {
                onHeaderSelect(true);
            }
        };
        _this._onHeaderKeyDown = function (ev) {
            var onHeaderSelect = _this.props.onHeaderSelect;
            if (onHeaderSelect && (ev.which === 13 /* enter */ || ev.which === 32 /* space */)) {
                onHeaderSelect(true);
            }
        };
        _this._onPrevMonthKeyDown = function (ev) {
            if (ev.which === 13 /* enter */) {
                _this._onKeyDown(_this._onSelectPrevMonth, ev);
            }
        };
        _this._onNextMonthKeyDown = function (ev) {
            if (ev.which === 13 /* enter */) {
                _this._onKeyDown(_this._onSelectNextMonth, ev);
            }
        };
        _this.state = {
            activeDescendantId: getId('DatePickerDay-active'),
            weeks: _this._getWeeks(props)
        };
        _this._onSelectNextMonth = _this._onSelectNextMonth.bind(_this);
        _this._onSelectPrevMonth = _this._onSelectPrevMonth.bind(_this);
        return _this;
    }
    CalendarDay.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            weeks: this._getWeeks(nextProps)
        });
    };
    CalendarDay.prototype.render = function () {
        var _this = this;
        var _a = this.state, activeDescendantId = _a.activeDescendantId, weeks = _a.weeks;
        var _b = this.props, firstDayOfWeek = _b.firstDayOfWeek, strings = _b.strings, navigatedDate = _b.navigatedDate, selectedDate = _b.selectedDate, dateRangeType = _b.dateRangeType, navigationIcons = _b.navigationIcons, showWeekNumbers$$1 = _b.showWeekNumbers, firstWeekOfYear = _b.firstWeekOfYear, dateTimeFormatter = _b.dateTimeFormatter, minDate = _b.minDate, maxDate = _b.maxDate;
        var dayPickerId = getId('DatePickerDay-dayPicker');
        var monthAndYearId = getId('DatePickerDay-monthAndYear');
        var leftNavigationIcon = navigationIcons.leftNavigation;
        var rightNavigationIcon = navigationIcons.rightNavigation;
        var weekNumbers$$1 = showWeekNumbers$$1
            ? getWeekNumbersInMonth(weeks.length, firstDayOfWeek, firstWeekOfYear, navigatedDate)
            : null;
        var selectedDateWeekNumber = showWeekNumbers$$1
            ? getWeekNumber(selectedDate, firstDayOfWeek, firstWeekOfYear)
            : undefined;
        // When the month is highlighted get the corner dates so that styles can be added to them
        var weekCorners = this._getWeekCornerStyles(weeks, dateRangeType);
        // determine if previous/next months are in bounds
        var prevMonthInBounds = minDate ? compareDatePart(minDate, getMonthStart(navigatedDate)) < 0 : true;
        var nextMonthInBounds = maxDate ? compareDatePart(getMonthEnd(navigatedDate), maxDate) < 0 : true;
        return (createElement("div", { className: css('ms-DatePicker-dayPicker', styles.dayPicker, showWeekNumbers$$1 &&
                'ms-DatePicker-showWeekNumbers' &&
                (getRTL() ? styles.showWeekNumbersRTL : styles.showWeekNumbers)), id: dayPickerId },
            createElement("div", { className: css('ms-DatePicker-header', styles.header) },
                createElement("div", { "aria-live": "polite", "aria-relevant": "text", "aria-atomic": "true", id: monthAndYearId, className: styles.monthAndYear }, this.props.onHeaderSelect ? (createElement("div", { className: css('ms-DatePicker-monthAndYear js-showMonthPicker', styles.headerToggleView), onClick: this._onHeaderSelect, onKeyDown: this._onHeaderKeyDown, "aria-label": dateTimeFormatter.formatMonthYear(navigatedDate, strings), role: "button", tabIndex: 0 }, dateTimeFormatter.formatMonthYear(navigatedDate, strings))) : (createElement("div", { className: css('ms-DatePicker-monthAndYear', styles.monthAndYear) }, dateTimeFormatter.formatMonthYear(navigatedDate, strings)))),
                createElement("div", { className: css('ms-DatePicker-monthComponents', styles.monthComponents) },
                    createElement("div", { className: css('ms-DatePicker-navContainer', styles.navContainer) },
                        createElement("button", { className: css('ms-DatePicker-prevMonth js-prevMonth', styles.prevMonth, (_c = {},
                                _c['ms-DatePicker-prevMonth--disabled ' + styles.prevMonthIsDisabled] = !prevMonthInBounds,
                                _c)), disabled: !prevMonthInBounds, onClick: prevMonthInBounds ? this._onSelectPrevMonth : undefined, onKeyDown: prevMonthInBounds ? this._onPrevMonthKeyDown : undefined, "aria-controls": dayPickerId, "aria-label": strings.prevMonthAriaLabel
                                ? strings.prevMonthAriaLabel + ' ' + strings.months[addMonths(navigatedDate, -1).getMonth()]
                                : undefined, role: "button" },
                            createElement(Icon, { iconName: leftNavigationIcon })),
                        createElement("button", { className: css('ms-DatePicker-nextMonth js-nextMonth', styles.nextMonth, (_d = {},
                                _d['ms-DatePicker-nextMonth--disabled ' + styles.nextMonthIsDisabled] = !nextMonthInBounds,
                                _d)), disabled: !nextMonthInBounds, onClick: nextMonthInBounds ? this._onSelectNextMonth : undefined, onKeyDown: nextMonthInBounds ? this._onNextMonthKeyDown : undefined, "aria-controls": dayPickerId, "aria-label": strings.nextMonthAriaLabel
                                ? strings.nextMonthAriaLabel + ' ' + strings.months[addMonths(navigatedDate, 1).getMonth()]
                                : undefined, role: "button" },
                            createElement(Icon, { iconName: rightNavigationIcon }))))),
            createElement(FocusZone, null,
                createElement("table", { className: css('ms-DatePicker-table', styles.table), "aria-readonly": "true", "aria-multiselectable": "false", "aria-labelledby": monthAndYearId, "aria-activedescendant": activeDescendantId },
                    createElement("thead", null,
                        createElement("tr", null,
                            showWeekNumbers$$1 && createElement("th", { className: css('ms-DatePicker-weekday', styles.weekday) }),
                            strings.shortDays.map(function (val, index) { return (createElement("th", { className: css('ms-DatePicker-weekday', styles.weekday), role: "grid", scope: "col", key: index, title: strings.days[(index + firstDayOfWeek) % DAYS_IN_WEEK], "aria-label": strings.days[(index + firstDayOfWeek) % DAYS_IN_WEEK] }, strings.shortDays[(index + firstDayOfWeek) % DAYS_IN_WEEK])); }))),
                    createElement("tbody", { onMouseLeave: dateRangeType !== DateRangeType.Day ? this._onTableMouseLeave : undefined, onMouseUp: dateRangeType !== DateRangeType.Day ? this._onTableMouseUp : undefined }, weeks.map(function (week, weekIndex) {
                        return (createElement("tr", { key: weekNumbers$$1 ? weekNumbers$$1[weekIndex] : weekIndex, role: "row" },
                            showWeekNumbers$$1 &&
                                weekNumbers$$1 && (createElement("th", { className: css('ms-DatePicker-weekNumbers', 'ms-DatePicker-weekday', styles.weekday, styles.weekNumbers), key: weekIndex, title: weekNumbers$$1 &&
                                    strings.weekNumberFormatString &&
                                    format(strings.weekNumberFormatString, weekNumbers$$1[weekIndex]), "aria-label": weekNumbers$$1 &&
                                    strings.weekNumberFormatString &&
                                    format(strings.weekNumberFormatString, weekNumbers$$1[weekIndex]), scope: "row" },
                                createElement("div", { className: css('ms-DatePicker-day', styles.day, (_a = {},
                                        _a['ms-DatePicker-week--highlighted ' + styles.weekIsHighlighted] = selectedDateWeekNumber === weekNumbers$$1[weekIndex],
                                        _a)) },
                                    createElement("span", null, weekNumbers$$1[weekIndex])))),
                            week.map(function (day$$1, dayIndex) {
                                var isNavigatedDate = compareDates(navigatedDate, day$$1.originalDate);
                                return (createElement("td", { key: day$$1.key, className: css(styles.dayWrapper, 'ms-DatePicker-day', _this._getHighlightedCornerStyle(weekCorners, dayIndex, weekIndex), (_a = {},
                                        _a['ms-DatePicker-weekBackground ' + styles.weekBackground] = day$$1.isSelected &&
                                            (dateRangeType === DateRangeType.Week || dateRangeType === DateRangeType.WorkWeek),
                                        _a['ms-DatePicker-dayBackground ' + styles.dayBackground] = dateRangeType === DateRangeType.Day,
                                        _a['ms-DatePicker-day--highlighted ' + styles.dayIsHighlighted] = day$$1.isSelected && dateRangeType === DateRangeType.Day,
                                        _a['ms-DatePicker-day--disabled ' + styles.dayIsDisabled] = !day$$1.isInBounds,
                                        _a['ms-DatePicker-day--infocus ' + styles.dayIsFocused] = day$$1.isInBounds && day$$1.isInMonth,
                                        _a['ms-DatePicker-day--outfocus ' + styles.dayIsUnfocused] = day$$1.isInBounds && !day$$1.isInMonth,
                                        _a)), ref: function (element) { return _this._setDayCellRef(element, day$$1, isNavigatedDate); }, onClick: day$$1.isInBounds ? day$$1.onSelected : undefined, onMouseOver: dateRangeType !== DateRangeType.Day
                                        ? _this._onDayMouseOver(day$$1.originalDate, weekIndex, dayIndex, dateRangeType)
                                        : undefined, onMouseLeave: dateRangeType !== DateRangeType.Day
                                        ? _this._onDayMouseLeave(day$$1.originalDate, weekIndex, dayIndex, dateRangeType)
                                        : undefined, onMouseDown: dateRangeType !== DateRangeType.Day
                                        ? _this._onDayMouseDown(day$$1.originalDate, weekIndex, dayIndex, dateRangeType)
                                        : undefined, onMouseUp: dateRangeType !== DateRangeType.Day
                                        ? _this._onDayMouseUp(day$$1.originalDate, weekIndex, dayIndex, dateRangeType)
                                        : undefined },
                                    createElement("div", { key: day$$1.key + 'div', className: css(styles.day, (_b = {},
                                            _b['ms-DatePicker-day--today ' + styles.dayIsToday] = day$$1.isToday,
                                            _b)), role: 'gridcell', onKeyDown: _this._onDayKeyDown(day$$1.originalDate, weekIndex, dayIndex), "aria-label": dateTimeFormatter.formatMonthDayYear(day$$1.originalDate, strings), id: isNavigatedDate ? activeDescendantId : undefined, "aria-selected": day$$1.isInBounds ? day$$1.isSelected : undefined, "data-is-focusable": day$$1.isInBounds ? true : undefined, ref: function (element) { return _this._setDayRef(element, day$$1, isNavigatedDate); } },
                                        createElement("span", { "aria-hidden": "true" }, dateTimeFormatter.formatDay(day$$1.originalDate)))));
                                var _a, _b;
                            })));
                        var _a;
                    }))))));
        var _c, _d;
    };
    CalendarDay.prototype.focus = function () {
        if (this.navigatedDay) {
            this.navigatedDay.tabIndex = 0;
            this.navigatedDay.focus();
        }
    };
    CalendarDay.prototype._setDayRef = function (element, day$$1, isNavigatedDate) {
        if (isNavigatedDate) {
            this.navigatedDay = element;
        }
    };
    CalendarDay.prototype._setDayCellRef = function (element, day$$1, isNavigatedDate) {
        this.days[day$$1.key] = element;
    };
    CalendarDay.prototype._getWeekCornerStyles = function (weeks, dateRangeType) {
        var weekCornersStyled = {};
        switch (dateRangeType) {
            case DateRangeType.Month:
                /* need to handle setting all of the corners on arbitrarily shaped blobs
                      __
                   __|A |
                  |B |C |__
                  |D |E |F |
        
                  in this case, A needs top left rounded, top right rounded
                  B needs top left rounded
                  C doesn't need any rounding
                  D needs bottom left rounded
                  E doesn't need any rounding
                  F needs top right rounding
                */
                // if there's an item above, lose both top corners. Item below, lose both bottom corners, etc.
                weeks.forEach(function (week, weekIndex) {
                    week.forEach(function (day$$1, dayIndex) {
                        var above = weeks[weekIndex - 1] &&
                            weeks[weekIndex - 1][dayIndex] &&
                            weeks[weekIndex - 1][dayIndex].originalDate.getMonth() ===
                                weeks[weekIndex][dayIndex].originalDate.getMonth();
                        var below = weeks[weekIndex + 1] &&
                            weeks[weekIndex + 1][dayIndex] &&
                            weeks[weekIndex + 1][dayIndex].originalDate.getMonth() ===
                                weeks[weekIndex][dayIndex].originalDate.getMonth();
                        var left = weeks[weekIndex][dayIndex - 1] &&
                            weeks[weekIndex][dayIndex - 1].originalDate.getMonth() ===
                                weeks[weekIndex][dayIndex].originalDate.getMonth();
                        var right = weeks[weekIndex][dayIndex + 1] &&
                            weeks[weekIndex][dayIndex + 1].originalDate.getMonth() ===
                                weeks[weekIndex][dayIndex].originalDate.getMonth();
                        var roundedTopLeft = !above && !left;
                        var roundedTopRight = !above && !right;
                        var roundedBottomLeft = !below && !left;
                        var roundedBottomRight = !below && !right;
                        var style = '';
                        if (roundedTopLeft) {
                            style = getRTL()
                                ? style.concat(styles.topRightCornerDate + ' ')
                                : style.concat(styles.topLeftCornerDate + ' ');
                        }
                        if (roundedTopRight) {
                            style = getRTL()
                                ? style.concat(styles.topLeftCornerDate + ' ')
                                : style.concat(styles.topRightCornerDate + ' ');
                        }
                        if (roundedBottomLeft) {
                            style = getRTL()
                                ? style.concat(styles.bottomRightCornerDate + ' ')
                                : style.concat(styles.bottomLeftCornerDate + ' ');
                        }
                        if (roundedBottomRight) {
                            style = getRTL()
                                ? style.concat(styles.bottomLeftCornerDate + ' ')
                                : style.concat(styles.bottomRightCornerDate + ' ');
                        }
                        weekCornersStyled[weekIndex + '_' + dayIndex] = style;
                    });
                });
                break;
            case DateRangeType.Week:
            case DateRangeType.WorkWeek:
                weeks.forEach(function (week, weekIndex) {
                    var leftStyle = styles.topLeftCornerDate + ' ' + styles.bottomLeftCornerDate;
                    var rightStyle = styles.topRightCornerDate + ' ' + styles.bottomRightCornerDate;
                    weekCornersStyled[weekIndex + '_' + 0] = getRTL() ? rightStyle : leftStyle;
                    weekCornersStyled[weekIndex + '_' + (DAYS_IN_WEEK - 1)] = getRTL() ? leftStyle : rightStyle;
                });
                break;
        }
        return weekCornersStyled;
    };
    CalendarDay.prototype._getHighlightedCornerStyle = function (weekCorners, dayIndex, weekIndex) {
        var cornerStyle = weekCorners[weekIndex + '_' + dayIndex] ? weekCorners[weekIndex + '_' + dayIndex] : '';
        return cornerStyle;
    };
    CalendarDay.prototype._navigateMonthEdge = function (ev, date, weekIndex, dayIndex) {
        var _a = this.props, minDate = _a.minDate, maxDate = _a.maxDate;
        var targetDate = undefined;
        if (weekIndex === 0 && ev.which === 38 /* up */) {
            targetDate = addWeeks(date, -1);
        }
        else if (weekIndex === this.state.weeks.length - 1 && ev.which === 40 /* down */) {
            targetDate = addWeeks(date, 1);
        }
        else if (dayIndex === 0 && ev.which === getRTLSafeKeyCode(37 /* left */)) {
            targetDate = addDays(date, -1);
        }
        else if (dayIndex === DAYS_IN_WEEK - 1 && ev.which === getRTLSafeKeyCode(39 /* right */)) {
            targetDate = addDays(date, 1);
        }
        // Don't navigate to out-of-bounds date
        if (targetDate &&
            (minDate ? compareDatePart(minDate, targetDate) < 1 : true) &&
            (maxDate ? compareDatePart(targetDate, maxDate) < 1 : true)) {
            this.props.onNavigateDate(targetDate, true);
            ev.preventDefault();
        }
    };
    CalendarDay.prototype._applyFunctionToDayRefs = function (func) {
        var _this = this;
        if (this.state.weeks) {
            this.state.weeks.map(function (week, weekIndex) {
                week.map(function (day$$1) {
                    var ref = _this.days[day$$1.key];
                    func(ref, day$$1, weekIndex);
                });
            });
        }
    };
    CalendarDay.prototype._getWeeks = function (propsToUse) {
        var this$1 = this;

        var navigatedDate = propsToUse.navigatedDate, selectedDate = propsToUse.selectedDate, dateRangeType = propsToUse.dateRangeType, firstDayOfWeek = propsToUse.firstDayOfWeek, today = propsToUse.today, minDate = propsToUse.minDate, maxDate = propsToUse.maxDate, showSixWeeksByDefault = propsToUse.showSixWeeksByDefault, workWeekDays = propsToUse.workWeekDays;
        var date = new Date(navigatedDate.getFullYear(), navigatedDate.getMonth(), 1);
        var todaysDate = today || new Date();
        var weeks = [];
        // Cycle the date backwards to get to the first day of the week.
        while (date.getDay() !== firstDayOfWeek) {
            date.setDate(date.getDate() - 1);
        }
        // a flag to indicate whether all days of the week are in the month
        var isAllDaysOfWeekOutOfMonth = false;
        // in work week view we want to select the whole week
        var selectedDateRangeType = dateRangeType === DateRangeType.WorkWeek ? DateRangeType.Week : dateRangeType;
        var selectedDates = getDateRangeArray(selectedDate, selectedDateRangeType, firstDayOfWeek, workWeekDays);
        if (dateRangeType !== DateRangeType.Day) {
            selectedDates = this._getBoundedDateRange(selectedDates, minDate, maxDate);
        }
        var shouldGetWeeks = true;
        for (var weekIndex = 0; shouldGetWeeks; weekIndex++) {
            var week = [];
            isAllDaysOfWeekOutOfMonth = true;
            for (var dayIndex = 0; dayIndex < DAYS_IN_WEEK; dayIndex++) {
                var originalDate = new Date(date.toString());
                var dayInfo = {
                    key: date.toString(),
                    date: date.getDate().toString(),
                    originalDate: originalDate,
                    isInMonth: date.getMonth() === navigatedDate.getMonth(),
                    isToday: compareDates(todaysDate, date),
                    isSelected: isInDateRangeArray(date, selectedDates),
                    onSelected: this$1._onSelectDate.bind(this$1, originalDate),
                    isInBounds: (minDate ? compareDatePart(minDate, date) < 1 : true) &&
                        (maxDate ? compareDatePart(date, maxDate) < 1 : true)
                };
                week.push(dayInfo);
                if (dayInfo.isInMonth) {
                    isAllDaysOfWeekOutOfMonth = false;
                }
                date.setDate(date.getDate() + 1);
            }
            // We append the condition of the loop depending upon the showSixWeeksByDefault prop.
            shouldGetWeeks = showSixWeeksByDefault
                ? !isAllDaysOfWeekOutOfMonth || weekIndex <= 5
                : !isAllDaysOfWeekOutOfMonth;
            if (shouldGetWeeks) {
                weeks.push(week);
            }
        }
        return weeks;
    };
    CalendarDay.prototype._getBoundedDateRange = function (dateRange, minDate, maxDate) {
        var boundedDateRange = dateRange.slice();
        if (minDate) {
            boundedDateRange = boundedDateRange.filter(function (date) { return compareDatePart(date, minDate) >= 0; });
        }
        if (maxDate) {
            boundedDateRange = boundedDateRange.filter(function (date) { return compareDatePart(date, maxDate) <= 0; });
        }
        return boundedDateRange;
    };
    return CalendarDay;
}(BaseComponent));

var styles$1 = stylesImport;
var CalendarMonth = /** @class */ (function (_super) {
    __extends(CalendarMonth, _super);
    function CalendarMonth(props) {
        var _this = _super.call(this, props) || this;
        _this._onKeyDown = function (callback, ev) {
            if (ev.which === 13 /* enter */) {
                callback();
            }
        };
        _this._onSelectNextYear = function () {
            var _a = _this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
            onNavigateDate(addYears(navigatedDate, 1), false);
        };
        _this._onSelectNextYearKeyDown = function (ev) {
            if (ev.which === 13 /* enter */) {
                _this._onKeyDown(_this._onSelectNextYear, ev);
            }
        };
        _this._onSelectPrevYear = function () {
            var _a = _this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
            onNavigateDate(addYears(navigatedDate, -1), false);
        };
        _this._onSelectPrevYearKeyDown = function (ev) {
            if (ev.which === 13 /* enter */) {
                _this._onKeyDown(_this._onSelectPrevYear, ev);
            }
        };
        _this._onSelectMonthKeyDown = function (index) {
            return function (ev) { return _this._onKeyDown(function () { return _this._onSelectMonth(index); }, ev); };
        };
        _this._onSelectMonth = function (newMonth) {
            var _a = _this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate, onHeaderSelect = _a.onHeaderSelect;
            // If header is clickable the calendars are overlayed, switch back to day picker when month is clicked
            if (onHeaderSelect) {
                onHeaderSelect(true);
            }
            onNavigateDate(setMonth(navigatedDate, newMonth), true);
        };
        _this._onHeaderSelect = function () {
            var onHeaderSelect = _this.props.onHeaderSelect;
            if (onHeaderSelect) {
                onHeaderSelect(true);
            }
        };
        _this._onHeaderKeyDown = function (ev) {
            var onHeaderSelect = _this.props.onHeaderSelect;
            if (onHeaderSelect && (ev.which === 13 /* enter */ || ev.which === 32 /* space */)) {
                onHeaderSelect(true);
            }
        };
        _this._selectMonthCallbacks = [];
        props.strings.shortMonths.map(function (month, index) {
            _this._selectMonthCallbacks[index] = _this._onSelectMonth.bind(_this, index);
        });
        _this._isCurrentMonth = _this._isCurrentMonth.bind(_this);
        _this._onSelectNextYear = _this._onSelectNextYear.bind(_this);
        _this._onSelectPrevYear = _this._onSelectPrevYear.bind(_this);
        _this._onSelectMonth = _this._onSelectMonth.bind(_this);
        return _this;
    }
    CalendarMonth.prototype.render = function () {
        var _this = this;
        var _a = this.props, navigatedDate = _a.navigatedDate, selectedDate = _a.selectedDate, strings = _a.strings, today = _a.today, highlightCurrentMonth = _a.highlightCurrentMonth, highlightSelectedMonth = _a.highlightSelectedMonth, navigationIcons = _a.navigationIcons, dateTimeFormatter = _a.dateTimeFormatter, minDate = _a.minDate, maxDate = _a.maxDate;
        var leftNavigationIcon = navigationIcons.leftNavigation;
        var rightNavigationIcon = navigationIcons.rightNavigation;
        // determine if previous/next years are in bounds
        var isPrevYearInBounds = minDate ? compareDatePart(minDate, getYearStart(navigatedDate)) < 0 : true;
        var isNextYearInBounds = maxDate ? compareDatePart(getYearEnd(navigatedDate), maxDate) < 0 : true;
        return (createElement("div", { className: css('ms-DatePicker-monthPicker', styles$1.monthPicker) },
            createElement("div", { className: css('ms-DatePicker-header', styles$1.header) },
                this.props.onHeaderSelect ? (createElement("div", { className: css('ms-DatePicker-currentYear js-showYearPicker', styles$1.currentYear, styles$1.headerToggleView), onClick: this._onHeaderSelect, onKeyDown: this._onHeaderKeyDown, "aria-label": dateTimeFormatter.formatYear(navigatedDate), role: "button", tabIndex: 0 }, dateTimeFormatter.formatYear(navigatedDate))) : (createElement("div", { className: css('ms-DatePicker-currentYear js-showYearPicker', styles$1.currentYear) }, dateTimeFormatter.formatYear(navigatedDate))),
                createElement("div", { className: css('ms-DatePicker-yearComponents', styles$1.yearComponents) },
                    createElement("div", { className: css('ms-DatePicker-navContainer', styles$1.navContainer) },
                        createElement("button", { className: css('ms-DatePicker-prevYear js-prevYear', styles$1.prevYear, (_b = {},
                                _b['ms-DatePicker-prevYear--disabled ' + styles$1.prevYearIsDisabled] = !isPrevYearInBounds,
                                _b)), disabled: !isPrevYearInBounds, onClick: isPrevYearInBounds ? this._onSelectPrevYear : undefined, onKeyDown: isPrevYearInBounds ? this._onSelectPrevYearKeyDown : undefined, "aria-label": strings.prevYearAriaLabel
                                ? strings.prevYearAriaLabel + ' ' + dateTimeFormatter.formatYear(addYears(navigatedDate, -1))
                                : undefined, role: "button" },
                            createElement(Icon, { iconName: getRTL() ? rightNavigationIcon : leftNavigationIcon })),
                        createElement("button", { className: css('ms-DatePicker-nextYear js-nextYear', styles$1.nextYear, (_c = {},
                                _c['ms-DatePicker-nextYear--disabled ' + styles$1.nextYearIsDisabled] = !isNextYearInBounds,
                                _c)), disabled: !isNextYearInBounds, onClick: isNextYearInBounds ? this._onSelectNextYear : undefined, onKeyDown: isNextYearInBounds ? this._onSelectNextYearKeyDown : undefined, "aria-label": strings.nextYearAriaLabel
                                ? strings.nextYearAriaLabel + ' ' + dateTimeFormatter.formatYear(addYears(navigatedDate, 1))
                                : undefined, role: "button" },
                            createElement(Icon, { iconName: getRTL() ? leftNavigationIcon : rightNavigationIcon }))))),
            createElement(FocusZone, null,
                createElement("div", { className: css('ms-DatePicker-optionGrid', styles$1.optionGrid), role: "grid" }, strings.shortMonths.map(function (month, index) {
                    var indexedMonth = setMonth(navigatedDate, index);
                    var isCurrentMonth = _this._isCurrentMonth(index, navigatedDate.getFullYear(), today);
                    var isNavigatedMonth = navigatedDate.getMonth() === index;
                    var isSelectedMonth = selectedDate.getMonth() === index;
                    var isSelectedYear = selectedDate.getFullYear() === navigatedDate.getFullYear();
                    var isInBounds = (minDate ? compareDatePart(minDate, getMonthEnd(indexedMonth)) < 1 : true) &&
                        (maxDate ? compareDatePart(getMonthStart(indexedMonth), maxDate) < 1 : true);
                    return (createElement("button", { role: 'gridcell', className: css('ms-DatePicker-monthOption', styles$1.monthOption, (_a = {},
                            _a['ms-DatePicker-day--today ' + styles$1.monthIsCurrentMonth] = highlightCurrentMonth && isCurrentMonth,
                            _a['ms-DatePicker-day--highlighted ' + styles$1.monthIsHighlighted] = (highlightCurrentMonth || highlightSelectedMonth) && isSelectedMonth && isSelectedYear,
                            _a['ms-DatePicker-monthOption--disabled ' + styles$1.monthOptionIsDisabled] = !isInBounds,
                            _a)), disabled: !isInBounds, key: index, onClick: isInBounds ? _this._selectMonthCallbacks[index] : undefined, onKeyDown: isInBounds ? _this._onSelectMonthKeyDown(index) : undefined, "aria-label": dateTimeFormatter.formatMonthYear(indexedMonth, strings), "aria-selected": isCurrentMonth || isNavigatedMonth, "data-is-focusable": isInBounds ? true : undefined, ref: isNavigatedMonth ? 'navigatedMonth' : undefined }, month));
                    var _a;
                })))));
        var _b, _c;
    };
    CalendarMonth.prototype.focus = function () {
        if (this.refs.navigatedMonth) {
            this.refs.navigatedMonth.tabIndex = 0;
            this.refs.navigatedMonth.focus();
        }
    };
    CalendarMonth.prototype._isCurrentMonth = function (month, year$$1, today) {
        return today.getFullYear() === year$$1 && today.getMonth() === month;
    };
    return CalendarMonth;
}(BaseComponent));

var styles$2 = stylesImport;
var leftArrow = 'Up';
var rightArrow = 'Down';
var iconStrings = {
    leftNavigation: leftArrow,
    rightNavigation: rightArrow
};
var defaultWorkWeekDays = [
    DayOfWeek.Monday,
    DayOfWeek.Tuesday,
    DayOfWeek.Wednesday,
    DayOfWeek.Thursday,
    DayOfWeek.Friday
];
var dateTimeFormatterCallbacks = {
    formatMonthDayYear: function (date, strings) {
        return strings.months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    },
    formatMonthYear: function (date, strings) {
        return strings.months[date.getMonth()] + ' ' + date.getFullYear();
    },
    formatDay: function (date) { return date.getDate().toString(); },
    formatYear: function (date) { return date.getFullYear().toString(); }
};
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this._dayPicker = createRef();
        _this._monthPicker = createRef();
        _this._navigateDayPickerDay = function (date) {
            _this.setState({
                navigatedDayDate: date,
                navigatedMonthDate: date
            });
        };
        _this._navigateMonthPickerDay = function (date) {
            _this.setState({
                navigatedMonthDate: date
            });
        };
        _this._onNavigateDayDate = function (date, focusOnNavigatedDay) {
            _this._navigateDayPickerDay(date);
            _this._focusOnUpdate = focusOnNavigatedDay;
        };
        _this._onNavigateMonthDate = function (date, focusOnNavigatedDay) {
            if (!focusOnNavigatedDay) {
                _this._navigateMonthPickerDay(date);
                _this._focusOnUpdate = focusOnNavigatedDay;
                return;
            }
            if (!_this.state.isDayPickerVisible) {
                _this._onSelectDate(date);
            }
            _this._navigateDayPickerDay(date);
        };
        _this._onSelectDate = function (date, selectedDateRangeArray) {
            var onSelectDate = _this.props.onSelectDate;
            _this.setState({
                selectedDate: date
            });
            if (onSelectDate) {
                onSelectDate(date, selectedDateRangeArray);
            }
        };
        _this._onHeaderSelect = function (focus) {
            _this.setState({
                isDayPickerVisible: !_this.state.isDayPickerVisible,
                isMonthPickerVisible: !_this.state.isMonthPickerVisible
            });
            if (focus) {
                _this._focusOnUpdate = true;
            }
        };
        _this._onGotoToday = function () {
            var _a = _this.props, dateRangeType = _a.dateRangeType, firstDayOfWeek = _a.firstDayOfWeek, today = _a.today, workWeekDays = _a.workWeekDays;
            var dates = getDateRangeArray(today, dateRangeType, firstDayOfWeek, workWeekDays);
            _this._onSelectDate(today, dates);
            _this._navigateDayPickerDay(today);
        };
        _this._onGotoTodayKeyDown = function (ev) {
            if (ev.which === 13 /* enter */) {
                ev.preventDefault();
                _this._onGotoToday();
            }
        };
        _this._onDatePickerPopupKeyDown = function (ev) {
            switch (ev.which) {
                case 13 /* enter */:
                    ev.preventDefault();
                    break;
                case 8 /* backspace */:
                    ev.preventDefault();
                    break;
                case 27 /* escape */:
                    _this._handleEscKey(ev);
                    break;
                default:
                    break;
            }
        };
        _this._handleEscKey = function (ev) {
            if (_this.props.onDismiss) {
                _this.props.onDismiss();
            }
        };
        var currentDate = props.value && !isNaN(props.value.getTime()) ? props.value : props.today || new Date();
        _this.state = {
            selectedDate: currentDate,
            navigatedDayDate: currentDate,
            navigatedMonthDate: currentDate,
            /** When showMonthPickerAsOverlay is active it overrides isMonthPickerVisible/isDayPickerVisible props (These props permanently set the visibility of their respective calendars). */
            isMonthPickerVisible: _this.props.showMonthPickerAsOverlay ? false : _this.props.isMonthPickerVisible,
            isDayPickerVisible: _this.props.showMonthPickerAsOverlay ? true : _this.props.isDayPickerVisible
        };
        _this._focusOnUpdate = false;
        return _this;
    }
    Calendar.prototype.componentWillReceiveProps = function (nextProps) {
        var autoNavigateOnSelection = nextProps.autoNavigateOnSelection, value = nextProps.value, _a = nextProps.today, today = _a === void 0 ? new Date() : _a;
        // Make sure auto-navigation is supported for programmatic changes to selected date, i.e.,
        // if selected date is updated via props, we may need to modify the navigated date
        var overrideNavigatedDate = autoNavigateOnSelection && !compareDates(value, this.props.value);
        if (overrideNavigatedDate) {
            this.setState({
                navigatedMonthDate: value,
                navigatedDayDate: value
            });
        }
        this.setState({
            selectedDate: value || today
        });
    };
    Calendar.prototype.componentDidUpdate = function () {
        if (this._focusOnUpdate) {
            this.focus();
            this._focusOnUpdate = false;
        }
    };
    Calendar.prototype.render = function () {
        var rootClass = 'ms-DatePicker';
        var _a = this.props, firstDayOfWeek = _a.firstDayOfWeek, dateRangeType = _a.dateRangeType, strings = _a.strings, showMonthPickerAsOverlay = _a.showMonthPickerAsOverlay, autoNavigateOnSelection = _a.autoNavigateOnSelection, showGoToToday = _a.showGoToToday, highlightCurrentMonth = _a.highlightCurrentMonth, highlightSelectedMonth = _a.highlightSelectedMonth, navigationIcons = _a.navigationIcons, minDate = _a.minDate, maxDate = _a.maxDate, className = _a.className;
        var _b = this.state, selectedDate = _b.selectedDate, navigatedDayDate = _b.navigatedDayDate, navigatedMonthDate = _b.navigatedMonthDate, isMonthPickerVisible = _b.isMonthPickerVisible, isDayPickerVisible = _b.isDayPickerVisible;
        var onHeaderSelect = showMonthPickerAsOverlay ? this._onHeaderSelect : undefined;
        var monthPickerOnly$$1 = !showMonthPickerAsOverlay && !isDayPickerVisible;
        var overlayedWithButton = showMonthPickerAsOverlay && showGoToToday;
        return (createElement("div", { className: css(rootClass, styles$2.root, className), role: "application" },
            createElement("div", { className: css('ms-DatePicker-picker ms-DatePicker-picker--opened ms-DatePicker-picker--focused', styles$2.picker, styles$2.pickerIsOpened, styles$2.pickerIsFocused, isMonthPickerVisible && 'ms-DatePicker-monthPickerVisible ' + styles$2.monthPickerVisible, isMonthPickerVisible && isDayPickerVisible && 'ms-DatePicker-calendarsInline ' + styles$2.calendarsInline, monthPickerOnly$$1 && 'ms-DatePicker-monthPickerOnly ' + styles$2.monthPickerOnly, showMonthPickerAsOverlay && 'ms-DatePicker-monthPickerAsOverlay ' + styles$2.monthPickerAsOverlay) },
                createElement("div", { className: css('ms-DatePicker-holder ms-slideDownIn10', styles$2.holder, overlayedWithButton && styles$2.holderWithButton), onKeyDown: this._onDatePickerPopupKeyDown },
                    createElement("div", { className: css('ms-DatePicker-frame', styles$2.frame) },
                        createElement("div", { className: css('ms-DatePicker-wrap', styles$2.wrap, showGoToToday && styles$2.goTodaySpacing) },
                            isDayPickerVisible && (createElement(CalendarDay, { selectedDate: selectedDate, navigatedDate: navigatedDayDate, today: this.props.today, onSelectDate: this._onSelectDate, onNavigateDate: this._onNavigateDayDate, onDismiss: this.props.onDismiss, firstDayOfWeek: firstDayOfWeek, dateRangeType: dateRangeType, autoNavigateOnSelection: autoNavigateOnSelection, strings: strings, onHeaderSelect: onHeaderSelect, navigationIcons: navigationIcons, showWeekNumbers: this.props.showWeekNumbers, firstWeekOfYear: this.props.firstWeekOfYear, dateTimeFormatter: this.props.dateTimeFormatter, showSixWeeksByDefault: this.props.showSixWeeksByDefault, minDate: minDate, maxDate: maxDate, workWeekDays: this.props.workWeekDays, componentRef: this._dayPicker })),
                            isDayPickerVisible && isMonthPickerVisible && createElement("div", { className: styles$2.divider }),
                            isMonthPickerVisible && (createElement(CalendarMonth, { navigatedDate: navigatedMonthDate, selectedDate: navigatedDayDate, strings: strings, onNavigateDate: this._onNavigateMonthDate, today: this.props.today, highlightCurrentMonth: highlightCurrentMonth, highlightSelectedMonth: highlightSelectedMonth, onHeaderSelect: onHeaderSelect, navigationIcons: navigationIcons, dateTimeFormatter: this.props.dateTimeFormatter, minDate: minDate, maxDate: maxDate, componentRef: this._monthPicker })),
                            showGoToToday && (createElement("button", { role: "button", className: css('ms-DatePicker-goToday js-goToday', styles$2.goToday, (_c = {},
                                    _c[styles$2.goTodayInlineMonth] = isMonthPickerVisible,
                                    _c)), onClick: this._onGotoToday, onKeyDown: this._onGotoTodayKeyDown, tabIndex: 0 }, strings.goToToday))))))));
        var _c;
    };
    Calendar.prototype.focus = function () {
        if (this.state.isDayPickerVisible && this._dayPicker.current) {
            this._dayPicker.current.focus();
        }
        else if (this.state.isMonthPickerVisible && this._monthPicker.current) {
            this._monthPicker.current.focus();
        }
    };
    Calendar.defaultProps = {
        onSelectDate: undefined,
        onDismiss: undefined,
        isMonthPickerVisible: true,
        isDayPickerVisible: true,
        showMonthPickerAsOverlay: false,
        value: undefined,
        today: new Date(),
        firstDayOfWeek: DayOfWeek.Sunday,
        dateRangeType: DateRangeType.Day,
        autoNavigateOnSelection: false,
        showGoToToday: true,
        strings: null,
        highlightCurrentMonth: false,
        highlightSelectedMonth: false,
        navigationIcons: iconStrings,
        showWeekNumbers: false,
        firstWeekOfYear: FirstWeekOfYear.FirstDay,
        dateTimeFormatter: dateTimeFormatterCallbacks,
        showSixWeeksByDefault: false,
        workWeekDays: defaultWorkWeekDays
    };
    return Calendar;
}(BaseComponent));

var RectangleEdge;
(function (RectangleEdge) {
    RectangleEdge[RectangleEdge["top"] = 1] = "top";
    RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
    RectangleEdge[RectangleEdge["left"] = 2] = "left";
    RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge || (RectangleEdge = {}));
var Position;
(function (Position) {
    Position[Position["top"] = 0] = "top";
    Position[Position["bottom"] = 1] = "bottom";
    Position[Position["start"] = 2] = "start";
    Position[Position["end"] = 3] = "end";
})(Position || (Position = {}));

var Rectangle$1 = /** @class */ (function (_super) {
    __extends(Rectangle$$1, _super);
    function Rectangle$$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle$$1;
}(Rectangle));
function _createPositionData(targetEdge, alignmentEdge, isAuto) {
    return {
        targetEdge: targetEdge,
        alignmentEdge: alignmentEdge,
        isAuto: isAuto
    };
}
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (_a = {},
    _a[0 /* topLeftEdge */] = _createPositionData(RectangleEdge.top, RectangleEdge.left),
    _a[1 /* topCenter */] = _createPositionData(RectangleEdge.top),
    _a[2 /* topRightEdge */] = _createPositionData(RectangleEdge.top, RectangleEdge.right),
    _a[3 /* topAutoEdge */] = _createPositionData(RectangleEdge.top, undefined, true),
    _a[4 /* bottomLeftEdge */] = _createPositionData(RectangleEdge.bottom, RectangleEdge.left),
    _a[5 /* bottomCenter */] = _createPositionData(RectangleEdge.bottom),
    _a[6 /* bottomRightEdge */] = _createPositionData(RectangleEdge.bottom, RectangleEdge.right),
    _a[7 /* bottomAutoEdge */] = _createPositionData(RectangleEdge.bottom, undefined, true),
    _a[8 /* leftTopEdge */] = _createPositionData(RectangleEdge.left, RectangleEdge.top),
    _a[9 /* leftCenter */] = _createPositionData(RectangleEdge.left),
    _a[10 /* leftBottomEdge */] = _createPositionData(RectangleEdge.left, RectangleEdge.bottom),
    _a[11 /* rightTopEdge */] = _createPositionData(RectangleEdge.right, RectangleEdge.top),
    _a[12 /* rightCenter */] = _createPositionData(RectangleEdge.right),
    _a[13 /* rightBottomEdge */] = _createPositionData(RectangleEdge.right, RectangleEdge.bottom),
    _a);
function _isRectangleWithinBounds(rect, boundingRect) {
    if (rect.top < boundingRect.top) {
        return false;
    }
    if (rect.bottom > boundingRect.bottom) {
        return false;
    }
    if (rect.left < boundingRect.left) {
        return false;
    }
    if (rect.right > boundingRect.right) {
        return false;
    }
    return true;
}
/**
 * Gets all of the edges of a rectangle that are outside of the given bounds.
 * If there are no out of bounds edges it returns an empty array.
 */
function _getOutOfBoundsEdges(rect, boundingRect) {
    var outOfBounds = new Array();
    if (rect.top < boundingRect.top) {
        outOfBounds.push(RectangleEdge.top);
    }
    if (rect.bottom > boundingRect.bottom) {
        outOfBounds.push(RectangleEdge.bottom);
    }
    if (rect.left < boundingRect.left) {
        outOfBounds.push(RectangleEdge.left);
    }
    if (rect.right > boundingRect.right) {
        outOfBounds.push(RectangleEdge.right);
    }
    return outOfBounds;
}
function _getEdgeValue(rect, edge) {
    return rect[RectangleEdge[edge]];
}
function _setEdgeValue(rect, edge, value) {
    rect[RectangleEdge[edge]] = value;
    return rect;
}
/**
 * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
 * the itself already contains the other coordinate.
 * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @returns {number}
 */
function _getCenterValue(rect, edge) {
    var edges = _getFlankingEdges(edge);
    return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
}
/**
 * Flips the value depending on the edge.
 * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
 * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
 * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the "negative" edges.
 * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2.
 * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
 * If top edge 1 is less than edge 2 then it is out of bounds.
 *
 *
 * @param {RectangleEdge} edge
 * @param {number} value
 * @returns {number}
 */
function _getRelativeEdgeValue(edge, value) {
    if (edge > 0) {
        return value;
    }
    else {
        return value * -1;
    }
}
function _getRelativeRectEdgeValue(edge, rect) {
    return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
}
function _getRelativeEdgeDifference(rect, hostRect, edge) {
    var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
    return _getRelativeEdgeValue(edge, edgeDifference);
}
/**
 * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
 * For example, if it's a bottom edge it will only change y coordinates.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} newValue
 * @returns {Rectangle}
 */
function _moveEdge(rect, edge, newValue) {
    var difference = _getEdgeValue(rect, edge) - newValue;
    rect = _setEdgeValue(rect, edge, newValue);
    rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
    return rect;
}
/**
 * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} edge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */
function _alignEdges(rect, target, edge, gap) {
    if (gap === void 0) { gap = 0; }
    return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
}
/**
 * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
 * For instance if targetEdge is bottom, then the rects top will be moved to match it.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} targetEdge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */
function _alignOppositeEdges(rect, target, targetEdge, gap) {
    if (gap === void 0) { gap = 0; }
    var oppositeEdge = targetEdge * -1;
    var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
    return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
}
/**
 * Tests to see if the given edge is within the bounds of the given rectangle.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} bounds
 * @param {RectangleEdge} edge
 * @returns {boolean}
 */
function _isEdgeInBounds(rect, bounds, edge) {
    var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
    return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
}
/**
 * Attempts to move the rectangle through various sides of the target to find a place to fit.
 * If no fit is found, the original position should be returned.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @returns {IElementPosition}
 */
function _flipToFit(rect, target, bounding, positionData, gap) {
    if (gap === void 0) { gap = 0; }
    var directions = [
        RectangleEdge.left,
        RectangleEdge.right,
        RectangleEdge.bottom,
        RectangleEdge.top
    ];
    var currentEstimate = rect;
    var currentEdge = positionData.targetEdge;
    var currentAlignment = positionData.alignmentEdge;
    // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified element.
    for (var i = 0; i < 4; i++) {
        if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
            directions.splice(directions.indexOf(currentEdge), 1);
            if (directions.indexOf(currentEdge * -1) > -1) {
                currentEdge = currentEdge * -1;
            }
            else {
                currentAlignment = currentEdge;
                currentEdge = directions.slice(-1)[0];
            }
            currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
        }
        else {
            return {
                elementRectangle: currentEstimate,
                targetEdge: currentEdge,
                alignmentEdge: currentAlignment
            };
        }
    }
    return {
        elementRectangle: rect,
        targetEdge: positionData.targetEdge,
        alignmentEdge: currentAlignment
    };
}
/**
 * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
 * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
 *
 * @param {Rectangle} element
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [directionalHintFixed]
 * @param {boolean} [coverTarget]
 * @returns {IElementPosition}
 */
function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var alignmentEdge = positionData.alignmentEdge;
    var elementEstimate = {
        elementRectangle: element,
        targetEdge: positionData.targetEdge,
        alignmentEdge: alignmentEdge
    };
    if (!directionalHintFixed && !coverTarget) {
        elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
    }
    var outOfBounds = _getOutOfBoundsEdges(element, bounding);
    for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
        var direction = outOfBounds_1[_i];
        elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
    }
    return elementEstimate;
}
/**
 * Moves the middle point on an edge to the point given.
 * Only moves in one direction. For instance if a bottom edge is passed in, then
 * the bottom edge will be moved in the x axis to match the point.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} point
 * @returns {Rectangle}
 */
function _centerEdgeToPoint(rect, edge, point) {
    var positiveEdge = _getFlankingEdges(edge).positiveEdge;
    var elementMiddle = _getCenterValue(rect, edge);
    var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);
    return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
}
/**
 * Moves the element rectangle to be appropriately positioned relative to a given target.
 * Does not flip or adjust the element.
 *
 * @param {Rectangle} elementToPosition
 * @param {Rectangle} target
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [coverTarget]
 * @returns {Rectangle}
 */
function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var estimatedElementPosition;
    var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    estimatedElementPosition = coverTarget
        ? _alignEdges(elementToPosition, target, targetEdge, gap)
        : _alignOppositeEdges(elementToPosition, target, targetEdge, gap);
    // if no alignment edge is provided it's supposed to be centered.
    if (!alignmentEdge) {
        var targetMiddlePoint = _getCenterValue(target, targetEdge);
        estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
    }
    else {
        estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
    }
    return estimatedElementPosition;
}
/**
 * Returns the non-opposite edges of the target edge.
 * For instance if bottom is passed in then left and right will be returned.
 *
 * @param {RectangleEdge} edge
 * @returns {{ firstEdge: RectangleEdge, secondEdge: RectangleEdge }}
 */
function _getFlankingEdges(edge) {
    if (edge === RectangleEdge.top || edge === RectangleEdge.bottom) {
        return {
            positiveEdge: RectangleEdge.left,
            negativeEdge: RectangleEdge.right
        };
    }
    else {
        return {
            positiveEdge: RectangleEdge.top,
            negativeEdge: RectangleEdge.bottom
        };
    }
}
/**
 * Finalizes the element positon based on the hostElement. Only returns the
 * rectangle values to position such that they are anchored to the target.
 * This helps prevent resizing from looking very strange.
 * For instance, if the target edge is top and aligned with the left side then
 * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
 *
 * @param {Rectangle} elementRectangle
 * @param {HTMLElement} hostElement
 * @param {RectangleEdge} targetEdge
 * @param {RectangleEdge} [alignmentEdge]
 * @param {boolean} coverTarget
 * @returns {IPartialIRectangle}
 */
function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, alignmentEdge, coverTarget) {
    var returnValue = {};
    var hostRect = _getRectangleFromElement(hostElement);
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    var elementEdgeString = RectangleEdge[elementEdge];
    var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
    returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
    returnValue[RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
    return returnValue;
}
// Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
// We still want to position the beak based on it's midpoint which does not change. It will
// be at (beakwidth / 2, beakwidth / 2)
function _calculateActualBeakWidthInPixels(beakWidth) {
    return Math.sqrt(beakWidth * beakWidth * 2);
}
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If a directionalHint is specified and no directionalHintForRTL is available and the page is RTL the hint will be flipped.
 * For instance bottomLeftEdge would become bottomRightEdge.
 * If there is no directionalHint passed in bottomAutoEdge is chosen automatically.
 *
 * @param {IPositionProps} props
 * @returns {IPositionDirectionalHintData}
 */
function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
    if (directionalHint === void 0) { directionalHint = 7 /* bottomAutoEdge */; }
    if (previousPositions) {
        return {
            alignmentEdge: previousPositions.alignmentEdge,
            isAuto: previousPositions.isAuto,
            targetEdge: previousPositions.targetEdge
        };
    }
    var positionInformation = __assign({}, DirectionalDictionary[directionalHint]);
    if (getRTL()) {
        // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
        if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
            positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
        }
        return directionalHintForRTL !== undefined ? DirectionalDictionary[directionalHintForRTL] : positionInformation;
    }
    return positionInformation;
}
/**
 * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
 * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
 * the center of the page.
 *
 * @param {IPositionDirectionalHintData} positionData
 * @param {Rectangle} target
 * @param {Rectangle} boundingRect
 * @param {boolean} [coverTarget]
 * @returns {IPositionDirectionalHintData}
 */
function _getAlignmentData(positionData, target, boundingRect, coverTarget) {
    if (positionData.isAuto) {
        positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
    }
    return positionData;
}
function getClosestEdge(targetEdge, target, boundingRect) {
    var targetCenter = _getCenterValue(target, targetEdge);
    var boundingCenter = _getCenterValue(boundingRect, targetEdge);
    var _a = _getFlankingEdges(targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    if (targetCenter <= boundingCenter) {
        return positiveEdge;
    }
    else {
        return negativeEdge;
    }
}
function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);
    if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
        return {
            elementRectangle: estimatedElementPosition,
            targetEdge: positionData.targetEdge,
            alignmentEdge: positionData.alignmentEdge
        };
    }
    else {
        return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
    }
}
function _finalizeBeakPosition(elementPosition, positionedBeak) {
    var targetEdge = elementPosition.targetEdge * -1;
    // The "host" element that we will use to help position the beak.
    var actualElement = new Rectangle$1(0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
    var returnEdge = elementPosition.alignmentEdge
        ? elementPosition.alignmentEdge
        : _getFlankingEdges(targetEdge).positiveEdge;
    var returnValue = {};
    returnValue[RectangleEdge[targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
    returnValue[RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
    return {
        elementPosition: __assign({}, returnValue),
        closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
        targetEdge: targetEdge
    };
}
function _positionBeak(beakWidth, elementPosition) {
    var target = elementPosition.targetRectangle;
    /** Note about beak positioning: The actual beak width only matters for getting the gap between the callout and target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8, then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.*/
    var _a = _getFlankingEdges(elementPosition.targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);
    var elementBounds = new Rectangle$1(beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
    var beakPositon = new Rectangle$1(0, beakWidth, 0, beakWidth);
    beakPositon = _moveEdge(beakPositon, elementPosition.targetEdge * -1, -beakWidth / 2);
    beakPositon = _centerEdgeToPoint(beakPositon, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));
    if (!_isEdgeInBounds(beakPositon, elementBounds, positiveEdge)) {
        beakPositon = _alignEdges(beakPositon, elementBounds, positiveEdge);
    }
    else if (!_isEdgeInBounds(beakPositon, elementBounds, negativeEdge)) {
        beakPositon = _alignEdges(beakPositon, elementBounds, negativeEdge);
    }
    return beakPositon;
}
function _getRectangleFromElement(element) {
    var clientRect = element.getBoundingClientRect();
    return new Rectangle$1(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
}
function _getRectangleFromIRect(rect) {
    return new Rectangle$1(rect.left, rect.right, rect.top, rect.bottom);
}
function _getTargetRect(bounds, target) {
    var targetRectangle;
    if (target) {
        if (target.preventDefault) {
            var ev = target;
            targetRectangle = new Rectangle$1(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
        }
        else if (target.getBoundingClientRect) {
            targetRectangle = _getRectangleFromElement(target);
            // HTMLImgElements can have x and y values. The check for it being a point must go last.
        }
        else {
            var point = target;
            targetRectangle = new Rectangle$1(point.x, point.x, point.y, point.y);
        }
        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
            for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
                var direction = outOfBounds_2[_i];
                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
            }
        }
    }
    else {
        targetRectangle = new Rectangle$1(0, 0, 0, 0);
    }
    return targetRectangle;
}
/**
 * If max height is less than zero it returns the bounds height instead.
 */
function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
    var maxHeight = 0;
    var directionalHint = DirectionalDictionary[targetEdge];
    // If cover target is set, then the max height should be calculated using the opposite of the target edge since
    // that's the direction that the callout will expand in.
    // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
    // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
    // is (bottom of target) - (top of screen) - gapSpace.
    var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;
    if (target === RectangleEdge.top) {
        maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
    }
    else if (target === RectangleEdge.bottom) {
        maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
    }
    else {
        maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
    }
    return maxHeight > 0 ? maxHeight : bounds.height;
}
function _positionElementRelative(props, hostElement, elementToPosition, previousPositions) {
    var gap = props.gapSpace ? props.gapSpace : 0;
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new Rectangle$1(0, window.innerWidth - getScrollbarWidth(), 0, window.innerHeight);
    var targetRect = _getTargetRect(boundingRect, props.target);
    var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget);
    var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);
    return __assign({}, positionedElement, { targetRectangle: targetRect });
}
function _finalizePositionData(positionedElement, hostElement, coverTarget) {
    var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, positionedElement.alignmentEdge, coverTarget);
    return {
        elementPosition: finalizedElement,
        targetEdge: positionedElement.targetEdge,
        alignmentEdge: positionedElement.alignmentEdge
    };
}
function _positionCallout(props, hostElement, callout, previousPositions) {
    var beakWidth = props.isBeakVisible ? props.beakWidth || 0 : 0;
    var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
    var positionProps = props;
    positionProps.gapSpace = gap;
    var positionedElement = _positionElementRelative(positionProps, hostElement, callout, previousPositions);
    var beakPositioned = _positionBeak(beakWidth, positionedElement);
    var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned);
    return __assign({}, _finalizePositionData(positionedElement, hostElement, props.coverTarget), { beakPosition: finalizedBeakPosition });
}
function positionCallout(props, hostElement, elementToPosition, previousPositions) {
    return _positionCallout(props, hostElement, elementToPosition, previousPositions);
}
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var mouseTarget = target;
    var elementTarget = target;
    var pointTarget = target;
    var targetRect;
    var boundingRectangle = bounds
        ? _getRectangleFromIRect(bounds)
        : new Rectangle$1(0, window.innerWidth - getScrollbarWidth(), 0, window.innerHeight);
    if (mouseTarget.stopPropagation) {
        targetRect = new Rectangle$1(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else if (pointTarget.x !== undefined && pointTarget.y !== undefined) {
        targetRect = new Rectangle$1(pointTarget.x, pointTarget.x, pointTarget.y, pointTarget.y);
    }
    else {
        targetRect = _getRectangleFromElement(elementTarget);
    }
    return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
}
var _a;

/**
 * This adds accessibility to Dialog and Panel controls
 */
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this._root = createRef();
        _this._onKeyDown = function (ev) {
            switch (ev.which) {
                case 27 /* escape */:
                    if (_this.props.onDismiss) {
                        _this.props.onDismiss(ev);
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    break;
            }
        };
        _this.state = { needsVerticalScrollBar: false };
        return _this;
    }
    Popup.prototype.componentWillMount = function () {
        this._originalFocusedElement = getDocument().activeElement;
    };
    Popup.prototype.componentDidMount = function () {
        if (!this._root.current) {
            return;
        }
        this._events.on(this._root.current, 'focus', this._onFocus, true);
        this._events.on(this._root.current, 'blur', this._onBlur, true);
        if (doesElementContainFocus(this._root.current)) {
            this._containsFocus = true;
        }
        this._updateScrollBarAsync();
    };
    Popup.prototype.componentDidUpdate = function () {
        this._updateScrollBarAsync();
    };
    Popup.prototype.componentWillUnmount = function () {
        if (this.props.shouldRestoreFocus &&
            this._originalFocusedElement &&
            this._containsFocus &&
            this._originalFocusedElement !== window) {
            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            if (this._originalFocusedElement) {
                this._originalFocusedElement.focus();
            }
        }
    };
    Popup.prototype.render = function () {
        var _a = this.props, role = _a.role, className = _a.className, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy, style = _a.style;
        return (createElement("div", __assign({ ref: this._root }, getNativeProps(this.props, divProperties), { className: className, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, style: __assign({ overflowY: this.state.needsVerticalScrollBar ? 'scroll' : undefined }, style) }), this.props.children));
    };
    Popup.prototype._updateScrollBarAsync = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () {
            _this._getScrollBar();
        });
    };
    Popup.prototype._getScrollBar = function () {
        var needsVerticalScrollBar = false;
        if (this._root && this._root.current && this._root.current.firstElementChild) {
            // ClientHeight returns the client height of an element rounded to an
            // integer. On some browsers at different zoom levels this rounding
            // can generate different results for the root container and child even
            // though they are the same height. This causes us to show a scroll bar
            // when not needed. Ideally we would use BoundingClientRect().height
            // instead however seems that the API is 90% slower than using ClientHeight.
            // Therefore instead we will calculate the difference between heights and
            // allow for a 1px difference to still be considered ok and not show the
            // scroll bar.
            var rootHeight = this._root.current.clientHeight;
            var firstChildHeight = this._root.current.firstElementChild.clientHeight;
            if (rootHeight > 0 && firstChildHeight > rootHeight) {
                needsVerticalScrollBar = firstChildHeight - rootHeight > 1;
            }
        }
        if (this.state.needsVerticalScrollBar !== needsVerticalScrollBar) {
            this.setState({
                needsVerticalScrollBar: needsVerticalScrollBar
            });
        }
    };
    Popup.prototype._onFocus = function () {
        this._containsFocus = true;
    };
    Popup.prototype._onBlur = function (ev) {
        if (this._root.value && this._root.value.contains(ev.relatedTarget)) {
            this._containsFocus = false;
        }
    };
    Popup.defaultProps = {
        shouldRestoreFocus: true
    };
    return Popup;
}(BaseComponent));

var ANIMATIONS = (_a$1 = {},
    _a$1[RectangleEdge.top] = AnimationClassNames.slideUpIn10,
    _a$1[RectangleEdge.bottom] = AnimationClassNames.slideDownIn10,
    _a$1[RectangleEdge.left] = AnimationClassNames.slideLeftIn10,
    _a$1[RectangleEdge.right] = AnimationClassNames.slideRightIn10,
    _a$1);
var getClassNames$2 = classNamesFunction();
var BORDER_WIDTH = 1;
var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
// Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
// To help ensure that edge will respect the offscreen style opacity
// filter needs to be added as an additional way to set opacity.
var OFF_SCREEN_STYLE = { opacity: 0, filter: 'opacity(0)' };
var CalloutContentBase = /** @class */ (function (_super) {
    __extends(CalloutContentBase, _super);
    function CalloutContentBase(props) {
        var _this = _super.call(this, props) || this;
        _this._hostElement = createRef();
        _this._calloutElement = createRef();
        _this._hasListeners = false;
        _this.dismiss = function (ev) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev);
            }
        };
        _this._setInitialFocus = function () {
            if (_this.props.setInitialFocus &&
                !_this._didSetInitialFocus &&
                _this.state.positions &&
                _this._calloutElement.current) {
                _this._didSetInitialFocus = true;
                _this._async.requestAnimationFrame(function () { return focusFirstChild(_this._calloutElement.current); });
            }
        };
        _this._onComponentDidMount = function () {
            _this._addListeners();
            if (_this.props.onLayerMounted) {
                _this.props.onLayerMounted();
            }
            _this._updateAsyncPosition();
            _this._setHeightOffsetEveryFrame();
        };
        _this._didSetInitialFocus = false;
        _this.state = {
            positions: undefined,
            slideDirectionalClassName: undefined,
            // @TODO it looks like this is not even being used anymore.
            calloutElementRect: undefined,
            heightOffset: 0
        };
        _this._positionAttempts = 0;
        return _this;
    }
    CalloutContentBase.prototype.componentDidUpdate = function () {
        this._setInitialFocus();
        if (!this.props.hidden) {
            if (!this._hasListeners) {
                this._addListeners();
            }
            this._updateAsyncPosition();
        }
        else {
            if (this._hasListeners) {
                this._removeListeners();
            }
        }
    };
    CalloutContentBase.prototype.componentWillMount = function () {
        this._setTargetWindowAndElement(this._getTarget());
    };
    CalloutContentBase.prototype.componentWillUpdate = function (newProps) {
        // If the target element changed, find the new one. If we are tracking target with class name, always find element because we do not know if fabric has rendered a new element and disposed the old element.
        var newTarget = this._getTarget(newProps);
        var oldTarget = this._getTarget();
        if (newTarget !== oldTarget || typeof newTarget === 'string' || newTarget instanceof String) {
            this._maxHeight = undefined;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.gapSpace !== this.props.gapSpace || this.props.beakWidth !== newProps.beakWidth) {
            this._maxHeight = undefined;
        }
        if (newProps.finalHeight !== this.props.finalHeight) {
            this._setHeightOffsetEveryFrame();
        }
        // if the callout becomes hidden, then remove any positions that were placed on it.
        if (newProps.hidden && newProps.hidden !== this.props.hidden) {
            this.setState({
                positions: undefined
            });
        }
    };
    CalloutContentBase.prototype.componentDidMount = function () {
        if (!this.props.hidden) {
            this._onComponentDidMount();
        }
    };
    CalloutContentBase.prototype.render = function () {
        // If there is no target window then we are likely in server side rendering and we should not render anything.
        if (!this._targetWindow) {
            return null;
        }
        var target = this.props.target;
        var _a = this.props, styles = _a.styles, role = _a.role, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className, isBeakVisible = _a.isBeakVisible, children = _a.children, beakWidth = _a.beakWidth, calloutWidth = _a.calloutWidth, calloutMaxWidth = _a.calloutMaxWidth, finalHeight = _a.finalHeight, backgroundColor = _a.backgroundColor, calloutMaxHeight = _a.calloutMaxHeight, onScroll = _a.onScroll;
        target = this._getTarget();
        var positions = this.state.positions;
        var getContentMaxHeight = this._getMaxHeight()
            ? this._getMaxHeight() + this.state.heightOffset
            : undefined;
        var contentMaxHeight = calloutMaxHeight && getContentMaxHeight && calloutMaxHeight < getContentMaxHeight
            ? calloutMaxHeight
            : getContentMaxHeight;
        var overflowYHidden = !!finalHeight;
        var beakVisible = isBeakVisible && !!target;
        this._classNames = getClassNames$2(styles, {
            theme: this.props.theme,
            className: className,
            overflowYHidden: overflowYHidden,
            calloutWidth: calloutWidth,
            positions: positions,
            beakWidth: beakWidth,
            backgroundColor: backgroundColor,
            calloutMaxWidth: calloutMaxWidth
        });
        var overflowStyle = overflowYHidden
            ? { overflowY: 'hidden', maxHeight: contentMaxHeight }
            : { maxHeight: contentMaxHeight };
        var visibilityStyle = this.props.hidden ? { visibility: 'hidden' } : undefined;
        // React.CSSProperties does not understand IRawStyle, so the inline animations will need to be cast as any for now.
        var content = (createElement("div", { ref: this._hostElement, className: this._classNames.container, style: visibilityStyle },
            createElement("div", { className: css(this._classNames.root, positions && positions.targetEdge && ANIMATIONS[positions.targetEdge]), style: positions ? positions.elementPosition : OFF_SCREEN_STYLE, tabIndex: -1, 
                // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
                ref: this._calloutElement },
                beakVisible && createElement("div", { className: this._classNames.beak, style: this._getBeakPosition() }),
                beakVisible && createElement("div", { className: this._classNames.beakCurtain }),
                !this.props.hidden && (createElement(Popup, { role: role, ariaLabel: ariaLabel, ariaDescribedBy: ariaDescribedBy, ariaLabelledBy: ariaLabelledBy, className: this._classNames.calloutMain, onDismiss: this.dismiss, onScroll: onScroll, shouldRestoreFocus: true, style: overflowStyle }, children)))));
        return content;
    };
    CalloutContentBase.prototype._dismissOnScroll = function (ev) {
        var preventDismissOnScroll = this.props.preventDismissOnScroll;
        if (this.state.positions && !preventDismissOnScroll) {
            this._dismissOnLostFocus(ev);
        }
    };
    CalloutContentBase.prototype._dismissOnLostFocus = function (ev) {
        var target = ev.target;
        var clickedOutsideCallout = this._hostElement.current && !elementContains(this._hostElement.current, target);
        var preventDismissOnLostFocus = this.props.preventDismissOnLostFocus;
        if (!preventDismissOnLostFocus &&
            ((!this._target && clickedOutsideCallout) ||
                (ev.target !== this._targetWindow &&
                    clickedOutsideCallout &&
                    (this._target.stopPropagation ||
                        (!this._target || (target !== this._target && !elementContains(this._target, target))))))) {
            this.dismiss(ev);
        }
    };
    // We implement a blur listener for the Callout component so that if a page inside inside of an iframe uses a callout,
    // it can be dismissed when the user clicks outside of the iframe.
    CalloutContentBase.prototype._dismissOnBlur = function (ev) {
        var preventDismissOnLostFocus = this.props.preventDismissOnLostFocus;
        if (!preventDismissOnLostFocus && ev.target === this._targetWindow) {
            this.dismiss(ev);
        }
    };
    CalloutContentBase.prototype._addListeners = function () {
        var _this = this;
        // This is added so the callout will dismiss when the window is scrolled
        // but not when something inside the callout is scrolled. The delay seems
        // to be required to avoid React firing an async focus event in IE from
        // the target changing focus quickly prior to rendering the callout.
        this._async.setTimeout(function () {
            _this._events.on(_this._targetWindow, 'scroll', _this._dismissOnScroll, true);
            _this._events.on(_this._targetWindow, 'resize', _this.dismiss, true);
            _this._events.on(_this._targetWindow, 'blur', _this._dismissOnBlur, true);
            _this._events.on(_this._targetWindow.document.documentElement, 'focus', _this._dismissOnLostFocus, true);
            _this._events.on(_this._targetWindow.document.documentElement, 'click', _this._dismissOnLostFocus, true);
            _this._hasListeners = true;
        }, 0);
    };
    CalloutContentBase.prototype._removeListeners = function () {
        this._events.off(this._targetWindow, 'scroll', this._dismissOnScroll, true);
        this._events.off(this._targetWindow, 'resize', this.dismiss, true);
        this._events.off(this._targetWindow, 'blur', this._dismissOnBlur, true);
        this._events.off(this._targetWindow.document.documentElement, 'focus', this._dismissOnLostFocus, true);
        this._events.off(this._targetWindow.document.documentElement, 'click', this._dismissOnLostFocus, true);
        this._hasListeners = false;
    };
    CalloutContentBase.prototype._updateAsyncPosition = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () { return _this._updatePosition(); });
    };
    CalloutContentBase.prototype._getBeakPosition = function () {
        var positions = this.state.positions;
        var beakPostionStyle = __assign({}, (positions && positions.beakPosition ? positions.beakPosition.elementPosition : null));
        if (!beakPostionStyle.top && !beakPostionStyle.bottom && !beakPostionStyle.left && !beakPostionStyle.right) {
            beakPostionStyle.left = BEAK_ORIGIN_POSITION.left;
            beakPostionStyle.top = BEAK_ORIGIN_POSITION.top;
        }
        return beakPostionStyle;
    };
    CalloutContentBase.prototype._updatePosition = function () {
        var positions = this.state.positions;
        var hostElement = this._hostElement.current;
        var calloutElement = this._calloutElement.current;
        if (hostElement && calloutElement) {
            var currentProps = void 0;
            currentProps = assign(currentProps, this.props);
            currentProps.bounds = this._getBounds();
            currentProps.target = this._target;
            var newPositions = positionCallout(currentProps, hostElement, calloutElement, positions);
            // Set the new position only when the positions are not exists or one of the new callout positions are different.
            // The position should not change if the position is within 2 decimal places.
            if ((!positions && newPositions) ||
                (positions && newPositions && !this._arePositionsEqual(positions, newPositions) && this._positionAttempts < 5)) {
                // We should not reposition the callout more than a few times, if it is then the content is likely resizing
                // and we should stop trying to reposition to prevent a stack overflow.
                this._positionAttempts++;
                this.setState({
                    positions: newPositions
                });
            }
            else {
                this._positionAttempts = 0;
                if (this.props.onPositioned) {
                    this.props.onPositioned(this.state.positions);
                }
            }
        }
    };
    CalloutContentBase.prototype._getBounds = function () {
        if (!this._bounds) {
            var currentBounds = this.props.bounds;
            if (!currentBounds) {
                currentBounds = {
                    top: 0 + this.props.minPagePadding,
                    left: 0 + this.props.minPagePadding,
                    right: this._targetWindow.innerWidth - this.props.minPagePadding,
                    bottom: this._targetWindow.innerHeight - this.props.minPagePadding,
                    width: this._targetWindow.innerWidth - this.props.minPagePadding * 2,
                    height: this._targetWindow.innerHeight - this.props.minPagePadding * 2
                };
            }
            this._bounds = currentBounds;
        }
        return this._bounds;
    };
    // Max height should remain as synchronous as possible, which is why it is not done using set state.
    // It needs to be synchronous since it will impact the ultimate position of the callout.
    CalloutContentBase.prototype._getMaxHeight = function () {
        var _this = this;
        if (!this._maxHeight) {
            if (this.props.directionalHintFixed && this._target) {
                var beakWidth = this.props.isBeakVisible ? this.props.beakWidth : 0;
                var gapSpace = this.props.gapSpace ? this.props.gapSpace : 0;
                // Since the callout cannot measure it's border size it must be taken into account here. Otherwise it will
                // overlap with the target.
                var totalGap_1 = gapSpace + beakWidth + BORDER_WIDTH * 2;
                this._async.requestAnimationFrame(function () {
                    if (_this._target) {
                        _this._maxHeight = getMaxHeight(_this._target, _this.props.directionalHint, totalGap_1, _this._getBounds(), _this.props.coverTarget);
                        _this.forceUpdate();
                    }
                });
            }
            else {
                this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
            }
        }
        return this._maxHeight;
    };
    CalloutContentBase.prototype._arePositionsEqual = function (positions, newPosition) {
        return (this._comparePositions(positions.elementPosition, newPosition.elementPosition) &&
            this._comparePositions(positions.beakPosition.elementPosition, newPosition.beakPosition.elementPosition));
    };
    CalloutContentBase.prototype._comparePositions = function (oldPositions, newPositions) {
        for (var key in newPositions) {
            // This needs to be checked here and below because there is a linting error if for in does not immediately have an if statement
            if (newPositions.hasOwnProperty(key)) {
                var oldPositionEdge = oldPositions[key];
                var newPositionEdge = newPositions[key];
                if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
                    if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    };
    CalloutContentBase.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = getWindow();
            }
            else if (target.stopPropagation) {
                this._targetWindow = getWindow(target.toElement);
                this._target = target;
            }
            else if (target.getBoundingClientRect) {
                var targetElement = target;
                this._targetWindow = getWindow(targetElement);
                this._target = target;
                // HTMLImgElements can have x and y values. The check for it being a point must go last.
            }
            else {
                this._targetWindow = getWindow();
                this._target = target;
            }
        }
        else {
            this._targetWindow = getWindow();
        }
    };
    CalloutContentBase.prototype._setHeightOffsetEveryFrame = function () {
        var _this = this;
        if (this._calloutElement.current && this.props.finalHeight) {
            this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
                var calloutMainElem = _this._calloutElement.current && _this._calloutElement.current.lastChild;
                if (!calloutMainElem) {
                    return;
                }
                var cardScrollHeight = calloutMainElem.scrollHeight;
                var cardCurrHeight = calloutMainElem.offsetHeight;
                var scrollDiff = cardScrollHeight - cardCurrHeight;
                _this.setState({
                    heightOffset: _this.state.heightOffset + scrollDiff
                });
                if (calloutMainElem.offsetHeight < _this.props.finalHeight) {
                    _this._setHeightOffsetEveryFrame();
                }
                else {
                    _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer);
                }
            });
        }
    };
    CalloutContentBase.prototype._getTarget = function (props) {
        if (props === void 0) { props = this.props; }
        var target = props.target;
        return target;
    };
    CalloutContentBase.defaultProps = {
        preventDismissOnLostFocus: false,
        preventDismissOnScroll: false,
        isBeakVisible: true,
        beakWidth: 16,
        gapSpace: 0,
        minPagePadding: 8,
        directionalHint: 7 /* bottomAutoEdge */
    };
    CalloutContentBase = __decorate([
        customizable('CalloutContent', ['theme', 'styles'])
    ], CalloutContentBase);
    return CalloutContentBase;
}(BaseComponent));
var _a$1;

function getBeakStyle(beakWidth) {
    return {
        height: beakWidth,
        width: beakWidth
    };
}
var GlobalClassNames$1 = {
    container: 'ms-Callout-container',
    root: 'ms-Callout',
    beak: 'ms-Callout-beak',
    beakCurtain: 'ms-Callout-beakCurtain',
    calloutMain: 'ms-Callout-main'
};
var getStyles$2 = function (props) {
    var theme = props.theme, className = props.className, overflowYHidden = props.overflowYHidden, calloutWidth = props.calloutWidth, beakWidth = props.beakWidth, backgroundColor = props.backgroundColor, calloutMaxWidth = props.calloutMaxWidth;
    var classNames = getGlobalClassNames(GlobalClassNames$1, theme);
    var palette = theme.palette;
    return {
        container: [
            classNames.container,
            {
                position: 'relative'
            }
        ],
        root: [
            classNames.root,
            {
                position: 'absolute',
                boxSizing: 'border-box',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: palette.neutralLight,
                boxShadow: '0 0 5px 0px rgba(0,0,0,0.4)',
                selectors: (_a = {},
                    _a[HighContrastSelector] = {
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'WindowText'
                    },
                    _a)
            },
            focusClear(),
            className,
            !!calloutWidth && { width: calloutWidth },
            !!calloutMaxWidth && { maxWidth: calloutMaxWidth }
        ],
        beak: [
            classNames.beak,
            {
                position: 'absolute',
                backgroundColor: palette.white,
                boxShadow: 'inherit',
                border: 'inherit',
                boxSizing: 'border-box',
                transform: 'rotate(45deg)'
            },
            getBeakStyle(beakWidth),
            backgroundColor && {
                backgroundColor: backgroundColor
            }
        ],
        beakCurtain: [
            classNames.beakCurtain,
            {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: palette.white
            }
        ],
        calloutMain: [
            classNames.calloutMain,
            {
                backgroundColor: palette.white,
                overflowX: 'hidden',
                overflowY: 'auto',
                position: 'relative'
            },
            overflowYHidden && {
                overflowY: 'hidden'
            },
            backgroundColor && {
                backgroundColor: backgroundColor
            }
        ]
    };
    var _a;
};

var CalloutContent = styled(CalloutContentBase, getStyles$2);

var inheritFont = { fontFamily: 'inherit' };
var GlobalClassNames$2 = {
    root: 'ms-Fabric'
};
var getStyles$3 = function (props) {
    var theme = props.theme, className = props.className, isFocusVisible = props.isFocusVisible;
    var classNames = getGlobalClassNames(GlobalClassNames$2, theme);
    return {
        root: [
            classNames.root,
            isFocusVisible && 'is-focusVisible',
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
                selectors: {
                    '& button': inheritFont,
                    '& input': inheritFont,
                    '& textarea': inheritFont,
                    ':global(button)': {
                        overflow: 'visible',
                        margin: 0
                    }
                }
            },
            className
        ]
    };
};

var getClassNames$3 = classNamesFunction();
var Fabric = /** @class */ (function (_super) {
    __extends(Fabric, _super);
    function Fabric(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = createRef();
        _this._onMouseDown = function (ev) {
            _this.setState({ isFocusVisible: false });
        };
        _this._onKeyDown = function (ev) {
            if (isDirectionalKeyCode(ev.which)) {
                _this.setState({ isFocusVisible: true });
            }
        };
        _this.state = { isFocusVisible: false };
        return _this;
    }
    Fabric.prototype.render = function () {
        var classNames = getClassNames$3(getStyles$3, __assign({}, this.props, this.state));
        var divProps = getNativeProps(this.props, divProperties);
        return createElement("div", __assign({}, divProps, { className: classNames.root, ref: this._rootElement }));
    };
    Fabric.prototype.componentDidMount = function () {
        var win = getWindow(this._rootElement.value);
        if (win) {
            this._events.on(win, 'mousedown', this._onMouseDown, true);
            this._events.on(win, 'keydown', this._onKeyDown, true);
        }
    };
    Fabric = __decorate([
        customizable('Fabric', ['theme', 'styles'])
    ], Fabric);
    return Fabric;
}(BaseComponent));

var _layersByHostId = {};
var _defaultHostSelector;
var getClassNames$4 = classNamesFunction();
var LayerBase = /** @class */ (function (_super) {
    __extends(LayerBase, _super);
    function LayerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = createRef();
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            if (!_layersByHostId[_this.props.hostId]) {
                _layersByHostId[_this.props.hostId] = [];
            }
            _layersByHostId[_this.props.hostId].push(_this);
        }
        return _this;
    }
    /**
     * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
     * care about the specific host.
     */
    LayerBase.notifyHostChanged = function (id) {
        if (_layersByHostId[id]) {
            _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
        }
    };
    /**
     * Sets the default target selector to use when determining the host in which
     * Layered content will be injected into. If not provided, an element will be
     * created at the end of the document body.
     *
     * Passing in a falsey value will clear the default target and reset back to
     * using a created element at the end of document body.
     */
    LayerBase.setDefaultTarget = function (selector) {
        _defaultHostSelector = selector;
    };
    LayerBase.prototype.componentDidMount = function () {
        this.componentDidUpdate();
    };
    LayerBase.prototype.componentWillUnmount = function () {
        var _this = this;
        this._removeLayerElement();
        if (this.props.hostId) {
            _layersByHostId[this.props.hostId] = _layersByHostId[this.props.hostId].filter(function (layer) { return layer !== _this; });
            if (!_layersByHostId[this.props.hostId].length) {
                delete _layersByHostId[this.props.hostId];
            }
        }
    };
    LayerBase.prototype.componentDidUpdate = function () {
        var _this = this;
        var host = this._getHost();
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        var classNames = getClassNames$4(styles, {
            theme: theme,
            className: className,
            isNotHost: !this.props.hostId
        });
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var rootElement = this._rootElement.current;
                var doc = getDocument(rootElement);
                if (!doc || !rootElement) {
                    return;
                }
                this._layerElement = doc.createElement('div');
                this._layerElement.className = classNames.root;
                host.appendChild(this._layerElement);
                setVirtualParent(this._layerElement, rootElement);
            }
            // Using this 'unstable' method allows us to retain the React context across the layer projection.
            unstable_renderSubtreeIntoContainer(this, createElement(Fabric, { className: classNames.content }, this.props.children), this._layerElement, function () {
                if (!_this._hasMounted) {
                    _this._hasMounted = true;
                    // TODO: @deprecated cleanup required.
                    if (_this.props.onLayerMounted) {
                        _this.props.onLayerMounted();
                    }
                    _this.props.onLayerDidMount();
                }
            });
        }
    };
    LayerBase.prototype.render = function () {
        return createElement("span", { className: "ms-Layer", ref: this._rootElement });
    };
    LayerBase.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            unmountComponentAtNode(this._layerElement);
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
            this._hasMounted = false;
        }
    };
    LayerBase.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = getDocument(this._rootElement.current);
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            return _defaultHostSelector ? doc.querySelector(_defaultHostSelector) : doc.body;
        }
    };
    LayerBase.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    LayerBase = __decorate([
        customizable('Layer', ['theme', 'hostId'])
    ], LayerBase);
    return LayerBase;
}(BaseComponent));

var GlobalClassNames$3 = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content'
};
var getStyles$4 = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = getGlobalClassNames(GlobalClassNames$3, theme);
    return {
        root: [
            classNames.root,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: ZIndexes.Layer,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    visibility: 'hidden'
                }
            ],
            className
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible'
            }
        ]
    };
};

var Layer = styled(LayerBase, getStyles$4);

var LayerHost = /** @class */ (function (_super) {
    __extends(LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        LayerBase.notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        LayerBase.notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return createElement("div", __assign({}, this.props, { className: css('ms-LayerHost', this.props.className) }));
    };
    return LayerHost;
}(BaseComponent));

var Callout = /** @class */ (function (_super) {
    __extends(Callout, _super);
    function Callout(props) {
        return _super.call(this, props) || this;
    }
    Callout.prototype.render = function () {
        var content = createElement(CalloutContent, __assign({}, this.props));
        return this.props.doNotLayer ? content : createElement(Layer, null, content);
    };
    return Callout;
}(BaseComponent));

var DirectionalHint;
(function (DirectionalHint) {
    /**
     * Appear above the target element, with the left edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topLeftEdge"] = 0] = "topLeftEdge";
    /**
     * Appear above the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topCenter"] = 1] = "topCenter";
    /**
     * Appear above the target element, with the right edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topRightEdge"] = 2] = "topRightEdge";
    /**
     * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    DirectionalHint[DirectionalHint["topAutoEdge"] = 3] = "topAutoEdge";
    /**
     * Appear below the target element, with the left edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomLeftEdge"] = 4] = "bottomLeftEdge";
    /**
     * Appear below the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomCenter"] = 5] = "bottomCenter";
    /**
     * Appear below the target element, with the right edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomRightEdge"] = 6] = "bottomRightEdge";
    /**
     * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    DirectionalHint[DirectionalHint["bottomAutoEdge"] = 7] = "bottomAutoEdge";
    /**
     * Appear to the left of the target element, with the top edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftTopEdge"] = 8] = "leftTopEdge";
    /**
     * Appear to the left of the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftCenter"] = 9] = "leftCenter";
    /**
     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftBottomEdge"] = 10] = "leftBottomEdge";
    /**
     * Appear to the right of the target element, with the top edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightTopEdge"] = 11] = "rightTopEdge";
    /**
     * Appear to the right of the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightCenter"] = 12] = "rightCenter";
    /**
     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightBottomEdge"] = 13] = "rightBottomEdge";
})(DirectionalHint || (DirectionalHint = {}));

var getClassNames$5 = classNamesFunction();
var LabelBase = /** @class */ (function (_super) {
    __extends(LabelBase, _super);
    function LabelBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelBase.prototype.render = function () {
        var _a = this.props, _b = _a.as, RootType = _b === void 0 ? 'label' : _b, children = _a.children, className = _a.className, disabled = _a.disabled, styles = _a.styles, required = _a.required, theme = _a.theme;
        var classNames = getClassNames$5(styles, {
            className: className,
            disabled: disabled,
            required: required,
            theme: theme
        });
        return (createElement(RootType, __assign({}, getNativeProps(this.props, divProperties), { className: classNames.root }), children));
    };
    LabelBase = __decorate([
        customizable('Label', ['theme', 'styles'])
    ], LabelBase);
    return LabelBase;
}(BaseComponent));

var getStyles$5 = function (props) {
    var theme = props.theme, className = props.className, disabled = props.disabled, required = props.required;
    return {
        root: [
            'ms-Label',
            {
                color: theme.semanticColors.bodyText,
                boxSizing: 'border-box',
                boxShadow: 'none',
                margin: 0,
                display: 'block',
                padding: '5px 0',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
            },
            disabled && {
                color: theme.semanticColors.disabledBodyText,
                selectors: (_a = {},
                    _a[HighContrastSelector] = {
                        color: 'GrayText'
                    },
                    _a)
            },
            required && {
                selectors: {
                    '::after': {
                        content: "' *'",
                        color: theme.semanticColors.errorText,
                        paddingRight: 12
                    }
                }
            },
            className
        ]
    };
    var _a;
};

var Label = styled(LabelBase, getStyles$5, undefined, {
    scope: 'Label'
});

/* tslint:disable */
loadStyles([{ "rawString": ".root_78d1c460{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;position:relative}.screenReaderOnly_78d1c460{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.fieldGroup_78d1c460{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;border:1px solid " }, { "theme": "inputBorder", "defaultValue": "#a6a6a6" }, { "rawString": ";background:" }, { "theme": "inputBackground", "defaultValue": "#ffffff" }, { "rawString": ";height:32px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;position:relative}.fieldGroup_78d1c460:hover{border-color:" }, { "theme": "inputBorderHovered", "defaultValue": "#212121" }, { "rawString": "}.fieldGroup_78d1c460.fieldGroupIsFocused_78d1c460{border-color:" }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.fieldGroup_78d1c460.fieldGroupIsFocused_78d1c460{border-width:2px}.fieldGroup_78d1c460.fieldGroupIsFocused_78d1c460 .field_78d1c460{padding:0 11px 0 11px}[dir='rtl'] .fieldGroup_78d1c460.fieldGroupIsFocused_78d1c460 .field_78d1c460{padding:0 11px 0 11px}}.fieldGroup_78d1c460.fieldGroupIsFocused_78d1c460.invalid_78d1c460{border-color:" }, { "theme": "errorText", "defaultValue": "#a80000" }, { "rawString": "}.rootIsDisabled_78d1c460 .fieldGroup_78d1c460{background-color:" }, { "theme": "disabledBackground", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "disabledBackground", "defaultValue": "#f4f4f4" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.fieldGroup_78d1c460:hover,.fieldGroup_78d1c460.fieldGroupIsFocused_78d1c460{border-color:Highlight}}.fieldGroup_78d1c460::-ms-clear{display:none}.fieldGroup_78d1c460 :-ms-input-placeholder,.fieldGroup_78d1c460 :-ms-input-placeholder{color:" }, { "theme": "inputPlaceholderText", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.fieldGroup_78d1c460 ::-ms-input-placeholder,.fieldGroup_78d1c460 :-ms-input-placeholder{color:" }, { "theme": "inputPlaceholderText", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.fieldGroup :-ms-input-placeholder,.fieldGroup :-ms-input-placeholder{color:" }, { "theme": "inputPlaceholderText", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.fieldGroup ::-ms-input-placeholder,.fieldGroup :-ms-input-placeholder{color:" }, { "theme": "inputPlaceholderText", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.fieldGroup_78d1c460 ::placeholder,.fieldGroup_78d1c460 :-ms-input-placeholder{color:" }, { "theme": "inputPlaceholderText", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.root_78d1c460.rootIsDisabled_78d1c460 .field{background-color:" }, { "theme": "disabledBackground", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "disabledBackground", "defaultValue": "#f4f4f4" }, { "rawString": "}.fieldPrefixSuffix_78d1c460{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;line-height:1;padding:0 10px;white-space:nowrap}.field_78d1c460{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;font-size:14px;border-radius:0;border:none;background:none;background-color:transparent;color:" }, { "theme": "bodyText", "defaultValue": "#333333" }, { "rawString": ";padding:0 12px 0 12px;width:100%;min-width:0;text-overflow:ellipsis;outline:0}[dir='rtl'] .field_78d1c460{padding:0 12px 0 12px}.field_78d1c460:active,.field_78d1c460:focus,.field_78d1c460:hover{outline:0}[dir='ltr'] .field_78d1c460.hasIcon_78d1c460{padding-right:24px}[dir='rtl'] .field_78d1c460.hasIcon_78d1c460{padding-left:24px}.field_78d1c460[disabled]{background-color:transparent;border-color:transparent}.field_78d1c460::-webkit-input-placeholder{color:" }, { "theme": "bodySubtext", "defaultValue": "#666666" }, { "rawString": "}.field_78d1c460:-ms-input-placeholder{color:" }, { "theme": "bodySubtext", "defaultValue": "#666666" }, { "rawString": "}.field_78d1c460::-ms-input-placeholder{color:" }, { "theme": "bodySubtext", "defaultValue": "#666666" }, { "rawString": "}.field::-webkit-input-placeholder{color:" }, { "theme": "bodySubtext", "defaultValue": "#666666" }, { "rawString": "}.field:-ms-input-placeholder{color:" }, { "theme": "bodySubtext", "defaultValue": "#666666" }, { "rawString": "}.field::-ms-input-placeholder{color:" }, { "theme": "bodySubtext", "defaultValue": "#666666" }, { "rawString": "}.field_78d1c460::placeholder{color:" }, { "theme": "bodySubtext", "defaultValue": "#666666" }, { "rawString": "}.root_78d1c460.rootIsRequiredLabel_78d1c460 .ms-Label::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.root_78d1c460.rootIsRequiredPlaceholderOnly_78d1c460 .ms-TextField-fieldGroup::after{content:'*';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": ";position:absolute;top:-5px}[dir='ltr'] .root_78d1c460.rootIsRequiredPlaceholderOnly_78d1c460 .ms-TextField-fieldGroup::after{right:-10px}[dir='rtl'] .root_78d1c460.rootIsRequiredPlaceholderOnly_78d1c460 .ms-TextField-fieldGroup::after{left:-10px}.root_78d1c460.rootIsActive_78d1c460{border-color:" }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_78d1c460.rootIsActive_78d1c460{border-width:2px}.root_78d1c460.rootIsActive_78d1c460 .field_78d1c460{padding:0 11px 0 11px}[dir='rtl'] .root_78d1c460.rootIsActive_78d1c460 .field_78d1c460{padding:0 11px 0 11px}}.icon_78d1c460{pointer-events:none;position:absolute;bottom:5px;top:auto;font-size:16px;line-height:18px}html[dir='ltr'] .icon_78d1c460{right:8px}html[dir='rtl'] .icon_78d1c460{left:8px}.description_78d1c460{color:" }, { "theme": "bodySubtext", "defaultValue": "#666666" }, { "rawString": ";font-size:11px}.rootIsBorderless_78d1c460 .fieldGroup_78d1c460{border-color:transparent;border-width:0}.root_78d1c460.rootIsUnderlined_78d1c460{border:0px solid " }, { "theme": "inputBorder", "defaultValue": "#a6a6a6" }, { "rawString": "}.root_78d1c460.rootIsUnderlined_78d1c460 .wrapper_78d1c460{display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:inherit;width:100%}.root_78d1c460.rootIsUnderlined_78d1c460 .wrapper_78d1c460.invalid_78d1c460,.root_78d1c460.rootIsUnderlined_78d1c460 .wrapper_78d1c460.invalid_78d1c460:focus,.root_78d1c460.rootIsUnderlined_78d1c460 .wrapper_78d1c460.invalid_78d1c460:hover{border-bottom:1px solid " }, { "theme": "errorText", "defaultValue": "#a80000" }, { "rawString": "}.root_78d1c460.rootIsUnderlined_78d1c460 .ms-Label{font-size:14px;line-height:22px;height:32px}[dir='ltr'] .root_78d1c460.rootIsUnderlined_78d1c460 .ms-Label{margin-right:8px}[dir='rtl'] .root_78d1c460.rootIsUnderlined_78d1c460 .ms-Label{margin-left:8px}[dir='ltr'] .root_78d1c460.rootIsUnderlined_78d1c460 .ms-Label{padding-left:12px}[dir='rtl'] .root_78d1c460.rootIsUnderlined_78d1c460 .ms-Label{padding-right:12px}.root_78d1c460.rootIsUnderlined_78d1c460 .fieldGroup_78d1c460{-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0px;border-width:0}[dir='ltr'] .root_78d1c460.rootIsUnderlined_78d1c460 .fieldGroup_78d1c460{text-align:left}[dir='rtl'] .root_78d1c460.rootIsUnderlined_78d1c460 .fieldGroup_78d1c460{text-align:right}.root_78d1c460.rootIsUnderlined_78d1c460.rootIsDisabled_78d1c460{border-color:" }, { "theme": "disabledBackground", "defaultValue": "#f4f4f4" }, { "rawString": "}.root_78d1c460.rootIsUnderlined_78d1c460.rootIsDisabled_78d1c460 .ms-Label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.root_78d1c460.rootIsUnderlined_78d1c460.rootIsDisabled_78d1c460 .field_78d1c460{background-color:transparent;color:" }, { "theme": "disabledText", "defaultValue": "#a6a6a6" }, { "rawString": "}.root_78d1c460.rootIsUnderlined_78d1c460.rootIsDisabled_78d1c460 .fieldGroup_78d1c460{background-color:transparent}.root_78d1c460.rootIsUnderlined_78d1c460:hover:not(.rootIsActive_78d1c460):not(.rootIsDisabled_78d1c460){border-color:" }, { "theme": "inputBorderHovered", "defaultValue": "#212121" }, { "rawString": "}.root_78d1c460.rootIsUnderlined_78d1c460.rootIsActive_78d1c460{border-color:" }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_78d1c460.rootIsUnderlined_78d1c460.rootIsActive_78d1c460{border-width:2px}.root_78d1c460.rootIsUnderlined_78d1c460.rootIsActive_78d1c460 .field_78d1c460{padding:0 11px 0 11px}[dir='rtl'] .root_78d1c460.rootIsUnderlined_78d1c460.rootIsActive_78d1c460 .field_78d1c460{padding:0 11px 0 11px}}@media screen and (-ms-high-contrast: active){.root_78d1c460.rootIsUnderlined_78d1c460:hover:not(.rootIsDisabled_78d1c460) .wrapper_78d1c460,.root_78d1c460.rootIsUnderlined_78d1c460.rootIsActive_78d1c460 .wrapper_78d1c460{border-color:Highlight}}.root_78d1c460.rootIsMultiline_78d1c460 .fieldGroup_78d1c460{min-height:60px;height:auto;display:-webkit-box;display:-ms-flexbox;display:flex}.root_78d1c460.rootIsMultiline_78d1c460 .field_78d1c460{line-height:17px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding-top:6px;overflow:auto;width:100%}[dir='ltr'] .root_78d1c460.rootIsMultiline_78d1c460 .field_78d1c460.hasIcon_78d1c460{padding-right:40px}[dir='rtl'] .root_78d1c460.rootIsMultiline_78d1c460 .field_78d1c460.hasIcon_78d1c460{padding-left:40px}.errorMessage_78d1c460{font-size:12px;font-weight:400;color:" }, { "theme": "errorText", "defaultValue": "#a80000" }, { "rawString": ";margin:0;padding-top:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.invalid_78d1c460,.invalid_78d1c460:focus,.invalid_78d1c460:hover{border-color:" }, { "theme": "errorText", "defaultValue": "#a80000" }, { "rawString": "}[dir='ltr'] .root_78d1c460.rootIsUnderlined_78d1c460 .ms-Label{padding-left:12px}[dir='rtl'] .root_78d1c460.rootIsUnderlined_78d1c460 .ms-Label{padding-right:12px}[dir='ltr'] .root_78d1c460.rootIsUnderlined_78d1c460 .ms-Label{padding-right:0}[dir='rtl'] .root_78d1c460.rootIsUnderlined_78d1c460 .ms-Label{padding-left:0}html[dir='ltr'] .root_78d1c460.rootIsUnderlined_78d1c460 .field_78d1c460{text-align:left}html[dir='rtl'] .root_78d1c460.rootIsUnderlined_78d1c460 .field_78d1c460{text-align:right}.root_78d1c460.rootIsMultiline_78d1c460 .icon_78d1c460{padding-bottom:8px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}[dir='ltr'] .root_78d1c460.rootIsMultiline_78d1c460 .icon_78d1c460{padding-right:24px}[dir='rtl'] .root_78d1c460.rootIsMultiline_78d1c460 .icon_78d1c460{padding-left:24px}.root_78d1c460.rootIsMultiline_78d1c460 .field_78d1c460.fieldIsUnresizable_78d1c460{resize:none}.hidden_78d1c460{display:none}\n" }]);
var root$1 = "root_78d1c460";
var screenReaderOnly = "screenReaderOnly_78d1c460";
var fieldGroup = "fieldGroup_78d1c460";
var fieldGroupIsFocused = "fieldGroupIsFocused_78d1c460";
var field = "field_78d1c460";
var invalid = "invalid_78d1c460";
var rootIsDisabled = "rootIsDisabled_78d1c460";
var fieldPrefixSuffix = "fieldPrefixSuffix_78d1c460";
var hasIcon = "hasIcon_78d1c460";
var rootIsRequiredLabel = "rootIsRequiredLabel_78d1c460";
var rootIsRequiredPlaceholderOnly = "rootIsRequiredPlaceholderOnly_78d1c460";
var rootIsActive = "rootIsActive_78d1c460";
var icon = "icon_78d1c460";
var description = "description_78d1c460";
var rootIsBorderless = "rootIsBorderless_78d1c460";
var rootIsUnderlined = "rootIsUnderlined_78d1c460";
var wrapper = "wrapper_78d1c460";
var rootIsMultiline = "rootIsMultiline_78d1c460";
var errorMessage = "errorMessage_78d1c460";
var fieldIsUnresizable = "fieldIsUnresizable_78d1c460";
var hidden = "hidden_78d1c460";

var stylesImport$1 = /*#__PURE__*/Object.freeze({
	root: root$1,
	screenReaderOnly: screenReaderOnly,
	fieldGroup: fieldGroup,
	fieldGroupIsFocused: fieldGroupIsFocused,
	field: field,
	invalid: invalid,
	rootIsDisabled: rootIsDisabled,
	fieldPrefixSuffix: fieldPrefixSuffix,
	hasIcon: hasIcon,
	rootIsRequiredLabel: rootIsRequiredLabel,
	rootIsRequiredPlaceholderOnly: rootIsRequiredPlaceholderOnly,
	rootIsActive: rootIsActive,
	icon: icon,
	description: description,
	rootIsBorderless: rootIsBorderless,
	rootIsUnderlined: rootIsUnderlined,
	wrapper: wrapper,
	rootIsMultiline: rootIsMultiline,
	errorMessage: errorMessage,
	fieldIsUnresizable: fieldIsUnresizable,
	hidden: hidden
});

var styles$3 = stylesImport$1;
var TextField = /** @class */ (function (_super) {
    __extends(TextField, _super);
    function TextField(props) {
        var _this = _super.call(this, props) || this;
        _this._textElement = createRef();
        _this._onRenderLabel = function (props) {
            if (props.label) {
                return createElement(Label, { htmlFor: _this._id }, props.label);
            }
            return null;
        };
        _this._onRenderDescription = function (props) {
            if (props.description) {
                return createElement("span", { className: css('ms-TextField-description', styles$3.description) }, props.description);
            }
            return null;
        };
        _this._warnDeprecations({
            iconClass: 'iconProps',
            addonString: 'prefix',
            onRenderAddon: 'onRenderPrefix'
        });
        _this._warnMutuallyExclusive({
            value: 'defaultValue'
        });
        _this._id = getId('TextField');
        _this._descriptionId = getId('TextFieldDescription');
        if (props.value !== undefined) {
            _this._latestValue = props.value;
        }
        else if (props.defaultValue !== undefined) {
            _this._latestValue = props.defaultValue;
        }
        else {
            _this._latestValue = '';
        }
        _this.state = {
            value: _this._latestValue,
            isFocused: false,
            errorMessage: ''
        };
        _this._onInputChange = _this._onInputChange.bind(_this);
        _this._onFocus = _this._onFocus.bind(_this);
        _this._onBlur = _this._onBlur.bind(_this);
        _this._delayedValidate = _this._async.debounce(_this._validate, _this.props.deferredValidationTime);
        _this._lastValidation = 0;
        _this._isDescriptionAvailable = false;
        return _this;
    }
    Object.defineProperty(TextField.prototype, "value", {
        /**
         * Gets the current value of the text field.
         */
        get: function () {
            return this.state.value;
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype.componentDidMount = function () {
        this._isMounted = true;
        this._adjustInputHeight();
        if (this.props.validateOnLoad) {
            this._validate(this.state.value);
        }
    };
    TextField.prototype.componentWillReceiveProps = function (newProps) {
        var _this = this;
        var onBeforeChange = this.props.onBeforeChange;
        if (newProps.value !== this.state.value) {
            if (onBeforeChange) {
                onBeforeChange(newProps.value);
            }
            this._latestValue = newProps.value;
            this.setState({
                value: newProps.value,
                errorMessage: ''
            }, function () {
                _this._adjustInputHeight();
            });
            this._delayedValidate(newProps.value);
        }
    };
    TextField.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    TextField.prototype.render = function () {
        var _a = this.props, className = _a.className, description$$1 = _a.description, disabled = _a.disabled, iconClass = _a.iconClass, iconProps = _a.iconProps, multiline = _a.multiline, required = _a.required, underlined = _a.underlined, borderless = _a.borderless, addonString = _a.addonString, // @deprecated
        prefix = _a.prefix, suffix = _a.suffix, _b = _a.onRenderAddon, onRenderAddon = _b === void 0 ? this._onRenderAddon : _b, // @deprecated
        _c = _a.onRenderPrefix, // @deprecated
        onRenderPrefix = _c === void 0 ? this._onRenderPrefix : _c, _d = _a.onRenderSuffix, onRenderSuffix = _d === void 0 ? this._onRenderSuffix : _d, _e = _a.onRenderLabel, onRenderLabel = _e === void 0 ? this._onRenderLabel : _e, _f = _a.onRenderDescription, onRenderDescription = _f === void 0 ? this._onRenderDescription : _f;
        var isFocused = this.state.isFocused;
        var errorMessage$$1 = this._errorMessage;
        // If a custom description render function is supplied then treat description as always available.
        // Otherwise defer to the presence of description or error message text.
        this._isDescriptionAvailable = Boolean(this.props.onRenderDescription || description$$1 || errorMessage$$1);
        var textFieldClassName = css('ms-TextField', styles$3.root, className, (_g = {},
            _g['is-required ' + styles$3.rootIsRequiredLabel] = this.props.label && required,
            _g['is-required ' + styles$3.rootIsRequiredPlaceholderOnly] = !this.props.label && required,
            _g['is-disabled ' + styles$3.rootIsDisabled] = disabled,
            _g['is-active ' + styles$3.rootIsActive] = isFocused,
            _g['ms-TextField--multiline ' + styles$3.rootIsMultiline] = multiline,
            _g['ms-TextField--underlined ' + styles$3.rootIsUnderlined] = underlined,
            _g['ms-TextField--borderless ' + styles$3.rootIsBorderless] = borderless,
            _g));
        return (createElement("div", { className: textFieldClassName },
            createElement("div", { className: css('ms-TextField-wrapper', styles$3.wrapper, underlined ? errorMessage$$1 && styles$3.invalid : '') },
                onRenderLabel(this.props, this._onRenderLabel),
                createElement("div", { className: css('ms-TextField-fieldGroup', styles$3.fieldGroup, isFocused && styles$3.fieldGroupIsFocused, errorMessage$$1 && styles$3.invalid) },
                    (addonString !== undefined || this.props.onRenderAddon) && (createElement("div", { className: css('ms-TextField-prefix', styles$3.fieldPrefixSuffix) }, onRenderAddon(this.props, this._onRenderAddon))),
                    (prefix !== undefined || this.props.onRenderPrefix) && (createElement("div", { className: css('ms-TextField-prefix', styles$3.fieldPrefixSuffix) }, onRenderPrefix(this.props, this._onRenderPrefix))),
                    multiline ? this._renderTextArea() : this._renderInput(),
                    (iconClass || iconProps) && createElement(Icon, __assign({ className: css(iconClass, styles$3.icon) }, iconProps)),
                    (suffix !== undefined || this.props.onRenderSuffix) && (createElement("div", { className: css('ms-TextField-suffix', styles$3.fieldPrefixSuffix) }, onRenderSuffix(this.props, this._onRenderSuffix))))),
            this._isDescriptionAvailable && (createElement("span", { id: this._descriptionId },
                onRenderDescription(this.props, this._onRenderDescription),
                errorMessage$$1 && (createElement("div", { "aria-live": "assertive" },
                    createElement(DelayedRender, null,
                        createElement("p", { className: css('ms-TextField-errorMessage', AnimationClassNames.slideDownIn20, styles$3.errorMessage) },
                            createElement("span", { className: styles$3.errorText, "data-automation-id": "error-message" }, errorMessage$$1)))))))));
        var _g;
    };
    /**
     * Sets focus on the text field
     */
    TextField.prototype.focus = function () {
        if (this._textElement.current) {
            this._textElement.current.focus();
        }
    };
    /**
     * Selects the text field
     */
    TextField.prototype.select = function () {
        if (this._textElement.current) {
            this._textElement.current.select();
        }
    };
    /**
     * Sets the selection start of the text field to a specified value
     */
    TextField.prototype.setSelectionStart = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionStart = value;
        }
    };
    /**
     * Sets the selection end of the text field to a specified value
     */
    TextField.prototype.setSelectionEnd = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionEnd = value;
        }
    };
    Object.defineProperty(TextField.prototype, "selectionStart", {
        /**
         * Gets the selection start of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextField.prototype, "selectionEnd", {
        /**
         * Gets the selection end of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start Index of the start of the selection.
     * @param end Index of the end of the selection.
     */
    TextField.prototype.setSelectionRange = function (start, end) {
        if (this._textElement.current) {
            this._textElement.current.setSelectionRange(start, end);
        }
    };
    TextField.prototype._onFocus = function (ev) {
        if (this.props.onFocus) {
            this.props.onFocus(ev);
        }
        this.setState({ isFocused: true });
        if (this.props.validateOnFocusIn) {
            this._validate(this.state.value);
        }
    };
    TextField.prototype._onBlur = function (ev) {
        if (this.props.onBlur) {
            this.props.onBlur(ev);
        }
        this.setState({ isFocused: false });
        if (this.props.validateOnFocusOut) {
            this._validate(this.state.value);
        }
    };
    // @deprecated
    TextField.prototype._onRenderAddon = function (props) {
        var addonString = props.addonString;
        return createElement("span", { style: { paddingBottom: '1px' } }, addonString);
    };
    TextField.prototype._onRenderPrefix = function (props) {
        var prefix = props.prefix;
        return createElement("span", { style: { paddingBottom: '1px' } }, prefix);
    };
    TextField.prototype._onRenderSuffix = function (props) {
        var suffix = props.suffix;
        return createElement("span", { style: { paddingBottom: '1px' } }, suffix);
    };
    TextField.prototype._getTextElementClassName = function () {
        var textFieldClassName;
        if (this.props.multiline && !this.props.resizable) {
            textFieldClassName = css('ms-TextField-field ms-TextField-field--unresizable', styles$3.field, styles$3.fieldIsUnresizable);
        }
        else {
            textFieldClassName = css('ms-TextField-field', styles$3.field);
        }
        return css(textFieldClassName, this.props.inputClassName, (_a = {},
            _a[styles$3.hasIcon] = !!this.props.iconClass,
            _a));
        var _a;
    };
    Object.defineProperty(TextField.prototype, "_errorMessage", {
        get: function () {
            var errorMessage$$1 = this.state.errorMessage;
            if (!errorMessage$$1) {
                errorMessage$$1 = this.props.errorMessage;
            }
            return errorMessage$$1;
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype._renderTextArea = function () {
        var textAreaProps = getNativeProps(this.props, textAreaProperties, ['defaultValue']);
        return (createElement("textarea", __assign({ id: this._id }, textAreaProps, { ref: this._textElement, value: this.state.value, onInput: this._onInputChange, onChange: this._onInputChange, className: this._getTextElementClassName(), "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": !!this.state.errorMessage, "aria-label": this.props.ariaLabel, readOnly: this.props.readOnly, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextField.prototype._renderInput = function () {
        var inputProps = getNativeProps(this.props, inputProperties, [
            'defaultValue'
        ]);
        return (createElement("input", __assign({ type: 'text', id: this._id }, inputProps, { ref: this._textElement, value: this.state.value === undefined ? '' : this.state.value, onInput: this._onInputChange, onChange: this._onInputChange, className: this._getTextElementClassName(), "aria-label": this.props.ariaLabel, "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": !!this.state.errorMessage, readOnly: this.props.readOnly, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextField.prototype._onInputChange = function (event) {
        var _this = this;
        var element = event.target;
        var value = element.value;
        // Avoid doing unnecessary work when the value has not changed.
        if (value === this._latestValue) {
            return;
        }
        this._latestValue = value;
        this.setState({
            value: value
        }, function () {
            _this._adjustInputHeight();
            if (_this.props.onChanged) {
                _this.props.onChanged(value);
            }
        });
        var _a = this.props, validateOnFocusIn = _a.validateOnFocusIn, validateOnFocusOut = _a.validateOnFocusOut;
        if (!(validateOnFocusIn || validateOnFocusOut)) {
            this._delayedValidate(value);
        }
        var onBeforeChange = this.props.onBeforeChange;
        onBeforeChange(value);
    };
    TextField.prototype._validate = function (value) {
        var _this = this;
        var _a = this.props, validateOnFocusIn = _a.validateOnFocusIn, validateOnFocusOut = _a.validateOnFocusOut;
        // In case of _validate called multi-times during executing validate logic with promise return.
        if (this._latestValidateValue === value && !(validateOnFocusIn || validateOnFocusOut)) {
            return;
        }
        this._latestValidateValue = value;
        var onGetErrorMessage = this.props.onGetErrorMessage;
        var result = onGetErrorMessage(value || '');
        if (result !== undefined) {
            if (typeof result === 'string') {
                this.setState({
                    errorMessage: result
                });
                this._notifyAfterValidate(value, result);
            }
            else {
                var currentValidation_1 = ++this._lastValidation;
                result.then(function (errorMessage$$1) {
                    if (_this._isMounted && currentValidation_1 === _this._lastValidation) {
                        _this.setState({ errorMessage: errorMessage$$1 });
                    }
                    _this._notifyAfterValidate(value, errorMessage$$1);
                });
            }
        }
        else {
            this._notifyAfterValidate(value, '');
        }
    };
    TextField.prototype._notifyAfterValidate = function (value, errorMessage$$1) {
        if (this._isMounted && value === this.state.value && this.props.onNotifyValidationResult) {
            this.props.onNotifyValidationResult(errorMessage$$1, value);
        }
    };
    TextField.prototype._adjustInputHeight = function () {
        if (this._textElement.current && this.props.autoAdjustHeight && this.props.multiline) {
            var textField = this._textElement.current;
            textField.style.height = '';
            var scrollHeight = textField.scrollHeight + 2; // +2 to avoid vertical scroll bars
            textField.style.height = scrollHeight + 'px';
        }
    };
    TextField.defaultProps = {
        multiline: false,
        resizable: true,
        autoAdjustHeight: false,
        underlined: false,
        borderless: false,
        onChanged: function () {
            /* noop */
        },
        onBeforeChange: function () {
            /* noop */
        },
        onNotifyValidationResult: function () {
            /* noop */
        },
        onGetErrorMessage: function () { return undefined; },
        deferredValidationTime: 200,
        errorMessage: '',
        validateOnFocusIn: false,
        validateOnFocusOut: false,
        validateOnLoad: true
    };
    return TextField;
}(BaseComponent));

var DEFAULT_MASK_FORMAT_CHARS = {
    '9': /[0-9]/,
    a: /[a-zA-Z]/,
    '*': /[a-zA-Z0-9]/
};
/**
 * Takes in the mask string and the formatCharacters and returns an array of MaskValues
 * Example:
 * mask = 'Phone Number: (999) - 9999'
 * return = [
 *    { value: undefined, displayIndex: 16, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 17, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 18, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 22, format: /[0-9]/ },
 * ]
 *
 * @param mask The string use to define the format of the displayed maskedValue.
 * @param formatChars An object defining how certain characters in the mask should accept input.
 */
function parseMask(mask, formatChars) {
    if (formatChars === void 0) { formatChars = DEFAULT_MASK_FORMAT_CHARS; }
    if (!mask) {
        return [];
    }
    var maskCharData = [];
    // Count the escape characters in the mask string.
    var escapedChars = 0;
    for (var i = 0; i + escapedChars < mask.length; i++) {
        var maskChar = mask.charAt(i + escapedChars);
        if (maskChar === '\\') {
            escapedChars++;
        }
        else {
            // Check if the maskChar is a format character.
            var maskFormat = formatChars[maskChar];
            if (maskFormat) {
                maskCharData.push({
                    /**
                     * Do not add escapedChars to the displayIndex.
                     * The index refers to a position in the mask's displayValue.
                     * Since the backslashes don't appear in the displayValue,
                     * we do not add them to the charData displayIndex.
                     */
                    displayIndex: i,
                    format: maskFormat
                });
            }
        }
    }
    return maskCharData;
}
/**
 * Takes in the mask string, an array of MaskValues, and the maskCharacter
 * returns the mask string formatted with the input values and maskCharacter.
 * If the maskChar is undefined, the maskDisplay is truncated to the last filled format character.
 * Example:
 * mask = 'Phone Number: (999) 999 - 9999'
 * maskCharData = '12345'
 * maskChar = '_'
 * return = 'Phone Number: (123) 45_ - ___'
 *
 * Example:
 * mask = 'Phone Number: (999) 999 - 9999'
 * value = '12345'
 * maskChar = undefined
 * return = 'Phone Number: (123) 45'
 *
 * @param mask The string use to define the format of the displayed maskedValue.
 * @param maskCharData The input values to insert into the mask string for displaying.
 * @param maskChar? A character to display in place of unfilled mask format characters.
 */
function getMaskDisplay(mask, maskCharData, maskChar) {
    var maskDisplay = mask;
    if (!maskDisplay) {
        return '';
    }
    // Remove all backslashes
    maskDisplay = maskDisplay.replace(/\\/g, '');
    // lastDisplayIndex is is used to truncate the string if necessary.
    var lastDisplayIndex = 0;
    if (maskCharData.length > 0) {
        lastDisplayIndex = maskCharData[0].displayIndex - 1;
    }
    /**
     * For each input value, replace the character in the maskDisplay with the value.
     * If there is no value set for the format character, use the maskChar.
     */
    for (var _i = 0, maskCharData_1 = maskCharData; _i < maskCharData_1.length; _i++) {
        var charData = maskCharData_1[_i];
        var nextChar = ' ';
        if (charData.value) {
            nextChar = charData.value;
            if (charData.displayIndex > lastDisplayIndex) {
                lastDisplayIndex = charData.displayIndex;
            }
        }
        else {
            if (maskChar) {
                nextChar = maskChar;
            }
        }
        // Insert the character into the maskdisplay at its corresponding index
        maskDisplay = maskDisplay.slice(0, charData.displayIndex) + nextChar + maskDisplay.slice(charData.displayIndex + 1);
    }
    // Cut off all mask characters after the last filled format value
    if (!maskChar) {
        maskDisplay = maskDisplay.slice(0, lastDisplayIndex + 1);
    }
    return maskDisplay;
}
/**
 * Get the next format index right of or at a specified index.
 * If no index exists, returns the rightmost index.
 * @param maskCharData
 * @param index
 */
function getRightFormatIndex(maskCharData, index) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= index) {
            return maskCharData[i].displayIndex;
        }
    }
    return maskCharData[maskCharData.length - 1].displayIndex;
}
/**
 * Get the next format index left of a specified index.
 * If no index exists, returns the leftmost index.
 * @param maskCharData
 * @param index
 */
function getLeftFormatIndex(maskCharData, index) {
    for (var i = maskCharData.length - 1; i >= 0; i--) {
        if (maskCharData[i].displayIndex < index) {
            return maskCharData[i].displayIndex;
        }
    }
    return maskCharData[0].displayIndex;
}
/**
 * Deletes all values in maskCharData with a displayIndex that falls inside the specified range.
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 * @param selectionCount
 */
function clearRange(maskCharData, selectionStart, selectionCount) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            if (maskCharData[i].displayIndex >= selectionStart + selectionCount) {
                break;
            }
            maskCharData[i].value = undefined;
        }
    }
    return maskCharData;
}
/**
 * Deletes the input character at or after a specified index and returns the new array of charData
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 */
function clearNext(maskCharData, selectionStart) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            maskCharData[i].value = undefined;
            break;
        }
    }
    return maskCharData;
}
/**
 * Deletes the input character before a specified index and returns the new array of charData
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 */
function clearPrev(maskCharData, selectionStart) {
    for (var i = maskCharData.length - 1; i >= 0; i--) {
        if (maskCharData[i].displayIndex < selectionStart) {
            maskCharData[i].value = undefined;
            break;
        }
    }
    return maskCharData;
}
/**
 * Deletes all values in maskCharData with a displayIndex that falls inside the specified range.
 * Modifies the maskCharData inplace with the passed string and returns the display index of the
 * next format character after the inserted string.
 * @param maskCharData
 * @param selectionStart
 * @param selectionCount
 * @return The displayIndex of the next format character
 */
function insertString(maskCharData, selectionStart, newString) {
    var stringIndex = 0, nextIndex = 0;
    // Iterate through _maskCharData finding values with a displayIndex after the specified range start
    for (var i = 0; i < maskCharData.length && stringIndex < newString.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            nextIndex = maskCharData[i].displayIndex;
            // Find the next character in the newString that matches the format
            while (stringIndex < newString.length) {
                // If the character matches the format regexp, set the maskCharData to the new character
                if (maskCharData[i].format.test(newString.charAt(stringIndex))) {
                    maskCharData[i].value = newString.charAt(stringIndex++);
                    // Set the nextIndex to the display index of the next mask format character.
                    if (i + 1 < maskCharData.length) {
                        nextIndex = maskCharData[i + 1].displayIndex;
                    }
                    else {
                        nextIndex++;
                    }
                    break;
                }
                stringIndex++;
            }
        }
    }
    return nextIndex;
}

var DEFAULT_MASK_CHAR = '_';
var inputChangeType;
(function (inputChangeType) {
    inputChangeType[inputChangeType["default"] = 0] = "default";
    inputChangeType[inputChangeType["backspace"] = 1] = "backspace";
    inputChangeType[inputChangeType["delete"] = 2] = "delete";
    inputChangeType[inputChangeType["textPasted"] = 3] = "textPasted";
})(inputChangeType || (inputChangeType = {}));
var MaskedTextField = /** @class */ (function (_super) {
    __extends(MaskedTextField, _super);
    function MaskedTextField(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        // Translate mask into charData
        _this._maskCharData = parseMask(props.mask, props.maskFormat);
        // If an initial value is provided, use it to populate the format chars
        props.value && _this.setValue(props.value);
        _this._isFocused = false;
        _this._moveCursorOnMouseUp = false;
        _this.state = {
            displayValue: getMaskDisplay(props.mask, _this._maskCharData, props.maskChar)
        };
        return _this;
    }
    MaskedTextField.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.mask !== this.props.mask) {
            this._maskCharData = parseMask(newProps.mask, newProps.maskFormat);
            this.state = {
                displayValue: getMaskDisplay(newProps.mask, this._maskCharData, newProps.maskChar)
            };
        }
    };
    MaskedTextField.prototype.componentDidUpdate = function () {
        // Move the cursor to the start of the mask format on update
        if (this.state.maskCursorPosition) {
            this._textField.setSelectionRange(this.state.maskCursorPosition, this.state.maskCursorPosition);
        }
    };
    MaskedTextField.prototype.render = function () {
        return (createElement(TextField, __assign({}, this.props, { onFocus: this._onFocus, onBlur: this._onBlur, onMouseDown: this._onMouseDown, onMouseUp: this._onMouseUp, onChanged: this._onInputChange, onBeforeChange: this._onBeforeChange, onKeyDown: this._onKeyDown, onPaste: this._onPaste, value: this.state.displayValue, ref: this._resolveRef('_textField') })));
    };
    Object.defineProperty(MaskedTextField.prototype, "value", {
        /**
         * @return The value of all filled format characters or undefined if not all format characters are filled
         */
        get: function () {
            var this$1 = this;

            var value = '';
            for (var i = 0; i < this._maskCharData.length; i++) {
                if (!this$1._maskCharData[i].value) {
                    return undefined;
                }
                value += this$1._maskCharData[i].value;
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     */
    MaskedTextField.prototype.setValue = function (newValue) {
        var this$1 = this;

        var valueIndex = 0, charDataIndex = 0;
        while (valueIndex < newValue.length && charDataIndex < this._maskCharData.length) {
            // Test if the next character in the new value fits the next format character
            var testVal = newValue[valueIndex];
            if (this$1._maskCharData[charDataIndex].format.test(testVal)) {
                this$1._maskCharData[charDataIndex].value = testVal;
                charDataIndex++;
            }
            valueIndex++;
        }
    };
    MaskedTextField.prototype.focus = function () {
        this._textField && this._textField.focus();
    };
    MaskedTextField.prototype.select = function () {
        this._textField && this._textField.select();
    };
    MaskedTextField.prototype.setSelectionStart = function (value) {
        this._textField && this._textField.setSelectionStart(value);
    };
    MaskedTextField.prototype.setSelectionEnd = function (value) {
        this._textField && this._textField.setSelectionEnd(value);
    };
    MaskedTextField.prototype.setSelectionRange = function (start, end) {
        this._textField && this._textField.setSelectionRange(start, end);
    };
    Object.defineProperty(MaskedTextField.prototype, "selectionStart", {
        get: function () {
            return this._textField && this._textField.selectionStart !== null ? this._textField.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextField.prototype, "selectionEnd", {
        get: function () {
            return this._textField && this._textField.selectionEnd ? this._textField.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    MaskedTextField.prototype._onFocus = function (event) {
        var this$1 = this;

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
        this._isFocused = true;
        // Move the cursor position to the leftmost unfilled position
        for (var i = 0; i < this._maskCharData.length; i++) {
            if (!this$1._maskCharData[i].value) {
                this$1.setState({
                    maskCursorPosition: this$1._maskCharData[i].displayIndex
                });
                break;
            }
        }
    };
    MaskedTextField.prototype._onBlur = function (event) {
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
        this._isFocused = false;
        this._moveCursorOnMouseUp = true;
    };
    MaskedTextField.prototype._onMouseDown = function (event) {
        if (this.props.onMouseDown) {
            this.props.onMouseDown(event);
        }
        if (!this._isFocused) {
            this._moveCursorOnMouseUp = true;
        }
    };
    MaskedTextField.prototype._onMouseUp = function (event) {
        var this$1 = this;

        if (this.props.onMouseUp) {
            this.props.onMouseUp(event);
        }
        // Move the cursor on mouseUp after focusing the textField
        if (this._moveCursorOnMouseUp) {
            this._moveCursorOnMouseUp = false;
            // Move the cursor position to the rightmost unfilled position
            for (var i = 0; i < this._maskCharData.length; i++) {
                if (!this$1._maskCharData[i].value) {
                    this$1.setState({
                        maskCursorPosition: this$1._maskCharData[i].displayIndex
                    });
                    break;
                }
            }
        }
    };
    MaskedTextField.prototype._onBeforeChange = function (value) {
        if (this.props.onBeforeChange) {
            this.props.onBeforeChange(value);
        }
        if (this._changeSelectionData === null) {
            this._changeSelectionData = {
                changeType: inputChangeType.default,
                selectionStart: this._textField.selectionStart !== null ? this._textField.selectionStart : -1,
                selectionEnd: this._textField.selectionEnd !== null ? this._textField.selectionEnd : -1
            };
        }
    };
    MaskedTextField.prototype._onInputChange = function (value) {
        if (this.props.onChanged) {
            this.props.onChanged(value);
        }
        if (!this._changeSelectionData) {
            return;
        }
        var displayValue = this.state.displayValue;
        // The initial value of cursorPos does not matter
        var cursorPos = 0;
        var _a = this._changeSelectionData, changeType = _a.changeType, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
        if (changeType === inputChangeType.textPasted) {
            var charsSelected = selectionEnd - selectionStart, charCount = value.length + charsSelected - displayValue.length, startPos = selectionStart, pastedString = value.substr(startPos, charCount);
            // Clear any selected characters
            if (charsSelected) {
                this._maskCharData = clearRange(this._maskCharData, selectionStart, charsSelected);
            }
            cursorPos = insertString(this._maskCharData, startPos, pastedString);
        }
        else if (changeType === inputChangeType.delete || changeType === inputChangeType.backspace) {
            // isDel is true If the characters are removed LTR, otherwise RTL
            var isDel = changeType === inputChangeType.delete, charCount = selectionEnd - selectionStart;
            if (charCount) {
                // charCount is > 0 if range was deleted
                this._maskCharData = clearRange(this._maskCharData, selectionStart, charCount);
                cursorPos = getRightFormatIndex(this._maskCharData, selectionStart);
            }
            else {
                // If charCount === 0, there was no selection and a single character was deleted
                if (isDel) {
                    this._maskCharData = clearNext(this._maskCharData, selectionStart);
                    cursorPos = getRightFormatIndex(this._maskCharData, selectionStart);
                }
                else {
                    this._maskCharData = clearPrev(this._maskCharData, selectionStart);
                    cursorPos = getLeftFormatIndex(this._maskCharData, selectionStart);
                }
            }
        }
        else if (value.length > displayValue.length) {
            // This case is if the user added characters
            var charCount = value.length - displayValue.length, startPos = selectionEnd - charCount, enteredString = value.substr(startPos, charCount);
            cursorPos = insertString(this._maskCharData, startPos, enteredString);
        }
        else if (value.length <= displayValue.length) {
            /**
             * This case is reached only if the user has selected a block of 1 or more
             * characters and input a character replacing the characters they've selected.
             */
            var charCount = 1, selectCount = displayValue.length + charCount - value.length, startPos = selectionEnd - charCount, enteredString = value.substr(startPos, charCount);
            // Clear the selected range
            this._maskCharData = clearRange(this._maskCharData, startPos, selectCount);
            // Insert the printed character
            cursorPos = insertString(this._maskCharData, startPos, enteredString);
        }
        this._changeSelectionData = null;
        this.setState({
            displayValue: getMaskDisplay(this.props.mask, this._maskCharData, this.props.maskChar),
            maskCursorPosition: cursorPos
        });
    };
    MaskedTextField.prototype._onKeyDown = function (event) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }
        this._changeSelectionData = null;
        if (this._textField.value) {
            var keyCode = event.keyCode, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
            // Ignore ctrl and meta keydown
            if (ctrlKey || metaKey) {
                return;
            }
            // On backspace or delete, store the selection and the keyCode
            if (keyCode === 8 /* backspace */ || keyCode === 46 /* del */) {
                var selectionStart = event.target.selectionStart, selectionEnd = event.target.selectionEnd;
                // Check if backspace or delete press is valid.
                if (!(keyCode === 8 /* backspace */ && selectionEnd && selectionEnd > 0) &&
                    !(keyCode === 46 /* del */ && selectionStart !== null && selectionStart < this._textField.value.length)) {
                    return;
                }
                this._changeSelectionData = {
                    changeType: keyCode === 8 /* backspace */ ? inputChangeType.backspace : inputChangeType.delete,
                    selectionStart: selectionStart !== null ? selectionStart : -1,
                    selectionEnd: selectionEnd !== null ? selectionEnd : -1
                };
            }
        }
    };
    MaskedTextField.prototype._onPaste = function (event) {
        if (this.props.onPaste) {
            this.props.onPaste(event);
        }
        var selectionStart = event.target.selectionStart, selectionEnd = event.target.selectionEnd;
        // Store the paste selection range
        this._changeSelectionData = {
            changeType: inputChangeType.textPasted,
            selectionStart: selectionStart !== null ? selectionStart : -1,
            selectionEnd: selectionEnd !== null ? selectionEnd : -1
        };
    };
    MaskedTextField.defaultProps = {
        maskChar: DEFAULT_MASK_CHAR,
        maskFormat: DEFAULT_MASK_FORMAT_CHARS
    };
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onFocus", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onBlur", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onMouseDown", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onMouseUp", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onBeforeChange", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onInputChange", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onKeyDown", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onPaste", null);
    return MaskedTextField;
}(BaseComponent));

/* tslint:disable */
loadStyles([{ "rawString": ".root_cd68f9c7{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0}.textField_cd68f9c7{position:relative}.textField_cd68f9c7 input::-ms-clear{display:none}.textField_cd68f9c7 input[readonly]{cursor:pointer}.eventWithLabel_cd68f9c7{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:16px;line-height:18px;pointer-events:none;position:absolute;bottom:5px}[dir='ltr'] .eventWithLabel_cd68f9c7{right:9px}[dir='rtl'] .eventWithLabel_cd68f9c7{left:9px}.eventWithLabel_cd68f9c7:not(.msDatePickerDisabled_cd68f9c7){pointer-events:initial;cursor:pointer}.eventWithoutLabel_cd68f9c7{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:16px;line-height:18px;pointer-events:none;position:absolute;top:7px}[dir='ltr'] .eventWithoutLabel_cd68f9c7{right:9px}[dir='rtl'] .eventWithoutLabel_cd68f9c7{left:9px}.eventWithoutLabel_cd68f9c7:not(.msDatePickerDisabled_cd68f9c7){pointer-events:initial;cursor:pointer}\n" }]);
var root$2 = "root_cd68f9c7";
var textField = "textField_cd68f9c7";
var eventWithLabel = "eventWithLabel_cd68f9c7";
var msDatePickerDisabled = "msDatePickerDisabled_cd68f9c7";
var eventWithoutLabel = "eventWithoutLabel_cd68f9c7";

var stylesImport$2 = /*#__PURE__*/Object.freeze({
	root: root$2,
	textField: textField,
	eventWithLabel: eventWithLabel,
	msDatePickerDisabled: msDatePickerDisabled,
	eventWithoutLabel: eventWithoutLabel
});

var FocusTrapZone = /** @class */ (function (_super) {
    __extends(FocusTrapZone, _super);
    function FocusTrapZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._root = createRef();
        _this._isInFocusStack = false;
        _this._isInClickStack = false;
        _this._onFocusCapture = function (ev) {
            if (_this.props.onFocusCapture) {
                _this.props.onFocusCapture(ev);
            }
            if (ev.target !== ev.currentTarget) {
                // every time focus changes within the trap zone, remember the focused element so that
                // it can be restored if focus leaves the pane and returns via keystroke (i.e. via a call to this.focus(true))
                _this._previouslyFocusedElementInTrapZone = ev.target;
            }
        };
        _this._onKeyboardHandler = function (ev) {
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the default has been prevented, do not process keyboard events.
            if (ev.isDefaultPrevented()) {
                return;
            }
            if (ev.which !== 9 /* tab */) {
                return;
            }
            if (!_this._root.current) {
                return;
            }
            var _firstTabbableChild = getFirstTabbable(_this._root.current, _this._root.current.firstChild, true);
            var _lastTabbableChild = getLastTabbable(_this._root.current, _this._root.current.lastChild, true);
            if (ev.shiftKey && _firstTabbableChild === ev.target) {
                focusAsync(_lastTabbableChild);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (!ev.shiftKey && _lastTabbableChild === ev.target) {
                focusAsync(_firstTabbableChild);
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        return _this;
    }
    FocusTrapZone.prototype.componentWillMount = function () {
        var _a = this.props, _b = _a.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _b === void 0 ? false : _b, _c = _a.forceFocusInsideTrap, forceFocusInsideTrap = _c === void 0 ? true : _c;
        if (forceFocusInsideTrap) {
            this._isInFocusStack = true;
            FocusTrapZone._focusStack.push(this);
        }
        if (!isClickableOutsideFocusTrap) {
            this._isInClickStack = true;
            FocusTrapZone._clickStack.push(this);
        }
    };
    FocusTrapZone.prototype.componentDidMount = function () {
        var _a = this.props, _b = _a.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _b === void 0 ? false : _b, _c = _a.forceFocusInsideTrap, forceFocusInsideTrap = _c === void 0 ? true : _c, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, _d = _a.disableFirstFocus, disableFirstFocus = _d === void 0 ? false : _d;
        this._previouslyFocusedElementOutsideTrapZone = elementToFocusOnDismiss
            ? elementToFocusOnDismiss
            : document.activeElement;
        if (!elementContains(this._root.current, this._previouslyFocusedElementOutsideTrapZone) && !disableFirstFocus) {
            this.focus();
        }
        if (forceFocusInsideTrap) {
            this._events.on(window, 'focus', this._forceFocusInTrap, true);
        }
        if (!isClickableOutsideFocusTrap) {
            this._events.on(window, 'click', this._forceClickInTrap, true);
        }
    };
    FocusTrapZone.prototype.componentWillReceiveProps = function (nextProps) {
        var elementToFocusOnDismiss = nextProps.elementToFocusOnDismiss;
        if (elementToFocusOnDismiss && this._previouslyFocusedElementOutsideTrapZone !== elementToFocusOnDismiss) {
            this._previouslyFocusedElementOutsideTrapZone = elementToFocusOnDismiss;
        }
    };
    FocusTrapZone.prototype.componentWillUnmount = function () {
        var _this = this;
        var ignoreExternalFocusing = this.props.ignoreExternalFocusing;
        this._events.dispose();
        if (this._isInFocusStack || this._isInClickStack) {
            var filter = function (value) {
                return _this !== value;
            };
            if (this._isInFocusStack) {
                FocusTrapZone._focusStack = FocusTrapZone._focusStack.filter(filter);
            }
            if (this._isInClickStack) {
                FocusTrapZone._clickStack = FocusTrapZone._clickStack.filter(filter);
            }
        }
        var activeElement = document.activeElement;
        if (!ignoreExternalFocusing &&
            this._previouslyFocusedElementOutsideTrapZone &&
            typeof this._previouslyFocusedElementOutsideTrapZone.focus === 'function' &&
            (elementContains(this._root.value, activeElement) || activeElement === document.body)) {
            focusAsync(this._previouslyFocusedElementOutsideTrapZone);
        }
    };
    FocusTrapZone.prototype.render = function () {
        var _a = this.props, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy;
        var divProps = getNativeProps(this.props, divProperties);
        return (createElement("div", __assign({}, divProps, { className: className, ref: this._root, "aria-labelledby": ariaLabelledBy, onKeyDown: this._onKeyboardHandler, onFocusCapture: this._onFocusCapture }), this.props.children));
    };
    FocusTrapZone.prototype.focus = function () {
        var _a = this.props, focusPreviouslyFocusedInnerElement = _a.focusPreviouslyFocusedInnerElement, firstFocusableSelector = _a.firstFocusableSelector;
        if (focusPreviouslyFocusedInnerElement &&
            this._previouslyFocusedElementInTrapZone &&
            elementContains(this._root.value, this._previouslyFocusedElementInTrapZone)) {
            // focus on the last item that had focus in the zone before we left the zone
            focusAsync(this._previouslyFocusedElementInTrapZone);
            return;
        }
        var focusSelector = typeof firstFocusableSelector === 'string'
            ? firstFocusableSelector
            : firstFocusableSelector && firstFocusableSelector();
        var _firstFocusableChild;
        if (this._root.current) {
            if (focusSelector) {
                _firstFocusableChild = this._root.current.querySelector('.' + focusSelector);
            }
            else {
                _firstFocusableChild = getNextElement(this._root.current, this._root.current.firstChild, true, false, false, true);
            }
        }
        if (_firstFocusableChild) {
            focusAsync(_firstFocusableChild);
        }
    };
    FocusTrapZone.prototype._forceFocusInTrap = function (ev) {
        if (FocusTrapZone._focusStack.length && this === FocusTrapZone._focusStack[FocusTrapZone._focusStack.length - 1]) {
            var focusedElement = document.activeElement;
            if (!elementContains(this._root.current, focusedElement)) {
                this.focus();
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    FocusTrapZone.prototype._forceClickInTrap = function (ev) {
        if (FocusTrapZone._clickStack.length && this === FocusTrapZone._clickStack[FocusTrapZone._clickStack.length - 1]) {
            var clickedElement = ev.target;
            if (clickedElement && !elementContains(this._root.current, clickedElement)) {
                this.focus();
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    FocusTrapZone._focusStack = [];
    FocusTrapZone._clickStack = [];
    return FocusTrapZone;
}(BaseComponent));

var styles$4 = stylesImport$2;
var DEFAULT_STRINGS = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year'
};
var DatePickerBase = /** @class */ (function (_super) {
    __extends(DatePickerBase, _super);
    function DatePickerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._calendar = createRef();
        _this._datePickerDiv = createRef();
        _this._textField = createRef();
        _this._onSelectDate = function (date) {
            var _a = _this.props, formatDate = _a.formatDate, onSelectDate = _a.onSelectDate;
            if (_this.props.calendarProps && _this.props.calendarProps.onSelectDate) {
                _this.props.calendarProps.onSelectDate(date);
            }
            _this.setState({
                selectedDate: date,
                formattedDate: formatDate && date ? formatDate(date) : ''
            });
            if (onSelectDate) {
                onSelectDate(date);
            }
            _this._calendarDismissed();
        };
        _this._onCalloutPositioned = function () {
            if (_this._calendar.current && !_this.props.disableAutoFocus) {
                _this._calendar.current.focus();
            }
        };
        _this._onTextFieldFocus = function (ev) {
            if (_this.props.disableAutoFocus) {
                return;
            }
            if (!_this.props.allowTextInput) {
                if (!_this._preventFocusOpeningPicker) {
                    _this._showDatePickerPopup();
                }
                else {
                    _this._preventFocusOpeningPicker = false;
                }
            }
        };
        _this._onTextFieldBlur = function (ev) {
            _this._validateTextInput();
        };
        _this._onTextFieldChanged = function (newValue) {
            if (_this.props.allowTextInput) {
                if (_this.state.isDatePickerShown) {
                    _this._dismissDatePickerPopup();
                }
                var _a = _this.props, isRequired = _a.isRequired, value = _a.value, strings = _a.strings;
                _this.setState({
                    errorMessage: isRequired && !value ? strings.isRequiredErrorMessage || ' ' : undefined,
                    formattedDate: newValue
                });
            }
        };
        _this._onTextFieldKeyDown = function (ev) {
            switch (ev.which) {
                case 13 /* enter */:
                    ev.preventDefault();
                    ev.stopPropagation();
                    if (!_this.state.isDatePickerShown) {
                        _this._showDatePickerPopup();
                    }
                    else {
                        // When DatePicker allows input date string directly,
                        // it is expected to hit another enter to close the popup
                        if (_this.props.allowTextInput) {
                            _this._dismissDatePickerPopup();
                        }
                    }
                    break;
                case 27 /* escape */:
                    _this._handleEscKey(ev);
                    break;
                default:
                    break;
            }
        };
        _this._onTextFieldClick = function (ev) {
            if (!_this.state.isDatePickerShown && !_this.props.disabled) {
                _this._showDatePickerPopup();
            }
            else {
                if (_this.props.allowTextInput) {
                    _this.setState({
                        isDatePickerShown: false
                    });
                }
            }
        };
        _this._onIconClick = function (ev) {
            ev.stopPropagation();
            _this._onTextFieldClick(ev);
        };
        _this._dismissDatePickerPopup = function () {
            if (_this.state.isDatePickerShown) {
                _this.setState({
                    isDatePickerShown: false
                });
                _this._validateTextInput();
            }
        };
        /**
         * Callback for closing the calendar callout
         */
        _this._calendarDismissed = function () {
            _this._preventFocusOpeningPicker = true;
            _this._dismissDatePickerPopup();
            // don't need to focus the text box, if necessary the focusTrapZone will do it
        };
        _this._handleEscKey = function (ev) {
            ev.stopPropagation();
            _this._calendarDismissed();
        };
        _this._validateTextInput = function () {
            var _a = _this.props, isRequired = _a.isRequired, allowTextInput = _a.allowTextInput, strings = _a.strings, parseDateFromString = _a.parseDateFromString, onSelectDate = _a.onSelectDate, formatDate = _a.formatDate, minDate = _a.minDate, maxDate = _a.maxDate;
            var inputValue = _this.state.formattedDate;
            // Do validation only if DatePicker's popup is dismissed
            if (_this.state.isDatePickerShown) {
                return;
            }
            // Check when DatePicker is a required field but has NO input value
            if (isRequired && !inputValue) {
                _this.setState({
                    errorMessage: strings.isRequiredErrorMessage || ' '
                });
                return;
            }
            if (allowTextInput) {
                var date = null;
                if (inputValue) {
                    // Don't parse if the selected date has the same formatted string as what we're about to parse.
                    // The formatted string might be ambiguous (ex: "1/2/3" or "New Year Eve") and the parser might
                    // not be able to come up with the exact same date.
                    if (_this.state.selectedDate && formatDate && formatDate(_this.state.selectedDate) === inputValue) {
                        date = _this.state.selectedDate;
                    }
                    else {
                        date = parseDateFromString(inputValue);
                        // Check if date is null, or date is Invalid Date
                        if (!date || isNaN(date.getTime())) {
                            // Reset invalid input field, if formatting is available
                            if (formatDate) {
                                date = _this.state.selectedDate;
                                _this.setState({
                                    formattedDate: formatDate(date).toString()
                                });
                            }
                            _this.setState({
                                errorMessage: strings.invalidInputErrorMessage || ' '
                            });
                        }
                        else {
                            // Check against optional date boundaries
                            if (_this._isDateOutOfBounds(date, minDate, maxDate)) {
                                _this.setState({
                                    errorMessage: strings.isOutOfBoundsErrorMessage || ' '
                                });
                            }
                            else {
                                _this.setState({
                                    selectedDate: date,
                                    errorMessage: ''
                                });
                                // When formatting is available. If formatted date is valid, but is different from input, update with formatted date
                                // This occurs when an invalid date is entered twice
                                if (formatDate && formatDate(date) !== inputValue) {
                                    _this.setState({
                                        formattedDate: formatDate(date).toString()
                                    });
                                }
                            }
                        }
                    }
                }
                else {
                    // No input date string shouldn't be an error if field is not required
                    _this.setState({
                        errorMessage: ''
                    });
                }
                // Execute onSelectDate callback
                if (onSelectDate) {
                    // If no input date string or input date string is invalid
                    // date variable will be null, callback should expect null value for this case
                    onSelectDate(date);
                }
            }
        };
        _this.state = _this._getDefaultState();
        _this._preventFocusOpeningPicker = false;
        return _this;
    }
    DatePickerBase.prototype.componentWillReceiveProps = function (nextProps) {
        var formatDate = nextProps.formatDate, isRequired = nextProps.isRequired, strings = nextProps.strings, value = nextProps.value, minDate = nextProps.minDate, maxDate = nextProps.maxDate;
        if (compareDates(this.props.minDate, nextProps.minDate) &&
            compareDates(this.props.maxDate, nextProps.maxDate) &&
            this.props.isRequired === nextProps.isRequired &&
            compareDates(this.state.selectedDate, value) &&
            this.props.formatDate === formatDate) {
            // if the props we care about haven't changed, don't run validation or updates
            return;
        }
        var errorMessage = isRequired && !value ? strings.isRequiredErrorMessage || ' ' : undefined;
        if (!errorMessage && value) {
            errorMessage = this._isDateOutOfBounds(value, minDate, maxDate)
                ? strings.isOutOfBoundsErrorMessage || ' '
                : undefined;
        }
        // Set error message
        this.setState({
            errorMessage: errorMessage
        });
        // Issue# 1274: Check if the date value changed from old value, i.e., if indeed a new date is being
        // passed in or if the formatting function was modified. We only update the selected date if either of these
        // had a legit change. Note tha the bug will still repro when only the formatDate was passed in props and this
        // is the result of the onSelectDate callback, but this should be a rare scenario.
        var oldValue = this.state.selectedDate;
        if (!compareDates(oldValue, value) || this.props.formatDate !== formatDate) {
            this.setState({
                selectedDate: value || undefined,
                formattedDate: formatDate && value ? formatDate(value) : ''
            });
        }
    };
    DatePickerBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        // If DatePicker's menu (Calendar) is closed, run onAfterMenuDismiss
        if (this.props.onAfterMenuDismiss && prevState.isDatePickerShown && !this.state.isDatePickerShown) {
            this.props.onAfterMenuDismiss();
        }
    };
    DatePickerBase.prototype.render = function () {
        var _a = this.props, firstDayOfWeek = _a.firstDayOfWeek, strings = _a.strings, label = _a.label, initialPickerDate = _a.initialPickerDate, isRequired = _a.isRequired, disabled = _a.disabled, ariaLabel = _a.ariaLabel, pickerAriaLabel = _a.pickerAriaLabel, placeholder = _a.placeholder, allowTextInput = _a.allowTextInput, borderless = _a.borderless, className = _a.className, minDate = _a.minDate, maxDate = _a.maxDate, calendarProps = _a.calendarProps;
        var _b = this.state, isDatePickerShown = _b.isDatePickerShown, formattedDate = _b.formattedDate, selectedDate = _b.selectedDate, errorMessage = _b.errorMessage;
        return (createElement("div", { className: css('ms-DatePicker', styles$4.root, isDatePickerShown && 'is-open', className) },
            createElement("div", { ref: this._datePickerDiv },
                createElement(TextField, { label: label, className: styles$4.textField, ariaLabel: ariaLabel, "aria-haspopup": "true", "aria-expanded": isDatePickerShown, required: isRequired, disabled: disabled, onKeyDown: this._onTextFieldKeyDown, onFocus: this._onTextFieldFocus, onBlur: this._onTextFieldBlur, onClick: this._onTextFieldClick, onChanged: this._onTextFieldChanged, errorMessage: errorMessage, placeholder: placeholder, borderless: borderless, iconProps: {
                        iconName: 'Calendar',
                        onClick: this._onIconClick,
                        className: css(disabled && styles$4.msDatePickerDisabled, label ? 'ms-DatePicker-event--with-label' : 'ms-DatePicker-event--without-label', label ? styles$4.eventWithLabel : styles$4.eventWithoutLabel)
                    }, readOnly: !allowTextInput, value: formattedDate, componentRef: this._textField, role: 'button' })),
            isDatePickerShown && (createElement(Callout, { role: "dialog", ariaLabel: pickerAriaLabel, isBeakVisible: false, className: css('ms-DatePicker-callout'), gapSpace: 0, doNotLayer: false, target: this._datePickerDiv.current, directionalHint: 4 /* bottomLeftEdge */, onDismiss: this._calendarDismissed, onPositioned: this._onCalloutPositioned },
                createElement(FocusTrapZone, { isClickableOutsideFocusTrap: true, disableFirstFocus: this.props.disableAutoFocus },
                    createElement(Calendar, __assign({}, calendarProps, { onSelectDate: this._onSelectDate, onDismiss: this._calendarDismissed, isMonthPickerVisible: this.props.isMonthPickerVisible, showMonthPickerAsOverlay: this.props.showMonthPickerAsOverlay, today: this.props.today, value: selectedDate || initialPickerDate, firstDayOfWeek: firstDayOfWeek, strings: strings, highlightCurrentMonth: this.props.highlightCurrentMonth, highlightSelectedMonth: this.props.highlightSelectedMonth, showWeekNumbers: this.props.showWeekNumbers, firstWeekOfYear: this.props.firstWeekOfYear, showGoToToday: this.props.showGoToToday, dateTimeFormatter: this.props.dateTimeFormatter, minDate: minDate, maxDate: maxDate, componentRef: this._calendar })))))));
    };
    DatePickerBase.prototype.focus = function () {
        if (this._textField.current) {
            this._textField.current.focus();
        }
    };
    DatePickerBase.prototype.reset = function () {
        this.setState(this._getDefaultState());
    };
    DatePickerBase.prototype._showDatePickerPopup = function () {
        if (!this.state.isDatePickerShown) {
            this._preventFocusOpeningPicker = true;
            this.setState({
                isDatePickerShown: true,
                errorMessage: ''
            });
        }
    };
    DatePickerBase.prototype._getDefaultState = function (props) {
        if (props === void 0) { props = this.props; }
        return {
            selectedDate: props.value || undefined,
            formattedDate: props.formatDate && props.value ? props.formatDate(props.value) : '',
            isDatePickerShown: false,
            errorMessage: undefined
        };
    };
    DatePickerBase.prototype._isDateOutOfBounds = function (date, minDate, maxDate) {
        return (!!minDate && compareDatePart(minDate, date) > 0) || (!!maxDate && compareDatePart(maxDate, date) < 0);
    };
    DatePickerBase.defaultProps = {
        allowTextInput: false,
        formatDate: function (date) {
            if (date) {
                return date.toDateString();
            }
            return '';
        },
        parseDateFromString: function (dateStr) {
            var date = Date.parse(dateStr);
            if (date) {
                return new Date(date);
            }
            return null;
        },
        firstDayOfWeek: DayOfWeek.Sunday,
        initialPickerDate: new Date(),
        isRequired: false,
        isMonthPickerVisible: true,
        showMonthPickerAsOverlay: false,
        strings: DEFAULT_STRINGS,
        highlightCurrentMonth: false,
        highlightSelectedMonth: false,
        borderless: false,
        pickerAriaLabel: 'Calender',
        showWeekNumbers: false,
        firstWeekOfYear: FirstWeekOfYear.FirstDay,
        showGoToToday: true,
        dateTimeFormatter: undefined
    };
    return DatePickerBase;
}(BaseComponent));

var getStyles$6 = function (props) {
    var className = props.className;
    return {
        root: [
            'ms-DatePicker',
            {
            // Insert css properties
            },
            className
        ]
        // Insert className styles
    };
};

/**
 * DatePicker description
 */
var DatePicker = styled(DatePickerBase, getStyles$6, undefined, { scope: 'DatePicker' });

var uiDatepicker = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('datepicker',{ref:"instance",staticClass:"root",attrs:{"passedProps":_vm.datePickerProps}})},staticRenderFns: [],_scopeId: 'data-v-43c12960',
    beforeCreate: function beforeCreate(){ loadStyles("i[data-icon-name='Up']::after { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1875 1011l-787 787v-1798h-128v1798l-787 -787l-90 90l941 941l941 -941z\" fill=\"black\" stroke=\"none\"/></svg>'); } i[data-icon-name='Down']::after { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1965 947l-941 -941l-941 941l90 90l787 -787v1798h128v-1798l787 787z\" fill=\"black\" stroke=\"none\"/></svg>'); } .root[data-v-43c12960] i[data-icon-name='Calendar']::after { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M768 1280h128v-128h-128v128zM1152 512h128v-128h-128v128zM1536 1280h128v-128h-128v128zM1152 1280h128v-128h-128v128zM768 1024h128v-128h-128v128zM384 1024h128v-128h-128v128zM1536 1024h128v-128h-128v128zM1152 1024h128v-128h-128v128zM768 768h128v-128h-128v128zM384 768h128v-128h-128v128zM1536 768h128v-128h-128v128zM1152 768h128v-128h-128v128zM768 512h128v-128h-128v128zM384 512h128v-128h-128v128zM2048 1920v-1792h-2048v1792h384v128h128v-128h1024v128h128v-128h384zM128 1792v-256h1792v256h-256v-128h-128v128h-1024v-128h-128v128h-256zM1920 256v1152h-1792v-1152h1792z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
    components : {
        datepicker : vuera_cjs_6(DatePicker)
    },
    props : ['value'],
    data : function(){
        var this$1 = this;

        return {
            selectedDate : null,
            datePickerProps : {
                initialPickerDate : this.value,
                value : this.value, 
                onSelectDate : function (date){
                    this$1.selectedDate = date;
                    this$1.datePickerProps.value = date;
                    this$1.$emit("input", date);
                }
            }
        };
    },
    watch: {
        value: function value(val) {
            this.selectedDate = val;
            this.datePickerProps.value = val;
        }
    },
    created: function created(){
        var this$1 = this;

        setInterval(function (){ return console.log("instance", this$1.$refs.instance.$children[0].reactComponentRef.state); }, 1000);
    }
}

export { uiDatepicker };
