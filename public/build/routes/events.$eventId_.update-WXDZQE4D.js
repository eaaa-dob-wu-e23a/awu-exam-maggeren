import {
  Calendar
} from "/build/_shared/chunk-XFFU4SYM.js";
import {
  Button
} from "/build/_shared/chunk-VURFDHSD.js";
import {
  require_browser_umd
} from "/build/_shared/chunk-GMSPC5K3.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_auth
} from "/build/_shared/chunk-SARLQUTN.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-BAS3MZGV.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XBRCCPV4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/events.$eventId_.update.jsx
var import_node = __toESM(require_node(), 1);
var import_mongoose = __toESM(require_browser_umd(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/events.$eventId_.update.jsx"
  );
  import.meta.hot.lastModified = "1710346283402.9138";
}
function meta() {
  return [
    {
      title: "FitMeet - Update Event"
    }
  ];
}
function updateEvent({ entry }) {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting" || navigation.state === "loading";
  const errors = actionData?.errors ?? null;
  const [image, setImage] = (0, import_react2.useState)(entry?.image ? entry?.image : null);
  const [selectedDate, setSelectedDate] = (0, import_react2.useState)();
  const { event, user } = useLoaderData();
  const hours = new Date(event?.date).getHours();
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  function handleImageChange(event2) {
    const file = event2.target.files[0];
    if (file.size < 5e5) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Image size must be less than 0.5MB.");
      event2.target.value = "";
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-black mt-10 mb-4 text-center", children: "Update Meetup" }, void 0, false, {
      fileName: "app/routes/events.$eventId_.update.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Form,
      {
        method: "post",
        className: "mt-4 flex-col items-center justify-center",
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "upper-div", className: "flex justify-center mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                id: "text-div",
                className: "w-full flex flex-col justify-center ml-10 mr-10",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-row space-x-4", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "inline text-lg mb-2 text-gray-700 text-start", children: "Title" }, void 0, false, {
                      fileName: "app/routes/events.$eventId_.update.jsx",
                      lineNumber: 95,
                      columnNumber: 15
                    }, this),
                    errors?.title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "inline text-red-500 text-sm", children: errors.title }, void 0, false, {
                      fileName: "app/routes/events.$eventId_.update.jsx",
                      lineNumber: 99,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/events.$eventId_.update.jsx",
                    lineNumber: 94,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "input",
                    {
                      id: "title",
                      type: "text",
                      name: "title",
                      className: "block w-full mb-4 rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6",
                      defaultValue: event?.title
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/events.$eventId_.update.jsx",
                      lineNumber: 102,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-row space-x-4", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "inline text-lg mb-2 text-gray-700 text-start", children: "Description" }, void 0, false, {
                      fileName: "app/routes/events.$eventId_.update.jsx",
                      lineNumber: 111,
                      columnNumber: 15
                    }, this),
                    errors?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "inline text-red-500 text-sm", children: errors.description }, void 0, false, {
                      fileName: "app/routes/events.$eventId_.update.jsx",
                      lineNumber: 115,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/events.$eventId_.update.jsx",
                    lineNumber: 110,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "textarea",
                    {
                      id: "text",
                      name: "description",
                      className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6",
                      defaultValue: event?.description
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/events.$eventId_.update.jsx",
                      lineNumber: 121,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-row space-x-4", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "inline text-lg mb-2 text-gray-700 text-start", children: "Location" }, void 0, false, {
                      fileName: "app/routes/events.$eventId_.update.jsx",
                      lineNumber: 129,
                      columnNumber: 15
                    }, this),
                    errors?.title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "inline text-red-500 text-sm", children: errors.location }, void 0, false, {
                      fileName: "app/routes/events.$eventId_.update.jsx",
                      lineNumber: 133,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/events.$eventId_.update.jsx",
                    lineNumber: 128,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "input",
                    {
                      id: "location",
                      type: "adress",
                      name: "location",
                      className: "block w-full pl-2 rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6",
                      defaultValue: event?.location
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/events.$eventId_.update.jsx",
                      lineNumber: 136,
                      columnNumber: 13
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/events.$eventId_.update.jsx",
                lineNumber: 90,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "image-div", className: "w-full flex justify-center mt-10", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  className: "hidden",
                  id: "file_input",
                  name: "image",
                  type: "file",
                  onChange: handleImageChange
                },
                void 0,
                false,
                {
                  fileName: "app/routes/events.$eventId_.update.jsx",
                  lineNumber: 145,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    id: "image-preview",
                    className: "cursor-pointer w-72 h-60 object-cover rounded-lg",
                    src: image ? image : "https://placehold.co/600x400/F1F5F9/000000?text=Upload+an+image",
                    alt: "Choose",
                    onError: (e) => e.target.src = "https://placehold.co/600x400?text=Error+loading+image",
                    onClick: () => document.getElementById("file_input").click()
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/events.$eventId_.update.jsx",
                    lineNumber: 153,
                    columnNumber: 15
                  },
                  this
                ),
                errors?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-sm", children: errors.image }, void 0, false, {
                  fileName: "app/routes/events.$eventId_.update.jsx",
                  lineNumber: 169,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/events.$eventId_.update.jsx",
                lineNumber: 152,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/events.$eventId_.update.jsx",
              lineNumber: 144,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/events.$eventId_.update.jsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "creator", type: "hidden", value: user._id ?? "" }, void 0, false, {
            fileName: "app/routes/events.$eventId_.update.jsx",
            lineNumber: 174,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "ml-20 w-full", onDateClick: handleDateClick }, void 0, false, {
              fileName: "app/routes/events.$eventId_.update.jsx",
              lineNumber: 176,
              columnNumber: 11
            }, this),
            errors?.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-sm ml-2", children: errors.date }, void 0, false, {
              fileName: "app/routes/events.$eventId_.update.jsx",
              lineNumber: 178,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "date", type: "hidden", value: selectedDate ?? "" }, void 0, false, {
              fileName: "app/routes/events.$eventId_.update.jsx",
              lineNumber: 181,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-8 flex flex-col items-center w-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "label",
                {
                  className: "block text-lg mb-2 text-gray-700 text-center",
                  htmlFor: "time",
                  children: "Time"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/events.$eventId_.update.jsx",
                  lineNumber: 184,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  id: "time",
                  type: "time",
                  name: "time",
                  className: "p-3 border border-gray-300 rounded",
                  defaultValue: event?.date
                },
                void 0,
                false,
                {
                  fileName: "app/routes/events.$eventId_.update.jsx",
                  lineNumber: 191,
                  columnNumber: 13
                },
                this
              ),
              errors?.time && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-sm", children: errors.time }, void 0, false, {
                fileName: "app/routes/events.$eventId_.update.jsx",
                lineNumber: 199,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/events.$eventId_.update.jsx",
              lineNumber: 183,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/events.$eventId_.update.jsx",
            lineNumber: 175,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Button,
            {
              type: "submit",
              className: "mt-6  p-3 bg-blue-500 text-white rounded cursor-pointer text-center",
              disabled: isSubmitting,
              children: "Create Meetup"
            },
            void 0,
            false,
            {
              fileName: "app/routes/events.$eventId_.update.jsx",
              lineNumber: 205,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/events.$eventId_.update.jsx",
            lineNumber: 204,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/events.$eventId_.update.jsx",
        lineNumber: 84,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/events.$eventId_.update.jsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
export {
  updateEvent as default,
  meta
};
//# sourceMappingURL=/build/routes/events.$eventId_.update-WXDZQE4D.js.map
