import React from 'react';
import PropTypes from 'prop-types';

export default function Task({task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className={`list-item ${state}`}>
            <label
                htmlFor="checked"
                aria-label={`archiveTask-${id}`}
                className="checkbox"
                >
                <input
                    type="checkbox"
                    disabled={true}
                    id={`archiveTask-${id}`}
                    checked={state == "TASK_ARCHIVED"}
                />
                <span
                    className="checkbox-custom"
                    onClick={() => onArchiveTask(id)}>
                </span>
            </label>
            <label
                htmlFor="title"
                aria-label={title}
                className="title"
                >
                <input
                    type="text"
                    value={title}
                    readOnly={true}
                    name="title"
                    placeholder="Input title"
                />
            </label>

            {state !== "TASK_ARCHIVED" && (
                <button
                    className="pin_button"
                    onClick={() => onPinTask(id)}
                    id={`pinTask-${id}`}
                    key={`pinTask-${id}`}
                >
                    <span className={`icon-star`} />
                </button>
            )}
        </div>
    );
}

Task.propTypes = {
    // Composition on the task
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};