import { useState, lazy, Suspense, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import bus from "./lib/EventBus";

const Index = lazy(() => import("./pages/index"));
const Store = lazy(() => import("./pages/Store"));
const Slot = lazy(() => import("./pages/Slot"));
const SlotName = lazy(() => import("./pages/SlotName"));
const Emit = lazy(() => import("./pages/Emit"));
const EventBus = lazy(() => import("./pages/EventBus"));
const Pure = lazy(() => import("./pages/Pure"));
const If = lazy(() => import("./pages/If"));
const List = lazy(() => import("./pages/List"));
const Watch = lazy(() => import("./pages/Watch"));
const Dynamic = lazy(() => import("./pages/Dynamic"));

export default function App(): JSX.Element {
  const [name, setName] = useState("Jac");
  const alertTest = (e: React.MouseEvent) => console.log(e);
  const menus = [
    {
      routeTo: "/",
      component: Index,
      props: {
        name
      },
      title: "index"
    },
    {
      routeTo: "/store",
      component: Store,
      title: "store"
    },
    {
      routeTo: "/slot",
      component: Slot,
      props: {
        children: <div className="font-black text-5xl">hello</div>
      },
      title: "slot"
    },
    {
      routeTo: "/slot-name",
      component: SlotName,
      props: {
        top: <span>top</span>,
        bottom: <span>bottom</span>
      },
      title: "slot-name"
    },
    {
      routeTo: "/emit",
      component: Emit,
      props: {
        onClick: alertTest
      },
      title: "emit"
    },
    {
      routeTo: "/event-bus",
      component: EventBus,
      title: "event-bus"
    },
    {
      routeTo: "/pure",
      component: Pure,
      title: "pure"
    },
    {
      routeTo: "/if",
      component: If,
      title: "if"
    },
    {
      routeTo: "/list",
      component: List,
      title: "list"
    },
    {
      routeTo: "/watch",
      component: Watch,
      title: "watch"
    },
    {
      routeTo: "/dynamic",
      component: Dynamic,
      title: "dynamic"
    }
  ];

  useEffect(() => {
    // mouned // componentDidMount
    bus.on("change-name", setName);
    // destroyed // componentWillUnmount
    return () => {
      bus.off("change-name");
    };
  });

  return (
    <div>
      <div className="my-nav">
        <div className="flex mb-2 border-t border-r border-l text-sm rounded overflow-hidden select-none">
          {menus.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.routeTo}
              exact
              className="my-nav-item"
              activeClassName="my-nav-item-active"
            >
              {menu.title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="antialiased mx-auto grid grid-cols-6">
        <div className="bg-blue-200 p-4 col-start-3 col-span-2">
          <input
            type="text"
            className="form-input block w-full my-4"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="col-start-2 col-span-4 bg-green-200 p-4">
          <Switch>
            {menus.map((menu, index) => (
              <Route exact key={index} path={menu.routeTo}>
                <Suspense fallback={<h1>Loading...</h1>}>
                  <menu.component {...menu.props} />
                </Suspense>
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
}
