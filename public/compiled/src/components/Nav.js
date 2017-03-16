"use strict";

var Nav = function Nav() {
  return React.createElement(
    "nav",
    null,
    React.createElement(
      "div",
      { className: "nav-container" },
      React.createElement(
        "ul",
        { className: "media-icons-container" },
        React.createElement(
          "li",
          { className: "media-icons" },
          React.createElement(
            "a",
            { href: "https://www.linkedin.com/in/chintimothy", target: "_blank" },
            React.createElement("i", { className: "fa fa-linkedin-square" })
          )
        ),
        React.createElement(
          "li",
          { className: "media-icons" },
          React.createElement(
            "a",
            { href: "https://github.com/timothychin", target: "_blank" },
            React.createElement("i", { className: "fa fa-github-square" })
          )
        ),
        React.createElement(
          "li",
          { className: "media-icons" },
          React.createElement(
            "a",
            { href: "https://drive.google.com/file/d/0B9eXeLfM_UvFSmxuakpiazFEeE0/view", target: "_blank" },
            React.createElement("i", { className: "fa fa-file-text" })
          )
        ),
        React.createElement(
          "li",
          { className: "media-icons" },
          React.createElement(
            "a",
            { href: "mailto:mail@timchin.co", target: "_top" },
            React.createElement("i", { className: "fa fa-envelope" })
          )
        )
      )
    )
  );
};

window.Nav = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdi5qc3giXSwibmFtZXMiOlsiTmF2Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU0sU0FBTkEsR0FBTTtBQUFBLFNBQ1I7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFFBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSx1QkFBZDtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVUsYUFBZDtBQUNFO0FBQUE7QUFBQSxjQUFHLE1BQUsseUNBQVIsRUFBa0QsUUFBTyxRQUF6RDtBQUFrRSx1Q0FBRyxXQUFVLHVCQUFiO0FBQWxFO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFJLFdBQVUsYUFBZDtBQUNFO0FBQUE7QUFBQSxjQUFHLE1BQUssZ0NBQVIsRUFBeUMsUUFBTyxRQUFoRDtBQUF5RCx1Q0FBRyxXQUFVLHFCQUFiO0FBQXpEO0FBREYsU0FKRjtBQU9FO0FBQUE7QUFBQSxZQUFJLFdBQVUsYUFBZDtBQUNFO0FBQUE7QUFBQSxjQUFHLE1BQUssbUVBQVIsRUFBNEUsUUFBTyxRQUFuRjtBQUE0Rix1Q0FBRyxXQUFVLGlCQUFiO0FBQTVGO0FBREYsU0FQRjtBQVVFO0FBQUE7QUFBQSxZQUFJLFdBQVUsYUFBZDtBQUNFO0FBQUE7QUFBQSxjQUFHLE1BQUssd0JBQVIsRUFBaUMsUUFBTyxNQUF4QztBQUErQyx1Q0FBRyxXQUFVLGdCQUFiO0FBQS9DO0FBREY7QUFWRjtBQURGO0FBREEsR0FEUTtBQUFBLENBQVY7O0FBcUJBQyxPQUFPRCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5hdiA9ICgpID0+IChcbiAgPG5hdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgPHVsIGNsYXNzTmFtZT1cIm1lZGlhLWljb25zLWNvbnRhaW5lclwiPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhLWljb25zXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY2hpbnRpbW90aHlcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpbi1zcXVhcmVcIj48L2k+PC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYS1pY29uc1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3RpbW90aHljaGluXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhLWljb25zXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzBCOWVYZUxmTV9VdkZTbXh1YWtwaWF6RkVlRTAvdmlld1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtdGV4dFwiPjwvaT48L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhLWljb25zXCI+XG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86bWFpbEB0aW1jaGluLmNvXCIgdGFyZ2V0PVwiX3RvcFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlXCI+PC9pPjwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDwvbmF2PlxuKTsgXG5cbndpbmRvdy5OYXYgPSBOYXY7Il19