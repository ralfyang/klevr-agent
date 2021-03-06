import React, { useState } from 'react';
import { x } from '@xstyled/emotion';
import { Box, Container, Button } from '@material-ui/core';
import AllTasks from 'src/components/task/AllTasks';
import OrderList from 'src/components/task/OrderList';
import SchedulerList from 'src/components/task/SchedulerList';

const content = [
  {
    tab: 'All',
    content: <AllTasks />
  },
  {
    tab: 'Order',
    content: <OrderList />
  },
  {
    tab: 'Scheduler',
    content: <SchedulerList />
  }
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex
  };
};

const TaskList = () => {
  const { contentItem, contentChange } = useTabs(0, content);
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <x.div
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="20"
          >
            <div>
              {content.map((section, index) => (
                <Button onClick={() => contentChange(index)}>
                  {section.tab}
                </Button>
              ))}
            </div>
            <Button color="primary" variant="contained" disabled>
              Add Task
            </Button>
          </x.div>
          {contentItem.content}
        </Container>
      </Box>
    </>
  );
};

export default TaskList;
