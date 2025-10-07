<!-- Generated 2025-10-07 09:26:01 -->
# roman-writing-mvp - Code Snapshot

## Projektstruktur
```
Auflistung der Ordnerpfade f³r Volume Boot
Volumeseriennummer : D072-BBC6
C:.
|   .dockerignore
|   .gitattributes
|   .gitignore
|   code-snapshot.md
|   Dockerfile
|   make-snapshot.ps1
|   README.md
|   snapshot.md
|   
+---.venv
|   |   pyvenv.cfg
|   |   
|   +---Include
|   |   \---site
|   |       \---python3.12
|   |           \---greenlet
|   |                   greenlet.h
|   |                   
|   +---Lib
|   |   \---site-packages
|   |       |   typing_extensions.py
|   |       |   
|   |       +---blinker
|   |       |   |   base.py
|   |       |   |   py.typed
|   |       |   |   _utilities.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           base.cpython-312.pyc
|   |       |           _utilities.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---blinker-1.9.0.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE.txt
|   |       |       METADATA
|   |       |       RECORD
|   |       |       WHEEL
|   |       |       
|   |       +---click
|   |       |   |   core.py
|   |       |   |   decorators.py
|   |       |   |   exceptions.py
|   |       |   |   formatting.py
|   |       |   |   globals.py
|   |       |   |   parser.py
|   |       |   |   py.typed
|   |       |   |   shell_completion.py
|   |       |   |   termui.py
|   |       |   |   testing.py
|   |       |   |   types.py
|   |       |   |   utils.py
|   |       |   |   _compat.py
|   |       |   |   _termui_impl.py
|   |       |   |   _textwrap.py
|   |       |   |   _utils.py
|   |       |   |   _winconsole.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           core.cpython-312.pyc
|   |       |           decorators.cpython-312.pyc
|   |       |           exceptions.cpython-312.pyc
|   |       |           formatting.cpython-312.pyc
|   |       |           globals.cpython-312.pyc
|   |       |           parser.cpython-312.pyc
|   |       |           shell_completion.cpython-312.pyc
|   |       |           termui.cpython-312.pyc
|   |       |           testing.cpython-312.pyc
|   |       |           types.cpython-312.pyc
|   |       |           utils.cpython-312.pyc
|   |       |           _compat.cpython-312.pyc
|   |       |           _termui_impl.cpython-312.pyc
|   |       |           _textwrap.cpython-312.pyc
|   |       |           _utils.cpython-312.pyc
|   |       |           _winconsole.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---click-8.3.0.dist-info
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE.txt
|   |       |           
|   |       +---colorama
|   |       |   |   ansi.py
|   |       |   |   ansitowin32.py
|   |       |   |   initialise.py
|   |       |   |   win32.py
|   |       |   |   winterm.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   +---tests
|   |       |   |   |   ansitowin32_test.py
|   |       |   |   |   ansi_test.py
|   |       |   |   |   initialise_test.py
|   |       |   |   |   isatty_test.py
|   |       |   |   |   utils.py
|   |       |   |   |   winterm_test.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           ansitowin32_test.cpython-312.pyc
|   |       |   |           ansi_test.cpython-312.pyc
|   |       |   |           initialise_test.cpython-312.pyc
|   |       |   |           isatty_test.cpython-312.pyc
|   |       |   |           utils.cpython-312.pyc
|   |       |   |           winterm_test.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           ansi.cpython-312.pyc
|   |       |           ansitowin32.cpython-312.pyc
|   |       |           initialise.cpython-312.pyc
|   |       |           win32.cpython-312.pyc
|   |       |           winterm.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---colorama-0.4.6.dist-info
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE.txt
|   |       |           
|   |       +---flask
|   |       |   |   app.py
|   |       |   |   blueprints.py
|   |       |   |   cli.py
|   |       |   |   config.py
|   |       |   |   ctx.py
|   |       |   |   debughelpers.py
|   |       |   |   globals.py
|   |       |   |   helpers.py
|   |       |   |   logging.py
|   |       |   |   py.typed
|   |       |   |   sessions.py
|   |       |   |   signals.py
|   |       |   |   templating.py
|   |       |   |   testing.py
|   |       |   |   typing.py
|   |       |   |   views.py
|   |       |   |   wrappers.py
|   |       |   |   __init__.py
|   |       |   |   __main__.py
|   |       |   |   
|   |       |   +---json
|   |       |   |   |   provider.py
|   |       |   |   |   tag.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           provider.cpython-312.pyc
|   |       |   |           tag.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---sansio
|   |       |   |   |   app.py
|   |       |   |   |   blueprints.py
|   |       |   |   |   README.md
|   |       |   |   |   scaffold.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           app.cpython-312.pyc
|   |       |   |           blueprints.cpython-312.pyc
|   |       |   |           scaffold.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           app.cpython-312.pyc
|   |       |           blueprints.cpython-312.pyc
|   |       |           cli.cpython-312.pyc
|   |       |           config.cpython-312.pyc
|   |       |           ctx.cpython-312.pyc
|   |       |           debughelpers.cpython-312.pyc
|   |       |           globals.cpython-312.pyc
|   |       |           helpers.cpython-312.pyc
|   |       |           logging.cpython-312.pyc
|   |       |           sessions.cpython-312.pyc
|   |       |           signals.cpython-312.pyc
|   |       |           templating.cpython-312.pyc
|   |       |           testing.cpython-312.pyc
|   |       |           typing.cpython-312.pyc
|   |       |           views.cpython-312.pyc
|   |       |           wrappers.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           __main__.cpython-312.pyc
|   |       |           
|   |       +---flask-3.0.3.dist-info
|   |       |       entry_points.txt
|   |       |       INSTALLER
|   |       |       LICENSE.txt
|   |       |       METADATA
|   |       |       RECORD
|   |       |       REQUESTED
|   |       |       WHEEL
|   |       |       
|   |       +---flask_cors
|   |       |   |   core.py
|   |       |   |   decorator.py
|   |       |   |   extension.py
|   |       |   |   version.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           core.cpython-312.pyc
|   |       |           decorator.cpython-312.pyc
|   |       |           extension.cpython-312.pyc
|   |       |           version.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---Flask_Cors-4.0.1.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE
|   |       |       METADATA
|   |       |       RECORD
|   |       |       REQUESTED
|   |       |       top_level.txt
|   |       |       WHEEL
|   |       |       
|   |       +---flask_sqlalchemy
|   |       |   |   cli.py
|   |       |   |   extension.py
|   |       |   |   model.py
|   |       |   |   pagination.py
|   |       |   |   py.typed
|   |       |   |   query.py
|   |       |   |   record_queries.py
|   |       |   |   session.py
|   |       |   |   table.py
|   |       |   |   track_modifications.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           cli.cpython-312.pyc
|   |       |           extension.cpython-312.pyc
|   |       |           model.cpython-312.pyc
|   |       |           pagination.cpython-312.pyc
|   |       |           query.cpython-312.pyc
|   |       |           record_queries.cpython-312.pyc
|   |       |           session.cpython-312.pyc
|   |       |           table.cpython-312.pyc
|   |       |           track_modifications.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---flask_sqlalchemy-3.1.1.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE.rst
|   |       |       METADATA
|   |       |       RECORD
|   |       |       REQUESTED
|   |       |       WHEEL
|   |       |       
|   |       +---greenlet
|   |       |   |   CObjects.cpp
|   |       |   |   greenlet.cpp
|   |       |   |   greenlet.h
|   |       |   |   greenlet_allocator.hpp
|   |       |   |   greenlet_compiler_compat.hpp
|   |       |   |   greenlet_cpython_compat.hpp
|   |       |   |   greenlet_exceptions.hpp
|   |       |   |   greenlet_internal.hpp
|   |       |   |   greenlet_msvc_compat.hpp
|   |       |   |   greenlet_refs.hpp
|   |       |   |   greenlet_slp_switch.hpp
|   |       |   |   greenlet_thread_support.hpp
|   |       |   |   PyGreenlet.cpp
|   |       |   |   PyGreenlet.hpp
|   |       |   |   PyGreenletUnswitchable.cpp
|   |       |   |   PyModule.cpp
|   |       |   |   slp_platformselect.h
|   |       |   |   TBrokenGreenlet.cpp
|   |       |   |   TExceptionState.cpp
|   |       |   |   TGreenlet.cpp
|   |       |   |   TGreenlet.hpp
|   |       |   |   TGreenletGlobals.cpp
|   |       |   |   TMainGreenlet.cpp
|   |       |   |   TPythonState.cpp
|   |       |   |   TStackState.cpp
|   |       |   |   TThreadState.hpp
|   |       |   |   TThreadStateCreator.hpp
|   |       |   |   TThreadStateDestroy.cpp
|   |       |   |   TUserGreenlet.cpp
|   |       |   |   _greenlet.cp312-win_amd64.pyd
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   +---platform
|   |       |   |   |   setup_switch_x64_masm.cmd
|   |       |   |   |   switch_aarch64_gcc.h
|   |       |   |   |   switch_alpha_unix.h
|   |       |   |   |   switch_amd64_unix.h
|   |       |   |   |   switch_arm32_gcc.h
|   |       |   |   |   switch_arm32_ios.h
|   |       |   |   |   switch_arm64_masm.asm
|   |       |   |   |   switch_arm64_masm.obj
|   |       |   |   |   switch_arm64_msvc.h
|   |       |   |   |   switch_csky_gcc.h
|   |       |   |   |   switch_loongarch64_linux.h
|   |       |   |   |   switch_m68k_gcc.h
|   |       |   |   |   switch_mips_unix.h
|   |       |   |   |   switch_ppc64_aix.h
|   |       |   |   |   switch_ppc64_linux.h
|   |       |   |   |   switch_ppc_aix.h
|   |       |   |   |   switch_ppc_linux.h
|   |       |   |   |   switch_ppc_macosx.h
|   |       |   |   |   switch_ppc_unix.h
|   |       |   |   |   switch_riscv_unix.h
|   |       |   |   |   switch_s390_unix.h
|   |       |   |   |   switch_sh_gcc.h
|   |       |   |   |   switch_sparc_sun_gcc.h
|   |       |   |   |   switch_x32_unix.h
|   |       |   |   |   switch_x64_masm.asm
|   |       |   |   |   switch_x64_masm.obj
|   |       |   |   |   switch_x64_msvc.h
|   |       |   |   |   switch_x86_msvc.h
|   |       |   |   |   switch_x86_unix.h
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---tests
|   |       |   |   |   fail_clearing_run_switches.py
|   |       |   |   |   fail_cpp_exception.py
|   |       |   |   |   fail_initialstub_already_started.py
|   |       |   |   |   fail_slp_switch.py
|   |       |   |   |   fail_switch_three_greenlets.py
|   |       |   |   |   fail_switch_three_greenlets2.py
|   |       |   |   |   fail_switch_two_greenlets.py
|   |       |   |   |   leakcheck.py
|   |       |   |   |   test_contextvars.py
|   |       |   |   |   test_cpp.py
|   |       |   |   |   test_extension_interface.py
|   |       |   |   |   test_gc.py
|   |       |   |   |   test_generator.py
|   |       |   |   |   test_generator_nested.py
|   |       |   |   |   test_greenlet.py
|   |       |   |   |   test_greenlet_trash.py
|   |       |   |   |   test_leaks.py
|   |       |   |   |   test_stack_saved.py
|   |       |   |   |   test_throw.py
|   |       |   |   |   test_tracing.py
|   |       |   |   |   test_version.py
|   |       |   |   |   test_weakref.py
|   |       |   |   |   _test_extension.c
|   |       |   |   |   _test_extension.cp312-win_amd64.pyd
|   |       |   |   |   _test_extension_cpp.cp312-win_amd64.pyd
|   |       |   |   |   _test_extension_cpp.cpp
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           fail_clearing_run_switches.cpython-312.pyc
|   |       |   |           fail_cpp_exception.cpython-312.pyc
|   |       |   |           fail_initialstub_already_started.cpython-312.pyc
|   |       |   |           fail_slp_switch.cpython-312.pyc
|   |       |   |           fail_switch_three_greenlets.cpython-312.pyc
|   |       |   |           fail_switch_three_greenlets2.cpython-312.pyc
|   |       |   |           fail_switch_two_greenlets.cpython-312.pyc
|   |       |   |           leakcheck.cpython-312.pyc
|   |       |   |           test_contextvars.cpython-312.pyc
|   |       |   |           test_cpp.cpython-312.pyc
|   |       |   |           test_extension_interface.cpython-312.pyc
|   |       |   |           test_gc.cpython-312.pyc
|   |       |   |           test_generator.cpython-312.pyc
|   |       |   |           test_generator_nested.cpython-312.pyc
|   |       |   |           test_greenlet.cpython-312.pyc
|   |       |   |           test_greenlet_trash.cpython-312.pyc
|   |       |   |           test_leaks.cpython-312.pyc
|   |       |   |           test_stack_saved.cpython-312.pyc
|   |       |   |           test_throw.cpython-312.pyc
|   |       |   |           test_tracing.cpython-312.pyc
|   |       |   |           test_version.cpython-312.pyc
|   |       |   |           test_weakref.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---greenlet-3.2.4.dist-info
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   top_level.txt
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE
|   |       |           LICENSE.PSF
|   |       |           
|   |       +---itsdangerous
|   |       |   |   encoding.py
|   |       |   |   exc.py
|   |       |   |   py.typed
|   |       |   |   serializer.py
|   |       |   |   signer.py
|   |       |   |   timed.py
|   |       |   |   url_safe.py
|   |       |   |   _json.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           encoding.cpython-312.pyc
|   |       |           exc.cpython-312.pyc
|   |       |           serializer.cpython-312.pyc
|   |       |           signer.cpython-312.pyc
|   |       |           timed.cpython-312.pyc
|   |       |           url_safe.cpython-312.pyc
|   |       |           _json.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---itsdangerous-2.2.0.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE.txt
|   |       |       METADATA
|   |       |       RECORD
|   |       |       WHEEL
|   |       |       
|   |       +---jinja2
|   |       |   |   async_utils.py
|   |       |   |   bccache.py
|   |       |   |   compiler.py
|   |       |   |   constants.py
|   |       |   |   debug.py
|   |       |   |   defaults.py
|   |       |   |   environment.py
|   |       |   |   exceptions.py
|   |       |   |   ext.py
|   |       |   |   filters.py
|   |       |   |   idtracking.py
|   |       |   |   lexer.py
|   |       |   |   loaders.py
|   |       |   |   meta.py
|   |       |   |   nativetypes.py
|   |       |   |   nodes.py
|   |       |   |   optimizer.py
|   |       |   |   parser.py
|   |       |   |   py.typed
|   |       |   |   runtime.py
|   |       |   |   sandbox.py
|   |       |   |   tests.py
|   |       |   |   utils.py
|   |       |   |   visitor.py
|   |       |   |   _identifier.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           async_utils.cpython-312.pyc
|   |       |           bccache.cpython-312.pyc
|   |       |           compiler.cpython-312.pyc
|   |       |           constants.cpython-312.pyc
|   |       |           debug.cpython-312.pyc
|   |       |           defaults.cpython-312.pyc
|   |       |           environment.cpython-312.pyc
|   |       |           exceptions.cpython-312.pyc
|   |       |           ext.cpython-312.pyc
|   |       |           filters.cpython-312.pyc
|   |       |           idtracking.cpython-312.pyc
|   |       |           lexer.cpython-312.pyc
|   |       |           loaders.cpython-312.pyc
|   |       |           meta.cpython-312.pyc
|   |       |           nativetypes.cpython-312.pyc
|   |       |           nodes.cpython-312.pyc
|   |       |           optimizer.cpython-312.pyc
|   |       |           parser.cpython-312.pyc
|   |       |           runtime.cpython-312.pyc
|   |       |           sandbox.cpython-312.pyc
|   |       |           tests.cpython-312.pyc
|   |       |           utils.cpython-312.pyc
|   |       |           visitor.cpython-312.pyc
|   |       |           _identifier.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---jinja2-3.1.6.dist-info
|   |       |   |   entry_points.txt
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE.txt
|   |       |           
|   |       +---markupsafe
|   |       |   |   py.typed
|   |       |   |   _native.py
|   |       |   |   _speedups.c
|   |       |   |   _speedups.cp312-win_amd64.pyd
|   |       |   |   _speedups.pyi
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   \---__pycache__
|   |       |           _native.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---markupsafe-3.0.3.dist-info
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   top_level.txt
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE.txt
|   |       |           
|   |       +---pip
|   |       |   |   py.typed
|   |       |   |   __init__.py
|   |       |   |   __main__.py
|   |       |   |   __pip-runner__.py
|   |       |   |   
|   |       |   +---_internal
|   |       |   |   |   build_env.py
|   |       |   |   |   cache.py
|   |       |   |   |   configuration.py
|   |       |   |   |   exceptions.py
|   |       |   |   |   main.py
|   |       |   |   |   pyproject.py
|   |       |   |   |   self_outdated_check.py
|   |       |   |   |   wheel_builder.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---cli
|   |       |   |   |   |   autocompletion.py
|   |       |   |   |   |   base_command.py
|   |       |   |   |   |   cmdoptions.py
|   |       |   |   |   |   command_context.py
|   |       |   |   |   |   index_command.py
|   |       |   |   |   |   main.py
|   |       |   |   |   |   main_parser.py
|   |       |   |   |   |   parser.py
|   |       |   |   |   |   progress_bars.py
|   |       |   |   |   |   req_command.py
|   |       |   |   |   |   spinners.py
|   |       |   |   |   |   status_codes.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           autocompletion.cpython-312.pyc
|   |       |   |   |           base_command.cpython-312.pyc
|   |       |   |   |           cmdoptions.cpython-312.pyc
|   |       |   |   |           command_context.cpython-312.pyc
|   |       |   |   |           index_command.cpython-312.pyc
|   |       |   |   |           main.cpython-312.pyc
|   |       |   |   |           main_parser.cpython-312.pyc
|   |       |   |   |           parser.cpython-312.pyc
|   |       |   |   |           progress_bars.cpython-312.pyc
|   |       |   |   |           req_command.cpython-312.pyc
|   |       |   |   |           spinners.cpython-312.pyc
|   |       |   |   |           status_codes.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---commands
|   |       |   |   |   |   cache.py
|   |       |   |   |   |   check.py
|   |       |   |   |   |   completion.py
|   |       |   |   |   |   configuration.py
|   |       |   |   |   |   debug.py
|   |       |   |   |   |   download.py
|   |       |   |   |   |   freeze.py
|   |       |   |   |   |   hash.py
|   |       |   |   |   |   help.py
|   |       |   |   |   |   index.py
|   |       |   |   |   |   inspect.py
|   |       |   |   |   |   install.py
|   |       |   |   |   |   list.py
|   |       |   |   |   |   search.py
|   |       |   |   |   |   show.py
|   |       |   |   |   |   uninstall.py
|   |       |   |   |   |   wheel.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           cache.cpython-312.pyc
|   |       |   |   |           check.cpython-312.pyc
|   |       |   |   |           completion.cpython-312.pyc
|   |       |   |   |           configuration.cpython-312.pyc
|   |       |   |   |           debug.cpython-312.pyc
|   |       |   |   |           download.cpython-312.pyc
|   |       |   |   |           freeze.cpython-312.pyc
|   |       |   |   |           hash.cpython-312.pyc
|   |       |   |   |           help.cpython-312.pyc
|   |       |   |   |           index.cpython-312.pyc
|   |       |   |   |           inspect.cpython-312.pyc
|   |       |   |   |           install.cpython-312.pyc
|   |       |   |   |           list.cpython-312.pyc
|   |       |   |   |           search.cpython-312.pyc
|   |       |   |   |           show.cpython-312.pyc
|   |       |   |   |           uninstall.cpython-312.pyc
|   |       |   |   |           wheel.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---distributions
|   |       |   |   |   |   base.py
|   |       |   |   |   |   installed.py
|   |       |   |   |   |   sdist.py
|   |       |   |   |   |   wheel.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           installed.cpython-312.pyc
|   |       |   |   |           sdist.cpython-312.pyc
|   |       |   |   |           wheel.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---index
|   |       |   |   |   |   collector.py
|   |       |   |   |   |   package_finder.py
|   |       |   |   |   |   sources.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           collector.cpython-312.pyc
|   |       |   |   |           package_finder.cpython-312.pyc
|   |       |   |   |           sources.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---locations
|   |       |   |   |   |   base.py
|   |       |   |   |   |   _distutils.py
|   |       |   |   |   |   _sysconfig.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           _distutils.cpython-312.pyc
|   |       |   |   |           _sysconfig.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---metadata
|   |       |   |   |   |   base.py
|   |       |   |   |   |   pkg_resources.py
|   |       |   |   |   |   _json.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---importlib
|   |       |   |   |   |   |   _compat.py
|   |       |   |   |   |   |   _dists.py
|   |       |   |   |   |   |   _envs.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           _compat.cpython-312.pyc
|   |       |   |   |   |           _dists.cpython-312.pyc
|   |       |   |   |   |           _envs.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           pkg_resources.cpython-312.pyc
|   |       |   |   |           _json.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---models
|   |       |   |   |   |   candidate.py
|   |       |   |   |   |   direct_url.py
|   |       |   |   |   |   format_control.py
|   |       |   |   |   |   index.py
|   |       |   |   |   |   installation_report.py
|   |       |   |   |   |   link.py
|   |       |   |   |   |   scheme.py
|   |       |   |   |   |   search_scope.py
|   |       |   |   |   |   selection_prefs.py
|   |       |   |   |   |   target_python.py
|   |       |   |   |   |   wheel.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           candidate.cpython-312.pyc
|   |       |   |   |           direct_url.cpython-312.pyc
|   |       |   |   |           format_control.cpython-312.pyc
|   |       |   |   |           index.cpython-312.pyc
|   |       |   |   |           installation_report.cpython-312.pyc
|   |       |   |   |           link.cpython-312.pyc
|   |       |   |   |           scheme.cpython-312.pyc
|   |       |   |   |           search_scope.cpython-312.pyc
|   |       |   |   |           selection_prefs.cpython-312.pyc
|   |       |   |   |           target_python.cpython-312.pyc
|   |       |   |   |           wheel.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---network
|   |       |   |   |   |   auth.py
|   |       |   |   |   |   cache.py
|   |       |   |   |   |   download.py
|   |       |   |   |   |   lazy_wheel.py
|   |       |   |   |   |   session.py
|   |       |   |   |   |   utils.py
|   |       |   |   |   |   xmlrpc.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           auth.cpython-312.pyc
|   |       |   |   |           cache.cpython-312.pyc
|   |       |   |   |           download.cpython-312.pyc
|   |       |   |   |           lazy_wheel.cpython-312.pyc
|   |       |   |   |           session.cpython-312.pyc
|   |       |   |   |           utils.cpython-312.pyc
|   |       |   |   |           xmlrpc.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---operations
|   |       |   |   |   |   check.py
|   |       |   |   |   |   freeze.py
|   |       |   |   |   |   prepare.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---build
|   |       |   |   |   |   |   build_tracker.py
|   |       |   |   |   |   |   metadata.py
|   |       |   |   |   |   |   metadata_editable.py
|   |       |   |   |   |   |   metadata_legacy.py
|   |       |   |   |   |   |   wheel.py
|   |       |   |   |   |   |   wheel_editable.py
|   |       |   |   |   |   |   wheel_legacy.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           build_tracker.cpython-312.pyc
|   |       |   |   |   |           metadata.cpython-312.pyc
|   |       |   |   |   |           metadata_editable.cpython-312.pyc
|   |       |   |   |   |           metadata_legacy.cpython-312.pyc
|   |       |   |   |   |           wheel.cpython-312.pyc
|   |       |   |   |   |           wheel_editable.cpython-312.pyc
|   |       |   |   |   |           wheel_legacy.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---install
|   |       |   |   |   |   |   editable_legacy.py
|   |       |   |   |   |   |   wheel.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           editable_legacy.cpython-312.pyc
|   |       |   |   |   |           wheel.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           check.cpython-312.pyc
|   |       |   |   |           freeze.cpython-312.pyc
|   |       |   |   |           prepare.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---req
|   |       |   |   |   |   constructors.py
|   |       |   |   |   |   req_file.py
|   |       |   |   |   |   req_install.py
|   |       |   |   |   |   req_set.py
|   |       |   |   |   |   req_uninstall.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           constructors.cpython-312.pyc
|   |       |   |   |           req_file.cpython-312.pyc
|   |       |   |   |           req_install.cpython-312.pyc
|   |       |   |   |           req_set.cpython-312.pyc
|   |       |   |   |           req_uninstall.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---resolution
|   |       |   |   |   |   base.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---legacy
|   |       |   |   |   |   |   resolver.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           resolver.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---resolvelib
|   |       |   |   |   |   |   base.py
|   |       |   |   |   |   |   candidates.py
|   |       |   |   |   |   |   factory.py
|   |       |   |   |   |   |   found_candidates.py
|   |       |   |   |   |   |   provider.py
|   |       |   |   |   |   |   reporter.py
|   |       |   |   |   |   |   requirements.py
|   |       |   |   |   |   |   resolver.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           base.cpython-312.pyc
|   |       |   |   |   |           candidates.cpython-312.pyc
|   |       |   |   |   |           factory.cpython-312.pyc
|   |       |   |   |   |           found_candidates.cpython-312.pyc
|   |       |   |   |   |           provider.cpython-312.pyc
|   |       |   |   |   |           reporter.cpython-312.pyc
|   |       |   |   |   |           requirements.cpython-312.pyc
|   |       |   |   |   |           resolver.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---utils
|   |       |   |   |   |   appdirs.py
|   |       |   |   |   |   compat.py
|   |       |   |   |   |   compatibility_tags.py
|   |       |   |   |   |   datetime.py
|   |       |   |   |   |   deprecation.py
|   |       |   |   |   |   direct_url_helpers.py
|   |       |   |   |   |   egg_link.py
|   |       |   |   |   |   encoding.py
|   |       |   |   |   |   entrypoints.py
|   |       |   |   |   |   filesystem.py
|   |       |   |   |   |   filetypes.py
|   |       |   |   |   |   glibc.py
|   |       |   |   |   |   hashes.py
|   |       |   |   |   |   logging.py
|   |       |   |   |   |   misc.py
|   |       |   |   |   |   packaging.py
|   |       |   |   |   |   retry.py
|   |       |   |   |   |   setuptools_build.py
|   |       |   |   |   |   subprocess.py
|   |       |   |   |   |   temp_dir.py
|   |       |   |   |   |   unpacking.py
|   |       |   |   |   |   urls.py
|   |       |   |   |   |   virtualenv.py
|   |       |   |   |   |   wheel.py
|   |       |   |   |   |   _jaraco_text.py
|   |       |   |   |   |   _log.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           appdirs.cpython-312.pyc
|   |       |   |   |           compat.cpython-312.pyc
|   |       |   |   |           compatibility_tags.cpython-312.pyc
|   |       |   |   |           datetime.cpython-312.pyc
|   |       |   |   |           deprecation.cpython-312.pyc
|   |       |   |   |           direct_url_helpers.cpython-312.pyc
|   |       |   |   |           egg_link.cpython-312.pyc
|   |       |   |   |           encoding.cpython-312.pyc
|   |       |   |   |           entrypoints.cpython-312.pyc
|   |       |   |   |           filesystem.cpython-312.pyc
|   |       |   |   |           filetypes.cpython-312.pyc
|   |       |   |   |           glibc.cpython-312.pyc
|   |       |   |   |           hashes.cpython-312.pyc
|   |       |   |   |           logging.cpython-312.pyc
|   |       |   |   |           misc.cpython-312.pyc
|   |       |   |   |           packaging.cpython-312.pyc
|   |       |   |   |           retry.cpython-312.pyc
|   |       |   |   |           setuptools_build.cpython-312.pyc
|   |       |   |   |           subprocess.cpython-312.pyc
|   |       |   |   |           temp_dir.cpython-312.pyc
|   |       |   |   |           unpacking.cpython-312.pyc
|   |       |   |   |           urls.cpython-312.pyc
|   |       |   |   |           virtualenv.cpython-312.pyc
|   |       |   |   |           wheel.cpython-312.pyc
|   |       |   |   |           _jaraco_text.cpython-312.pyc
|   |       |   |   |           _log.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---vcs
|   |       |   |   |   |   bazaar.py
|   |       |   |   |   |   git.py
|   |       |   |   |   |   mercurial.py
|   |       |   |   |   |   subversion.py
|   |       |   |   |   |   versioncontrol.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           bazaar.cpython-312.pyc
|   |       |   |   |           git.cpython-312.pyc
|   |       |   |   |           mercurial.cpython-312.pyc
|   |       |   |   |           subversion.cpython-312.pyc
|   |       |   |   |           versioncontrol.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   \---__pycache__
|   |       |   |           build_env.cpython-312.pyc
|   |       |   |           cache.cpython-312.pyc
|   |       |   |           configuration.cpython-312.pyc
|   |       |   |           exceptions.cpython-312.pyc
|   |       |   |           main.cpython-312.pyc
|   |       |   |           pyproject.cpython-312.pyc
|   |       |   |           self_outdated_check.cpython-312.pyc
|   |       |   |           wheel_builder.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---_vendor
|   |       |   |   |   typing_extensions.py
|   |       |   |   |   vendor.txt
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---cachecontrol
|   |       |   |   |   |   adapter.py
|   |       |   |   |   |   cache.py
|   |       |   |   |   |   controller.py
|   |       |   |   |   |   filewrapper.py
|   |       |   |   |   |   heuristics.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   serialize.py
|   |       |   |   |   |   wrapper.py
|   |       |   |   |   |   _cmd.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---caches
|   |       |   |   |   |   |   file_cache.py
|   |       |   |   |   |   |   redis_cache.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           file_cache.cpython-312.pyc
|   |       |   |   |   |           redis_cache.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           adapter.cpython-312.pyc
|   |       |   |   |           cache.cpython-312.pyc
|   |       |   |   |           controller.cpython-312.pyc
|   |       |   |   |           filewrapper.cpython-312.pyc
|   |       |   |   |           heuristics.cpython-312.pyc
|   |       |   |   |           serialize.cpython-312.pyc
|   |       |   |   |           wrapper.cpython-312.pyc
|   |       |   |   |           _cmd.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---certifi
|   |       |   |   |   |   cacert.pem
|   |       |   |   |   |   core.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __main__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           core.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __main__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---distlib
|   |       |   |   |   |   compat.py
|   |       |   |   |   |   database.py
|   |       |   |   |   |   index.py
|   |       |   |   |   |   locators.py
|   |       |   |   |   |   manifest.py
|   |       |   |   |   |   markers.py
|   |       |   |   |   |   metadata.py
|   |       |   |   |   |   resources.py
|   |       |   |   |   |   scripts.py
|   |       |   |   |   |   t32.exe
|   |       |   |   |   |   t64-arm.exe
|   |       |   |   |   |   t64.exe
|   |       |   |   |   |   util.py
|   |       |   |   |   |   version.py
|   |       |   |   |   |   w32.exe
|   |       |   |   |   |   w64-arm.exe
|   |       |   |   |   |   w64.exe
|   |       |   |   |   |   wheel.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           compat.cpython-312.pyc
|   |       |   |   |           database.cpython-312.pyc
|   |       |   |   |           index.cpython-312.pyc
|   |       |   |   |           locators.cpython-312.pyc
|   |       |   |   |           manifest.cpython-312.pyc
|   |       |   |   |           markers.cpython-312.pyc
|   |       |   |   |           metadata.cpython-312.pyc
|   |       |   |   |           resources.cpython-312.pyc
|   |       |   |   |           scripts.cpython-312.pyc
|   |       |   |   |           util.cpython-312.pyc
|   |       |   |   |           version.cpython-312.pyc
|   |       |   |   |           wheel.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---distro
|   |       |   |   |   |   distro.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __main__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           distro.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __main__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---idna
|   |       |   |   |   |   codec.py
|   |       |   |   |   |   compat.py
|   |       |   |   |   |   core.py
|   |       |   |   |   |   idnadata.py
|   |       |   |   |   |   intranges.py
|   |       |   |   |   |   package_data.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   uts46data.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           codec.cpython-312.pyc
|   |       |   |   |           compat.cpython-312.pyc
|   |       |   |   |           core.cpython-312.pyc
|   |       |   |   |           idnadata.cpython-312.pyc
|   |       |   |   |           intranges.cpython-312.pyc
|   |       |   |   |           package_data.cpython-312.pyc
|   |       |   |   |           uts46data.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---msgpack
|   |       |   |   |   |   exceptions.py
|   |       |   |   |   |   ext.py
|   |       |   |   |   |   fallback.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           exceptions.cpython-312.pyc
|   |       |   |   |           ext.cpython-312.pyc
|   |       |   |   |           fallback.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---packaging
|   |       |   |   |   |   markers.py
|   |       |   |   |   |   metadata.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   requirements.py
|   |       |   |   |   |   specifiers.py
|   |       |   |   |   |   tags.py
|   |       |   |   |   |   utils.py
|   |       |   |   |   |   version.py
|   |       |   |   |   |   _elffile.py
|   |       |   |   |   |   _manylinux.py
|   |       |   |   |   |   _musllinux.py
|   |       |   |   |   |   _parser.py
|   |       |   |   |   |   _structures.py
|   |       |   |   |   |   _tokenizer.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           markers.cpython-312.pyc
|   |       |   |   |           metadata.cpython-312.pyc
|   |       |   |   |           requirements.cpython-312.pyc
|   |       |   |   |           specifiers.cpython-312.pyc
|   |       |   |   |           tags.cpython-312.pyc
|   |       |   |   |           utils.cpython-312.pyc
|   |       |   |   |           version.cpython-312.pyc
|   |       |   |   |           _elffile.cpython-312.pyc
|   |       |   |   |           _manylinux.cpython-312.pyc
|   |       |   |   |           _musllinux.cpython-312.pyc
|   |       |   |   |           _parser.cpython-312.pyc
|   |       |   |   |           _structures.cpython-312.pyc
|   |       |   |   |           _tokenizer.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---pkg_resources
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---platformdirs
|   |       |   |   |   |   android.py
|   |       |   |   |   |   api.py
|   |       |   |   |   |   macos.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   unix.py
|   |       |   |   |   |   version.py
|   |       |   |   |   |   windows.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __main__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           android.cpython-312.pyc
|   |       |   |   |           api.cpython-312.pyc
|   |       |   |   |           macos.cpython-312.pyc
|   |       |   |   |           unix.cpython-312.pyc
|   |       |   |   |           version.cpython-312.pyc
|   |       |   |   |           windows.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __main__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---pygments
|   |       |   |   |   |   cmdline.py
|   |       |   |   |   |   console.py
|   |       |   |   |   |   filter.py
|   |       |   |   |   |   formatter.py
|   |       |   |   |   |   lexer.py
|   |       |   |   |   |   modeline.py
|   |       |   |   |   |   plugin.py
|   |       |   |   |   |   regexopt.py
|   |       |   |   |   |   scanner.py
|   |       |   |   |   |   sphinxext.py
|   |       |   |   |   |   style.py
|   |       |   |   |   |   token.py
|   |       |   |   |   |   unistring.py
|   |       |   |   |   |   util.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __main__.py
|   |       |   |   |   |   
|   |       |   |   |   +---filters
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---formatters
|   |       |   |   |   |   |   bbcode.py
|   |       |   |   |   |   |   groff.py
|   |       |   |   |   |   |   html.py
|   |       |   |   |   |   |   img.py
|   |       |   |   |   |   |   irc.py
|   |       |   |   |   |   |   latex.py
|   |       |   |   |   |   |   other.py
|   |       |   |   |   |   |   pangomarkup.py
|   |       |   |   |   |   |   rtf.py
|   |       |   |   |   |   |   svg.py
|   |       |   |   |   |   |   terminal.py
|   |       |   |   |   |   |   terminal256.py
|   |       |   |   |   |   |   _mapping.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           bbcode.cpython-312.pyc
|   |       |   |   |   |           groff.cpython-312.pyc
|   |       |   |   |   |           html.cpython-312.pyc
|   |       |   |   |   |           img.cpython-312.pyc
|   |       |   |   |   |           irc.cpython-312.pyc
|   |       |   |   |   |           latex.cpython-312.pyc
|   |       |   |   |   |           other.cpython-312.pyc
|   |       |   |   |   |           pangomarkup.cpython-312.pyc
|   |       |   |   |   |           rtf.cpython-312.pyc
|   |       |   |   |   |           svg.cpython-312.pyc
|   |       |   |   |   |           terminal.cpython-312.pyc
|   |       |   |   |   |           terminal256.cpython-312.pyc
|   |       |   |   |   |           _mapping.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---lexers
|   |       |   |   |   |   |   python.py
|   |       |   |   |   |   |   _mapping.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           python.cpython-312.pyc
|   |       |   |   |   |           _mapping.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---styles
|   |       |   |   |   |   |   _mapping.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           _mapping.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           cmdline.cpython-312.pyc
|   |       |   |   |           console.cpython-312.pyc
|   |       |   |   |           filter.cpython-312.pyc
|   |       |   |   |           formatter.cpython-312.pyc
|   |       |   |   |           lexer.cpython-312.pyc
|   |       |   |   |           modeline.cpython-312.pyc
|   |       |   |   |           plugin.cpython-312.pyc
|   |       |   |   |           regexopt.cpython-312.pyc
|   |       |   |   |           scanner.cpython-312.pyc
|   |       |   |   |           sphinxext.cpython-312.pyc
|   |       |   |   |           style.cpython-312.pyc
|   |       |   |   |           token.cpython-312.pyc
|   |       |   |   |           unistring.cpython-312.pyc
|   |       |   |   |           util.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __main__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---pyproject_hooks
|   |       |   |   |   |   _compat.py
|   |       |   |   |   |   _impl.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---_in_process
|   |       |   |   |   |   |   _in_process.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           _in_process.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           _compat.cpython-312.pyc
|   |       |   |   |           _impl.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---requests
|   |       |   |   |   |   adapters.py
|   |       |   |   |   |   api.py
|   |       |   |   |   |   auth.py
|   |       |   |   |   |   certs.py
|   |       |   |   |   |   compat.py
|   |       |   |   |   |   cookies.py
|   |       |   |   |   |   exceptions.py
|   |       |   |   |   |   help.py
|   |       |   |   |   |   hooks.py
|   |       |   |   |   |   models.py
|   |       |   |   |   |   packages.py
|   |       |   |   |   |   sessions.py
|   |       |   |   |   |   status_codes.py
|   |       |   |   |   |   structures.py
|   |       |   |   |   |   utils.py
|   |       |   |   |   |   _internal_utils.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __version__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           adapters.cpython-312.pyc
|   |       |   |   |           api.cpython-312.pyc
|   |       |   |   |           auth.cpython-312.pyc
|   |       |   |   |           certs.cpython-312.pyc
|   |       |   |   |           compat.cpython-312.pyc
|   |       |   |   |           cookies.cpython-312.pyc
|   |       |   |   |           exceptions.cpython-312.pyc
|   |       |   |   |           help.cpython-312.pyc
|   |       |   |   |           hooks.cpython-312.pyc
|   |       |   |   |           models.cpython-312.pyc
|   |       |   |   |           packages.cpython-312.pyc
|   |       |   |   |           sessions.cpython-312.pyc
|   |       |   |   |           status_codes.cpython-312.pyc
|   |       |   |   |           structures.cpython-312.pyc
|   |       |   |   |           utils.cpython-312.pyc
|   |       |   |   |           _internal_utils.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __version__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---resolvelib
|   |       |   |   |   |   providers.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   reporters.py
|   |       |   |   |   |   resolvers.py
|   |       |   |   |   |   structs.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---compat
|   |       |   |   |   |   |   collections_abc.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           collections_abc.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           providers.cpython-312.pyc
|   |       |   |   |           reporters.cpython-312.pyc
|   |       |   |   |           resolvers.cpython-312.pyc
|   |       |   |   |           structs.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---rich
|   |       |   |   |   |   abc.py
|   |       |   |   |   |   align.py
|   |       |   |   |   |   ansi.py
|   |       |   |   |   |   bar.py
|   |       |   |   |   |   box.py
|   |       |   |   |   |   cells.py
|   |       |   |   |   |   color.py
|   |       |   |   |   |   color_triplet.py
|   |       |   |   |   |   columns.py
|   |       |   |   |   |   console.py
|   |       |   |   |   |   constrain.py
|   |       |   |   |   |   containers.py
|   |       |   |   |   |   control.py
|   |       |   |   |   |   default_styles.py
|   |       |   |   |   |   diagnose.py
|   |       |   |   |   |   emoji.py
|   |       |   |   |   |   errors.py
|   |       |   |   |   |   filesize.py
|   |       |   |   |   |   file_proxy.py
|   |       |   |   |   |   highlighter.py
|   |       |   |   |   |   json.py
|   |       |   |   |   |   jupyter.py
|   |       |   |   |   |   layout.py
|   |       |   |   |   |   live.py
|   |       |   |   |   |   live_render.py
|   |       |   |   |   |   logging.py
|   |       |   |   |   |   markup.py
|   |       |   |   |   |   measure.py
|   |       |   |   |   |   padding.py
|   |       |   |   |   |   pager.py
|   |       |   |   |   |   palette.py
|   |       |   |   |   |   panel.py
|   |       |   |   |   |   pretty.py
|   |       |   |   |   |   progress.py
|   |       |   |   |   |   progress_bar.py
|   |       |   |   |   |   prompt.py
|   |       |   |   |   |   protocol.py
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   region.py
|   |       |   |   |   |   repr.py
|   |       |   |   |   |   rule.py
|   |       |   |   |   |   scope.py
|   |       |   |   |   |   screen.py
|   |       |   |   |   |   segment.py
|   |       |   |   |   |   spinner.py
|   |       |   |   |   |   status.py
|   |       |   |   |   |   style.py
|   |       |   |   |   |   styled.py
|   |       |   |   |   |   syntax.py
|   |       |   |   |   |   table.py
|   |       |   |   |   |   terminal_theme.py
|   |       |   |   |   |   text.py
|   |       |   |   |   |   theme.py
|   |       |   |   |   |   themes.py
|   |       |   |   |   |   traceback.py
|   |       |   |   |   |   tree.py
|   |       |   |   |   |   _cell_widths.py
|   |       |   |   |   |   _emoji_codes.py
|   |       |   |   |   |   _emoji_replace.py
|   |       |   |   |   |   _export_format.py
|   |       |   |   |   |   _extension.py
|   |       |   |   |   |   _fileno.py
|   |       |   |   |   |   _inspect.py
|   |       |   |   |   |   _log_render.py
|   |       |   |   |   |   _loop.py
|   |       |   |   |   |   _null_file.py
|   |       |   |   |   |   _palettes.py
|   |       |   |   |   |   _pick.py
|   |       |   |   |   |   _ratio.py
|   |       |   |   |   |   _spinners.py
|   |       |   |   |   |   _stack.py
|   |       |   |   |   |   _timer.py
|   |       |   |   |   |   _win32_console.py
|   |       |   |   |   |   _windows.py
|   |       |   |   |   |   _windows_renderer.py
|   |       |   |   |   |   _wrap.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   __main__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           abc.cpython-312.pyc
|   |       |   |   |           align.cpython-312.pyc
|   |       |   |   |           ansi.cpython-312.pyc
|   |       |   |   |           bar.cpython-312.pyc
|   |       |   |   |           box.cpython-312.pyc
|   |       |   |   |           cells.cpython-312.pyc
|   |       |   |   |           color.cpython-312.pyc
|   |       |   |   |           color_triplet.cpython-312.pyc
|   |       |   |   |           columns.cpython-312.pyc
|   |       |   |   |           console.cpython-312.pyc
|   |       |   |   |           constrain.cpython-312.pyc
|   |       |   |   |           containers.cpython-312.pyc
|   |       |   |   |           control.cpython-312.pyc
|   |       |   |   |           default_styles.cpython-312.pyc
|   |       |   |   |           diagnose.cpython-312.pyc
|   |       |   |   |           emoji.cpython-312.pyc
|   |       |   |   |           errors.cpython-312.pyc
|   |       |   |   |           filesize.cpython-312.pyc
|   |       |   |   |           file_proxy.cpython-312.pyc
|   |       |   |   |           highlighter.cpython-312.pyc
|   |       |   |   |           json.cpython-312.pyc
|   |       |   |   |           jupyter.cpython-312.pyc
|   |       |   |   |           layout.cpython-312.pyc
|   |       |   |   |           live.cpython-312.pyc
|   |       |   |   |           live_render.cpython-312.pyc
|   |       |   |   |           logging.cpython-312.pyc
|   |       |   |   |           markup.cpython-312.pyc
|   |       |   |   |           measure.cpython-312.pyc
|   |       |   |   |           padding.cpython-312.pyc
|   |       |   |   |           pager.cpython-312.pyc
|   |       |   |   |           palette.cpython-312.pyc
|   |       |   |   |           panel.cpython-312.pyc
|   |       |   |   |           pretty.cpython-312.pyc
|   |       |   |   |           progress.cpython-312.pyc
|   |       |   |   |           progress_bar.cpython-312.pyc
|   |       |   |   |           prompt.cpython-312.pyc
|   |       |   |   |           protocol.cpython-312.pyc
|   |       |   |   |           region.cpython-312.pyc
|   |       |   |   |           repr.cpython-312.pyc
|   |       |   |   |           rule.cpython-312.pyc
|   |       |   |   |           scope.cpython-312.pyc
|   |       |   |   |           screen.cpython-312.pyc
|   |       |   |   |           segment.cpython-312.pyc
|   |       |   |   |           spinner.cpython-312.pyc
|   |       |   |   |           status.cpython-312.pyc
|   |       |   |   |           style.cpython-312.pyc
|   |       |   |   |           styled.cpython-312.pyc
|   |       |   |   |           syntax.cpython-312.pyc
|   |       |   |   |           table.cpython-312.pyc
|   |       |   |   |           terminal_theme.cpython-312.pyc
|   |       |   |   |           text.cpython-312.pyc
|   |       |   |   |           theme.cpython-312.pyc
|   |       |   |   |           themes.cpython-312.pyc
|   |       |   |   |           traceback.cpython-312.pyc
|   |       |   |   |           tree.cpython-312.pyc
|   |       |   |   |           _cell_widths.cpython-312.pyc
|   |       |   |   |           _emoji_codes.cpython-312.pyc
|   |       |   |   |           _emoji_replace.cpython-312.pyc
|   |       |   |   |           _export_format.cpython-312.pyc
|   |       |   |   |           _extension.cpython-312.pyc
|   |       |   |   |           _fileno.cpython-312.pyc
|   |       |   |   |           _inspect.cpython-312.pyc
|   |       |   |   |           _log_render.cpython-312.pyc
|   |       |   |   |           _loop.cpython-312.pyc
|   |       |   |   |           _null_file.cpython-312.pyc
|   |       |   |   |           _palettes.cpython-312.pyc
|   |       |   |   |           _pick.cpython-312.pyc
|   |       |   |   |           _ratio.cpython-312.pyc
|   |       |   |   |           _spinners.cpython-312.pyc
|   |       |   |   |           _stack.cpython-312.pyc
|   |       |   |   |           _timer.cpython-312.pyc
|   |       |   |   |           _win32_console.cpython-312.pyc
|   |       |   |   |           _windows.cpython-312.pyc
|   |       |   |   |           _windows_renderer.cpython-312.pyc
|   |       |   |   |           _wrap.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           __main__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---tomli
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   _parser.py
|   |       |   |   |   |   _re.py
|   |       |   |   |   |   _types.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           _parser.cpython-312.pyc
|   |       |   |   |           _re.cpython-312.pyc
|   |       |   |   |           _types.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---truststore
|   |       |   |   |   |   py.typed
|   |       |   |   |   |   _api.py
|   |       |   |   |   |   _macos.py
|   |       |   |   |   |   _openssl.py
|   |       |   |   |   |   _ssl_constants.py
|   |       |   |   |   |   _windows.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           _api.cpython-312.pyc
|   |       |   |   |           _macos.cpython-312.pyc
|   |       |   |   |           _openssl.cpython-312.pyc
|   |       |   |   |           _ssl_constants.cpython-312.pyc
|   |       |   |   |           _windows.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---urllib3
|   |       |   |   |   |   connection.py
|   |       |   |   |   |   connectionpool.py
|   |       |   |   |   |   exceptions.py
|   |       |   |   |   |   fields.py
|   |       |   |   |   |   filepost.py
|   |       |   |   |   |   poolmanager.py
|   |       |   |   |   |   request.py
|   |       |   |   |   |   response.py
|   |       |   |   |   |   _collections.py
|   |       |   |   |   |   _version.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---contrib
|   |       |   |   |   |   |   appengine.py
|   |       |   |   |   |   |   ntlmpool.py
|   |       |   |   |   |   |   pyopenssl.py
|   |       |   |   |   |   |   securetransport.py
|   |       |   |   |   |   |   socks.py
|   |       |   |   |   |   |   _appengine_environ.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   +---_securetransport
|   |       |   |   |   |   |   |   bindings.py
|   |       |   |   |   |   |   |   low_level.py
|   |       |   |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   |   
|   |       |   |   |   |   |   \---__pycache__
|   |       |   |   |   |   |           bindings.cpython-312.pyc
|   |       |   |   |   |   |           low_level.cpython-312.pyc
|   |       |   |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |   |           
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           appengine.cpython-312.pyc
|   |       |   |   |   |           ntlmpool.cpython-312.pyc
|   |       |   |   |   |           pyopenssl.cpython-312.pyc
|   |       |   |   |   |           securetransport.cpython-312.pyc
|   |       |   |   |   |           socks.cpython-312.pyc
|   |       |   |   |   |           _appengine_environ.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---packages
|   |       |   |   |   |   |   six.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   +---backports
|   |       |   |   |   |   |   |   makefile.py
|   |       |   |   |   |   |   |   weakref_finalize.py
|   |       |   |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   |   
|   |       |   |   |   |   |   \---__pycache__
|   |       |   |   |   |   |           makefile.cpython-312.pyc
|   |       |   |   |   |   |           weakref_finalize.cpython-312.pyc
|   |       |   |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |   |           
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           six.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   +---util
|   |       |   |   |   |   |   connection.py
|   |       |   |   |   |   |   proxy.py
|   |       |   |   |   |   |   queue.py
|   |       |   |   |   |   |   request.py
|   |       |   |   |   |   |   response.py
|   |       |   |   |   |   |   retry.py
|   |       |   |   |   |   |   ssltransport.py
|   |       |   |   |   |   |   ssl_.py
|   |       |   |   |   |   |   ssl_match_hostname.py
|   |       |   |   |   |   |   timeout.py
|   |       |   |   |   |   |   url.py
|   |       |   |   |   |   |   wait.py
|   |       |   |   |   |   |   __init__.py
|   |       |   |   |   |   |   
|   |       |   |   |   |   \---__pycache__
|   |       |   |   |   |           connection.cpython-312.pyc
|   |       |   |   |   |           proxy.cpython-312.pyc
|   |       |   |   |   |           queue.cpython-312.pyc
|   |       |   |   |   |           request.cpython-312.pyc
|   |       |   |   |   |           response.cpython-312.pyc
|   |       |   |   |   |           retry.cpython-312.pyc
|   |       |   |   |   |           ssltransport.cpython-312.pyc
|   |       |   |   |   |           ssl_.cpython-312.pyc
|   |       |   |   |   |           ssl_match_hostname.cpython-312.pyc
|   |       |   |   |   |           timeout.cpython-312.pyc
|   |       |   |   |   |           url.cpython-312.pyc
|   |       |   |   |   |           wait.cpython-312.pyc
|   |       |   |   |   |           __init__.cpython-312.pyc
|   |       |   |   |   |           
|   |       |   |   |   \---__pycache__
|   |       |   |   |           connection.cpython-312.pyc
|   |       |   |   |           connectionpool.cpython-312.pyc
|   |       |   |   |           exceptions.cpython-312.pyc
|   |       |   |   |           fields.cpython-312.pyc
|   |       |   |   |           filepost.cpython-312.pyc
|   |       |   |   |           poolmanager.cpython-312.pyc
|   |       |   |   |           request.cpython-312.pyc
|   |       |   |   |           response.cpython-312.pyc
|   |       |   |   |           _collections.cpython-312.pyc
|   |       |   |   |           _version.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   \---__pycache__
|   |       |   |           typing_extensions.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           __init__.cpython-312.pyc
|   |       |           __main__.cpython-312.pyc
|   |       |           __pip-runner__.cpython-312.pyc
|   |       |           
|   |       +---pip-24.2.dist-info
|   |       |       AUTHORS.txt
|   |       |       entry_points.txt
|   |       |       INSTALLER
|   |       |       LICENSE.txt
|   |       |       METADATA
|   |       |       RECORD
|   |       |       REQUESTED
|   |       |       top_level.txt
|   |       |       WHEEL
|   |       |       
|   |       +---sqlalchemy
|   |       |   |   events.py
|   |       |   |   exc.py
|   |       |   |   inspection.py
|   |       |   |   log.py
|   |       |   |   py.typed
|   |       |   |   schema.py
|   |       |   |   types.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   +---connectors
|   |       |   |   |   aioodbc.py
|   |       |   |   |   asyncio.py
|   |       |   |   |   pyodbc.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           aioodbc.cpython-312.pyc
|   |       |   |           asyncio.cpython-312.pyc
|   |       |   |           pyodbc.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---cyextension
|   |       |   |   |   collections.cp312-win_amd64.pyd
|   |       |   |   |   collections.pyx
|   |       |   |   |   immutabledict.cp312-win_amd64.pyd
|   |       |   |   |   immutabledict.pxd
|   |       |   |   |   immutabledict.pyx
|   |       |   |   |   processors.cp312-win_amd64.pyd
|   |       |   |   |   processors.pyx
|   |       |   |   |   resultproxy.cp312-win_amd64.pyd
|   |       |   |   |   resultproxy.pyx
|   |       |   |   |   util.cp312-win_amd64.pyd
|   |       |   |   |   util.pyx
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---dialects
|   |       |   |   |   type_migration_guidelines.txt
|   |       |   |   |   _typing.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---mssql
|   |       |   |   |   |   aioodbc.py
|   |       |   |   |   |   base.py
|   |       |   |   |   |   information_schema.py
|   |       |   |   |   |   json.py
|   |       |   |   |   |   provision.py
|   |       |   |   |   |   pymssql.py
|   |       |   |   |   |   pyodbc.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           aioodbc.cpython-312.pyc
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           information_schema.cpython-312.pyc
|   |       |   |   |           json.cpython-312.pyc
|   |       |   |   |           provision.cpython-312.pyc
|   |       |   |   |           pymssql.cpython-312.pyc
|   |       |   |   |           pyodbc.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---mysql
|   |       |   |   |   |   aiomysql.py
|   |       |   |   |   |   asyncmy.py
|   |       |   |   |   |   base.py
|   |       |   |   |   |   cymysql.py
|   |       |   |   |   |   dml.py
|   |       |   |   |   |   enumerated.py
|   |       |   |   |   |   expression.py
|   |       |   |   |   |   json.py
|   |       |   |   |   |   mariadb.py
|   |       |   |   |   |   mariadbconnector.py
|   |       |   |   |   |   mysqlconnector.py
|   |       |   |   |   |   mysqldb.py
|   |       |   |   |   |   provision.py
|   |       |   |   |   |   pymysql.py
|   |       |   |   |   |   pyodbc.py
|   |       |   |   |   |   reflection.py
|   |       |   |   |   |   reserved_words.py
|   |       |   |   |   |   types.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           aiomysql.cpython-312.pyc
|   |       |   |   |           asyncmy.cpython-312.pyc
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           cymysql.cpython-312.pyc
|   |       |   |   |           dml.cpython-312.pyc
|   |       |   |   |           enumerated.cpython-312.pyc
|   |       |   |   |           expression.cpython-312.pyc
|   |       |   |   |           json.cpython-312.pyc
|   |       |   |   |           mariadb.cpython-312.pyc
|   |       |   |   |           mariadbconnector.cpython-312.pyc
|   |       |   |   |           mysqlconnector.cpython-312.pyc
|   |       |   |   |           mysqldb.cpython-312.pyc
|   |       |   |   |           provision.cpython-312.pyc
|   |       |   |   |           pymysql.cpython-312.pyc
|   |       |   |   |           pyodbc.cpython-312.pyc
|   |       |   |   |           reflection.cpython-312.pyc
|   |       |   |   |           reserved_words.cpython-312.pyc
|   |       |   |   |           types.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---oracle
|   |       |   |   |   |   base.py
|   |       |   |   |   |   cx_oracle.py
|   |       |   |   |   |   dictionary.py
|   |       |   |   |   |   oracledb.py
|   |       |   |   |   |   provision.py
|   |       |   |   |   |   types.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           cx_oracle.cpython-312.pyc
|   |       |   |   |           dictionary.cpython-312.pyc
|   |       |   |   |           oracledb.cpython-312.pyc
|   |       |   |   |           provision.cpython-312.pyc
|   |       |   |   |           types.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---postgresql
|   |       |   |   |   |   array.py
|   |       |   |   |   |   asyncpg.py
|   |       |   |   |   |   base.py
|   |       |   |   |   |   dml.py
|   |       |   |   |   |   ext.py
|   |       |   |   |   |   hstore.py
|   |       |   |   |   |   json.py
|   |       |   |   |   |   named_types.py
|   |       |   |   |   |   operators.py
|   |       |   |   |   |   pg8000.py
|   |       |   |   |   |   pg_catalog.py
|   |       |   |   |   |   provision.py
|   |       |   |   |   |   psycopg.py
|   |       |   |   |   |   psycopg2.py
|   |       |   |   |   |   psycopg2cffi.py
|   |       |   |   |   |   ranges.py
|   |       |   |   |   |   types.py
|   |       |   |   |   |   _psycopg_common.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           array.cpython-312.pyc
|   |       |   |   |           asyncpg.cpython-312.pyc
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           dml.cpython-312.pyc
|   |       |   |   |           ext.cpython-312.pyc
|   |       |   |   |           hstore.cpython-312.pyc
|   |       |   |   |           json.cpython-312.pyc
|   |       |   |   |           named_types.cpython-312.pyc
|   |       |   |   |           operators.cpython-312.pyc
|   |       |   |   |           pg8000.cpython-312.pyc
|   |       |   |   |           pg_catalog.cpython-312.pyc
|   |       |   |   |           provision.cpython-312.pyc
|   |       |   |   |           psycopg.cpython-312.pyc
|   |       |   |   |           psycopg2.cpython-312.pyc
|   |       |   |   |           psycopg2cffi.cpython-312.pyc
|   |       |   |   |           ranges.cpython-312.pyc
|   |       |   |   |           types.cpython-312.pyc
|   |       |   |   |           _psycopg_common.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---sqlite
|   |       |   |   |   |   aiosqlite.py
|   |       |   |   |   |   base.py
|   |       |   |   |   |   dml.py
|   |       |   |   |   |   json.py
|   |       |   |   |   |   provision.py
|   |       |   |   |   |   pysqlcipher.py
|   |       |   |   |   |   pysqlite.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           aiosqlite.cpython-312.pyc
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           dml.cpython-312.pyc
|   |       |   |   |           json.cpython-312.pyc
|   |       |   |   |           provision.cpython-312.pyc
|   |       |   |   |           pysqlcipher.cpython-312.pyc
|   |       |   |   |           pysqlite.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   \---__pycache__
|   |       |   |           _typing.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---engine
|   |       |   |   |   base.py
|   |       |   |   |   characteristics.py
|   |       |   |   |   create.py
|   |       |   |   |   cursor.py
|   |       |   |   |   default.py
|   |       |   |   |   events.py
|   |       |   |   |   interfaces.py
|   |       |   |   |   mock.py
|   |       |   |   |   processors.py
|   |       |   |   |   reflection.py
|   |       |   |   |   result.py
|   |       |   |   |   row.py
|   |       |   |   |   strategies.py
|   |       |   |   |   url.py
|   |       |   |   |   util.py
|   |       |   |   |   _py_processors.py
|   |       |   |   |   _py_row.py
|   |       |   |   |   _py_util.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           base.cpython-312.pyc
|   |       |   |           characteristics.cpython-312.pyc
|   |       |   |           create.cpython-312.pyc
|   |       |   |           cursor.cpython-312.pyc
|   |       |   |           default.cpython-312.pyc
|   |       |   |           events.cpython-312.pyc
|   |       |   |           interfaces.cpython-312.pyc
|   |       |   |           mock.cpython-312.pyc
|   |       |   |           processors.cpython-312.pyc
|   |       |   |           reflection.cpython-312.pyc
|   |       |   |           result.cpython-312.pyc
|   |       |   |           row.cpython-312.pyc
|   |       |   |           strategies.cpython-312.pyc
|   |       |   |           url.cpython-312.pyc
|   |       |   |           util.cpython-312.pyc
|   |       |   |           _py_processors.cpython-312.pyc
|   |       |   |           _py_row.cpython-312.pyc
|   |       |   |           _py_util.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---event
|   |       |   |   |   api.py
|   |       |   |   |   attr.py
|   |       |   |   |   base.py
|   |       |   |   |   legacy.py
|   |       |   |   |   registry.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           api.cpython-312.pyc
|   |       |   |           attr.cpython-312.pyc
|   |       |   |           base.cpython-312.pyc
|   |       |   |           legacy.cpython-312.pyc
|   |       |   |           registry.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---ext
|   |       |   |   |   associationproxy.py
|   |       |   |   |   automap.py
|   |       |   |   |   baked.py
|   |       |   |   |   compiler.py
|   |       |   |   |   horizontal_shard.py
|   |       |   |   |   hybrid.py
|   |       |   |   |   indexable.py
|   |       |   |   |   instrumentation.py
|   |       |   |   |   mutable.py
|   |       |   |   |   orderinglist.py
|   |       |   |   |   serializer.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---asyncio
|   |       |   |   |   |   base.py
|   |       |   |   |   |   engine.py
|   |       |   |   |   |   exc.py
|   |       |   |   |   |   result.py
|   |       |   |   |   |   scoping.py
|   |       |   |   |   |   session.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           engine.cpython-312.pyc
|   |       |   |   |           exc.cpython-312.pyc
|   |       |   |   |           result.cpython-312.pyc
|   |       |   |   |           scoping.cpython-312.pyc
|   |       |   |   |           session.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---declarative
|   |       |   |   |   |   extensions.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           extensions.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---mypy
|   |       |   |   |   |   apply.py
|   |       |   |   |   |   decl_class.py
|   |       |   |   |   |   infer.py
|   |       |   |   |   |   names.py
|   |       |   |   |   |   plugin.py
|   |       |   |   |   |   util.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           apply.cpython-312.pyc
|   |       |   |   |           decl_class.cpython-312.pyc
|   |       |   |   |           infer.cpython-312.pyc
|   |       |   |   |           names.cpython-312.pyc
|   |       |   |   |           plugin.cpython-312.pyc
|   |       |   |   |           util.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   \---__pycache__
|   |       |   |           associationproxy.cpython-312.pyc
|   |       |   |           automap.cpython-312.pyc
|   |       |   |           baked.cpython-312.pyc
|   |       |   |           compiler.cpython-312.pyc
|   |       |   |           horizontal_shard.cpython-312.pyc
|   |       |   |           hybrid.cpython-312.pyc
|   |       |   |           indexable.cpython-312.pyc
|   |       |   |           instrumentation.cpython-312.pyc
|   |       |   |           mutable.cpython-312.pyc
|   |       |   |           orderinglist.cpython-312.pyc
|   |       |   |           serializer.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---future
|   |       |   |   |   engine.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           engine.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---orm
|   |       |   |   |   attributes.py
|   |       |   |   |   base.py
|   |       |   |   |   bulk_persistence.py
|   |       |   |   |   clsregistry.py
|   |       |   |   |   collections.py
|   |       |   |   |   context.py
|   |       |   |   |   decl_api.py
|   |       |   |   |   decl_base.py
|   |       |   |   |   dependency.py
|   |       |   |   |   descriptor_props.py
|   |       |   |   |   dynamic.py
|   |       |   |   |   evaluator.py
|   |       |   |   |   events.py
|   |       |   |   |   exc.py
|   |       |   |   |   identity.py
|   |       |   |   |   instrumentation.py
|   |       |   |   |   interfaces.py
|   |       |   |   |   loading.py
|   |       |   |   |   mapped_collection.py
|   |       |   |   |   mapper.py
|   |       |   |   |   path_registry.py
|   |       |   |   |   persistence.py
|   |       |   |   |   properties.py
|   |       |   |   |   query.py
|   |       |   |   |   relationships.py
|   |       |   |   |   scoping.py
|   |       |   |   |   session.py
|   |       |   |   |   state.py
|   |       |   |   |   state_changes.py
|   |       |   |   |   strategies.py
|   |       |   |   |   strategy_options.py
|   |       |   |   |   sync.py
|   |       |   |   |   unitofwork.py
|   |       |   |   |   util.py
|   |       |   |   |   writeonly.py
|   |       |   |   |   _orm_constructors.py
|   |       |   |   |   _typing.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           attributes.cpython-312.pyc
|   |       |   |           base.cpython-312.pyc
|   |       |   |           bulk_persistence.cpython-312.pyc
|   |       |   |           clsregistry.cpython-312.pyc
|   |       |   |           collections.cpython-312.pyc
|   |       |   |           context.cpython-312.pyc
|   |       |   |           decl_api.cpython-312.pyc
|   |       |   |           decl_base.cpython-312.pyc
|   |       |   |           dependency.cpython-312.pyc
|   |       |   |           descriptor_props.cpython-312.pyc
|   |       |   |           dynamic.cpython-312.pyc
|   |       |   |           evaluator.cpython-312.pyc
|   |       |   |           events.cpython-312.pyc
|   |       |   |           exc.cpython-312.pyc
|   |       |   |           identity.cpython-312.pyc
|   |       |   |           instrumentation.cpython-312.pyc
|   |       |   |           interfaces.cpython-312.pyc
|   |       |   |           loading.cpython-312.pyc
|   |       |   |           mapped_collection.cpython-312.pyc
|   |       |   |           mapper.cpython-312.pyc
|   |       |   |           path_registry.cpython-312.pyc
|   |       |   |           persistence.cpython-312.pyc
|   |       |   |           properties.cpython-312.pyc
|   |       |   |           query.cpython-312.pyc
|   |       |   |           relationships.cpython-312.pyc
|   |       |   |           scoping.cpython-312.pyc
|   |       |   |           session.cpython-312.pyc
|   |       |   |           state.cpython-312.pyc
|   |       |   |           state_changes.cpython-312.pyc
|   |       |   |           strategies.cpython-312.pyc
|   |       |   |           strategy_options.cpython-312.pyc
|   |       |   |           sync.cpython-312.pyc
|   |       |   |           unitofwork.cpython-312.pyc
|   |       |   |           util.cpython-312.pyc
|   |       |   |           writeonly.cpython-312.pyc
|   |       |   |           _orm_constructors.cpython-312.pyc
|   |       |   |           _typing.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---pool
|   |       |   |   |   base.py
|   |       |   |   |   events.py
|   |       |   |   |   impl.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           base.cpython-312.pyc
|   |       |   |           events.cpython-312.pyc
|   |       |   |           impl.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---sql
|   |       |   |   |   annotation.py
|   |       |   |   |   base.py
|   |       |   |   |   cache_key.py
|   |       |   |   |   coercions.py
|   |       |   |   |   compiler.py
|   |       |   |   |   crud.py
|   |       |   |   |   ddl.py
|   |       |   |   |   default_comparator.py
|   |       |   |   |   dml.py
|   |       |   |   |   elements.py
|   |       |   |   |   events.py
|   |       |   |   |   expression.py
|   |       |   |   |   functions.py
|   |       |   |   |   lambdas.py
|   |       |   |   |   naming.py
|   |       |   |   |   operators.py
|   |       |   |   |   roles.py
|   |       |   |   |   schema.py
|   |       |   |   |   selectable.py
|   |       |   |   |   sqltypes.py
|   |       |   |   |   traversals.py
|   |       |   |   |   type_api.py
|   |       |   |   |   util.py
|   |       |   |   |   visitors.py
|   |       |   |   |   _dml_constructors.py
|   |       |   |   |   _elements_constructors.py
|   |       |   |   |   _orm_types.py
|   |       |   |   |   _py_util.py
|   |       |   |   |   _selectable_constructors.py
|   |       |   |   |   _typing.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           annotation.cpython-312.pyc
|   |       |   |           base.cpython-312.pyc
|   |       |   |           cache_key.cpython-312.pyc
|   |       |   |           coercions.cpython-312.pyc
|   |       |   |           compiler.cpython-312.pyc
|   |       |   |           crud.cpython-312.pyc
|   |       |   |           ddl.cpython-312.pyc
|   |       |   |           default_comparator.cpython-312.pyc
|   |       |   |           dml.cpython-312.pyc
|   |       |   |           elements.cpython-312.pyc
|   |       |   |           events.cpython-312.pyc
|   |       |   |           expression.cpython-312.pyc
|   |       |   |           functions.cpython-312.pyc
|   |       |   |           lambdas.cpython-312.pyc
|   |       |   |           naming.cpython-312.pyc
|   |       |   |           operators.cpython-312.pyc
|   |       |   |           roles.cpython-312.pyc
|   |       |   |           schema.cpython-312.pyc
|   |       |   |           selectable.cpython-312.pyc
|   |       |   |           sqltypes.cpython-312.pyc
|   |       |   |           traversals.cpython-312.pyc
|   |       |   |           type_api.cpython-312.pyc
|   |       |   |           util.cpython-312.pyc
|   |       |   |           visitors.cpython-312.pyc
|   |       |   |           _dml_constructors.cpython-312.pyc
|   |       |   |           _elements_constructors.cpython-312.pyc
|   |       |   |           _orm_types.cpython-312.pyc
|   |       |   |           _py_util.cpython-312.pyc
|   |       |   |           _selectable_constructors.cpython-312.pyc
|   |       |   |           _typing.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---testing
|   |       |   |   |   assertions.py
|   |       |   |   |   assertsql.py
|   |       |   |   |   asyncio.py
|   |       |   |   |   config.py
|   |       |   |   |   engines.py
|   |       |   |   |   entities.py
|   |       |   |   |   exclusions.py
|   |       |   |   |   pickleable.py
|   |       |   |   |   profiling.py
|   |       |   |   |   provision.py
|   |       |   |   |   requirements.py
|   |       |   |   |   schema.py
|   |       |   |   |   util.py
|   |       |   |   |   warnings.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---fixtures
|   |       |   |   |   |   base.py
|   |       |   |   |   |   mypy.py
|   |       |   |   |   |   orm.py
|   |       |   |   |   |   sql.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           base.cpython-312.pyc
|   |       |   |   |           mypy.cpython-312.pyc
|   |       |   |   |           orm.cpython-312.pyc
|   |       |   |   |           sql.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---plugin
|   |       |   |   |   |   bootstrap.py
|   |       |   |   |   |   plugin_base.py
|   |       |   |   |   |   pytestplugin.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           bootstrap.cpython-312.pyc
|   |       |   |   |           plugin_base.cpython-312.pyc
|   |       |   |   |           pytestplugin.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   +---suite
|   |       |   |   |   |   test_cte.py
|   |       |   |   |   |   test_ddl.py
|   |       |   |   |   |   test_deprecations.py
|   |       |   |   |   |   test_dialect.py
|   |       |   |   |   |   test_insert.py
|   |       |   |   |   |   test_reflection.py
|   |       |   |   |   |   test_results.py
|   |       |   |   |   |   test_rowcount.py
|   |       |   |   |   |   test_select.py
|   |       |   |   |   |   test_sequence.py
|   |       |   |   |   |   test_types.py
|   |       |   |   |   |   test_unicode_ddl.py
|   |       |   |   |   |   test_update_delete.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---__pycache__
|   |       |   |   |           test_cte.cpython-312.pyc
|   |       |   |   |           test_ddl.cpython-312.pyc
|   |       |   |   |           test_deprecations.cpython-312.pyc
|   |       |   |   |           test_dialect.cpython-312.pyc
|   |       |   |   |           test_insert.cpython-312.pyc
|   |       |   |   |           test_reflection.cpython-312.pyc
|   |       |   |   |           test_results.cpython-312.pyc
|   |       |   |   |           test_rowcount.cpython-312.pyc
|   |       |   |   |           test_select.cpython-312.pyc
|   |       |   |   |           test_sequence.cpython-312.pyc
|   |       |   |   |           test_types.cpython-312.pyc
|   |       |   |   |           test_unicode_ddl.cpython-312.pyc
|   |       |   |   |           test_update_delete.cpython-312.pyc
|   |       |   |   |           __init__.cpython-312.pyc
|   |       |   |   |           
|   |       |   |   \---__pycache__
|   |       |   |           assertions.cpython-312.pyc
|   |       |   |           assertsql.cpython-312.pyc
|   |       |   |           asyncio.cpython-312.pyc
|   |       |   |           config.cpython-312.pyc
|   |       |   |           engines.cpython-312.pyc
|   |       |   |           entities.cpython-312.pyc
|   |       |   |           exclusions.cpython-312.pyc
|   |       |   |           pickleable.cpython-312.pyc
|   |       |   |           profiling.cpython-312.pyc
|   |       |   |           provision.cpython-312.pyc
|   |       |   |           requirements.cpython-312.pyc
|   |       |   |           schema.cpython-312.pyc
|   |       |   |           util.cpython-312.pyc
|   |       |   |           warnings.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---util
|   |       |   |   |   compat.py
|   |       |   |   |   concurrency.py
|   |       |   |   |   deprecations.py
|   |       |   |   |   langhelpers.py
|   |       |   |   |   preloaded.py
|   |       |   |   |   queue.py
|   |       |   |   |   tool_support.py
|   |       |   |   |   topological.py
|   |       |   |   |   typing.py
|   |       |   |   |   _collections.py
|   |       |   |   |   _concurrency_py3k.py
|   |       |   |   |   _has_cy.py
|   |       |   |   |   _py_collections.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           compat.cpython-312.pyc
|   |       |   |           concurrency.cpython-312.pyc
|   |       |   |           deprecations.cpython-312.pyc
|   |       |   |           langhelpers.cpython-312.pyc
|   |       |   |           preloaded.cpython-312.pyc
|   |       |   |           queue.cpython-312.pyc
|   |       |   |           tool_support.cpython-312.pyc
|   |       |   |           topological.cpython-312.pyc
|   |       |   |           typing.cpython-312.pyc
|   |       |   |           _collections.cpython-312.pyc
|   |       |   |           _concurrency_py3k.cpython-312.pyc
|   |       |   |           _has_cy.cpython-312.pyc
|   |       |   |           _py_collections.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           events.cpython-312.pyc
|   |       |           exc.cpython-312.pyc
|   |       |           inspection.cpython-312.pyc
|   |       |           log.cpython-312.pyc
|   |       |           schema.cpython-312.pyc
|   |       |           types.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---SQLAlchemy-2.0.31.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE
|   |       |       METADATA
|   |       |       RECORD
|   |       |       REQUESTED
|   |       |       top_level.txt
|   |       |       WHEEL
|   |       |       
|   |       +---typing_extensions-4.15.0.dist-info
|   |       |   |   INSTALLER
|   |       |   |   METADATA
|   |       |   |   RECORD
|   |       |   |   WHEEL
|   |       |   |   
|   |       |   \---licenses
|   |       |           LICENSE
|   |       |           
|   |       +---werkzeug
|   |       |   |   exceptions.py
|   |       |   |   formparser.py
|   |       |   |   http.py
|   |       |   |   local.py
|   |       |   |   py.typed
|   |       |   |   security.py
|   |       |   |   serving.py
|   |       |   |   test.py
|   |       |   |   testapp.py
|   |       |   |   urls.py
|   |       |   |   user_agent.py
|   |       |   |   utils.py
|   |       |   |   wsgi.py
|   |       |   |   _internal.py
|   |       |   |   _reloader.py
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   +---datastructures
|   |       |   |   |   accept.py
|   |       |   |   |   auth.py
|   |       |   |   |   cache_control.py
|   |       |   |   |   csp.py
|   |       |   |   |   etag.py
|   |       |   |   |   file_storage.py
|   |       |   |   |   headers.py
|   |       |   |   |   mixins.py
|   |       |   |   |   range.py
|   |       |   |   |   structures.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           accept.cpython-312.pyc
|   |       |   |           auth.cpython-312.pyc
|   |       |   |           cache_control.cpython-312.pyc
|   |       |   |           csp.cpython-312.pyc
|   |       |   |           etag.cpython-312.pyc
|   |       |   |           file_storage.cpython-312.pyc
|   |       |   |           headers.cpython-312.pyc
|   |       |   |           mixins.cpython-312.pyc
|   |       |   |           range.cpython-312.pyc
|   |       |   |           structures.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---debug
|   |       |   |   |   console.py
|   |       |   |   |   repr.py
|   |       |   |   |   tbtools.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---shared
|   |       |   |   |       console.png
|   |       |   |   |       debugger.js
|   |       |   |   |       ICON_LICENSE.md
|   |       |   |   |       less.png
|   |       |   |   |       more.png
|   |       |   |   |       style.css
|   |       |   |   |       
|   |       |   |   \---__pycache__
|   |       |   |           console.cpython-312.pyc
|   |       |   |           repr.cpython-312.pyc
|   |       |   |           tbtools.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---middleware
|   |       |   |   |   dispatcher.py
|   |       |   |   |   http_proxy.py
|   |       |   |   |   lint.py
|   |       |   |   |   profiler.py
|   |       |   |   |   proxy_fix.py
|   |       |   |   |   shared_data.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           dispatcher.cpython-312.pyc
|   |       |   |           http_proxy.cpython-312.pyc
|   |       |   |           lint.cpython-312.pyc
|   |       |   |           profiler.cpython-312.pyc
|   |       |   |           proxy_fix.cpython-312.pyc
|   |       |   |           shared_data.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---routing
|   |       |   |   |   converters.py
|   |       |   |   |   exceptions.py
|   |       |   |   |   map.py
|   |       |   |   |   matcher.py
|   |       |   |   |   rules.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           converters.cpython-312.pyc
|   |       |   |           exceptions.cpython-312.pyc
|   |       |   |           map.cpython-312.pyc
|   |       |   |           matcher.cpython-312.pyc
|   |       |   |           rules.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---sansio
|   |       |   |   |   http.py
|   |       |   |   |   multipart.py
|   |       |   |   |   request.py
|   |       |   |   |   response.py
|   |       |   |   |   utils.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           http.cpython-312.pyc
|   |       |   |           multipart.cpython-312.pyc
|   |       |   |           request.cpython-312.pyc
|   |       |   |           response.cpython-312.pyc
|   |       |   |           utils.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   +---wrappers
|   |       |   |   |   request.py
|   |       |   |   |   response.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   \---__pycache__
|   |       |   |           request.cpython-312.pyc
|   |       |   |           response.cpython-312.pyc
|   |       |   |           __init__.cpython-312.pyc
|   |       |   |           
|   |       |   \---__pycache__
|   |       |           exceptions.cpython-312.pyc
|   |       |           formparser.cpython-312.pyc
|   |       |           http.cpython-312.pyc
|   |       |           local.cpython-312.pyc
|   |       |           security.cpython-312.pyc
|   |       |           serving.cpython-312.pyc
|   |       |           test.cpython-312.pyc
|   |       |           testapp.cpython-312.pyc
|   |       |           urls.cpython-312.pyc
|   |       |           user_agent.cpython-312.pyc
|   |       |           utils.cpython-312.pyc
|   |       |           wsgi.cpython-312.pyc
|   |       |           _internal.cpython-312.pyc
|   |       |           _reloader.cpython-312.pyc
|   |       |           __init__.cpython-312.pyc
|   |       |           
|   |       +---werkzeug-3.1.3.dist-info
|   |       |       INSTALLER
|   |       |       LICENSE.txt
|   |       |       METADATA
|   |       |       RECORD
|   |       |       WHEEL
|   |       |       
|   |       \---__pycache__
|   |               typing_extensions.cpython-312.pyc
|   |               
|   \---Scripts
|           activate
|           activate.bat
|           Activate.ps1
|           deactivate.bat
|           flask.exe
|           pip.exe
|           pip3.12.exe
|           pip3.exe
|           python.exe
|           pythonw.exe
|           
+---.vs
|   |   slnx.sqlite
|   |   VSWorkspaceState.json
|   |   
|   \---roman-writing-mvp
|       +---FileContentIndex
|       |       0d7a9609-517f-4ac1-bc75-fc484e8c1062.vsidx
|       |       13db1929-9897-4370-9d82-8cf2e42929a1.vsidx
|       |       2b54f48b-4bfa-4928-85df-d62521dd9cf0.vsidx
|       |       3331c02e-9621-4086-a1c8-54e8b7d636ea.vsidx
|       |       a7e1cc4a-08aa-497b-8ee5-6ca1d0da3972.vsidx
|       |       ba681683-972e-41b7-8927-72bb9199426c.vsidx
|       |       d27cd925-8c51-4bf2-8310-48e7cb547825.vsidx
|       |       
|       \---v17
|               DocumentLayout.backup.json
|               DocumentLayout.json
|               workspaceFileList.bin
|               
+---backend
|   |   app.db
|   |   app.py
|   |   Dockerfile
|   |   README.md
|   |   requirements.txt
|   |   __init__.py
|   |   
|   +---.venv
|   |   |   pyvenv.cfg
|   |   |   
|   |   +---Include
|   |   |   \---site
|   |   |       \---python3.12
|   |   |           \---greenlet
|   |   |                   greenlet.h
|   |   |                   
|   |   +---Lib
|   |   |   \---site-packages
|   |   |       |   decorator.py
|   |   |       |   ipython_pygments_lexers.py
|   |   |       |   typing_extensions.py
|   |   |       |   
|   |   |       +---asttokens
|   |   |       |   |   astroid_compat.py
|   |   |       |   |   asttokens.py
|   |   |       |   |   line_numbers.py
|   |   |       |   |   mark_tokens.py
|   |   |       |   |   py.typed
|   |   |       |   |   util.py
|   |   |       |   |   version.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           astroid_compat.cpython-312.pyc
|   |   |       |           asttokens.cpython-312.pyc
|   |   |       |           line_numbers.cpython-312.pyc
|   |   |       |           mark_tokens.cpython-312.pyc
|   |   |       |           util.cpython-312.pyc
|   |   |       |           version.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---asttokens-3.0.0.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---blinker
|   |   |       |   |   base.py
|   |   |       |   |   py.typed
|   |   |       |   |   _utilities.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           base.cpython-312.pyc
|   |   |       |           _utilities.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---blinker-1.9.0.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.txt
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---click
|   |   |       |   |   core.py
|   |   |       |   |   decorators.py
|   |   |       |   |   exceptions.py
|   |   |       |   |   formatting.py
|   |   |       |   |   globals.py
|   |   |       |   |   parser.py
|   |   |       |   |   py.typed
|   |   |       |   |   shell_completion.py
|   |   |       |   |   termui.py
|   |   |       |   |   testing.py
|   |   |       |   |   types.py
|   |   |       |   |   utils.py
|   |   |       |   |   _compat.py
|   |   |       |   |   _termui_impl.py
|   |   |       |   |   _textwrap.py
|   |   |       |   |   _utils.py
|   |   |       |   |   _winconsole.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           core.cpython-312.pyc
|   |   |       |           decorators.cpython-312.pyc
|   |   |       |           exceptions.cpython-312.pyc
|   |   |       |           formatting.cpython-312.pyc
|   |   |       |           globals.cpython-312.pyc
|   |   |       |           parser.cpython-312.pyc
|   |   |       |           shell_completion.cpython-312.pyc
|   |   |       |           termui.cpython-312.pyc
|   |   |       |           testing.cpython-312.pyc
|   |   |       |           types.cpython-312.pyc
|   |   |       |           utils.cpython-312.pyc
|   |   |       |           _compat.cpython-312.pyc
|   |   |       |           _termui_impl.cpython-312.pyc
|   |   |       |           _textwrap.cpython-312.pyc
|   |   |       |           _utils.cpython-312.pyc
|   |   |       |           _winconsole.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---click-8.3.0.dist-info
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           LICENSE.txt
|   |   |       |           
|   |   |       +---colorama
|   |   |       |   |   ansi.py
|   |   |       |   |   ansitowin32.py
|   |   |       |   |   initialise.py
|   |   |       |   |   win32.py
|   |   |       |   |   winterm.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   +---tests
|   |   |       |   |   |   ansitowin32_test.py
|   |   |       |   |   |   ansi_test.py
|   |   |       |   |   |   initialise_test.py
|   |   |       |   |   |   isatty_test.py
|   |   |       |   |   |   utils.py
|   |   |       |   |   |   winterm_test.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           ansitowin32_test.cpython-312.pyc
|   |   |       |   |           ansi_test.cpython-312.pyc
|   |   |       |   |           initialise_test.cpython-312.pyc
|   |   |       |   |           isatty_test.cpython-312.pyc
|   |   |       |   |           utils.cpython-312.pyc
|   |   |       |   |           winterm_test.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           ansi.cpython-312.pyc
|   |   |       |           ansitowin32.cpython-312.pyc
|   |   |       |           initialise.cpython-312.pyc
|   |   |       |           win32.cpython-312.pyc
|   |   |       |           winterm.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---colorama-0.4.6.dist-info
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           LICENSE.txt
|   |   |       |           
|   |   |       +---decorator-5.2.1.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.txt
|   |   |       |       METADATA
|   |   |       |       pbr.json
|   |   |       |       RECORD
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---executing
|   |   |       |   |   executing.py
|   |   |       |   |   py.typed
|   |   |       |   |   version.py
|   |   |       |   |   _exceptions.py
|   |   |       |   |   _position_node_finder.py
|   |   |       |   |   _pytest_utils.py
|   |   |       |   |   _utils.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           executing.cpython-312.pyc
|   |   |       |           version.cpython-312.pyc
|   |   |       |           _exceptions.cpython-312.pyc
|   |   |       |           _position_node_finder.cpython-312.pyc
|   |   |       |           _pytest_utils.cpython-312.pyc
|   |   |       |           _utils.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---executing-2.2.1.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.txt
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---flask
|   |   |       |   |   app.py
|   |   |       |   |   blueprints.py
|   |   |       |   |   cli.py
|   |   |       |   |   config.py
|   |   |       |   |   ctx.py
|   |   |       |   |   debughelpers.py
|   |   |       |   |   globals.py
|   |   |       |   |   helpers.py
|   |   |       |   |   logging.py
|   |   |       |   |   py.typed
|   |   |       |   |   sessions.py
|   |   |       |   |   signals.py
|   |   |       |   |   templating.py
|   |   |       |   |   testing.py
|   |   |       |   |   typing.py
|   |   |       |   |   views.py
|   |   |       |   |   wrappers.py
|   |   |       |   |   __init__.py
|   |   |       |   |   __main__.py
|   |   |       |   |   
|   |   |       |   +---json
|   |   |       |   |   |   provider.py
|   |   |       |   |   |   tag.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           provider.cpython-312.pyc
|   |   |       |   |           tag.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---sansio
|   |   |       |   |   |   app.py
|   |   |       |   |   |   blueprints.py
|   |   |       |   |   |   README.md
|   |   |       |   |   |   scaffold.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           app.cpython-312.pyc
|   |   |       |   |           blueprints.cpython-312.pyc
|   |   |       |   |           scaffold.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           app.cpython-312.pyc
|   |   |       |           blueprints.cpython-312.pyc
|   |   |       |           cli.cpython-312.pyc
|   |   |       |           config.cpython-312.pyc
|   |   |       |           ctx.cpython-312.pyc
|   |   |       |           debughelpers.cpython-312.pyc
|   |   |       |           globals.cpython-312.pyc
|   |   |       |           helpers.cpython-312.pyc
|   |   |       |           logging.cpython-312.pyc
|   |   |       |           sessions.cpython-312.pyc
|   |   |       |           signals.cpython-312.pyc
|   |   |       |           templating.cpython-312.pyc
|   |   |       |           testing.cpython-312.pyc
|   |   |       |           typing.cpython-312.pyc
|   |   |       |           views.cpython-312.pyc
|   |   |       |           wrappers.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           __main__.cpython-312.pyc
|   |   |       |           
|   |   |       +---flask-3.0.3.dist-info
|   |   |       |       entry_points.txt
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.txt
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       REQUESTED
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---flask_cors
|   |   |       |   |   core.py
|   |   |       |   |   decorator.py
|   |   |       |   |   extension.py
|   |   |       |   |   version.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           core.cpython-312.pyc
|   |   |       |           decorator.cpython-312.pyc
|   |   |       |           extension.cpython-312.pyc
|   |   |       |           version.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---Flask_Cors-4.0.1.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       REQUESTED
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---flask_sqlalchemy
|   |   |       |   |   cli.py
|   |   |       |   |   extension.py
|   |   |       |   |   model.py
|   |   |       |   |   pagination.py
|   |   |       |   |   py.typed
|   |   |       |   |   query.py
|   |   |       |   |   record_queries.py
|   |   |       |   |   session.py
|   |   |       |   |   table.py
|   |   |       |   |   track_modifications.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           cli.cpython-312.pyc
|   |   |       |           extension.cpython-312.pyc
|   |   |       |           model.cpython-312.pyc
|   |   |       |           pagination.cpython-312.pyc
|   |   |       |           query.cpython-312.pyc
|   |   |       |           record_queries.cpython-312.pyc
|   |   |       |           session.cpython-312.pyc
|   |   |       |           table.cpython-312.pyc
|   |   |       |           track_modifications.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---flask_sqlalchemy-3.1.1.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.rst
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       REQUESTED
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---greenlet
|   |   |       |   |   CObjects.cpp
|   |   |       |   |   greenlet.cpp
|   |   |       |   |   greenlet.h
|   |   |       |   |   greenlet_allocator.hpp
|   |   |       |   |   greenlet_compiler_compat.hpp
|   |   |       |   |   greenlet_cpython_compat.hpp
|   |   |       |   |   greenlet_exceptions.hpp
|   |   |       |   |   greenlet_internal.hpp
|   |   |       |   |   greenlet_msvc_compat.hpp
|   |   |       |   |   greenlet_refs.hpp
|   |   |       |   |   greenlet_slp_switch.hpp
|   |   |       |   |   greenlet_thread_support.hpp
|   |   |       |   |   PyGreenlet.cpp
|   |   |       |   |   PyGreenlet.hpp
|   |   |       |   |   PyGreenletUnswitchable.cpp
|   |   |       |   |   PyModule.cpp
|   |   |       |   |   slp_platformselect.h
|   |   |       |   |   TBrokenGreenlet.cpp
|   |   |       |   |   TExceptionState.cpp
|   |   |       |   |   TGreenlet.cpp
|   |   |       |   |   TGreenlet.hpp
|   |   |       |   |   TGreenletGlobals.cpp
|   |   |       |   |   TMainGreenlet.cpp
|   |   |       |   |   TPythonState.cpp
|   |   |       |   |   TStackState.cpp
|   |   |       |   |   TThreadState.hpp
|   |   |       |   |   TThreadStateCreator.hpp
|   |   |       |   |   TThreadStateDestroy.cpp
|   |   |       |   |   TUserGreenlet.cpp
|   |   |       |   |   _greenlet.cp312-win_amd64.pyd
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   +---platform
|   |   |       |   |   |   setup_switch_x64_masm.cmd
|   |   |       |   |   |   switch_aarch64_gcc.h
|   |   |       |   |   |   switch_alpha_unix.h
|   |   |       |   |   |   switch_amd64_unix.h
|   |   |       |   |   |   switch_arm32_gcc.h
|   |   |       |   |   |   switch_arm32_ios.h
|   |   |       |   |   |   switch_arm64_masm.asm
|   |   |       |   |   |   switch_arm64_masm.obj
|   |   |       |   |   |   switch_arm64_msvc.h
|   |   |       |   |   |   switch_csky_gcc.h
|   |   |       |   |   |   switch_loongarch64_linux.h
|   |   |       |   |   |   switch_m68k_gcc.h
|   |   |       |   |   |   switch_mips_unix.h
|   |   |       |   |   |   switch_ppc64_aix.h
|   |   |       |   |   |   switch_ppc64_linux.h
|   |   |       |   |   |   switch_ppc_aix.h
|   |   |       |   |   |   switch_ppc_linux.h
|   |   |       |   |   |   switch_ppc_macosx.h
|   |   |       |   |   |   switch_ppc_unix.h
|   |   |       |   |   |   switch_riscv_unix.h
|   |   |       |   |   |   switch_s390_unix.h
|   |   |       |   |   |   switch_sh_gcc.h
|   |   |       |   |   |   switch_sparc_sun_gcc.h
|   |   |       |   |   |   switch_x32_unix.h
|   |   |       |   |   |   switch_x64_masm.asm
|   |   |       |   |   |   switch_x64_masm.obj
|   |   |       |   |   |   switch_x64_msvc.h
|   |   |       |   |   |   switch_x86_msvc.h
|   |   |       |   |   |   switch_x86_unix.h
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---tests
|   |   |       |   |   |   fail_clearing_run_switches.py
|   |   |       |   |   |   fail_cpp_exception.py
|   |   |       |   |   |   fail_initialstub_already_started.py
|   |   |       |   |   |   fail_slp_switch.py
|   |   |       |   |   |   fail_switch_three_greenlets.py
|   |   |       |   |   |   fail_switch_three_greenlets2.py
|   |   |       |   |   |   fail_switch_two_greenlets.py
|   |   |       |   |   |   leakcheck.py
|   |   |       |   |   |   test_contextvars.py
|   |   |       |   |   |   test_cpp.py
|   |   |       |   |   |   test_extension_interface.py
|   |   |       |   |   |   test_gc.py
|   |   |       |   |   |   test_generator.py
|   |   |       |   |   |   test_generator_nested.py
|   |   |       |   |   |   test_greenlet.py
|   |   |       |   |   |   test_greenlet_trash.py
|   |   |       |   |   |   test_leaks.py
|   |   |       |   |   |   test_stack_saved.py
|   |   |       |   |   |   test_throw.py
|   |   |       |   |   |   test_tracing.py
|   |   |       |   |   |   test_version.py
|   |   |       |   |   |   test_weakref.py
|   |   |       |   |   |   _test_extension.c
|   |   |       |   |   |   _test_extension.cp312-win_amd64.pyd
|   |   |       |   |   |   _test_extension_cpp.cp312-win_amd64.pyd
|   |   |       |   |   |   _test_extension_cpp.cpp
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           fail_clearing_run_switches.cpython-312.pyc
|   |   |       |   |           fail_cpp_exception.cpython-312.pyc
|   |   |       |   |           fail_initialstub_already_started.cpython-312.pyc
|   |   |       |   |           fail_slp_switch.cpython-312.pyc
|   |   |       |   |           fail_switch_three_greenlets.cpython-312.pyc
|   |   |       |   |           fail_switch_three_greenlets2.cpython-312.pyc
|   |   |       |   |           fail_switch_two_greenlets.cpython-312.pyc
|   |   |       |   |           leakcheck.cpython-312.pyc
|   |   |       |   |           test_contextvars.cpython-312.pyc
|   |   |       |   |           test_cpp.cpython-312.pyc
|   |   |       |   |           test_extension_interface.cpython-312.pyc
|   |   |       |   |           test_gc.cpython-312.pyc
|   |   |       |   |           test_generator.cpython-312.pyc
|   |   |       |   |           test_generator_nested.cpython-312.pyc
|   |   |       |   |           test_greenlet.cpython-312.pyc
|   |   |       |   |           test_greenlet_trash.cpython-312.pyc
|   |   |       |   |           test_leaks.cpython-312.pyc
|   |   |       |   |           test_stack_saved.cpython-312.pyc
|   |   |       |   |           test_throw.cpython-312.pyc
|   |   |       |   |           test_tracing.cpython-312.pyc
|   |   |       |   |           test_version.cpython-312.pyc
|   |   |       |   |           test_weakref.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---greenlet-3.2.4.dist-info
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   top_level.txt
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           LICENSE
|   |   |       |           LICENSE.PSF
|   |   |       |           
|   |   |       +---IPython
|   |   |       |   |   display.py
|   |   |       |   |   paths.py
|   |   |       |   |   py.typed
|   |   |       |   |   __init__.py
|   |   |       |   |   __main__.py
|   |   |       |   |   
|   |   |       |   +---core
|   |   |       |   |   |   alias.py
|   |   |       |   |   |   application.py
|   |   |       |   |   |   async_helpers.py
|   |   |       |   |   |   autocall.py
|   |   |       |   |   |   builtin_trap.py
|   |   |       |   |   |   compilerop.py
|   |   |       |   |   |   completer.py
|   |   |       |   |   |   completerlib.py
|   |   |       |   |   |   crashhandler.py
|   |   |       |   |   |   debugger.py
|   |   |       |   |   |   debugger_backport.py
|   |   |       |   |   |   display.py
|   |   |       |   |   |   displayhook.py
|   |   |       |   |   |   displaypub.py
|   |   |       |   |   |   display_functions.py
|   |   |       |   |   |   display_trap.py
|   |   |       |   |   |   doctb.py
|   |   |       |   |   |   error.py
|   |   |       |   |   |   events.py
|   |   |       |   |   |   extensions.py
|   |   |       |   |   |   formatters.py
|   |   |       |   |   |   getipython.py
|   |   |       |   |   |   guarded_eval.py
|   |   |       |   |   |   history.py
|   |   |       |   |   |   historyapp.py
|   |   |       |   |   |   hooks.py
|   |   |       |   |   |   inputtransformer2.py
|   |   |       |   |   |   interactiveshell.py
|   |   |       |   |   |   latex_symbols.py
|   |   |       |   |   |   logger.py
|   |   |       |   |   |   macro.py
|   |   |       |   |   |   magic.py
|   |   |       |   |   |   magic_arguments.py
|   |   |       |   |   |   oinspect.py
|   |   |       |   |   |   page.py
|   |   |       |   |   |   payload.py
|   |   |       |   |   |   payloadpage.py
|   |   |       |   |   |   prefilter.py
|   |   |       |   |   |   profileapp.py
|   |   |       |   |   |   profiledir.py
|   |   |       |   |   |   pylabtools.py
|   |   |       |   |   |   release.py
|   |   |       |   |   |   shellapp.py
|   |   |       |   |   |   splitinput.py
|   |   |       |   |   |   tbtools.py
|   |   |       |   |   |   tips.py
|   |   |       |   |   |   ultratb.py
|   |   |       |   |   |   usage.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---magics
|   |   |       |   |   |   |   ast_mod.py
|   |   |       |   |   |   |   auto.py
|   |   |       |   |   |   |   basic.py
|   |   |       |   |   |   |   code.py
|   |   |       |   |   |   |   config.py
|   |   |       |   |   |   |   display.py
|   |   |       |   |   |   |   execution.py
|   |   |       |   |   |   |   extension.py
|   |   |       |   |   |   |   history.py
|   |   |       |   |   |   |   logging.py
|   |   |       |   |   |   |   namespace.py
|   |   |       |   |   |   |   osm.py
|   |   |       |   |   |   |   packaging.py
|   |   |       |   |   |   |   pylab.py
|   |   |       |   |   |   |   script.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           ast_mod.cpython-312.pyc
|   |   |       |   |   |           auto.cpython-312.pyc
|   |   |       |   |   |           basic.cpython-312.pyc
|   |   |       |   |   |           code.cpython-312.pyc
|   |   |       |   |   |           config.cpython-312.pyc
|   |   |       |   |   |           display.cpython-312.pyc
|   |   |       |   |   |           execution.cpython-312.pyc
|   |   |       |   |   |           extension.cpython-312.pyc
|   |   |       |   |   |           history.cpython-312.pyc
|   |   |       |   |   |           logging.cpython-312.pyc
|   |   |       |   |   |           namespace.cpython-312.pyc
|   |   |       |   |   |           osm.cpython-312.pyc
|   |   |       |   |   |           packaging.cpython-312.pyc
|   |   |       |   |   |           pylab.cpython-312.pyc
|   |   |       |   |   |           script.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---profile
|   |   |       |   |   |       README_STARTUP
|   |   |       |   |   |       
|   |   |       |   |   \---__pycache__
|   |   |       |   |           alias.cpython-312.pyc
|   |   |       |   |           application.cpython-312.pyc
|   |   |       |   |           async_helpers.cpython-312.pyc
|   |   |       |   |           autocall.cpython-312.pyc
|   |   |       |   |           builtin_trap.cpython-312.pyc
|   |   |       |   |           compilerop.cpython-312.pyc
|   |   |       |   |           completer.cpython-312.pyc
|   |   |       |   |           completerlib.cpython-312.pyc
|   |   |       |   |           crashhandler.cpython-312.pyc
|   |   |       |   |           debugger.cpython-312.pyc
|   |   |       |   |           debugger_backport.cpython-312.pyc
|   |   |       |   |           display.cpython-312.pyc
|   |   |       |   |           displayhook.cpython-312.pyc
|   |   |       |   |           displaypub.cpython-312.pyc
|   |   |       |   |           display_functions.cpython-312.pyc
|   |   |       |   |           display_trap.cpython-312.pyc
|   |   |       |   |           doctb.cpython-312.pyc
|   |   |       |   |           error.cpython-312.pyc
|   |   |       |   |           events.cpython-312.pyc
|   |   |       |   |           extensions.cpython-312.pyc
|   |   |       |   |           formatters.cpython-312.pyc
|   |   |       |   |           getipython.cpython-312.pyc
|   |   |       |   |           guarded_eval.cpython-312.pyc
|   |   |       |   |           history.cpython-312.pyc
|   |   |       |   |           historyapp.cpython-312.pyc
|   |   |       |   |           hooks.cpython-312.pyc
|   |   |       |   |           inputtransformer2.cpython-312.pyc
|   |   |       |   |           interactiveshell.cpython-312.pyc
|   |   |       |   |           latex_symbols.cpython-312.pyc
|   |   |       |   |           logger.cpython-312.pyc
|   |   |       |   |           macro.cpython-312.pyc
|   |   |       |   |           magic.cpython-312.pyc
|   |   |       |   |           magic_arguments.cpython-312.pyc
|   |   |       |   |           oinspect.cpython-312.pyc
|   |   |       |   |           page.cpython-312.pyc
|   |   |       |   |           payload.cpython-312.pyc
|   |   |       |   |           payloadpage.cpython-312.pyc
|   |   |       |   |           prefilter.cpython-312.pyc
|   |   |       |   |           profileapp.cpython-312.pyc
|   |   |       |   |           profiledir.cpython-312.pyc
|   |   |       |   |           pylabtools.cpython-312.pyc
|   |   |       |   |           release.cpython-312.pyc
|   |   |       |   |           shellapp.cpython-312.pyc
|   |   |       |   |           splitinput.cpython-312.pyc
|   |   |       |   |           tbtools.cpython-312.pyc
|   |   |       |   |           tips.cpython-312.pyc
|   |   |       |   |           ultratb.cpython-312.pyc
|   |   |       |   |           usage.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---extensions
|   |   |       |   |   |   autoreload.py
|   |   |       |   |   |   storemagic.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---deduperreload
|   |   |       |   |   |   |   deduperreload.py
|   |   |       |   |   |   |   deduperreload_patching.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           deduperreload.cpython-312.pyc
|   |   |       |   |   |           deduperreload_patching.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           autoreload.cpython-312.pyc
|   |   |       |   |           storemagic.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---external
|   |   |       |   |   |   pickleshare.py
|   |   |       |   |   |   qt_for_kernel.py
|   |   |       |   |   |   qt_loaders.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           pickleshare.cpython-312.pyc
|   |   |       |   |           qt_for_kernel.cpython-312.pyc
|   |   |       |   |           qt_loaders.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---lib
|   |   |       |   |   |   backgroundjobs.py
|   |   |       |   |   |   clipboard.py
|   |   |       |   |   |   deepreload.py
|   |   |       |   |   |   demo.py
|   |   |       |   |   |   display.py
|   |   |       |   |   |   editorhooks.py
|   |   |       |   |   |   guisupport.py
|   |   |       |   |   |   latextools.py
|   |   |       |   |   |   lexers.py
|   |   |       |   |   |   pretty.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           backgroundjobs.cpython-312.pyc
|   |   |       |   |           clipboard.cpython-312.pyc
|   |   |       |   |           deepreload.cpython-312.pyc
|   |   |       |   |           demo.cpython-312.pyc
|   |   |       |   |           display.cpython-312.pyc
|   |   |       |   |           editorhooks.cpython-312.pyc
|   |   |       |   |           guisupport.cpython-312.pyc
|   |   |       |   |           latextools.cpython-312.pyc
|   |   |       |   |           lexers.cpython-312.pyc
|   |   |       |   |           pretty.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---sphinxext
|   |   |       |   |   |   custom_doctests.py
|   |   |       |   |   |   ipython_console_highlighting.py
|   |   |       |   |   |   ipython_directive.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           custom_doctests.cpython-312.pyc
|   |   |       |   |           ipython_console_highlighting.cpython-312.pyc
|   |   |       |   |           ipython_directive.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---terminal
|   |   |       |   |   |   debugger.py
|   |   |       |   |   |   embed.py
|   |   |       |   |   |   interactiveshell.py
|   |   |       |   |   |   ipapp.py
|   |   |       |   |   |   magics.py
|   |   |       |   |   |   prompts.py
|   |   |       |   |   |   ptutils.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---pt_inputhooks
|   |   |       |   |   |   |   asyncio.py
|   |   |       |   |   |   |   glut.py
|   |   |       |   |   |   |   gtk.py
|   |   |       |   |   |   |   gtk3.py
|   |   |       |   |   |   |   gtk4.py
|   |   |       |   |   |   |   osx.py
|   |   |       |   |   |   |   pyglet.py
|   |   |       |   |   |   |   qt.py
|   |   |       |   |   |   |   tk.py
|   |   |       |   |   |   |   wx.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           asyncio.cpython-312.pyc
|   |   |       |   |   |           glut.cpython-312.pyc
|   |   |       |   |   |           gtk.cpython-312.pyc
|   |   |       |   |   |           gtk3.cpython-312.pyc
|   |   |       |   |   |           gtk4.cpython-312.pyc
|   |   |       |   |   |           osx.cpython-312.pyc
|   |   |       |   |   |           pyglet.cpython-312.pyc
|   |   |       |   |   |           qt.cpython-312.pyc
|   |   |       |   |   |           tk.cpython-312.pyc
|   |   |       |   |   |           wx.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---shortcuts
|   |   |       |   |   |   |   auto_match.py
|   |   |       |   |   |   |   auto_suggest.py
|   |   |       |   |   |   |   filters.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           auto_match.cpython-312.pyc
|   |   |       |   |   |           auto_suggest.cpython-312.pyc
|   |   |       |   |   |           filters.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           debugger.cpython-312.pyc
|   |   |       |   |           embed.cpython-312.pyc
|   |   |       |   |           interactiveshell.cpython-312.pyc
|   |   |       |   |           ipapp.cpython-312.pyc
|   |   |       |   |           magics.cpython-312.pyc
|   |   |       |   |           prompts.cpython-312.pyc
|   |   |       |   |           ptutils.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---testing
|   |   |       |   |   |   decorators.py
|   |   |       |   |   |   globalipapp.py
|   |   |       |   |   |   ipunittest.py
|   |   |       |   |   |   skipdoctest.py
|   |   |       |   |   |   tools.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---plugin
|   |   |       |   |   |   |   dtexample.py
|   |   |       |   |   |   |   ipdoctest.py
|   |   |       |   |   |   |   pytest_ipdoctest.py
|   |   |       |   |   |   |   setup.py
|   |   |       |   |   |   |   simple.py
|   |   |       |   |   |   |   simplevars.py
|   |   |       |   |   |   |   test_combo.txt
|   |   |       |   |   |   |   test_example.txt
|   |   |       |   |   |   |   test_exampleip.txt
|   |   |       |   |   |   |   test_ipdoctest.py
|   |   |       |   |   |   |   test_refs.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           dtexample.cpython-312.pyc
|   |   |       |   |   |           ipdoctest.cpython-312.pyc
|   |   |       |   |   |           pytest_ipdoctest.cpython-312.pyc
|   |   |       |   |   |           setup.cpython-312.pyc
|   |   |       |   |   |           simple.cpython-312.pyc
|   |   |       |   |   |           simplevars.cpython-312.pyc
|   |   |       |   |   |           test_ipdoctest.cpython-312.pyc
|   |   |       |   |   |           test_refs.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           decorators.cpython-312.pyc
|   |   |       |   |           globalipapp.cpython-312.pyc
|   |   |       |   |           ipunittest.cpython-312.pyc
|   |   |       |   |           skipdoctest.cpython-312.pyc
|   |   |       |   |           tools.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---utils
|   |   |       |   |   |   capture.py
|   |   |       |   |   |   coloransi.py
|   |   |       |   |   |   contexts.py
|   |   |       |   |   |   data.py
|   |   |       |   |   |   decorators.py
|   |   |       |   |   |   dir2.py
|   |   |       |   |   |   docs.py
|   |   |       |   |   |   encoding.py
|   |   |       |   |   |   eventful.py
|   |   |       |   |   |   frame.py
|   |   |       |   |   |   generics.py
|   |   |       |   |   |   importstring.py
|   |   |       |   |   |   io.py
|   |   |       |   |   |   ipstruct.py
|   |   |       |   |   |   jsonutil.py
|   |   |       |   |   |   log.py
|   |   |       |   |   |   module_paths.py
|   |   |       |   |   |   openpy.py
|   |   |       |   |   |   path.py
|   |   |       |   |   |   process.py
|   |   |       |   |   |   py3compat.py
|   |   |       |   |   |   PyColorize.py
|   |   |       |   |   |   sentinel.py
|   |   |       |   |   |   strdispatch.py
|   |   |       |   |   |   sysinfo.py
|   |   |       |   |   |   syspathcontext.py
|   |   |       |   |   |   tempdir.py
|   |   |       |   |   |   terminal.py
|   |   |       |   |   |   text.py
|   |   |       |   |   |   timing.py
|   |   |       |   |   |   tokenutil.py
|   |   |       |   |   |   wildcard.py
|   |   |       |   |   |   _process_cli.py
|   |   |       |   |   |   _process_common.py
|   |   |       |   |   |   _process_emscripten.py
|   |   |       |   |   |   _process_posix.py
|   |   |       |   |   |   _process_win32.py
|   |   |       |   |   |   _process_win32_controller.py
|   |   |       |   |   |   _sysinfo.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           capture.cpython-312.pyc
|   |   |       |   |           coloransi.cpython-312.pyc
|   |   |       |   |           contexts.cpython-312.pyc
|   |   |       |   |           data.cpython-312.pyc
|   |   |       |   |           decorators.cpython-312.pyc
|   |   |       |   |           dir2.cpython-312.pyc
|   |   |       |   |           docs.cpython-312.pyc
|   |   |       |   |           encoding.cpython-312.pyc
|   |   |       |   |           eventful.cpython-312.pyc
|   |   |       |   |           frame.cpython-312.pyc
|   |   |       |   |           generics.cpython-312.pyc
|   |   |       |   |           importstring.cpython-312.pyc
|   |   |       |   |           io.cpython-312.pyc
|   |   |       |   |           ipstruct.cpython-312.pyc
|   |   |       |   |           jsonutil.cpython-312.pyc
|   |   |       |   |           log.cpython-312.pyc
|   |   |       |   |           module_paths.cpython-312.pyc
|   |   |       |   |           openpy.cpython-312.pyc
|   |   |       |   |           path.cpython-312.pyc
|   |   |       |   |           process.cpython-312.pyc
|   |   |       |   |           py3compat.cpython-312.pyc
|   |   |       |   |           PyColorize.cpython-312.pyc
|   |   |       |   |           sentinel.cpython-312.pyc
|   |   |       |   |           strdispatch.cpython-312.pyc
|   |   |       |   |           sysinfo.cpython-312.pyc
|   |   |       |   |           syspathcontext.cpython-312.pyc
|   |   |       |   |           tempdir.cpython-312.pyc
|   |   |       |   |           terminal.cpython-312.pyc
|   |   |       |   |           text.cpython-312.pyc
|   |   |       |   |           timing.cpython-312.pyc
|   |   |       |   |           tokenutil.cpython-312.pyc
|   |   |       |   |           wildcard.cpython-312.pyc
|   |   |       |   |           _process_cli.cpython-312.pyc
|   |   |       |   |           _process_common.cpython-312.pyc
|   |   |       |   |           _process_emscripten.cpython-312.pyc
|   |   |       |   |           _process_posix.cpython-312.pyc
|   |   |       |   |           _process_win32.cpython-312.pyc
|   |   |       |   |           _process_win32_controller.cpython-312.pyc
|   |   |       |   |           _sysinfo.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           display.cpython-312.pyc
|   |   |       |           paths.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           __main__.cpython-312.pyc
|   |   |       |           
|   |   |       +---ipython-9.6.0.dist-info
|   |   |       |   |   entry_points.txt
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   top_level.txt
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           COPYING.rst
|   |   |       |           LICENSE
|   |   |       |           
|   |   |       +---ipython_pygments_lexers-1.1.1.dist-info
|   |   |       |       entry_points.txt
|   |   |       |       INSTALLER
|   |   |       |       LICENSE
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---itsdangerous
|   |   |       |   |   encoding.py
|   |   |       |   |   exc.py
|   |   |       |   |   py.typed
|   |   |       |   |   serializer.py
|   |   |       |   |   signer.py
|   |   |       |   |   timed.py
|   |   |       |   |   url_safe.py
|   |   |       |   |   _json.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           encoding.cpython-312.pyc
|   |   |       |           exc.cpython-312.pyc
|   |   |       |           serializer.cpython-312.pyc
|   |   |       |           signer.cpython-312.pyc
|   |   |       |           timed.cpython-312.pyc
|   |   |       |           url_safe.cpython-312.pyc
|   |   |       |           _json.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---itsdangerous-2.2.0.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.txt
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---jedi
|   |   |       |   |   cache.py
|   |   |       |   |   common.py
|   |   |       |   |   debug.py
|   |   |       |   |   file_io.py
|   |   |       |   |   parser_utils.py
|   |   |       |   |   settings.py
|   |   |       |   |   utils.py
|   |   |       |   |   _compatibility.py
|   |   |       |   |   __init__.py
|   |   |       |   |   __main__.py
|   |   |       |   |   
|   |   |       |   +---api
|   |   |       |   |   |   classes.py
|   |   |       |   |   |   completion.py
|   |   |       |   |   |   completion_cache.py
|   |   |       |   |   |   environment.py
|   |   |       |   |   |   errors.py
|   |   |       |   |   |   exceptions.py
|   |   |       |   |   |   file_name.py
|   |   |       |   |   |   helpers.py
|   |   |       |   |   |   interpreter.py
|   |   |       |   |   |   keywords.py
|   |   |       |   |   |   project.py
|   |   |       |   |   |   replstartup.py
|   |   |       |   |   |   strings.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---refactoring
|   |   |       |   |   |   |   extract.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           extract.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           classes.cpython-312.pyc
|   |   |       |   |           completion.cpython-312.pyc
|   |   |       |   |           completion_cache.cpython-312.pyc
|   |   |       |   |           environment.cpython-312.pyc
|   |   |       |   |           errors.cpython-312.pyc
|   |   |       |   |           exceptions.cpython-312.pyc
|   |   |       |   |           file_name.cpython-312.pyc
|   |   |       |   |           helpers.cpython-312.pyc
|   |   |       |   |           interpreter.cpython-312.pyc
|   |   |       |   |           keywords.cpython-312.pyc
|   |   |       |   |           project.cpython-312.pyc
|   |   |       |   |           replstartup.cpython-312.pyc
|   |   |       |   |           strings.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---inference
|   |   |       |   |   |   analysis.py
|   |   |       |   |   |   arguments.py
|   |   |       |   |   |   base_value.py
|   |   |       |   |   |   cache.py
|   |   |       |   |   |   context.py
|   |   |       |   |   |   docstrings.py
|   |   |       |   |   |   docstring_utils.py
|   |   |       |   |   |   dynamic_params.py
|   |   |       |   |   |   filters.py
|   |   |       |   |   |   finder.py
|   |   |       |   |   |   flow_analysis.py
|   |   |       |   |   |   helpers.py
|   |   |       |   |   |   imports.py
|   |   |       |   |   |   lazy_value.py
|   |   |       |   |   |   names.py
|   |   |       |   |   |   param.py
|   |   |       |   |   |   parser_cache.py
|   |   |       |   |   |   recursion.py
|   |   |       |   |   |   references.py
|   |   |       |   |   |   signature.py
|   |   |       |   |   |   star_args.py
|   |   |       |   |   |   syntax_tree.py
|   |   |       |   |   |   sys_path.py
|   |   |       |   |   |   utils.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---compiled
|   |   |       |   |   |   |   access.py
|   |   |       |   |   |   |   getattr_static.py
|   |   |       |   |   |   |   mixed.py
|   |   |       |   |   |   |   value.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---subprocess
|   |   |       |   |   |   |   |   functions.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   __main__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           functions.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           __main__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           access.cpython-312.pyc
|   |   |       |   |   |           getattr_static.cpython-312.pyc
|   |   |       |   |   |           mixed.cpython-312.pyc
|   |   |       |   |   |           value.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---gradual
|   |   |       |   |   |   |   annotation.py
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   conversion.py
|   |   |       |   |   |   |   generics.py
|   |   |       |   |   |   |   stub_value.py
|   |   |       |   |   |   |   typeshed.py
|   |   |       |   |   |   |   type_var.py
|   |   |       |   |   |   |   typing.py
|   |   |       |   |   |   |   utils.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           annotation.cpython-312.pyc
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           conversion.cpython-312.pyc
|   |   |       |   |   |           generics.cpython-312.pyc
|   |   |       |   |   |           stub_value.cpython-312.pyc
|   |   |       |   |   |           typeshed.cpython-312.pyc
|   |   |       |   |   |           type_var.cpython-312.pyc
|   |   |       |   |   |           typing.cpython-312.pyc
|   |   |       |   |   |           utils.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---value
|   |   |       |   |   |   |   decorator.py
|   |   |       |   |   |   |   dynamic_arrays.py
|   |   |       |   |   |   |   function.py
|   |   |       |   |   |   |   instance.py
|   |   |       |   |   |   |   iterable.py
|   |   |       |   |   |   |   klass.py
|   |   |       |   |   |   |   module.py
|   |   |       |   |   |   |   namespace.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           decorator.cpython-312.pyc
|   |   |       |   |   |           dynamic_arrays.cpython-312.pyc
|   |   |       |   |   |           function.cpython-312.pyc
|   |   |       |   |   |           instance.cpython-312.pyc
|   |   |       |   |   |           iterable.cpython-312.pyc
|   |   |       |   |   |           klass.cpython-312.pyc
|   |   |       |   |   |           module.cpython-312.pyc
|   |   |       |   |   |           namespace.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           analysis.cpython-312.pyc
|   |   |       |   |           arguments.cpython-312.pyc
|   |   |       |   |           base_value.cpython-312.pyc
|   |   |       |   |           cache.cpython-312.pyc
|   |   |       |   |           context.cpython-312.pyc
|   |   |       |   |           docstrings.cpython-312.pyc
|   |   |       |   |           docstring_utils.cpython-312.pyc
|   |   |       |   |           dynamic_params.cpython-312.pyc
|   |   |       |   |           filters.cpython-312.pyc
|   |   |       |   |           finder.cpython-312.pyc
|   |   |       |   |           flow_analysis.cpython-312.pyc
|   |   |       |   |           helpers.cpython-312.pyc
|   |   |       |   |           imports.cpython-312.pyc
|   |   |       |   |           lazy_value.cpython-312.pyc
|   |   |       |   |           names.cpython-312.pyc
|   |   |       |   |           param.cpython-312.pyc
|   |   |       |   |           parser_cache.cpython-312.pyc
|   |   |       |   |           recursion.cpython-312.pyc
|   |   |       |   |           references.cpython-312.pyc
|   |   |       |   |           signature.cpython-312.pyc
|   |   |       |   |           star_args.cpython-312.pyc
|   |   |       |   |           syntax_tree.cpython-312.pyc
|   |   |       |   |           sys_path.cpython-312.pyc
|   |   |       |   |           utils.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---plugins
|   |   |       |   |   |   django.py
|   |   |       |   |   |   flask.py
|   |   |       |   |   |   pytest.py
|   |   |       |   |   |   registry.py
|   |   |       |   |   |   stdlib.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           django.cpython-312.pyc
|   |   |       |   |           flask.cpython-312.pyc
|   |   |       |   |           pytest.cpython-312.pyc
|   |   |       |   |           registry.cpython-312.pyc
|   |   |       |   |           stdlib.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---third_party
|   |   |       |   |   +---django-stubs
|   |   |       |   |   |   |   LICENSE.txt
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---django-stubs
|   |   |       |   |   |       |   shortcuts.pyi
|   |   |       |   |   |       |   __init__.pyi
|   |   |       |   |   |       |   
|   |   |       |   |   |       +---apps
|   |   |       |   |   |       |       config.pyi
|   |   |       |   |   |       |       registry.pyi
|   |   |       |   |   |       |       __init__.pyi
|   |   |       |   |   |       |       
|   |   |       |   |   |       +---conf
|   |   |       |   |   |       |   |   global_settings.pyi
|   |   |       |   |   |       |   |   __init__.pyi
|   |   |       |   |   |       |   |   
|   |   |       |   |   |       |   +---locale
|   |   |       |   |   |       |   |       __init__.pyi
|   |   |       |   |   |       |   |       
|   |   |       |   |   |       |   \---urls
|   |   |       |   |   |       |           i18n.pyi
|   |   |       |   |   |       |           static.pyi
|   |   |       |   |   |       |           __init__.pyi
|   |   |       |   |   |       |           
|   |   |       |   |   |       +---contrib
|   |   |       |   |   |       |   |   __init__.pyi
|   |   |       |   |   |       |   |   
|   |   |       |   |   |       |   +---admin
|   |   |       |   |   |       |   |   |   actions.pyi
|   |   |       |   |   |       |   |   |   apps.pyi
|   |   |       |   |   |       |   |   |   checks.pyi
|   |   |       |   |   |       |   |   |   decorators.pyi
|   |   |       |   |   |       |   |   |   filters.pyi
|   |   |       |   |   |       |   |   |   forms.pyi
|   |   |       |   |   |       |   |   |   helpers.pyi
|   |   |       |   |   |       |   |   |   models.pyi
|   |   |       |   |   |       |   |   |   options.pyi
|   |   |       |   |   |       |   |   |   sites.pyi
|   |   |       |   |   |       |   |   |   tests.pyi
|   |   |       |   |   |       |   |   |   utils.pyi
|   |   |       |   |   |       |   |   |   widgets.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   +---templatetags
|   |   |       |   |   |       |   |   |       admin_list.pyi
|   |   |       |   |   |       |   |   |       admin_modify.pyi
|   |   |       |   |   |       |   |   |       admin_static.pyi
|   |   |       |   |   |       |   |   |       admin_urls.pyi
|   |   |       |   |   |       |   |   |       base.pyi
|   |   |       |   |   |       |   |   |       log.pyi
|   |   |       |   |   |       |   |   |       __init__.pyi
|   |   |       |   |   |       |   |   |       
|   |   |       |   |   |       |   |   \---views
|   |   |       |   |   |       |   |           autocomplete.pyi
|   |   |       |   |   |       |   |           decorators.pyi
|   |   |       |   |   |       |   |           main.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   +---admindocs
|   |   |       |   |   |       |   |       middleware.pyi
|   |   |       |   |   |       |   |       urls.pyi
|   |   |       |   |   |       |   |       utils.pyi
|   |   |       |   |   |       |   |       views.pyi
|   |   |       |   |   |       |   |       __init__.pyi
|   |   |       |   |   |       |   |       
|   |   |       |   |   |       |   +---auth
|   |   |       |   |   |       |   |   |   admin.pyi
|   |   |       |   |   |       |   |   |   apps.pyi
|   |   |       |   |   |       |   |   |   backends.pyi
|   |   |       |   |   |       |   |   |   base_user.pyi
|   |   |       |   |   |       |   |   |   checks.pyi
|   |   |       |   |   |       |   |   |   context_processors.pyi
|   |   |       |   |   |       |   |   |   decorators.pyi
|   |   |       |   |   |       |   |   |   forms.pyi
|   |   |       |   |   |       |   |   |   hashers.pyi
|   |   |       |   |   |       |   |   |   middleware.pyi
|   |   |       |   |   |       |   |   |   mixins.pyi
|   |   |       |   |   |       |   |   |   models.pyi
|   |   |       |   |   |       |   |   |   password_validation.pyi
|   |   |       |   |   |       |   |   |   signals.pyi
|   |   |       |   |   |       |   |   |   tokens.pyi
|   |   |       |   |   |       |   |   |   urls.pyi
|   |   |       |   |   |       |   |   |   validators.pyi
|   |   |       |   |   |       |   |   |   views.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   +---handlers
|   |   |       |   |   |       |   |   |       modwsgi.pyi
|   |   |       |   |   |       |   |   |       __init__.pyi
|   |   |       |   |   |       |   |   |       
|   |   |       |   |   |       |   |   \---management
|   |   |       |   |   |       |   |       |   __init__.pyi
|   |   |       |   |   |       |   |       |   
|   |   |       |   |   |       |   |       \---commands
|   |   |       |   |   |       |   |               changepassword.pyi
|   |   |       |   |   |       |   |               createsuperuser.pyi
|   |   |       |   |   |       |   |               __init__.pyi
|   |   |       |   |   |       |   |               
|   |   |       |   |   |       |   +---contenttypes
|   |   |       |   |   |       |   |   |   admin.pyi
|   |   |       |   |   |       |   |   |   apps.pyi
|   |   |       |   |   |       |   |   |   checks.pyi
|   |   |       |   |   |       |   |   |   fields.pyi
|   |   |       |   |   |       |   |   |   forms.pyi
|   |   |       |   |   |       |   |   |   models.pyi
|   |   |       |   |   |       |   |   |   views.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---management
|   |   |       |   |   |       |   |       |   __init__.pyi
|   |   |       |   |   |       |   |       |   
|   |   |       |   |   |       |   |       \---commands
|   |   |       |   |   |       |   |               remove_stale_contenttypes.pyi
|   |   |       |   |   |       |   |               __init__.pyi
|   |   |       |   |   |       |   |               
|   |   |       |   |   |       |   +---flatpages
|   |   |       |   |   |       |   |   |   forms.pyi
|   |   |       |   |   |       |   |   |   middleware.pyi
|   |   |       |   |   |       |   |   |   models.pyi
|   |   |       |   |   |       |   |   |   sitemaps.pyi
|   |   |       |   |   |       |   |   |   urls.pyi
|   |   |       |   |   |       |   |   |   views.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---templatetags
|   |   |       |   |   |       |   |           flatpages.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   +---gis
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---db
|   |   |       |   |   |       |   |       |   __init__.pyi
|   |   |       |   |   |       |   |       |   
|   |   |       |   |   |       |   |       \---models
|   |   |       |   |   |       |   |               fields.pyi
|   |   |       |   |   |       |   |               __init__.pyi
|   |   |       |   |   |       |   |               
|   |   |       |   |   |       |   +---humanize
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---templatetags
|   |   |       |   |   |       |   |           humanize.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   +---messages
|   |   |       |   |   |       |   |   |   api.pyi
|   |   |       |   |   |       |   |   |   constants.pyi
|   |   |       |   |   |       |   |   |   context_processors.pyi
|   |   |       |   |   |       |   |   |   middleware.pyi
|   |   |       |   |   |       |   |   |   utils.pyi
|   |   |       |   |   |       |   |   |   views.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---storage
|   |   |       |   |   |       |   |           base.pyi
|   |   |       |   |   |       |   |           cookie.pyi
|   |   |       |   |   |       |   |           fallback.pyi
|   |   |       |   |   |       |   |           session.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   +---postgres
|   |   |       |   |   |       |   |   |   constraints.pyi
|   |   |       |   |   |       |   |   |   functions.pyi
|   |   |       |   |   |       |   |   |   indexes.pyi
|   |   |       |   |   |       |   |   |   lookups.pyi
|   |   |       |   |   |       |   |   |   operations.pyi
|   |   |       |   |   |       |   |   |   search.pyi
|   |   |       |   |   |       |   |   |   signals.pyi
|   |   |       |   |   |       |   |   |   validators.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   +---aggregates
|   |   |       |   |   |       |   |   |       general.pyi
|   |   |       |   |   |       |   |   |       mixins.pyi
|   |   |       |   |   |       |   |   |       statistics.pyi
|   |   |       |   |   |       |   |   |       __init__.pyi
|   |   |       |   |   |       |   |   |       
|   |   |       |   |   |       |   |   \---fields
|   |   |       |   |   |       |   |           array.pyi
|   |   |       |   |   |       |   |           citext.pyi
|   |   |       |   |   |       |   |           hstore.pyi
|   |   |       |   |   |       |   |           jsonb.pyi
|   |   |       |   |   |       |   |           mixins.pyi
|   |   |       |   |   |       |   |           ranges.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   +---redirects
|   |   |       |   |   |       |   |       middleware.pyi
|   |   |       |   |   |       |   |       models.pyi
|   |   |       |   |   |       |   |       __init__.pyi
|   |   |       |   |   |       |   |       
|   |   |       |   |   |       |   +---sessions
|   |   |       |   |   |       |   |   |   base_session.pyi
|   |   |       |   |   |       |   |   |   exceptions.pyi
|   |   |       |   |   |       |   |   |   middleware.pyi
|   |   |       |   |   |       |   |   |   models.pyi
|   |   |       |   |   |       |   |   |   serializers.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   +---backends
|   |   |       |   |   |       |   |   |       base.pyi
|   |   |       |   |   |       |   |   |       cache.pyi
|   |   |       |   |   |       |   |   |       cached_db.pyi
|   |   |       |   |   |       |   |   |       db.pyi
|   |   |       |   |   |       |   |   |       file.pyi
|   |   |       |   |   |       |   |   |       signed_cookies.pyi
|   |   |       |   |   |       |   |   |       __init__.pyi
|   |   |       |   |   |       |   |   |       
|   |   |       |   |   |       |   |   \---management
|   |   |       |   |   |       |   |       |   __init__.pyi
|   |   |       |   |   |       |   |       |   
|   |   |       |   |   |       |   |       \---commands
|   |   |       |   |   |       |   |               clearsessions.pyi
|   |   |       |   |   |       |   |               __init__.pyi
|   |   |       |   |   |       |   |               
|   |   |       |   |   |       |   +---sitemaps
|   |   |       |   |   |       |   |   |   views.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---management
|   |   |       |   |   |       |   |       |   __init__.pyi
|   |   |       |   |   |       |   |       |   
|   |   |       |   |   |       |   |       \---commands
|   |   |       |   |   |       |   |               ping_google.pyi
|   |   |       |   |   |       |   |               __init__.pyi
|   |   |       |   |   |       |   |               
|   |   |       |   |   |       |   +---sites
|   |   |       |   |   |       |   |       apps.pyi
|   |   |       |   |   |       |   |       management.pyi
|   |   |       |   |   |       |   |       managers.pyi
|   |   |       |   |   |       |   |       middleware.pyi
|   |   |       |   |   |       |   |       models.pyi
|   |   |       |   |   |       |   |       requests.pyi
|   |   |       |   |   |       |   |       shortcuts.pyi
|   |   |       |   |   |       |   |       __init__.pyi
|   |   |       |   |   |       |   |       
|   |   |       |   |   |       |   +---staticfiles
|   |   |       |   |   |       |   |   |   apps.pyi
|   |   |       |   |   |       |   |   |   checks.pyi
|   |   |       |   |   |       |   |   |   finders.pyi
|   |   |       |   |   |       |   |   |   handlers.pyi
|   |   |       |   |   |       |   |   |   storage.pyi
|   |   |       |   |   |       |   |   |   testing.pyi
|   |   |       |   |   |       |   |   |   urls.pyi
|   |   |       |   |   |       |   |   |   utils.pyi
|   |   |       |   |   |       |   |   |   views.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   +---management
|   |   |       |   |   |       |   |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   |   
|   |   |       |   |   |       |   |   |   \---commands
|   |   |       |   |   |       |   |   |           collectstatic.pyi
|   |   |       |   |   |       |   |   |           findstatic.pyi
|   |   |       |   |   |       |   |   |           runserver.pyi
|   |   |       |   |   |       |   |   |           __init__.pyi
|   |   |       |   |   |       |   |   |           
|   |   |       |   |   |       |   |   \---templatetags
|   |   |       |   |   |       |   |           staticfiles.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   \---syndication
|   |   |       |   |   |       |           views.pyi
|   |   |       |   |   |       |           __init__.pyi
|   |   |       |   |   |       |           
|   |   |       |   |   |       +---core
|   |   |       |   |   |       |   |   exceptions.pyi
|   |   |       |   |   |       |   |   paginator.pyi
|   |   |       |   |   |       |   |   signals.pyi
|   |   |       |   |   |       |   |   signing.pyi
|   |   |       |   |   |       |   |   validators.pyi
|   |   |       |   |   |       |   |   wsgi.pyi
|   |   |       |   |   |       |   |   __init__.pyi
|   |   |       |   |   |       |   |   
|   |   |       |   |   |       |   +---cache
|   |   |       |   |   |       |   |   |   utils.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---backends
|   |   |       |   |   |       |   |           base.pyi
|   |   |       |   |   |       |   |           db.pyi
|   |   |       |   |   |       |   |           dummy.pyi
|   |   |       |   |   |       |   |           filebased.pyi
|   |   |       |   |   |       |   |           locmem.pyi
|   |   |       |   |   |       |   |           memcached.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   +---checks
|   |   |       |   |   |       |   |   |   caches.pyi
|   |   |       |   |   |       |   |   |   database.pyi
|   |   |       |   |   |       |   |   |   messages.pyi
|   |   |       |   |   |       |   |   |   model_checks.pyi
|   |   |       |   |   |       |   |   |   registry.pyi
|   |   |       |   |   |       |   |   |   templates.pyi
|   |   |       |   |   |       |   |   |   translation.pyi
|   |   |       |   |   |       |   |   |   urls.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---security
|   |   |       |   |   |       |   |           base.pyi
|   |   |       |   |   |       |   |           csrf.pyi
|   |   |       |   |   |       |   |           sessions.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   +---files
|   |   |       |   |   |       |   |       base.pyi
|   |   |       |   |   |       |   |       images.pyi
|   |   |       |   |   |       |   |       locks.pyi
|   |   |       |   |   |       |   |       move.pyi
|   |   |       |   |   |       |   |       storage.pyi
|   |   |       |   |   |       |   |       temp.pyi
|   |   |       |   |   |       |   |       uploadedfile.pyi
|   |   |       |   |   |       |   |       uploadhandler.pyi
|   |   |       |   |   |       |   |       utils.pyi
|   |   |       |   |   |       |   |       __init__.pyi
|   |   |       |   |   |       |   |       
|   |   |       |   |   |       |   +---handlers
|   |   |       |   |   |       |   |       base.pyi
|   |   |       |   |   |       |   |       exception.pyi
|   |   |       |   |   |       |   |       wsgi.pyi
|   |   |       |   |   |       |   |       __init__.pyi
|   |   |       |   |   |       |   |       
|   |   |       |   |   |       |   +---mail
|   |   |       |   |   |       |   |   |   message.pyi
|   |   |       |   |   |       |   |   |   utils.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---backends
|   |   |       |   |   |       |   |           base.pyi
|   |   |       |   |   |       |   |           console.pyi
|   |   |       |   |   |       |   |           dummy.pyi
|   |   |       |   |   |       |   |           filebased.pyi
|   |   |       |   |   |       |   |           locmem.pyi
|   |   |       |   |   |       |   |           smtp.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   +---management
|   |   |       |   |   |       |   |   |   base.pyi
|   |   |       |   |   |       |   |   |   color.pyi
|   |   |       |   |   |       |   |   |   sql.pyi
|   |   |       |   |   |       |   |   |   templates.pyi
|   |   |       |   |   |       |   |   |   utils.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---commands
|   |   |       |   |   |       |   |           dumpdata.pyi
|   |   |       |   |   |       |   |           loaddata.pyi
|   |   |       |   |   |       |   |           makemessages.pyi
|   |   |       |   |   |       |   |           runserver.pyi
|   |   |       |   |   |       |   |           testserver.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   +---serializers
|   |   |       |   |   |       |   |       base.pyi
|   |   |       |   |   |       |   |       json.pyi
|   |   |       |   |   |       |   |       python.pyi
|   |   |       |   |   |       |   |       __init__.pyi
|   |   |       |   |   |       |   |       
|   |   |       |   |   |       |   \---servers
|   |   |       |   |   |       |           basehttp.pyi
|   |   |       |   |   |       |           __init__.pyi
|   |   |       |   |   |       |           
|   |   |       |   |   |       +---db
|   |   |       |   |   |       |   |   transaction.pyi
|   |   |       |   |   |       |   |   utils.pyi
|   |   |       |   |   |       |   |   __init__.pyi
|   |   |       |   |   |       |   |   
|   |   |       |   |   |       |   +---backends
|   |   |       |   |   |       |   |   |   ddl_references.pyi
|   |   |       |   |   |       |   |   |   signals.pyi
|   |   |       |   |   |       |   |   |   utils.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   +---base
|   |   |       |   |   |       |   |   |       base.pyi
|   |   |       |   |   |       |   |   |       client.pyi
|   |   |       |   |   |       |   |   |       creation.pyi
|   |   |       |   |   |       |   |   |       features.pyi
|   |   |       |   |   |       |   |   |       introspection.pyi
|   |   |       |   |   |       |   |   |       operations.pyi
|   |   |       |   |   |       |   |   |       schema.pyi
|   |   |       |   |   |       |   |   |       validation.pyi
|   |   |       |   |   |       |   |   |       __init__.pyi
|   |   |       |   |   |       |   |   |       
|   |   |       |   |   |       |   |   +---dummy
|   |   |       |   |   |       |   |   |       base.pyi
|   |   |       |   |   |       |   |   |       __init__.pyi
|   |   |       |   |   |       |   |   |       
|   |   |       |   |   |       |   |   +---mysql
|   |   |       |   |   |       |   |   |       client.pyi
|   |   |       |   |   |       |   |   |       __init__.pyi
|   |   |       |   |   |       |   |   |       
|   |   |       |   |   |       |   |   +---postgresql
|   |   |       |   |   |       |   |   |       base.pyi
|   |   |       |   |   |       |   |   |       client.pyi
|   |   |       |   |   |       |   |   |       creation.pyi
|   |   |       |   |   |       |   |   |       operations.pyi
|   |   |       |   |   |       |   |   |       __init__.pyi
|   |   |       |   |   |       |   |   |       
|   |   |       |   |   |       |   |   \---sqlite3
|   |   |       |   |   |       |   |           base.pyi
|   |   |       |   |   |       |   |           creation.pyi
|   |   |       |   |   |       |   |           features.pyi
|   |   |       |   |   |       |   |           introspection.pyi
|   |   |       |   |   |       |   |           operations.pyi
|   |   |       |   |   |       |   |           schema.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   +---migrations
|   |   |       |   |   |       |   |   |   autodetector.pyi
|   |   |       |   |   |       |   |   |   exceptions.pyi
|   |   |       |   |   |       |   |   |   executor.pyi
|   |   |       |   |   |       |   |   |   graph.pyi
|   |   |       |   |   |       |   |   |   loader.pyi
|   |   |       |   |   |       |   |   |   migration.pyi
|   |   |       |   |   |       |   |   |   optimizer.pyi
|   |   |       |   |   |       |   |   |   questioner.pyi
|   |   |       |   |   |       |   |   |   recorder.pyi
|   |   |       |   |   |       |   |   |   serializer.pyi
|   |   |       |   |   |       |   |   |   state.pyi
|   |   |       |   |   |       |   |   |   topological_sort.pyi
|   |   |       |   |   |       |   |   |   utils.pyi
|   |   |       |   |   |       |   |   |   writer.pyi
|   |   |       |   |   |       |   |   |   __init__.pyi
|   |   |       |   |   |       |   |   |   
|   |   |       |   |   |       |   |   \---operations
|   |   |       |   |   |       |   |           base.pyi
|   |   |       |   |   |       |   |           fields.pyi
|   |   |       |   |   |       |   |           models.pyi
|   |   |       |   |   |       |   |           special.pyi
|   |   |       |   |   |       |   |           utils.pyi
|   |   |       |   |   |       |   |           __init__.pyi
|   |   |       |   |   |       |   |           
|   |   |       |   |   |       |   \---models
|   |   |       |   |   |       |       |   aggregates.pyi
|   |   |       |   |   |       |       |   base.pyi
|   |   |       |   |   |       |       |   constraints.pyi
|   |   |       |   |   |       |       |   deletion.pyi
|   |   |       |   |   |       |       |   enums.pyi
|   |   |       |   |   |       |       |   expressions.pyi
|   |   |       |   |   |       |       |   indexes.pyi
|   |   |       |   |   |       |       |   lookups.pyi
|   |   |       |   |   |       |       |   manager.pyi
|   |   |       |   |   |       |       |   options.pyi
|   |   |       |   |   |       |       |   query.pyi
|   |   |       |   |   |       |       |   query_utils.pyi
|   |   |       |   |   |       |       |   signals.pyi
|   |   |       |   |   |       |       |   utils.pyi
|   |   |       |   |   |       |       |   __init__.pyi
|   |   |       |   |   |       |       |   
|   |   |       |   |   |       |       +---fields
|   |   |       |   |   |       |       |       files.pyi
|   |   |       |   |   |       |       |       mixins.pyi
|   |   |       |   |   |       |       |       proxy.pyi
|   |   |       |   |   |       |       |       related.pyi
|   |   |       |   |   |       |       |       related_descriptors.pyi
|   |   |       |   |   |       |       |       related_lookups.pyi
|   |   |       |   |   |       |       |       reverse_related.pyi
|   |   |       |   |   |       |       |       __init__.pyi
|   |   |       |   |   |       |       |       
|   |   |       |   |   |       |       +---functions
|   |   |       |   |   |       |       |       comparison.pyi
|   |   |       |   |   |       |       |       datetime.pyi
|   |   |       |   |   |       |       |       math.pyi
|   |   |       |   |   |       |       |       mixins.pyi
|   |   |       |   |   |       |       |       text.pyi
|   |   |       |   |   |       |       |       window.pyi
|   |   |       |   |   |       |       |       __init__.pyi
|   |   |       |   |   |       |       |       
|   |   |       |   |   |       |       \---sql
|   |   |       |   |   |       |               compiler.pyi
|   |   |       |   |   |       |               constants.pyi
|   |   |       |   |   |       |               datastructures.pyi
|   |   |       |   |   |       |               query.pyi
|   |   |       |   |   |       |               subqueries.pyi
|   |   |       |   |   |       |               where.pyi
|   |   |       |   |   |       |               __init__.pyi
|   |   |       |   |   |       |               
|   |   |       |   |   |       +---dispatch
|   |   |       |   |   |       |       dispatcher.pyi
|   |   |       |   |   |       |       __init__.pyi
|   |   |       |   |   |       |       
|   |   |       |   |   |       +---forms
|   |   |       |   |   |       |       boundfield.pyi
|   |   |       |   |   |       |       fields.pyi
|   |   |       |   |   |       |       forms.pyi
|   |   |       |   |   |       |       formsets.pyi
|   |   |       |   |   |       |       models.pyi
|   |   |       |   |   |       |       renderers.pyi
|   |   |       |   |   |       |       utils.pyi
|   |   |       |   |   |       |       widgets.pyi
|   |   |       |   |   |       |       __init__.pyi
|   |   |       |   |   |       |       
|   |   |       |   |   |       +---http
|   |   |       |   |   |       |       cookie.pyi
|   |   |       |   |   |       |       multipartparser.pyi
|   |   |       |   |   |       |       request.pyi
|   |   |       |   |   |       |       response.pyi
|   |   |       |   |   |       |       __init__.pyi
|   |   |       |   |   |       |       
|   |   |       |   |   |       +---middleware
|   |   |       |   |   |       |       cache.pyi
|   |   |       |   |   |       |       clickjacking.pyi
|   |   |       |   |   |       |       common.pyi
|   |   |       |   |   |       |       csrf.pyi
|   |   |       |   |   |       |       gzip.pyi
|   |   |       |   |   |       |       http.pyi
|   |   |       |   |   |       |       locale.pyi
|   |   |       |   |   |       |       security.pyi
|   |   |       |   |   |       |       __init__.pyi
|   |   |       |   |   |       |       
|   |   |       |   |   |       +---template
|   |   |       |   |   |       |   |   base.pyi
|   |   |       |   |   |       |   |   context.pyi
|   |   |       |   |   |       |   |   context_processors.pyi
|   |   |       |   |   |       |   |   defaultfilters.pyi
|   |   |       |   |   |       |   |   defaulttags.pyi
|   |   |       |   |   |       |   |   engine.pyi
|   |   |       |   |   |       |   |   exceptions.pyi
|   |   |       |   |   |       |   |   library.pyi
|   |   |       |   |   |       |   |   loader.pyi
|   |   |       |   |   |       |   |   loader_tags.pyi
|   |   |       |   |   |       |   |   response.pyi
|   |   |       |   |   |       |   |   smartif.pyi
|   |   |       |   |   |       |   |   utils.pyi
|   |   |       |   |   |       |   |   __init__.pyi
|   |   |       |   |   |       |   |   
|   |   |       |   |   |       |   +---backends
|   |   |       |   |   |       |   |       base.pyi
|   |   |       |   |   |       |   |       django.pyi
|   |   |       |   |   |       |   |       dummy.pyi
|   |   |       |   |   |       |   |       jinja2.pyi
|   |   |       |   |   |       |   |       utils.pyi
|   |   |       |   |   |       |   |       __init__.pyi
|   |   |       |   |   |       |   |       
|   |   |       |   |   |       |   \---loaders
|   |   |       |   |   |       |           app_directories.pyi
|   |   |       |   |   |       |           base.pyi
|   |   |       |   |   |       |           cached.pyi
|   |   |       |   |   |       |           filesystem.pyi
|   |   |       |   |   |       |           locmem.pyi
|   |   |       |   |   |       |           __init__.pyi
|   |   |       |   |   |       |           
|   |   |       |   |   |       +---templatetags
|   |   |       |   |   |       |       cache.pyi
|   |   |       |   |   |       |       i18n.pyi
|   |   |       |   |   |       |       l10n.pyi
|   |   |       |   |   |       |       static.pyi
|   |   |       |   |   |       |       tz.pyi
|   |   |       |   |   |       |       __init__.pyi
|   |   |       |   |   |       |       
|   |   |       |   |   |       +---test
|   |   |       |   |   |       |       client.pyi
|   |   |       |   |   |       |       html.pyi
|   |   |       |   |   |       |       runner.pyi
|   |   |       |   |   |       |       selenium.pyi
|   |   |       |   |   |       |       signals.pyi
|   |   |       |   |   |       |       testcases.pyi
|   |   |       |   |   |       |       utils.pyi
|   |   |       |   |   |       |       __init__.pyi
|   |   |       |   |   |       |       
|   |   |       |   |   |       +---urls
|   |   |       |   |   |       |       base.pyi
|   |   |       |   |   |       |       conf.pyi
|   |   |       |   |   |       |       converters.pyi
|   |   |       |   |   |       |       exceptions.pyi
|   |   |       |   |   |       |       resolvers.pyi
|   |   |       |   |   |       |       utils.pyi
|   |   |       |   |   |       |       __init__.pyi
|   |   |       |   |   |       |       
|   |   |       |   |   |       +---utils
|   |   |       |   |   |       |   |   archive.pyi
|   |   |       |   |   |       |   |   autoreload.pyi
|   |   |       |   |   |       |   |   baseconv.pyi
|   |   |       |   |   |       |   |   cache.pyi
|   |   |       |   |   |       |   |   crypto.pyi
|   |   |       |   |   |       |   |   datastructures.pyi
|   |   |       |   |   |       |   |   dateformat.pyi
|   |   |       |   |   |       |   |   dateparse.pyi
|   |   |       |   |   |       |   |   dates.pyi
|   |   |       |   |   |       |   |   datetime_safe.pyi
|   |   |       |   |   |       |   |   deconstruct.pyi
|   |   |       |   |   |       |   |   decorators.pyi
|   |   |       |   |   |       |   |   deprecation.pyi
|   |   |       |   |   |       |   |   duration.pyi
|   |   |       |   |   |       |   |   encoding.pyi
|   |   |       |   |   |       |   |   feedgenerator.pyi
|   |   |       |   |   |       |   |   formats.pyi
|   |   |       |   |   |       |   |   functional.pyi
|   |   |       |   |   |       |   |   hashable.pyi
|   |   |       |   |   |       |   |   html.pyi
|   |   |       |   |   |       |   |   http.pyi
|   |   |       |   |   |       |   |   inspect.pyi
|   |   |       |   |   |       |   |   ipv6.pyi
|   |   |       |   |   |       |   |   itercompat.pyi
|   |   |       |   |   |       |   |   jslex.pyi
|   |   |       |   |   |       |   |   log.pyi
|   |   |       |   |   |       |   |   lorem_ipsum.pyi
|   |   |       |   |   |       |   |   module_loading.pyi
|   |   |       |   |   |       |   |   numberformat.pyi
|   |   |       |   |   |       |   |   regex_helper.pyi
|   |   |       |   |   |       |   |   safestring.pyi
|   |   |       |   |   |       |   |   six.pyi
|   |   |       |   |   |       |   |   termcolors.pyi
|   |   |       |   |   |       |   |   text.pyi
|   |   |       |   |   |       |   |   timesince.pyi
|   |   |       |   |   |       |   |   timezone.pyi
|   |   |       |   |   |       |   |   topological_sort.pyi
|   |   |       |   |   |       |   |   tree.pyi
|   |   |       |   |   |       |   |   version.pyi
|   |   |       |   |   |       |   |   xmlutils.pyi
|   |   |       |   |   |       |   |   _os.pyi
|   |   |       |   |   |       |   |   __init__.pyi
|   |   |       |   |   |       |   |   
|   |   |       |   |   |       |   \---translation
|   |   |       |   |   |       |           reloader.pyi
|   |   |       |   |   |       |           template.pyi
|   |   |       |   |   |       |           trans_null.pyi
|   |   |       |   |   |       |           trans_real.pyi
|   |   |       |   |   |       |           __init__.pyi
|   |   |       |   |   |       |           
|   |   |       |   |   |       \---views
|   |   |       |   |   |           |   csrf.pyi
|   |   |       |   |   |           |   debug.pyi
|   |   |       |   |   |           |   defaults.pyi
|   |   |       |   |   |           |   i18n.pyi
|   |   |       |   |   |           |   static.pyi
|   |   |       |   |   |           |   __init__.pyi
|   |   |       |   |   |           |   
|   |   |       |   |   |           +---decorators
|   |   |       |   |   |           |       cache.pyi
|   |   |       |   |   |           |       clickjacking.pyi
|   |   |       |   |   |           |       csrf.pyi
|   |   |       |   |   |           |       debug.pyi
|   |   |       |   |   |           |       gzip.pyi
|   |   |       |   |   |           |       http.pyi
|   |   |       |   |   |           |       vary.pyi
|   |   |       |   |   |           |       __init__.pyi
|   |   |       |   |   |           |       
|   |   |       |   |   |           \---generic
|   |   |       |   |   |                   base.pyi
|   |   |       |   |   |                   dates.pyi
|   |   |       |   |   |                   detail.pyi
|   |   |       |   |   |                   edit.pyi
|   |   |       |   |   |                   list.pyi
|   |   |       |   |   |                   __init__.pyi
|   |   |       |   |   |                   
|   |   |       |   |   \---typeshed
|   |   |       |   |       |   LICENSE
|   |   |       |   |       |   
|   |   |       |   |       +---stdlib
|   |   |       |   |       |   +---2
|   |   |       |   |       |   |   |   abc.pyi
|   |   |       |   |       |   |   |   ast.pyi
|   |   |       |   |       |   |   |   atexit.pyi
|   |   |       |   |       |   |   |   BaseHTTPServer.pyi
|   |   |       |   |       |   |   |   builtins.pyi
|   |   |       |   |       |   |   |   CGIHTTPServer.pyi
|   |   |       |   |       |   |   |   collections.pyi
|   |   |       |   |       |   |   |   commands.pyi
|   |   |       |   |       |   |   |   compileall.pyi
|   |   |       |   |       |   |   |   ConfigParser.pyi
|   |   |       |   |       |   |   |   Cookie.pyi
|   |   |       |   |       |   |   |   cookielib.pyi
|   |   |       |   |       |   |   |   copy_reg.pyi
|   |   |       |   |       |   |   |   cPickle.pyi
|   |   |       |   |       |   |   |   cStringIO.pyi
|   |   |       |   |       |   |   |   dircache.pyi
|   |   |       |   |       |   |   |   dummy_thread.pyi
|   |   |       |   |       |   |   |   exceptions.pyi
|   |   |       |   |       |   |   |   fcntl.pyi
|   |   |       |   |       |   |   |   fnmatch.pyi
|   |   |       |   |       |   |   |   functools.pyi
|   |   |       |   |       |   |   |   future_builtins.pyi
|   |   |       |   |       |   |   |   gc.pyi
|   |   |       |   |       |   |   |   getopt.pyi
|   |   |       |   |       |   |   |   getpass.pyi
|   |   |       |   |       |   |   |   gettext.pyi
|   |   |       |   |       |   |   |   glob.pyi
|   |   |       |   |       |   |   |   gzip.pyi
|   |   |       |   |       |   |   |   hashlib.pyi
|   |   |       |   |       |   |   |   heapq.pyi
|   |   |       |   |       |   |   |   htmlentitydefs.pyi
|   |   |       |   |       |   |   |   HTMLParser.pyi
|   |   |       |   |       |   |   |   httplib.pyi
|   |   |       |   |       |   |   |   imp.pyi
|   |   |       |   |       |   |   |   importlib.pyi
|   |   |       |   |       |   |   |   inspect.pyi
|   |   |       |   |       |   |   |   io.pyi
|   |   |       |   |       |   |   |   itertools.pyi
|   |   |       |   |       |   |   |   json.pyi
|   |   |       |   |       |   |   |   markupbase.pyi
|   |   |       |   |       |   |   |   md5.pyi
|   |   |       |   |       |   |   |   mimetools.pyi
|   |   |       |   |       |   |   |   mutex.pyi
|   |   |       |   |       |   |   |   ntpath.pyi
|   |   |       |   |       |   |   |   nturl2path.pyi
|   |   |       |   |       |   |   |   os2emxpath.pyi
|   |   |       |   |       |   |   |   pipes.pyi
|   |   |       |   |       |   |   |   platform.pyi
|   |   |       |   |       |   |   |   popen2.pyi
|   |   |       |   |       |   |   |   posix.pyi
|   |   |       |   |       |   |   |   posixpath.pyi
|   |   |       |   |       |   |   |   Queue.pyi
|   |   |       |   |       |   |   |   random.pyi
|   |   |       |   |       |   |   |   re.pyi
|   |   |       |   |       |   |   |   repr.pyi
|   |   |       |   |       |   |   |   resource.pyi
|   |   |       |   |       |   |   |   rfc822.pyi
|   |   |       |   |       |   |   |   robotparser.pyi
|   |   |       |   |       |   |   |   runpy.pyi
|   |   |       |   |       |   |   |   sets.pyi
|   |   |       |   |       |   |   |   sha.pyi
|   |   |       |   |       |   |   |   shelve.pyi
|   |   |       |   |       |   |   |   shlex.pyi
|   |   |       |   |       |   |   |   signal.pyi
|   |   |       |   |       |   |   |   SimpleHTTPServer.pyi
|   |   |       |   |       |   |   |   smtplib.pyi
|   |   |       |   |       |   |   |   SocketServer.pyi
|   |   |       |   |       |   |   |   spwd.pyi
|   |   |       |   |       |   |   |   sre_constants.pyi
|   |   |       |   |       |   |   |   sre_parse.pyi
|   |   |       |   |       |   |   |   stat.pyi
|   |   |       |   |       |   |   |   string.pyi
|   |   |       |   |       |   |   |   StringIO.pyi
|   |   |       |   |       |   |   |   stringold.pyi
|   |   |       |   |       |   |   |   strop.pyi
|   |   |       |   |       |   |   |   subprocess.pyi
|   |   |       |   |       |   |   |   symbol.pyi
|   |   |       |   |       |   |   |   sys.pyi
|   |   |       |   |       |   |   |   tempfile.pyi
|   |   |       |   |       |   |   |   textwrap.pyi
|   |   |       |   |       |   |   |   thread.pyi
|   |   |       |   |       |   |   |   toaiff.pyi
|   |   |       |   |       |   |   |   tokenize.pyi
|   |   |       |   |       |   |   |   types.pyi
|   |   |       |   |       |   |   |   typing.pyi
|   |   |       |   |       |   |   |   unittest.pyi
|   |   |       |   |       |   |   |   urllib.pyi
|   |   |       |   |       |   |   |   urllib2.pyi
|   |   |       |   |       |   |   |   urlparse.pyi
|   |   |       |   |       |   |   |   user.pyi
|   |   |       |   |       |   |   |   UserDict.pyi
|   |   |       |   |       |   |   |   UserList.pyi
|   |   |       |   |       |   |   |   UserString.pyi
|   |   |       |   |       |   |   |   whichdb.pyi
|   |   |       |   |       |   |   |   xmlrpclib.pyi
|   |   |       |   |       |   |   |   _ast.pyi
|   |   |       |   |       |   |   |   _collections.pyi
|   |   |       |   |       |   |   |   _functools.pyi
|   |   |       |   |       |   |   |   _hotshot.pyi
|   |   |       |   |       |   |   |   _io.pyi
|   |   |       |   |       |   |   |   _json.pyi
|   |   |       |   |       |   |   |   _md5.pyi
|   |   |       |   |       |   |   |   _sha.pyi
|   |   |       |   |       |   |   |   _sha256.pyi
|   |   |       |   |       |   |   |   _sha512.pyi
|   |   |       |   |       |   |   |   _socket.pyi
|   |   |       |   |       |   |   |   _sre.pyi
|   |   |       |   |       |   |   |   _struct.pyi
|   |   |       |   |       |   |   |   _symtable.pyi
|   |   |       |   |       |   |   |   _threading_local.pyi
|   |   |       |   |       |   |   |   _winreg.pyi
|   |   |       |   |       |   |   |   __builtin__.pyi
|   |   |       |   |       |   |   |   
|   |   |       |   |       |   |   +---distutils
|   |   |       |   |       |   |   |   |   archive_util.pyi
|   |   |       |   |       |   |   |   |   bcppcompiler.pyi
|   |   |       |   |       |   |   |   |   ccompiler.pyi
|   |   |       |   |       |   |   |   |   cmd.pyi
|   |   |       |   |       |   |   |   |   config.pyi
|   |   |       |   |       |   |   |   |   core.pyi
|   |   |       |   |       |   |   |   |   cygwinccompiler.pyi
|   |   |       |   |       |   |   |   |   debug.pyi
|   |   |       |   |       |   |   |   |   dep_util.pyi
|   |   |       |   |       |   |   |   |   dir_util.pyi
|   |   |       |   |       |   |   |   |   dist.pyi
|   |   |       |   |       |   |   |   |   emxccompiler.pyi
|   |   |       |   |       |   |   |   |   errors.pyi
|   |   |       |   |       |   |   |   |   extension.pyi
|   |   |       |   |       |   |   |   |   fancy_getopt.pyi
|   |   |       |   |       |   |   |   |   filelist.pyi
|   |   |       |   |       |   |   |   |   file_util.pyi
|   |   |       |   |       |   |   |   |   log.pyi
|   |   |       |   |       |   |   |   |   msvccompiler.pyi
|   |   |       |   |       |   |   |   |   spawn.pyi
|   |   |       |   |       |   |   |   |   sysconfig.pyi
|   |   |       |   |       |   |   |   |   text_file.pyi
|   |   |       |   |       |   |   |   |   unixccompiler.pyi
|   |   |       |   |       |   |   |   |   util.pyi
|   |   |       |   |       |   |   |   |   version.pyi
|   |   |       |   |       |   |   |   |   __init__.pyi
|   |   |       |   |       |   |   |   |   
|   |   |       |   |       |   |   |   \---command
|   |   |       |   |       |   |   |           bdist.pyi
|   |   |       |   |       |   |   |           bdist_dumb.pyi
|   |   |       |   |       |   |   |           bdist_msi.pyi
|   |   |       |   |       |   |   |           bdist_packager.pyi
|   |   |       |   |       |   |   |           bdist_rpm.pyi
|   |   |       |   |       |   |   |           bdist_wininst.pyi
|   |   |       |   |       |   |   |           build.pyi
|   |   |       |   |       |   |   |           build_clib.pyi
|   |   |       |   |       |   |   |           build_ext.pyi
|   |   |       |   |       |   |   |           build_py.pyi
|   |   |       |   |       |   |   |           build_scripts.pyi
|   |   |       |   |       |   |   |           check.pyi
|   |   |       |   |       |   |   |           clean.pyi
|   |   |       |   |       |   |   |           config.pyi
|   |   |       |   |       |   |   |           install.pyi
|   |   |       |   |       |   |   |           install_data.pyi
|   |   |       |   |       |   |   |           install_egg_info.pyi
|   |   |       |   |       |   |   |           install_headers.pyi
|   |   |       |   |       |   |   |           install_lib.pyi
|   |   |       |   |       |   |   |           install_scripts.pyi
|   |   |       |   |       |   |   |           register.pyi
|   |   |       |   |       |   |   |           sdist.pyi
|   |   |       |   |       |   |   |           upload.pyi
|   |   |       |   |       |   |   |           __init__.pyi
|   |   |       |   |       |   |   |           
|   |   |       |   |       |   |   +---email
|   |   |       |   |       |   |   |   |   base64mime.pyi
|   |   |       |   |       |   |   |   |   charset.pyi
|   |   |       |   |       |   |   |   |   encoders.pyi
|   |   |       |   |       |   |   |   |   feedparser.pyi
|   |   |       |   |       |   |   |   |   generator.pyi
|   |   |       |   |       |   |   |   |   header.pyi
|   |   |       |   |       |   |   |   |   iterators.pyi
|   |   |       |   |       |   |   |   |   message.pyi
|   |   |       |   |       |   |   |   |   MIMEText.pyi
|   |   |       |   |       |   |   |   |   parser.pyi
|   |   |       |   |       |   |   |   |   quoprimime.pyi
|   |   |       |   |       |   |   |   |   utils.pyi
|   |   |       |   |       |   |   |   |   _parseaddr.pyi
|   |   |       |   |       |   |   |   |   __init__.pyi
|   |   |       |   |       |   |   |   |   
|   |   |       |   |       |   |   |   \---mime
|   |   |       |   |       |   |   |           application.pyi
|   |   |       |   |       |   |   |           audio.pyi
|   |   |       |   |       |   |   |           base.pyi
|   |   |       |   |       |   |   |           image.pyi
|   |   |       |   |       |   |   |           message.pyi
|   |   |       |   |       |   |   |           multipart.pyi
|   |   |       |   |       |   |   |           nonmultipart.pyi
|   |   |       |   |       |   |   |           text.pyi
|   |   |       |   |       |   |   |           __init__.pyi
|   |   |       |   |       |   |   |           
|   |   |       |   |       |   |   +---encodings
|   |   |       |   |       |   |   |       utf_8.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---multiprocessing
|   |   |       |   |       |   |   |   |   pool.pyi
|   |   |       |   |       |   |   |   |   process.pyi
|   |   |       |   |       |   |   |   |   util.pyi
|   |   |       |   |       |   |   |   |   __init__.pyi
|   |   |       |   |       |   |   |   |   
|   |   |       |   |       |   |   |   \---dummy
|   |   |       |   |       |   |   |           connection.pyi
|   |   |       |   |       |   |   |           __init__.pyi
|   |   |       |   |       |   |   |           
|   |   |       |   |       |   |   \---os
|   |   |       |   |       |   |           path.pyi
|   |   |       |   |       |   |           __init__.pyi
|   |   |       |   |       |   |           
|   |   |       |   |       |   +---2and3
|   |   |       |   |       |   |   |   aifc.pyi
|   |   |       |   |       |   |   |   antigravity.pyi
|   |   |       |   |       |   |   |   argparse.pyi
|   |   |       |   |       |   |   |   array.pyi
|   |   |       |   |       |   |   |   asynchat.pyi
|   |   |       |   |       |   |   |   asyncore.pyi
|   |   |       |   |       |   |   |   audioop.pyi
|   |   |       |   |       |   |   |   base64.pyi
|   |   |       |   |       |   |   |   bdb.pyi
|   |   |       |   |       |   |   |   binascii.pyi
|   |   |       |   |       |   |   |   binhex.pyi
|   |   |       |   |       |   |   |   bisect.pyi
|   |   |       |   |       |   |   |   bz2.pyi
|   |   |       |   |       |   |   |   calendar.pyi
|   |   |       |   |       |   |   |   cgi.pyi
|   |   |       |   |       |   |   |   cgitb.pyi
|   |   |       |   |       |   |   |   chunk.pyi
|   |   |       |   |       |   |   |   cmath.pyi
|   |   |       |   |       |   |   |   cmd.pyi
|   |   |       |   |       |   |   |   code.pyi
|   |   |       |   |       |   |   |   codecs.pyi
|   |   |       |   |       |   |   |   codeop.pyi
|   |   |       |   |       |   |   |   colorsys.pyi
|   |   |       |   |       |   |   |   contextlib.pyi
|   |   |       |   |       |   |   |   copy.pyi
|   |   |       |   |       |   |   |   cProfile.pyi
|   |   |       |   |       |   |   |   crypt.pyi
|   |   |       |   |       |   |   |   csv.pyi
|   |   |       |   |       |   |   |   datetime.pyi
|   |   |       |   |       |   |   |   decimal.pyi
|   |   |       |   |       |   |   |   difflib.pyi
|   |   |       |   |       |   |   |   dis.pyi
|   |   |       |   |       |   |   |   doctest.pyi
|   |   |       |   |       |   |   |   dummy_threading.pyi
|   |   |       |   |       |   |   |   errno.pyi
|   |   |       |   |       |   |   |   filecmp.pyi
|   |   |       |   |       |   |   |   fileinput.pyi
|   |   |       |   |       |   |   |   formatter.pyi
|   |   |       |   |       |   |   |   fractions.pyi
|   |   |       |   |       |   |   |   ftplib.pyi
|   |   |       |   |       |   |   |   genericpath.pyi
|   |   |       |   |       |   |   |   grp.pyi
|   |   |       |   |       |   |   |   hmac.pyi
|   |   |       |   |       |   |   |   imaplib.pyi
|   |   |       |   |       |   |   |   imghdr.pyi
|   |   |       |   |       |   |   |   keyword.pyi
|   |   |       |   |       |   |   |   linecache.pyi
|   |   |       |   |       |   |   |   locale.pyi
|   |   |       |   |       |   |   |   macpath.pyi
|   |   |       |   |       |   |   |   mailbox.pyi
|   |   |       |   |       |   |   |   mailcap.pyi
|   |   |       |   |       |   |   |   marshal.pyi
|   |   |       |   |       |   |   |   math.pyi
|   |   |       |   |       |   |   |   mimetypes.pyi
|   |   |       |   |       |   |   |   mmap.pyi
|   |   |       |   |       |   |   |   modulefinder.pyi
|   |   |       |   |       |   |   |   msvcrt.pyi
|   |   |       |   |       |   |   |   netrc.pyi
|   |   |       |   |       |   |   |   nis.pyi
|   |   |       |   |       |   |   |   numbers.pyi
|   |   |       |   |       |   |   |   opcode.pyi
|   |   |       |   |       |   |   |   operator.pyi
|   |   |       |   |       |   |   |   optparse.pyi
|   |   |       |   |       |   |   |   parser.pyi
|   |   |       |   |       |   |   |   pdb.pyi
|   |   |       |   |       |   |   |   pickle.pyi
|   |   |       |   |       |   |   |   pickletools.pyi
|   |   |       |   |       |   |   |   pkgutil.pyi
|   |   |       |   |       |   |   |   plistlib.pyi
|   |   |       |   |       |   |   |   poplib.pyi
|   |   |       |   |       |   |   |   pprint.pyi
|   |   |       |   |       |   |   |   profile.pyi
|   |   |       |   |       |   |   |   pstats.pyi
|   |   |       |   |       |   |   |   pty.pyi
|   |   |       |   |       |   |   |   pwd.pyi
|   |   |       |   |       |   |   |   pyclbr.pyi
|   |   |       |   |       |   |   |   pydoc.pyi
|   |   |       |   |       |   |   |   py_compile.pyi
|   |   |       |   |       |   |   |   quopri.pyi
|   |   |       |   |       |   |   |   readline.pyi
|   |   |       |   |       |   |   |   rlcompleter.pyi
|   |   |       |   |       |   |   |   sched.pyi
|   |   |       |   |       |   |   |   select.pyi
|   |   |       |   |       |   |   |   shutil.pyi
|   |   |       |   |       |   |   |   site.pyi
|   |   |       |   |       |   |   |   smtpd.pyi
|   |   |       |   |       |   |   |   sndhdr.pyi
|   |   |       |   |       |   |   |   socket.pyi
|   |   |       |   |       |   |   |   sre_compile.pyi
|   |   |       |   |       |   |   |   ssl.pyi
|   |   |       |   |       |   |   |   stringprep.pyi
|   |   |       |   |       |   |   |   struct.pyi
|   |   |       |   |       |   |   |   sunau.pyi
|   |   |       |   |       |   |   |   symtable.pyi
|   |   |       |   |       |   |   |   sysconfig.pyi
|   |   |       |   |       |   |   |   syslog.pyi
|   |   |       |   |       |   |   |   tabnanny.pyi
|   |   |       |   |       |   |   |   tarfile.pyi
|   |   |       |   |       |   |   |   telnetlib.pyi
|   |   |       |   |       |   |   |   termios.pyi
|   |   |       |   |       |   |   |   this.pyi
|   |   |       |   |       |   |   |   threading.pyi
|   |   |       |   |       |   |   |   time.pyi
|   |   |       |   |       |   |   |   timeit.pyi
|   |   |       |   |       |   |   |   token.pyi
|   |   |       |   |       |   |   |   trace.pyi
|   |   |       |   |       |   |   |   traceback.pyi
|   |   |       |   |       |   |   |   tty.pyi
|   |   |       |   |       |   |   |   turtle.pyi
|   |   |       |   |       |   |   |   unicodedata.pyi
|   |   |       |   |       |   |   |   uu.pyi
|   |   |       |   |       |   |   |   uuid.pyi
|   |   |       |   |       |   |   |   warnings.pyi
|   |   |       |   |       |   |   |   wave.pyi
|   |   |       |   |       |   |   |   weakref.pyi
|   |   |       |   |       |   |   |   webbrowser.pyi
|   |   |       |   |       |   |   |   winsound.pyi
|   |   |       |   |       |   |   |   xdrlib.pyi
|   |   |       |   |       |   |   |   zipfile.pyi
|   |   |       |   |       |   |   |   zipimport.pyi
|   |   |       |   |       |   |   |   zlib.pyi
|   |   |       |   |       |   |   |   _bisect.pyi
|   |   |       |   |       |   |   |   _codecs.pyi
|   |   |       |   |       |   |   |   _csv.pyi
|   |   |       |   |       |   |   |   _curses.pyi
|   |   |       |   |       |   |   |   _dummy_threading.pyi
|   |   |       |   |       |   |   |   _heapq.pyi
|   |   |       |   |       |   |   |   _msi.pyi
|   |   |       |   |       |   |   |   _random.pyi
|   |   |       |   |       |   |   |   _warnings.pyi
|   |   |       |   |       |   |   |   _weakref.pyi
|   |   |       |   |       |   |   |   _weakrefset.pyi
|   |   |       |   |       |   |   |   __future__.pyi
|   |   |       |   |       |   |   |   
|   |   |       |   |       |   |   +---ctypes
|   |   |       |   |       |   |   |       util.pyi
|   |   |       |   |       |   |   |       wintypes.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---curses
|   |   |       |   |       |   |   |       ascii.pyi
|   |   |       |   |       |   |   |       panel.pyi
|   |   |       |   |       |   |   |       textpad.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---ensurepip
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---lib2to3
|   |   |       |   |       |   |   |   |   pygram.pyi
|   |   |       |   |       |   |   |   |   pytree.pyi
|   |   |       |   |       |   |   |   |   __init__.pyi
|   |   |       |   |       |   |   |   |   
|   |   |       |   |       |   |   |   \---pgen2
|   |   |       |   |       |   |   |           driver.pyi
|   |   |       |   |       |   |   |           grammar.pyi
|   |   |       |   |       |   |   |           literals.pyi
|   |   |       |   |       |   |   |           parse.pyi
|   |   |       |   |       |   |   |           pgen.pyi
|   |   |       |   |       |   |   |           token.pyi
|   |   |       |   |       |   |   |           tokenize.pyi
|   |   |       |   |       |   |   |           __init__.pyi
|   |   |       |   |       |   |   |           
|   |   |       |   |       |   |   +---logging
|   |   |       |   |       |   |   |       config.pyi
|   |   |       |   |       |   |   |       handlers.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---msilib
|   |   |       |   |       |   |   |       schema.pyi
|   |   |       |   |       |   |   |       sequence.pyi
|   |   |       |   |       |   |   |       text.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---pydoc_data
|   |   |       |   |       |   |   |       topics.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---pyexpat
|   |   |       |   |       |   |   |       errors.pyi
|   |   |       |   |       |   |   |       model.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---sqlite3
|   |   |       |   |       |   |   |       dbapi2.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---wsgiref
|   |   |       |   |       |   |   |       handlers.pyi
|   |   |       |   |       |   |   |       headers.pyi
|   |   |       |   |       |   |   |       simple_server.pyi
|   |   |       |   |       |   |   |       types.pyi
|   |   |       |   |       |   |   |       util.pyi
|   |   |       |   |       |   |   |       validate.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---xml
|   |   |       |   |       |   |   |   |   __init__.pyi
|   |   |       |   |       |   |   |   |   
|   |   |       |   |       |   |   |   +---dom
|   |   |       |   |       |   |   |   |       domreg.pyi
|   |   |       |   |       |   |   |   |       expatbuilder.pyi
|   |   |       |   |       |   |   |   |       minicompat.pyi
|   |   |       |   |       |   |   |   |       minidom.pyi
|   |   |       |   |       |   |   |   |       NodeFilter.pyi
|   |   |       |   |       |   |   |   |       pulldom.pyi
|   |   |       |   |       |   |   |   |       xmlbuilder.pyi
|   |   |       |   |       |   |   |   |       __init__.pyi
|   |   |       |   |       |   |   |   |       
|   |   |       |   |       |   |   |   +---etree
|   |   |       |   |       |   |   |   |       cElementTree.pyi
|   |   |       |   |       |   |   |   |       ElementInclude.pyi
|   |   |       |   |       |   |   |   |       ElementPath.pyi
|   |   |       |   |       |   |   |   |       ElementTree.pyi
|   |   |       |   |       |   |   |   |       __init__.pyi
|   |   |       |   |       |   |   |   |       
|   |   |       |   |       |   |   |   +---parsers
|   |   |       |   |       |   |   |   |   |   __init__.pyi
|   |   |       |   |       |   |   |   |   |   
|   |   |       |   |       |   |   |   |   \---expat
|   |   |       |   |       |   |   |   |           errors.pyi
|   |   |       |   |       |   |   |   |           model.pyi
|   |   |       |   |       |   |   |   |           __init__.pyi
|   |   |       |   |       |   |   |   |           
|   |   |       |   |       |   |   |   \---sax
|   |   |       |   |       |   |   |           handler.pyi
|   |   |       |   |       |   |   |           saxutils.pyi
|   |   |       |   |       |   |   |           xmlreader.pyi
|   |   |       |   |       |   |   |           __init__.pyi
|   |   |       |   |       |   |   |           
|   |   |       |   |       |   |   \---_typeshed
|   |   |       |   |       |   |           wsgi.pyi
|   |   |       |   |       |   |           xml.pyi
|   |   |       |   |       |   |           __init__.pyi
|   |   |       |   |       |   |           
|   |   |       |   |       |   +---3
|   |   |       |   |       |   |   |   abc.pyi
|   |   |       |   |       |   |   |   ast.pyi
|   |   |       |   |       |   |   |   atexit.pyi
|   |   |       |   |       |   |   |   builtins.pyi
|   |   |       |   |       |   |   |   compileall.pyi
|   |   |       |   |       |   |   |   configparser.pyi
|   |   |       |   |       |   |   |   copyreg.pyi
|   |   |       |   |       |   |   |   enum.pyi
|   |   |       |   |       |   |   |   faulthandler.pyi
|   |   |       |   |       |   |   |   fcntl.pyi
|   |   |       |   |       |   |   |   fnmatch.pyi
|   |   |       |   |       |   |   |   functools.pyi
|   |   |       |   |       |   |   |   gc.pyi
|   |   |       |   |       |   |   |   getopt.pyi
|   |   |       |   |       |   |   |   getpass.pyi
|   |   |       |   |       |   |   |   gettext.pyi
|   |   |       |   |       |   |   |   glob.pyi
|   |   |       |   |       |   |   |   gzip.pyi
|   |   |       |   |       |   |   |   hashlib.pyi
|   |   |       |   |       |   |   |   heapq.pyi
|   |   |       |   |       |   |   |   imp.pyi
|   |   |       |   |       |   |   |   inspect.pyi
|   |   |       |   |       |   |   |   io.pyi
|   |   |       |   |       |   |   |   ipaddress.pyi
|   |   |       |   |       |   |   |   itertools.pyi
|   |   |       |   |       |   |   |   lzma.pyi
|   |   |       |   |       |   |   |   macurl2path.pyi
|   |   |       |   |       |   |   |   nntplib.pyi
|   |   |       |   |       |   |   |   ntpath.pyi
|   |   |       |   |       |   |   |   nturl2path.pyi
|   |   |       |   |       |   |   |   pathlib.pyi
|   |   |       |   |       |   |   |   pipes.pyi
|   |   |       |   |       |   |   |   platform.pyi
|   |   |       |   |       |   |   |   posix.pyi
|   |   |       |   |       |   |   |   posixpath.pyi
|   |   |       |   |       |   |   |   queue.pyi
|   |   |       |   |       |   |   |   random.pyi
|   |   |       |   |       |   |   |   re.pyi
|   |   |       |   |       |   |   |   reprlib.pyi
|   |   |       |   |       |   |   |   resource.pyi
|   |   |       |   |       |   |   |   runpy.pyi
|   |   |       |   |       |   |   |   secrets.pyi
|   |   |       |   |       |   |   |   selectors.pyi
|   |   |       |   |       |   |   |   shelve.pyi
|   |   |       |   |       |   |   |   shlex.pyi
|   |   |       |   |       |   |   |   signal.pyi
|   |   |       |   |       |   |   |   smtplib.pyi
|   |   |       |   |       |   |   |   socketserver.pyi
|   |   |       |   |       |   |   |   spwd.pyi
|   |   |       |   |       |   |   |   sre_constants.pyi
|   |   |       |   |       |   |   |   sre_parse.pyi
|   |   |       |   |       |   |   |   stat.pyi
|   |   |       |   |       |   |   |   statistics.pyi
|   |   |       |   |       |   |   |   string.pyi
|   |   |       |   |       |   |   |   subprocess.pyi
|   |   |       |   |       |   |   |   symbol.pyi
|   |   |       |   |       |   |   |   sys.pyi
|   |   |       |   |       |   |   |   tempfile.pyi
|   |   |       |   |       |   |   |   textwrap.pyi
|   |   |       |   |       |   |   |   tokenize.pyi
|   |   |       |   |       |   |   |   tracemalloc.pyi
|   |   |       |   |       |   |   |   types.pyi
|   |   |       |   |       |   |   |   typing.pyi
|   |   |       |   |       |   |   |   winreg.pyi
|   |   |       |   |       |   |   |   xxlimited.pyi
|   |   |       |   |       |   |   |   zipapp.pyi
|   |   |       |   |       |   |   |   _ast.pyi
|   |   |       |   |       |   |   |   _bootlocale.pyi
|   |   |       |   |       |   |   |   _compat_pickle.pyi
|   |   |       |   |       |   |   |   _compression.pyi
|   |   |       |   |       |   |   |   _decimal.pyi
|   |   |       |   |       |   |   |   _dummy_thread.pyi
|   |   |       |   |       |   |   |   _imp.pyi
|   |   |       |   |       |   |   |   _importlib_modulespec.pyi
|   |   |       |   |       |   |   |   _json.pyi
|   |   |       |   |       |   |   |   _markupbase.pyi
|   |   |       |   |       |   |   |   _operator.pyi
|   |   |       |   |       |   |   |   _osx_support.pyi
|   |   |       |   |       |   |   |   _posixsubprocess.pyi
|   |   |       |   |       |   |   |   _pydecimal.pyi
|   |   |       |   |       |   |   |   _sitebuiltins.pyi
|   |   |       |   |       |   |   |   _stat.pyi
|   |   |       |   |       |   |   |   _thread.pyi
|   |   |       |   |       |   |   |   _threading_local.pyi
|   |   |       |   |       |   |   |   _tkinter.pyi
|   |   |       |   |       |   |   |   _tracemalloc.pyi
|   |   |       |   |       |   |   |   _winapi.pyi
|   |   |       |   |       |   |   |   
|   |   |       |   |       |   |   +---asyncio
|   |   |       |   |       |   |   |       base_events.pyi
|   |   |       |   |       |   |   |       base_futures.pyi
|   |   |       |   |       |   |   |       base_subprocess.pyi
|   |   |       |   |       |   |   |       base_tasks.pyi
|   |   |       |   |       |   |   |       compat.pyi
|   |   |       |   |       |   |   |       constants.pyi
|   |   |       |   |       |   |   |       coroutines.pyi
|   |   |       |   |       |   |   |       events.pyi
|   |   |       |   |       |   |   |       exceptions.pyi
|   |   |       |   |       |   |   |       format_helpers.pyi
|   |   |       |   |       |   |   |       futures.pyi
|   |   |       |   |       |   |   |       locks.pyi
|   |   |       |   |       |   |   |       log.pyi
|   |   |       |   |       |   |   |       proactor_events.pyi
|   |   |       |   |       |   |   |       protocols.pyi
|   |   |       |   |       |   |   |       queues.pyi
|   |   |       |   |       |   |   |       runners.pyi
|   |   |       |   |       |   |   |       selector_events.pyi
|   |   |       |   |       |   |   |       sslproto.pyi
|   |   |       |   |       |   |   |       staggered.pyi
|   |   |       |   |       |   |   |       streams.pyi
|   |   |       |   |       |   |   |       subprocess.pyi
|   |   |       |   |       |   |   |       tasks.pyi
|   |   |       |   |       |   |   |       threads.pyi
|   |   |       |   |       |   |   |       transports.pyi
|   |   |       |   |       |   |   |       trsock.pyi
|   |   |       |   |       |   |   |       unix_events.pyi
|   |   |       |   |       |   |   |       windows_events.pyi
|   |   |       |   |       |   |   |       windows_utils.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---collections
|   |   |       |   |       |   |   |       abc.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---concurrent
|   |   |       |   |       |   |   |   |   __init__.pyi
|   |   |       |   |       |   |   |   |   
|   |   |       |   |       |   |   |   \---futures
|   |   |       |   |       |   |   |           process.pyi
|   |   |       |   |       |   |   |           thread.pyi
|   |   |       |   |       |   |   |           _base.pyi
|   |   |       |   |       |   |   |           __init__.pyi
|   |   |       |   |       |   |   |           
|   |   |       |   |       |   |   +---dbm
|   |   |       |   |       |   |   |       dumb.pyi
|   |   |       |   |       |   |   |       gnu.pyi
|   |   |       |   |       |   |   |       ndbm.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---distutils
|   |   |       |   |       |   |   |   |   archive_util.pyi
|   |   |       |   |       |   |   |   |   bcppcompiler.pyi
|   |   |       |   |       |   |   |   |   ccompiler.pyi
|   |   |       |   |       |   |   |   |   cmd.pyi
|   |   |       |   |       |   |   |   |   config.pyi
|   |   |       |   |       |   |   |   |   core.pyi
|   |   |       |   |       |   |   |   |   cygwinccompiler.pyi
|   |   |       |   |       |   |   |   |   debug.pyi
|   |   |       |   |       |   |   |   |   dep_util.pyi
|   |   |       |   |       |   |   |   |   dir_util.pyi
|   |   |       |   |       |   |   |   |   dist.pyi
|   |   |       |   |       |   |   |   |   errors.pyi
|   |   |       |   |       |   |   |   |   extension.pyi
|   |   |       |   |       |   |   |   |   fancy_getopt.pyi
|   |   |       |   |       |   |   |   |   filelist.pyi
|   |   |       |   |       |   |   |   |   file_util.pyi
|   |   |       |   |       |   |   |   |   log.pyi
|   |   |       |   |       |   |   |   |   msvccompiler.pyi
|   |   |       |   |       |   |   |   |   spawn.pyi
|   |   |       |   |       |   |   |   |   sysconfig.pyi
|   |   |       |   |       |   |   |   |   text_file.pyi
|   |   |       |   |       |   |   |   |   unixccompiler.pyi
|   |   |       |   |       |   |   |   |   util.pyi
|   |   |       |   |       |   |   |   |   version.pyi
|   |   |       |   |       |   |   |   |   __init__.pyi
|   |   |       |   |       |   |   |   |   
|   |   |       |   |       |   |   |   \---command
|   |   |       |   |       |   |   |           bdist.pyi
|   |   |       |   |       |   |   |           bdist_dumb.pyi
|   |   |       |   |       |   |   |           bdist_msi.pyi
|   |   |       |   |       |   |   |           bdist_packager.pyi
|   |   |       |   |       |   |   |           bdist_rpm.pyi
|   |   |       |   |       |   |   |           bdist_wininst.pyi
|   |   |       |   |       |   |   |           build.pyi
|   |   |       |   |       |   |   |           build_clib.pyi
|   |   |       |   |       |   |   |           build_ext.pyi
|   |   |       |   |       |   |   |           build_py.pyi
|   |   |       |   |       |   |   |           build_scripts.pyi
|   |   |       |   |       |   |   |           check.pyi
|   |   |       |   |       |   |   |           clean.pyi
|   |   |       |   |       |   |   |           config.pyi
|   |   |       |   |       |   |   |           install.pyi
|   |   |       |   |       |   |   |           install_data.pyi
|   |   |       |   |       |   |   |           install_egg_info.pyi
|   |   |       |   |       |   |   |           install_headers.pyi
|   |   |       |   |       |   |   |           install_lib.pyi
|   |   |       |   |       |   |   |           install_scripts.pyi
|   |   |       |   |       |   |   |           register.pyi
|   |   |       |   |       |   |   |           sdist.pyi
|   |   |       |   |       |   |   |           upload.pyi
|   |   |       |   |       |   |   |           __init__.pyi
|   |   |       |   |       |   |   |           
|   |   |       |   |       |   |   +---email
|   |   |       |   |       |   |   |   |   charset.pyi
|   |   |       |   |       |   |   |   |   contentmanager.pyi
|   |   |       |   |       |   |   |   |   encoders.pyi
|   |   |       |   |       |   |   |   |   errors.pyi
|   |   |       |   |       |   |   |   |   feedparser.pyi
|   |   |       |   |       |   |   |   |   generator.pyi
|   |   |       |   |       |   |   |   |   header.pyi
|   |   |       |   |       |   |   |   |   headerregistry.pyi
|   |   |       |   |       |   |   |   |   iterators.pyi
|   |   |       |   |       |   |   |   |   message.pyi
|   |   |       |   |       |   |   |   |   parser.pyi
|   |   |       |   |       |   |   |   |   policy.pyi
|   |   |       |   |       |   |   |   |   utils.pyi
|   |   |       |   |       |   |   |   |   __init__.pyi
|   |   |       |   |       |   |   |   |   
|   |   |       |   |       |   |   |   \---mime
|   |   |       |   |       |   |   |           application.pyi
|   |   |       |   |       |   |   |           audio.pyi
|   |   |       |   |       |   |   |           base.pyi
|   |   |       |   |       |   |   |           image.pyi
|   |   |       |   |       |   |   |           message.pyi
|   |   |       |   |       |   |   |           multipart.pyi
|   |   |       |   |       |   |   |           nonmultipart.pyi
|   |   |       |   |       |   |   |           text.pyi
|   |   |       |   |       |   |   |           __init__.pyi
|   |   |       |   |       |   |   |           
|   |   |       |   |       |   |   +---encodings
|   |   |       |   |       |   |   |       utf_8.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---html
|   |   |       |   |       |   |   |       entities.pyi
|   |   |       |   |       |   |   |       parser.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---http
|   |   |       |   |       |   |   |       client.pyi
|   |   |       |   |       |   |   |       cookiejar.pyi
|   |   |       |   |       |   |   |       cookies.pyi
|   |   |       |   |       |   |   |       server.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---importlib
|   |   |       |   |       |   |   |       abc.pyi
|   |   |       |   |       |   |   |       machinery.pyi
|   |   |       |   |       |   |   |       metadata.pyi
|   |   |       |   |       |   |   |       resources.pyi
|   |   |       |   |       |   |   |       util.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---json
|   |   |       |   |       |   |   |       decoder.pyi
|   |   |       |   |       |   |   |       encoder.pyi
|   |   |       |   |       |   |   |       tool.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---multiprocessing
|   |   |       |   |       |   |   |   |   connection.pyi
|   |   |       |   |       |   |   |   |   context.pyi
|   |   |       |   |       |   |   |   |   managers.pyi
|   |   |       |   |       |   |   |   |   pool.pyi
|   |   |       |   |       |   |   |   |   process.pyi
|   |   |       |   |       |   |   |   |   queues.pyi
|   |   |       |   |       |   |   |   |   sharedctypes.pyi
|   |   |       |   |       |   |   |   |   shared_memory.pyi
|   |   |       |   |       |   |   |   |   spawn.pyi
|   |   |       |   |       |   |   |   |   synchronize.pyi
|   |   |       |   |       |   |   |   |   __init__.pyi
|   |   |       |   |       |   |   |   |   
|   |   |       |   |       |   |   |   \---dummy
|   |   |       |   |       |   |   |           connection.pyi
|   |   |       |   |       |   |   |           __init__.pyi
|   |   |       |   |       |   |   |           
|   |   |       |   |       |   |   +---os
|   |   |       |   |       |   |   |       path.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---tkinter
|   |   |       |   |       |   |   |       commondialog.pyi
|   |   |       |   |       |   |   |       constants.pyi
|   |   |       |   |       |   |   |       dialog.pyi
|   |   |       |   |       |   |   |       filedialog.pyi
|   |   |       |   |       |   |   |       font.pyi
|   |   |       |   |       |   |   |       messagebox.pyi
|   |   |       |   |       |   |   |       ttk.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---unittest
|   |   |       |   |       |   |   |       async_case.pyi
|   |   |       |   |       |   |   |       case.pyi
|   |   |       |   |       |   |   |       loader.pyi
|   |   |       |   |       |   |   |       main.pyi
|   |   |       |   |       |   |   |       mock.pyi
|   |   |       |   |       |   |   |       result.pyi
|   |   |       |   |       |   |   |       runner.pyi
|   |   |       |   |       |   |   |       signals.pyi
|   |   |       |   |       |   |   |       suite.pyi
|   |   |       |   |       |   |   |       util.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---urllib
|   |   |       |   |       |   |   |       error.pyi
|   |   |       |   |       |   |   |       parse.pyi
|   |   |       |   |       |   |   |       request.pyi
|   |   |       |   |       |   |   |       response.pyi
|   |   |       |   |       |   |   |       robotparser.pyi
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   +---venv
|   |   |       |   |       |   |   |       __init__.pyi
|   |   |       |   |       |   |   |       
|   |   |       |   |       |   |   \---xmlrpc
|   |   |       |   |       |   |           client.pyi
|   |   |       |   |       |   |           server.pyi
|   |   |       |   |       |   |           __init__.pyi
|   |   |       |   |       |   |           
|   |   |       |   |       |   +---3.7
|   |   |       |   |       |   |       contextvars.pyi
|   |   |       |   |       |   |       dataclasses.pyi
|   |   |       |   |       |   |       _py_abc.pyi
|   |   |       |   |       |   |       
|   |   |       |   |       |   \---3.9
|   |   |       |   |       |       |   graphlib.pyi
|   |   |       |   |       |       |   
|   |   |       |   |       |       \---zoneinfo
|   |   |       |   |       |               __init__.pyi
|   |   |       |   |       |               
|   |   |       |   |       \---third_party
|   |   |       |   |           +---2
|   |   |       |   |           |   |   enum.pyi
|   |   |       |   |           |   |   ipaddress.pyi
|   |   |       |   |           |   |   pathlib2.pyi
|   |   |       |   |           |   |   pymssql.pyi
|   |   |       |   |           |   |   
|   |   |       |   |           |   +---concurrent
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   \---futures
|   |   |       |   |           |   |           process.pyi
|   |   |       |   |           |   |           thread.pyi
|   |   |       |   |           |   |           _base.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   +---fb303
|   |   |       |   |           |   |       FacebookService.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---kazoo
|   |   |       |   |           |   |   |   client.pyi
|   |   |       |   |           |   |   |   exceptions.pyi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   \---recipe
|   |   |       |   |           |   |           watchers.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   +---OpenSSL
|   |   |       |   |           |   |       crypto.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---routes
|   |   |       |   |           |   |       mapper.pyi
|   |   |       |   |           |   |       util.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---scribe
|   |   |       |   |           |   |       scribe.pyi
|   |   |       |   |           |   |       ttypes.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---six
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   \---moves
|   |   |       |   |           |   |       |   BaseHTTPServer.pyi
|   |   |       |   |           |   |       |   CGIHTTPServer.pyi
|   |   |       |   |           |   |       |   collections_abc.pyi
|   |   |       |   |           |   |       |   configparser.pyi
|   |   |       |   |           |   |       |   cPickle.pyi
|   |   |       |   |           |   |       |   email_mime_base.pyi
|   |   |       |   |           |   |       |   email_mime_multipart.pyi
|   |   |       |   |           |   |       |   email_mime_nonmultipart.pyi
|   |   |       |   |           |   |       |   email_mime_text.pyi
|   |   |       |   |           |   |       |   html_entities.pyi
|   |   |       |   |           |   |       |   html_parser.pyi
|   |   |       |   |           |   |       |   http_client.pyi
|   |   |       |   |           |   |       |   http_cookiejar.pyi
|   |   |       |   |           |   |       |   http_cookies.pyi
|   |   |       |   |           |   |       |   queue.pyi
|   |   |       |   |           |   |       |   reprlib.pyi
|   |   |       |   |           |   |       |   SimpleHTTPServer.pyi
|   |   |       |   |           |   |       |   socketserver.pyi
|   |   |       |   |           |   |       |   urllib_error.pyi
|   |   |       |   |           |   |       |   urllib_parse.pyi
|   |   |       |   |           |   |       |   urllib_request.pyi
|   |   |       |   |           |   |       |   urllib_response.pyi
|   |   |       |   |           |   |       |   urllib_robotparser.pyi
|   |   |       |   |           |   |       |   xmlrpc_client.pyi
|   |   |       |   |           |   |       |   _dummy_thread.pyi
|   |   |       |   |           |   |       |   _thread.pyi
|   |   |       |   |           |   |       |   __init__.pyi
|   |   |       |   |           |   |       |   
|   |   |       |   |           |   |       \---urllib
|   |   |       |   |           |   |               error.pyi
|   |   |       |   |           |   |               parse.pyi
|   |   |       |   |           |   |               request.pyi
|   |   |       |   |           |   |               response.pyi
|   |   |       |   |           |   |               robotparser.pyi
|   |   |       |   |           |   |               __init__.pyi
|   |   |       |   |           |   |               
|   |   |       |   |           |   \---tornado
|   |   |       |   |           |           concurrent.pyi
|   |   |       |   |           |           gen.pyi
|   |   |       |   |           |           httpclient.pyi
|   |   |       |   |           |           httpserver.pyi
|   |   |       |   |           |           httputil.pyi
|   |   |       |   |           |           ioloop.pyi
|   |   |       |   |           |           locks.pyi
|   |   |       |   |           |           netutil.pyi
|   |   |       |   |           |           process.pyi
|   |   |       |   |           |           tcpserver.pyi
|   |   |       |   |           |           testing.pyi
|   |   |       |   |           |           util.pyi
|   |   |       |   |           |           web.pyi
|   |   |       |   |           |           __init__.pyi
|   |   |       |   |           |           
|   |   |       |   |           +---2and3
|   |   |       |   |           |   |   backports_abc.pyi
|   |   |       |   |           |   |   certifi.pyi
|   |   |       |   |           |   |   croniter.pyi
|   |   |       |   |           |   |   dateparser.pyi
|   |   |       |   |           |   |   decorator.pyi
|   |   |       |   |           |   |   first.pyi
|   |   |       |   |           |   |   gflags.pyi
|   |   |       |   |           |   |   itsdangerous.pyi
|   |   |       |   |           |   |   mock.pyi
|   |   |       |   |           |   |   mypy_extensions.pyi
|   |   |       |   |           |   |   polib.pyi
|   |   |       |   |           |   |   pycurl.pyi
|   |   |       |   |           |   |   pyre_extensions.pyi
|   |   |       |   |           |   |   singledispatch.pyi
|   |   |       |   |           |   |   tabulate.pyi
|   |   |       |   |           |   |   termcolor.pyi
|   |   |       |   |           |   |   toml.pyi
|   |   |       |   |           |   |   typing_extensions.pyi
|   |   |       |   |           |   |   ujson.pyi
|   |   |       |   |           |   |   
|   |   |       |   |           |   +---atomicwrites
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---attr
|   |   |       |   |           |   |       converters.pyi
|   |   |       |   |           |   |       exceptions.pyi
|   |   |       |   |           |   |       filters.pyi
|   |   |       |   |           |   |       validators.pyi
|   |   |       |   |           |   |       _version_info.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---backports
|   |   |       |   |           |   |       ssl_match_hostname.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---bleach
|   |   |       |   |           |   |       callbacks.pyi
|   |   |       |   |           |   |       linkifier.pyi
|   |   |       |   |           |   |       sanitizer.pyi
|   |   |       |   |           |   |       utils.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---boto
|   |   |       |   |           |   |   |   auth.pyi
|   |   |       |   |           |   |   |   auth_handler.pyi
|   |   |       |   |           |   |   |   compat.pyi
|   |   |       |   |           |   |   |   connection.pyi
|   |   |       |   |           |   |   |   exception.pyi
|   |   |       |   |           |   |   |   plugin.pyi
|   |   |       |   |           |   |   |   regioninfo.pyi
|   |   |       |   |           |   |   |   utils.pyi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   +---ec2
|   |   |       |   |           |   |   |       __init__.pyi
|   |   |       |   |           |   |   |       
|   |   |       |   |           |   |   +---elb
|   |   |       |   |           |   |   |       __init__.pyi
|   |   |       |   |           |   |   |       
|   |   |       |   |           |   |   +---kms
|   |   |       |   |           |   |   |       exceptions.pyi
|   |   |       |   |           |   |   |       layer1.pyi
|   |   |       |   |           |   |   |       __init__.pyi
|   |   |       |   |           |   |   |       
|   |   |       |   |           |   |   \---s3
|   |   |       |   |           |   |           acl.pyi
|   |   |       |   |           |   |           bucket.pyi
|   |   |       |   |           |   |           bucketlistresultset.pyi
|   |   |       |   |           |   |           bucketlogging.pyi
|   |   |       |   |           |   |           connection.pyi
|   |   |       |   |           |   |           cors.pyi
|   |   |       |   |           |   |           deletemarker.pyi
|   |   |       |   |           |   |           key.pyi
|   |   |       |   |           |   |           keyfile.pyi
|   |   |       |   |           |   |           lifecycle.pyi
|   |   |       |   |           |   |           multidelete.pyi
|   |   |       |   |           |   |           multipart.pyi
|   |   |       |   |           |   |           prefix.pyi
|   |   |       |   |           |   |           tagging.pyi
|   |   |       |   |           |   |           user.pyi
|   |   |       |   |           |   |           website.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   +---cachetools
|   |   |       |   |           |   |       abc.pyi
|   |   |       |   |           |   |       cache.pyi
|   |   |       |   |           |   |       decorators.pyi
|   |   |       |   |           |   |       func.pyi
|   |   |       |   |           |   |       lfu.pyi
|   |   |       |   |           |   |       lru.pyi
|   |   |       |   |           |   |       rr.pyi
|   |   |       |   |           |   |       ttl.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---characteristic
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---chardet
|   |   |       |   |           |   |       enums.pyi
|   |   |       |   |           |   |       langbulgarianmodel.pyi
|   |   |       |   |           |   |       langcyrillicmodel.pyi
|   |   |       |   |           |   |       langgreekmodel.pyi
|   |   |       |   |           |   |       langhebrewmodel.pyi
|   |   |       |   |           |   |       langhungarianmodel.pyi
|   |   |       |   |           |   |       langthaimodel.pyi
|   |   |       |   |           |   |       langturkishmodel.pyi
|   |   |       |   |           |   |       universaldetector.pyi
|   |   |       |   |           |   |       version.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---click
|   |   |       |   |           |   |       core.pyi
|   |   |       |   |           |   |       decorators.pyi
|   |   |       |   |           |   |       exceptions.pyi
|   |   |       |   |           |   |       formatting.pyi
|   |   |       |   |           |   |       globals.pyi
|   |   |       |   |           |   |       parser.pyi
|   |   |       |   |           |   |       termui.pyi
|   |   |       |   |           |   |       testing.pyi
|   |   |       |   |           |   |       types.pyi
|   |   |       |   |           |   |       utils.pyi
|   |   |       |   |           |   |       _termui_impl.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---cryptography
|   |   |       |   |           |   |   |   exceptions.pyi
|   |   |       |   |           |   |   |   fernet.pyi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   +---hazmat
|   |   |       |   |           |   |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   |   
|   |   |       |   |           |   |   |   +---backends
|   |   |       |   |           |   |   |   |       interfaces.pyi
|   |   |       |   |           |   |   |   |       __init__.pyi
|   |   |       |   |           |   |   |   |       
|   |   |       |   |           |   |   |   +---bindings
|   |   |       |   |           |   |   |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   |   |   
|   |   |       |   |           |   |   |   |   \---openssl
|   |   |       |   |           |   |   |   |           binding.pyi
|   |   |       |   |           |   |   |   |           __init__.pyi
|   |   |       |   |           |   |   |   |           
|   |   |       |   |           |   |   |   \---primitives
|   |   |       |   |           |   |   |       |   cmac.pyi
|   |   |       |   |           |   |   |       |   constant_time.pyi
|   |   |       |   |           |   |   |       |   hashes.pyi
|   |   |       |   |           |   |   |       |   hmac.pyi
|   |   |       |   |           |   |   |       |   keywrap.pyi
|   |   |       |   |           |   |   |       |   padding.pyi
|   |   |       |   |           |   |   |       |   poly1305.pyi
|   |   |       |   |           |   |   |       |   __init__.pyi
|   |   |       |   |           |   |   |       |   
|   |   |       |   |           |   |   |       +---asymmetric
|   |   |       |   |           |   |   |       |       dh.pyi
|   |   |       |   |           |   |   |       |       dsa.pyi
|   |   |       |   |           |   |   |       |       ec.pyi
|   |   |       |   |           |   |   |       |       ed25519.pyi
|   |   |       |   |           |   |   |       |       ed448.pyi
|   |   |       |   |           |   |   |       |       padding.pyi
|   |   |       |   |           |   |   |       |       rsa.pyi
|   |   |       |   |           |   |   |       |       utils.pyi
|   |   |       |   |           |   |   |       |       x25519.pyi
|   |   |       |   |           |   |   |       |       x448.pyi
|   |   |       |   |           |   |   |       |       __init__.pyi
|   |   |       |   |           |   |   |       |       
|   |   |       |   |           |   |   |       +---ciphers
|   |   |       |   |           |   |   |       |       aead.pyi
|   |   |       |   |           |   |   |       |       algorithms.pyi
|   |   |       |   |           |   |   |       |       modes.pyi
|   |   |       |   |           |   |   |       |       __init__.pyi
|   |   |       |   |           |   |   |       |       
|   |   |       |   |           |   |   |       +---kdf
|   |   |       |   |           |   |   |       |       concatkdf.pyi
|   |   |       |   |           |   |   |       |       hkdf.pyi
|   |   |       |   |           |   |   |       |       kbkdf.pyi
|   |   |       |   |           |   |   |       |       pbkdf2.pyi
|   |   |       |   |           |   |   |       |       scrypt.pyi
|   |   |       |   |           |   |   |       |       x963kdf.pyi
|   |   |       |   |           |   |   |       |       __init__.pyi
|   |   |       |   |           |   |   |       |       
|   |   |       |   |           |   |   |       +---serialization
|   |   |       |   |           |   |   |       |       pkcs12.pyi
|   |   |       |   |           |   |   |       |       __init__.pyi
|   |   |       |   |           |   |   |       |       
|   |   |       |   |           |   |   |       \---twofactor
|   |   |       |   |           |   |   |               hotp.pyi
|   |   |       |   |           |   |   |               totp.pyi
|   |   |       |   |           |   |   |               __init__.pyi
|   |   |       |   |           |   |   |               
|   |   |       |   |           |   |   \---x509
|   |   |       |   |           |   |           extensions.pyi
|   |   |       |   |           |   |           oid.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   +---datetimerange
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---dateutil
|   |   |       |   |           |   |   |   easter.pyi
|   |   |       |   |           |   |   |   parser.pyi
|   |   |       |   |           |   |   |   relativedelta.pyi
|   |   |       |   |           |   |   |   rrule.pyi
|   |   |       |   |           |   |   |   utils.pyi
|   |   |       |   |           |   |   |   _common.pyi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   \---tz
|   |   |       |   |           |   |           tz.pyi
|   |   |       |   |           |   |           _common.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   +---deprecated
|   |   |       |   |           |   |       classic.pyi
|   |   |       |   |           |   |       sphinx.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---emoji
|   |   |       |   |           |   |       core.pyi
|   |   |       |   |           |   |       unicode_codes.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---flask
|   |   |       |   |           |   |   |   app.pyi
|   |   |       |   |           |   |   |   blueprints.pyi
|   |   |       |   |           |   |   |   cli.pyi
|   |   |       |   |           |   |   |   config.pyi
|   |   |       |   |           |   |   |   ctx.pyi
|   |   |       |   |           |   |   |   debughelpers.pyi
|   |   |       |   |           |   |   |   globals.pyi
|   |   |       |   |           |   |   |   helpers.pyi
|   |   |       |   |           |   |   |   logging.pyi
|   |   |       |   |           |   |   |   sessions.pyi
|   |   |       |   |           |   |   |   signals.pyi
|   |   |       |   |           |   |   |   templating.pyi
|   |   |       |   |           |   |   |   testing.pyi
|   |   |       |   |           |   |   |   views.pyi
|   |   |       |   |           |   |   |   wrappers.pyi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   \---json
|   |   |       |   |           |   |           tag.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   +---geoip2
|   |   |       |   |           |   |       database.pyi
|   |   |       |   |           |   |       errors.pyi
|   |   |       |   |           |   |       mixins.pyi
|   |   |       |   |           |   |       models.pyi
|   |   |       |   |           |   |       records.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---google
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   \---protobuf
|   |   |       |   |           |   |       |   any_pb2.pyi
|   |   |       |   |           |   |       |   api_pb2.pyi
|   |   |       |   |           |   |       |   descriptor.pyi
|   |   |       |   |           |   |       |   descriptor_pb2.pyi
|   |   |       |   |           |   |       |   descriptor_pool.pyi
|   |   |       |   |           |   |       |   duration_pb2.pyi
|   |   |       |   |           |   |       |   empty_pb2.pyi
|   |   |       |   |           |   |       |   field_mask_pb2.pyi
|   |   |       |   |           |   |       |   json_format.pyi
|   |   |       |   |           |   |       |   message.pyi
|   |   |       |   |           |   |       |   message_factory.pyi
|   |   |       |   |           |   |       |   reflection.pyi
|   |   |       |   |           |   |       |   service.pyi
|   |   |       |   |           |   |       |   source_context_pb2.pyi
|   |   |       |   |           |   |       |   struct_pb2.pyi
|   |   |       |   |           |   |       |   symbol_database.pyi
|   |   |       |   |           |   |       |   timestamp_pb2.pyi
|   |   |       |   |           |   |       |   type_pb2.pyi
|   |   |       |   |           |   |       |   wrappers_pb2.pyi
|   |   |       |   |           |   |       |   __init__.pyi
|   |   |       |   |           |   |       |   
|   |   |       |   |           |   |       +---compiler
|   |   |       |   |           |   |       |       plugin_pb2.pyi
|   |   |       |   |           |   |       |       __init__.pyi
|   |   |       |   |           |   |       |       
|   |   |       |   |           |   |       +---internal
|   |   |       |   |           |   |       |       containers.pyi
|   |   |       |   |           |   |       |       decoder.pyi
|   |   |       |   |           |   |       |       encoder.pyi
|   |   |       |   |           |   |       |       enum_type_wrapper.pyi
|   |   |       |   |           |   |       |       extension_dict.pyi
|   |   |       |   |           |   |       |       message_listener.pyi
|   |   |       |   |           |   |       |       python_message.pyi
|   |   |       |   |           |   |       |       well_known_types.pyi
|   |   |       |   |           |   |       |       wire_format.pyi
|   |   |       |   |           |   |       |       __init__.pyi
|   |   |       |   |           |   |       |       
|   |   |       |   |           |   |       \---util
|   |   |       |   |           |   |               __init__.pyi
|   |   |       |   |           |   |               
|   |   |       |   |           |   +---jinja2
|   |   |       |   |           |   |       bccache.pyi
|   |   |       |   |           |   |       compiler.pyi
|   |   |       |   |           |   |       constants.pyi
|   |   |       |   |           |   |       debug.pyi
|   |   |       |   |           |   |       defaults.pyi
|   |   |       |   |           |   |       environment.pyi
|   |   |       |   |           |   |       exceptions.pyi
|   |   |       |   |           |   |       ext.pyi
|   |   |       |   |           |   |       filters.pyi
|   |   |       |   |           |   |       lexer.pyi
|   |   |       |   |           |   |       loaders.pyi
|   |   |       |   |           |   |       meta.pyi
|   |   |       |   |           |   |       nodes.pyi
|   |   |       |   |           |   |       optimizer.pyi
|   |   |       |   |           |   |       parser.pyi
|   |   |       |   |           |   |       runtime.pyi
|   |   |       |   |           |   |       sandbox.pyi
|   |   |       |   |           |   |       tests.pyi
|   |   |       |   |           |   |       utils.pyi
|   |   |       |   |           |   |       visitor.pyi
|   |   |       |   |           |   |       _compat.pyi
|   |   |       |   |           |   |       _stringdefs.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---markdown
|   |   |       |   |           |   |   |   blockparser.pyi
|   |   |       |   |           |   |   |   blockprocessors.pyi
|   |   |       |   |           |   |   |   core.pyi
|   |   |       |   |           |   |   |   inlinepatterns.pyi
|   |   |       |   |           |   |   |   pep562.pyi
|   |   |       |   |           |   |   |   postprocessors.pyi
|   |   |       |   |           |   |   |   preprocessors.pyi
|   |   |       |   |           |   |   |   serializers.pyi
|   |   |       |   |           |   |   |   treeprocessors.pyi
|   |   |       |   |           |   |   |   util.pyi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   __meta__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   \---extensions
|   |   |       |   |           |   |           abbr.pyi
|   |   |       |   |           |   |           admonition.pyi
|   |   |       |   |           |   |           attr_list.pyi
|   |   |       |   |           |   |           codehilite.pyi
|   |   |       |   |           |   |           def_list.pyi
|   |   |       |   |           |   |           extra.pyi
|   |   |       |   |           |   |           fenced_code.pyi
|   |   |       |   |           |   |           footnotes.pyi
|   |   |       |   |           |   |           legacy_attrs.pyi
|   |   |       |   |           |   |           legacy_em.pyi
|   |   |       |   |           |   |           md_in_html.pyi
|   |   |       |   |           |   |           meta.pyi
|   |   |       |   |           |   |           nl2br.pyi
|   |   |       |   |           |   |           sane_lists.pyi
|   |   |       |   |           |   |           smarty.pyi
|   |   |       |   |           |   |           tables.pyi
|   |   |       |   |           |   |           toc.pyi
|   |   |       |   |           |   |           wikilinks.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   +---markupsafe
|   |   |       |   |           |   |       _compat.pyi
|   |   |       |   |           |   |       _constants.pyi
|   |   |       |   |           |   |       _native.pyi
|   |   |       |   |           |   |       _speedups.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---maxminddb
|   |   |       |   |           |   |       compat.pyi
|   |   |       |   |           |   |       const.pyi
|   |   |       |   |           |   |       decoder.pyi
|   |   |       |   |           |   |       errors.pyi
|   |   |       |   |           |   |       extension.pyi
|   |   |       |   |           |   |       reader.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---nmap
|   |   |       |   |           |   |       nmap.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---paramiko
|   |   |       |   |           |   |       agent.pyi
|   |   |       |   |           |   |       auth_handler.pyi
|   |   |       |   |           |   |       ber.pyi
|   |   |       |   |           |   |       buffered_pipe.pyi
|   |   |       |   |           |   |       channel.pyi
|   |   |       |   |           |   |       client.pyi
|   |   |       |   |           |   |       common.pyi
|   |   |       |   |           |   |       compress.pyi
|   |   |       |   |           |   |       config.pyi
|   |   |       |   |           |   |       dsskey.pyi
|   |   |       |   |           |   |       ecdsakey.pyi
|   |   |       |   |           |   |       ed25519key.pyi
|   |   |       |   |           |   |       file.pyi
|   |   |       |   |           |   |       hostkeys.pyi
|   |   |       |   |           |   |       kex_curve25519.pyi
|   |   |       |   |           |   |       kex_ecdh_nist.pyi
|   |   |       |   |           |   |       kex_gex.pyi
|   |   |       |   |           |   |       kex_group1.pyi
|   |   |       |   |           |   |       kex_group14.pyi
|   |   |       |   |           |   |       kex_group16.pyi
|   |   |       |   |           |   |       kex_gss.pyi
|   |   |       |   |           |   |       message.pyi
|   |   |       |   |           |   |       packet.pyi
|   |   |       |   |           |   |       pipe.pyi
|   |   |       |   |           |   |       pkey.pyi
|   |   |       |   |           |   |       primes.pyi
|   |   |       |   |           |   |       proxy.pyi
|   |   |       |   |           |   |       py3compat.pyi
|   |   |       |   |           |   |       rsakey.pyi
|   |   |       |   |           |   |       server.pyi
|   |   |       |   |           |   |       sftp.pyi
|   |   |       |   |           |   |       sftp_attr.pyi
|   |   |       |   |           |   |       sftp_client.pyi
|   |   |       |   |           |   |       sftp_file.pyi
|   |   |       |   |           |   |       sftp_handle.pyi
|   |   |       |   |           |   |       sftp_server.pyi
|   |   |       |   |           |   |       sftp_si.pyi
|   |   |       |   |           |   |       ssh_exception.pyi
|   |   |       |   |           |   |       ssh_gss.pyi
|   |   |       |   |           |   |       transport.pyi
|   |   |       |   |           |   |       util.pyi
|   |   |       |   |           |   |       win_pageant.pyi
|   |   |       |   |           |   |       _version.pyi
|   |   |       |   |           |   |       _winapi.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---pymysql
|   |   |       |   |           |   |   |   charset.pyi
|   |   |       |   |           |   |   |   connections.pyi
|   |   |       |   |           |   |   |   converters.pyi
|   |   |       |   |           |   |   |   cursors.pyi
|   |   |       |   |           |   |   |   err.pyi
|   |   |       |   |           |   |   |   times.pyi
|   |   |       |   |           |   |   |   util.pyi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   \---constants
|   |   |       |   |           |   |           CLIENT.pyi
|   |   |       |   |           |   |           COMMAND.pyi
|   |   |       |   |           |   |           ER.pyi
|   |   |       |   |           |   |           FIELD_TYPE.pyi
|   |   |       |   |           |   |           FLAG.pyi
|   |   |       |   |           |   |           SERVER_STATUS.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   +---pynamodb
|   |   |       |   |           |   |   |   attributes.pyi
|   |   |       |   |           |   |   |   constants.pyi
|   |   |       |   |           |   |   |   exceptions.pyi
|   |   |       |   |           |   |   |   indexes.pyi
|   |   |       |   |           |   |   |   models.pyi
|   |   |       |   |           |   |   |   settings.pyi
|   |   |       |   |           |   |   |   throttle.pyi
|   |   |       |   |           |   |   |   types.pyi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   \---connection
|   |   |       |   |           |   |           base.pyi
|   |   |       |   |           |   |           table.pyi
|   |   |       |   |           |   |           util.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   +---pytz
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---pyVmomi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   +---vim
|   |   |       |   |           |   |   |       event.pyi
|   |   |       |   |           |   |   |       fault.pyi
|   |   |       |   |           |   |   |       option.pyi
|   |   |       |   |           |   |   |       view.pyi
|   |   |       |   |           |   |   |       __init__.pyi
|   |   |       |   |           |   |   |       
|   |   |       |   |           |   |   \---vmodl
|   |   |       |   |           |   |           fault.pyi
|   |   |       |   |           |   |           query.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   +---redis
|   |   |       |   |           |   |       client.pyi
|   |   |       |   |           |   |       connection.pyi
|   |   |       |   |           |   |       exceptions.pyi
|   |   |       |   |           |   |       utils.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---requests
|   |   |       |   |           |   |   |   adapters.pyi
|   |   |       |   |           |   |   |   api.pyi
|   |   |       |   |           |   |   |   auth.pyi
|   |   |       |   |           |   |   |   compat.pyi
|   |   |       |   |           |   |   |   cookies.pyi
|   |   |       |   |           |   |   |   exceptions.pyi
|   |   |       |   |           |   |   |   hooks.pyi
|   |   |       |   |           |   |   |   models.pyi
|   |   |       |   |           |   |   |   sessions.pyi
|   |   |       |   |           |   |   |   status_codes.pyi
|   |   |       |   |           |   |   |   structures.pyi
|   |   |       |   |           |   |   |   utils.pyi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   \---packages
|   |   |       |   |           |   |       |   __init__.pyi
|   |   |       |   |           |   |       |   
|   |   |       |   |           |   |       \---urllib3
|   |   |       |   |           |   |           |   connection.pyi
|   |   |       |   |           |   |           |   connectionpool.pyi
|   |   |       |   |           |   |           |   exceptions.pyi
|   |   |       |   |           |   |           |   fields.pyi
|   |   |       |   |           |   |           |   filepost.pyi
|   |   |       |   |           |   |           |   poolmanager.pyi
|   |   |       |   |           |   |           |   request.pyi
|   |   |       |   |           |   |           |   response.pyi
|   |   |       |   |           |   |           |   _collections.pyi
|   |   |       |   |           |   |           |   __init__.pyi
|   |   |       |   |           |   |           |   
|   |   |       |   |           |   |           +---contrib
|   |   |       |   |           |   |           |       __init__.pyi
|   |   |       |   |           |   |           |       
|   |   |       |   |           |   |           +---packages
|   |   |       |   |           |   |           |   |   __init__.pyi
|   |   |       |   |           |   |           |   |   
|   |   |       |   |           |   |           |   \---ssl_match_hostname
|   |   |       |   |           |   |           |           _implementation.pyi
|   |   |       |   |           |   |           |           __init__.pyi
|   |   |       |   |           |   |           |           
|   |   |       |   |           |   |           \---util
|   |   |       |   |           |   |                   connection.pyi
|   |   |       |   |           |   |                   request.pyi
|   |   |       |   |           |   |                   response.pyi
|   |   |       |   |           |   |                   retry.pyi
|   |   |       |   |           |   |                   ssl_.pyi
|   |   |       |   |           |   |                   timeout.pyi
|   |   |       |   |           |   |                   url.pyi
|   |   |       |   |           |   |                   __init__.pyi
|   |   |       |   |           |   |                   
|   |   |       |   |           |   +---retry
|   |   |       |   |           |   |       api.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---simplejson
|   |   |       |   |           |   |       decoder.pyi
|   |   |       |   |           |   |       encoder.pyi
|   |   |       |   |           |   |       scanner.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---slugify
|   |   |       |   |           |   |       slugify.pyi
|   |   |       |   |           |   |       special.pyi
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---tzlocal
|   |   |       |   |           |   |       __init__.pyi
|   |   |       |   |           |   |       
|   |   |       |   |           |   +---werkzeug
|   |   |       |   |           |   |   |   datastructures.pyi
|   |   |       |   |           |   |   |   exceptions.pyi
|   |   |       |   |           |   |   |   filesystem.pyi
|   |   |       |   |           |   |   |   formparser.pyi
|   |   |       |   |           |   |   |   http.pyi
|   |   |       |   |           |   |   |   local.pyi
|   |   |       |   |           |   |   |   posixemulation.pyi
|   |   |       |   |           |   |   |   routing.pyi
|   |   |       |   |           |   |   |   script.pyi
|   |   |       |   |           |   |   |   security.pyi
|   |   |       |   |           |   |   |   serving.pyi
|   |   |       |   |           |   |   |   test.pyi
|   |   |       |   |           |   |   |   testapp.pyi
|   |   |       |   |           |   |   |   urls.pyi
|   |   |       |   |           |   |   |   useragents.pyi
|   |   |       |   |           |   |   |   utils.pyi
|   |   |       |   |           |   |   |   wrappers.pyi
|   |   |       |   |           |   |   |   wsgi.pyi
|   |   |       |   |           |   |   |   _compat.pyi
|   |   |       |   |           |   |   |   _internal.pyi
|   |   |       |   |           |   |   |   _reloader.pyi
|   |   |       |   |           |   |   |   __init__.pyi
|   |   |       |   |           |   |   |   
|   |   |       |   |           |   |   +---contrib
|   |   |       |   |           |   |   |       atom.pyi
|   |   |       |   |           |   |   |       cache.pyi
|   |   |       |   |           |   |   |       fixers.pyi
|   |   |       |   |           |   |   |       iterio.pyi
|   |   |       |   |           |   |   |       jsrouting.pyi
|   |   |       |   |           |   |   |       limiter.pyi
|   |   |       |   |           |   |   |       lint.pyi
|   |   |       |   |           |   |   |       profiler.pyi
|   |   |       |   |           |   |   |       securecookie.pyi
|   |   |       |   |           |   |   |       sessions.pyi
|   |   |       |   |           |   |   |       testtools.pyi
|   |   |       |   |           |   |   |       wrappers.pyi
|   |   |       |   |           |   |   |       __init__.pyi
|   |   |       |   |           |   |   |       
|   |   |       |   |           |   |   +---debug
|   |   |       |   |           |   |   |       console.pyi
|   |   |       |   |           |   |   |       repr.pyi
|   |   |       |   |           |   |   |       tbtools.pyi
|   |   |       |   |           |   |   |       __init__.pyi
|   |   |       |   |           |   |   |       
|   |   |       |   |           |   |   \---middleware
|   |   |       |   |           |   |           dispatcher.pyi
|   |   |       |   |           |   |           http_proxy.pyi
|   |   |       |   |           |   |           lint.pyi
|   |   |       |   |           |   |           profiler.pyi
|   |   |       |   |           |   |           proxy_fix.pyi
|   |   |       |   |           |   |           shared_data.pyi
|   |   |       |   |           |   |           __init__.pyi
|   |   |       |   |           |   |           
|   |   |       |   |           |   \---yaml
|   |   |       |   |           |           composer.pyi
|   |   |       |   |           |           constructor.pyi
|   |   |       |   |           |           cyaml.pyi
|   |   |       |   |           |           dumper.pyi
|   |   |       |   |           |           emitter.pyi
|   |   |       |   |           |           error.pyi
|   |   |       |   |           |           events.pyi
|   |   |       |   |           |           loader.pyi
|   |   |       |   |           |           nodes.pyi
|   |   |       |   |           |           parser.pyi
|   |   |       |   |           |           reader.pyi
|   |   |       |   |           |           representer.pyi
|   |   |       |   |           |           resolver.pyi
|   |   |       |   |           |           scanner.pyi
|   |   |       |   |           |           serializer.pyi
|   |   |       |   |           |           tokens.pyi
|   |   |       |   |           |           __init__.pyi
|   |   |       |   |           |           
|   |   |       |   |           \---3
|   |   |       |   |               |   contextvars.pyi
|   |   |       |   |               |   dataclasses.pyi
|   |   |       |   |               |   frozendict.pyi
|   |   |       |   |               |   orjson.pyi
|   |   |       |   |               |   
|   |   |       |   |               +---aiofiles
|   |   |       |   |               |   |   base.pyi
|   |   |       |   |               |   |   os.pyi
|   |   |       |   |               |   |   __init__.pyi
|   |   |       |   |               |   |   
|   |   |       |   |               |   \---threadpool
|   |   |       |   |               |           binary.pyi
|   |   |       |   |               |           text.pyi
|   |   |       |   |               |           __init__.pyi
|   |   |       |   |               |           
|   |   |       |   |               +---docutils
|   |   |       |   |               |   |   examples.pyi
|   |   |       |   |               |   |   nodes.pyi
|   |   |       |   |               |   |   __init__.pyi
|   |   |       |   |               |   |   
|   |   |       |   |               |   \---parsers
|   |   |       |   |               |       |   __init__.pyi
|   |   |       |   |               |       |   
|   |   |       |   |               |       \---rst
|   |   |       |   |               |               nodes.pyi
|   |   |       |   |               |               roles.pyi
|   |   |       |   |               |               states.pyi
|   |   |       |   |               |               __init__.pyi
|   |   |       |   |               |               
|   |   |       |   |               +---filelock
|   |   |       |   |               |       __init__.pyi
|   |   |       |   |               |       
|   |   |       |   |               +---freezegun
|   |   |       |   |               |       api.pyi
|   |   |       |   |               |       __init__.pyi
|   |   |       |   |               |       
|   |   |       |   |               +---jwt
|   |   |       |   |               |   |   algorithms.pyi
|   |   |       |   |               |   |   __init__.pyi
|   |   |       |   |               |   |   
|   |   |       |   |               |   \---contrib
|   |   |       |   |               |       |   __init__.pyi
|   |   |       |   |               |       |   
|   |   |       |   |               |       \---algorithms
|   |   |       |   |               |               pycrypto.pyi
|   |   |       |   |               |               py_ecdsa.pyi
|   |   |       |   |               |               __init__.pyi
|   |   |       |   |               |               
|   |   |       |   |               +---pkg_resources
|   |   |       |   |               |       py31compat.pyi
|   |   |       |   |               |       __init__.pyi
|   |   |       |   |               |       
|   |   |       |   |               +---pyrfc3339
|   |   |       |   |               |       generator.pyi
|   |   |       |   |               |       parser.pyi
|   |   |       |   |               |       utils.pyi
|   |   |       |   |               |       __init__.pyi
|   |   |       |   |               |       
|   |   |       |   |               +---six
|   |   |       |   |               |   |   __init__.pyi
|   |   |       |   |               |   |   
|   |   |       |   |               |   \---moves
|   |   |       |   |               |       |   BaseHTTPServer.pyi
|   |   |       |   |               |       |   builtins.pyi
|   |   |       |   |               |       |   CGIHTTPServer.pyi
|   |   |       |   |               |       |   collections_abc.pyi
|   |   |       |   |               |       |   configparser.pyi
|   |   |       |   |               |       |   cPickle.pyi
|   |   |       |   |               |       |   email_mime_base.pyi
|   |   |       |   |               |       |   email_mime_multipart.pyi
|   |   |       |   |               |       |   email_mime_nonmultipart.pyi
|   |   |       |   |               |       |   email_mime_text.pyi
|   |   |       |   |               |       |   html_entities.pyi
|   |   |       |   |               |       |   html_parser.pyi
|   |   |       |   |               |       |   http_client.pyi
|   |   |       |   |               |       |   http_cookiejar.pyi
|   |   |       |   |               |       |   http_cookies.pyi
|   |   |       |   |               |       |   queue.pyi
|   |   |       |   |               |       |   reprlib.pyi
|   |   |       |   |               |       |   SimpleHTTPServer.pyi
|   |   |       |   |               |       |   socketserver.pyi
|   |   |       |   |               |       |   tkinter.pyi
|   |   |       |   |               |       |   tkinter_commondialog.pyi
|   |   |       |   |               |       |   tkinter_constants.pyi
|   |   |       |   |               |       |   tkinter_dialog.pyi
|   |   |       |   |               |       |   tkinter_filedialog.pyi
|   |   |       |   |               |       |   tkinter_tkfiledialog.pyi
|   |   |       |   |               |       |   tkinter_ttk.pyi
|   |   |       |   |               |       |   urllib_error.pyi
|   |   |       |   |               |       |   urllib_parse.pyi
|   |   |       |   |               |       |   urllib_request.pyi
|   |   |       |   |               |       |   urllib_response.pyi
|   |   |       |   |               |       |   urllib_robotparser.pyi
|   |   |       |   |               |       |   _dummy_thread.pyi
|   |   |       |   |               |       |   _thread.pyi
|   |   |       |   |               |       |   __init__.pyi
|   |   |       |   |               |       |   
|   |   |       |   |               |       \---urllib
|   |   |       |   |               |               error.pyi
|   |   |       |   |               |               parse.pyi
|   |   |       |   |               |               request.pyi
|   |   |       |   |               |               response.pyi
|   |   |       |   |               |               robotparser.pyi
|   |   |       |   |               |               __init__.pyi
|   |   |       |   |               |               
|   |   |       |   |               +---typed_ast
|   |   |       |   |               |       ast27.pyi
|   |   |       |   |               |       ast3.pyi
|   |   |       |   |               |       conversions.pyi
|   |   |       |   |               |       __init__.pyi
|   |   |       |   |               |       
|   |   |       |   |               \---waitress
|   |   |       |   |                       adjustments.pyi
|   |   |       |   |                       buffers.pyi
|   |   |       |   |                       channel.pyi
|   |   |       |   |                       compat.pyi
|   |   |       |   |                       parser.pyi
|   |   |       |   |                       proxy_headers.pyi
|   |   |       |   |                       receiver.pyi
|   |   |       |   |                       rfc7230.pyi
|   |   |       |   |                       runner.pyi
|   |   |       |   |                       server.pyi
|   |   |       |   |                       task.pyi
|   |   |       |   |                       trigger.pyi
|   |   |       |   |                       utilities.pyi
|   |   |       |   |                       wasyncore.pyi
|   |   |       |   |                       __init__.pyi
|   |   |       |   |                       
|   |   |       |   \---__pycache__
|   |   |       |           cache.cpython-312.pyc
|   |   |       |           common.cpython-312.pyc
|   |   |       |           debug.cpython-312.pyc
|   |   |       |           file_io.cpython-312.pyc
|   |   |       |           parser_utils.cpython-312.pyc
|   |   |       |           settings.cpython-312.pyc
|   |   |       |           utils.cpython-312.pyc
|   |   |       |           _compatibility.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           __main__.cpython-312.pyc
|   |   |       |           
|   |   |       +---jedi-0.19.2.dist-info
|   |   |       |       AUTHORS.txt
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.txt
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---jinja2
|   |   |       |   |   async_utils.py
|   |   |       |   |   bccache.py
|   |   |       |   |   compiler.py
|   |   |       |   |   constants.py
|   |   |       |   |   debug.py
|   |   |       |   |   defaults.py
|   |   |       |   |   environment.py
|   |   |       |   |   exceptions.py
|   |   |       |   |   ext.py
|   |   |       |   |   filters.py
|   |   |       |   |   idtracking.py
|   |   |       |   |   lexer.py
|   |   |       |   |   loaders.py
|   |   |       |   |   meta.py
|   |   |       |   |   nativetypes.py
|   |   |       |   |   nodes.py
|   |   |       |   |   optimizer.py
|   |   |       |   |   parser.py
|   |   |       |   |   py.typed
|   |   |       |   |   runtime.py
|   |   |       |   |   sandbox.py
|   |   |       |   |   tests.py
|   |   |       |   |   utils.py
|   |   |       |   |   visitor.py
|   |   |       |   |   _identifier.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           async_utils.cpython-312.pyc
|   |   |       |           bccache.cpython-312.pyc
|   |   |       |           compiler.cpython-312.pyc
|   |   |       |           constants.cpython-312.pyc
|   |   |       |           debug.cpython-312.pyc
|   |   |       |           defaults.cpython-312.pyc
|   |   |       |           environment.cpython-312.pyc
|   |   |       |           exceptions.cpython-312.pyc
|   |   |       |           ext.cpython-312.pyc
|   |   |       |           filters.cpython-312.pyc
|   |   |       |           idtracking.cpython-312.pyc
|   |   |       |           lexer.cpython-312.pyc
|   |   |       |           loaders.cpython-312.pyc
|   |   |       |           meta.cpython-312.pyc
|   |   |       |           nativetypes.cpython-312.pyc
|   |   |       |           nodes.cpython-312.pyc
|   |   |       |           optimizer.cpython-312.pyc
|   |   |       |           parser.cpython-312.pyc
|   |   |       |           runtime.cpython-312.pyc
|   |   |       |           sandbox.cpython-312.pyc
|   |   |       |           tests.cpython-312.pyc
|   |   |       |           utils.cpython-312.pyc
|   |   |       |           visitor.cpython-312.pyc
|   |   |       |           _identifier.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---jinja2-3.1.6.dist-info
|   |   |       |   |   entry_points.txt
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           LICENSE.txt
|   |   |       |           
|   |   |       +---jsonpickle
|   |   |       |   |   backend.py
|   |   |       |   |   compat.py
|   |   |       |   |   errors.py
|   |   |       |   |   handlers.py
|   |   |       |   |   pickler.py
|   |   |       |   |   tags.py
|   |   |       |   |   tags_pd.py
|   |   |       |   |   unpickler.py
|   |   |       |   |   util.py
|   |   |       |   |   version.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   +---ext
|   |   |       |   |   |   gmpy.py
|   |   |       |   |   |   numpy.py
|   |   |       |   |   |   pandas.py
|   |   |       |   |   |   yaml.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           gmpy.cpython-312.pyc
|   |   |       |   |           numpy.cpython-312.pyc
|   |   |       |   |           pandas.cpython-312.pyc
|   |   |       |   |           yaml.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           backend.cpython-312.pyc
|   |   |       |           compat.cpython-312.pyc
|   |   |       |           errors.cpython-312.pyc
|   |   |       |           handlers.cpython-312.pyc
|   |   |       |           pickler.cpython-312.pyc
|   |   |       |           tags.cpython-312.pyc
|   |   |       |           tags_pd.cpython-312.pyc
|   |   |       |           unpickler.cpython-312.pyc
|   |   |       |           util.cpython-312.pyc
|   |   |       |           version.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---jsonpickle-4.1.1.dist-info
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   top_level.txt
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           LICENSE
|   |   |       |           
|   |   |       +---markupsafe
|   |   |       |   |   py.typed
|   |   |       |   |   _native.py
|   |   |       |   |   _speedups.c
|   |   |       |   |   _speedups.cp312-win_amd64.pyd
|   |   |       |   |   _speedups.pyi
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           _native.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---markupsafe-3.0.3.dist-info
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   top_level.txt
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           LICENSE.txt
|   |   |       |           
|   |   |       +---matplotlib_inline
|   |   |       |   |   backend_inline.py
|   |   |       |   |   config.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           backend_inline.cpython-312.pyc
|   |   |       |           config.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---matplotlib_inline-0.1.7.dist-info
|   |   |       |       entry_points.txt
|   |   |       |       INSTALLER
|   |   |       |       LICENSE
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---networkx
|   |   |       |   |   conftest.py
|   |   |       |   |   convert.py
|   |   |       |   |   convert_matrix.py
|   |   |       |   |   exception.py
|   |   |       |   |   lazy_imports.py
|   |   |       |   |   relabel.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   +---algorithms
|   |   |       |   |   |   asteroidal.py
|   |   |       |   |   |   boundary.py
|   |   |       |   |   |   bridges.py
|   |   |       |   |   |   broadcasting.py
|   |   |       |   |   |   chains.py
|   |   |       |   |   |   chordal.py
|   |   |       |   |   |   clique.py
|   |   |       |   |   |   cluster.py
|   |   |       |   |   |   communicability_alg.py
|   |   |       |   |   |   core.py
|   |   |       |   |   |   covering.py
|   |   |       |   |   |   cuts.py
|   |   |       |   |   |   cycles.py
|   |   |       |   |   |   dag.py
|   |   |       |   |   |   distance_measures.py
|   |   |       |   |   |   distance_regular.py
|   |   |       |   |   |   dominance.py
|   |   |       |   |   |   dominating.py
|   |   |       |   |   |   d_separation.py
|   |   |       |   |   |   efficiency_measures.py
|   |   |       |   |   |   euler.py
|   |   |       |   |   |   graphical.py
|   |   |       |   |   |   graph_hashing.py
|   |   |       |   |   |   hierarchy.py
|   |   |       |   |   |   hybrid.py
|   |   |       |   |   |   isolate.py
|   |   |       |   |   |   link_prediction.py
|   |   |       |   |   |   lowest_common_ancestors.py
|   |   |       |   |   |   matching.py
|   |   |       |   |   |   mis.py
|   |   |       |   |   |   moral.py
|   |   |       |   |   |   node_classification.py
|   |   |       |   |   |   non_randomness.py
|   |   |       |   |   |   planarity.py
|   |   |       |   |   |   planar_drawing.py
|   |   |       |   |   |   polynomials.py
|   |   |       |   |   |   reciprocity.py
|   |   |       |   |   |   regular.py
|   |   |       |   |   |   richclub.py
|   |   |       |   |   |   similarity.py
|   |   |       |   |   |   simple_paths.py
|   |   |       |   |   |   smallworld.py
|   |   |       |   |   |   smetric.py
|   |   |       |   |   |   sparsifiers.py
|   |   |       |   |   |   structuralholes.py
|   |   |       |   |   |   summarization.py
|   |   |       |   |   |   swap.py
|   |   |       |   |   |   threshold.py
|   |   |       |   |   |   time_dependent.py
|   |   |       |   |   |   tournament.py
|   |   |       |   |   |   triads.py
|   |   |       |   |   |   vitality.py
|   |   |       |   |   |   voronoi.py
|   |   |       |   |   |   walks.py
|   |   |       |   |   |   wiener.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---approximation
|   |   |       |   |   |   |   clique.py
|   |   |       |   |   |   |   clustering_coefficient.py
|   |   |       |   |   |   |   connectivity.py
|   |   |       |   |   |   |   density.py
|   |   |       |   |   |   |   distance_measures.py
|   |   |       |   |   |   |   dominating_set.py
|   |   |       |   |   |   |   kcomponents.py
|   |   |       |   |   |   |   matching.py
|   |   |       |   |   |   |   maxcut.py
|   |   |       |   |   |   |   ramsey.py
|   |   |       |   |   |   |   steinertree.py
|   |   |       |   |   |   |   traveling_salesman.py
|   |   |       |   |   |   |   treewidth.py
|   |   |       |   |   |   |   vertex_cover.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_approx_clust_coeff.py
|   |   |       |   |   |   |   |   test_clique.py
|   |   |       |   |   |   |   |   test_connectivity.py
|   |   |       |   |   |   |   |   test_density.py
|   |   |       |   |   |   |   |   test_distance_measures.py
|   |   |       |   |   |   |   |   test_dominating_set.py
|   |   |       |   |   |   |   |   test_kcomponents.py
|   |   |       |   |   |   |   |   test_matching.py
|   |   |       |   |   |   |   |   test_maxcut.py
|   |   |       |   |   |   |   |   test_ramsey.py
|   |   |       |   |   |   |   |   test_steinertree.py
|   |   |       |   |   |   |   |   test_traveling_salesman.py
|   |   |       |   |   |   |   |   test_treewidth.py
|   |   |       |   |   |   |   |   test_vertex_cover.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_approx_clust_coeff.cpython-312.pyc
|   |   |       |   |   |   |           test_clique.cpython-312.pyc
|   |   |       |   |   |   |           test_connectivity.cpython-312.pyc
|   |   |       |   |   |   |           test_density.cpython-312.pyc
|   |   |       |   |   |   |           test_distance_measures.cpython-312.pyc
|   |   |       |   |   |   |           test_dominating_set.cpython-312.pyc
|   |   |       |   |   |   |           test_kcomponents.cpython-312.pyc
|   |   |       |   |   |   |           test_matching.cpython-312.pyc
|   |   |       |   |   |   |           test_maxcut.cpython-312.pyc
|   |   |       |   |   |   |           test_ramsey.cpython-312.pyc
|   |   |       |   |   |   |           test_steinertree.cpython-312.pyc
|   |   |       |   |   |   |           test_traveling_salesman.cpython-312.pyc
|   |   |       |   |   |   |           test_treewidth.cpython-312.pyc
|   |   |       |   |   |   |           test_vertex_cover.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           clique.cpython-312.pyc
|   |   |       |   |   |           clustering_coefficient.cpython-312.pyc
|   |   |       |   |   |           connectivity.cpython-312.pyc
|   |   |       |   |   |           density.cpython-312.pyc
|   |   |       |   |   |           distance_measures.cpython-312.pyc
|   |   |       |   |   |           dominating_set.cpython-312.pyc
|   |   |       |   |   |           kcomponents.cpython-312.pyc
|   |   |       |   |   |           matching.cpython-312.pyc
|   |   |       |   |   |           maxcut.cpython-312.pyc
|   |   |       |   |   |           ramsey.cpython-312.pyc
|   |   |       |   |   |           steinertree.cpython-312.pyc
|   |   |       |   |   |           traveling_salesman.cpython-312.pyc
|   |   |       |   |   |           treewidth.cpython-312.pyc
|   |   |       |   |   |           vertex_cover.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---assortativity
|   |   |       |   |   |   |   connectivity.py
|   |   |       |   |   |   |   correlation.py
|   |   |       |   |   |   |   mixing.py
|   |   |       |   |   |   |   neighbor_degree.py
|   |   |       |   |   |   |   pairs.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   base_test.py
|   |   |       |   |   |   |   |   test_connectivity.py
|   |   |       |   |   |   |   |   test_correlation.py
|   |   |       |   |   |   |   |   test_mixing.py
|   |   |       |   |   |   |   |   test_neighbor_degree.py
|   |   |       |   |   |   |   |   test_pairs.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           base_test.cpython-312.pyc
|   |   |       |   |   |   |           test_connectivity.cpython-312.pyc
|   |   |       |   |   |   |           test_correlation.cpython-312.pyc
|   |   |       |   |   |   |           test_mixing.cpython-312.pyc
|   |   |       |   |   |   |           test_neighbor_degree.cpython-312.pyc
|   |   |       |   |   |   |           test_pairs.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           connectivity.cpython-312.pyc
|   |   |       |   |   |           correlation.cpython-312.pyc
|   |   |       |   |   |           mixing.cpython-312.pyc
|   |   |       |   |   |           neighbor_degree.cpython-312.pyc
|   |   |       |   |   |           pairs.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---bipartite
|   |   |       |   |   |   |   basic.py
|   |   |       |   |   |   |   centrality.py
|   |   |       |   |   |   |   cluster.py
|   |   |       |   |   |   |   covering.py
|   |   |       |   |   |   |   edgelist.py
|   |   |       |   |   |   |   extendability.py
|   |   |       |   |   |   |   generators.py
|   |   |       |   |   |   |   link_analysis.py
|   |   |       |   |   |   |   matching.py
|   |   |       |   |   |   |   matrix.py
|   |   |       |   |   |   |   projection.py
|   |   |       |   |   |   |   redundancy.py
|   |   |       |   |   |   |   spectral.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_basic.py
|   |   |       |   |   |   |   |   test_centrality.py
|   |   |       |   |   |   |   |   test_cluster.py
|   |   |       |   |   |   |   |   test_covering.py
|   |   |       |   |   |   |   |   test_edgelist.py
|   |   |       |   |   |   |   |   test_extendability.py
|   |   |       |   |   |   |   |   test_generators.py
|   |   |       |   |   |   |   |   test_link_analysis.py
|   |   |       |   |   |   |   |   test_matching.py
|   |   |       |   |   |   |   |   test_matrix.py
|   |   |       |   |   |   |   |   test_project.py
|   |   |       |   |   |   |   |   test_redundancy.py
|   |   |       |   |   |   |   |   test_spectral_bipartivity.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_basic.cpython-312.pyc
|   |   |       |   |   |   |           test_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_cluster.cpython-312.pyc
|   |   |       |   |   |   |           test_covering.cpython-312.pyc
|   |   |       |   |   |   |           test_edgelist.cpython-312.pyc
|   |   |       |   |   |   |           test_extendability.cpython-312.pyc
|   |   |       |   |   |   |           test_generators.cpython-312.pyc
|   |   |       |   |   |   |           test_link_analysis.cpython-312.pyc
|   |   |       |   |   |   |           test_matching.cpython-312.pyc
|   |   |       |   |   |   |           test_matrix.cpython-312.pyc
|   |   |       |   |   |   |           test_project.cpython-312.pyc
|   |   |       |   |   |   |           test_redundancy.cpython-312.pyc
|   |   |       |   |   |   |           test_spectral_bipartivity.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           basic.cpython-312.pyc
|   |   |       |   |   |           centrality.cpython-312.pyc
|   |   |       |   |   |           cluster.cpython-312.pyc
|   |   |       |   |   |           covering.cpython-312.pyc
|   |   |       |   |   |           edgelist.cpython-312.pyc
|   |   |       |   |   |           extendability.cpython-312.pyc
|   |   |       |   |   |           generators.cpython-312.pyc
|   |   |       |   |   |           link_analysis.cpython-312.pyc
|   |   |       |   |   |           matching.cpython-312.pyc
|   |   |       |   |   |           matrix.cpython-312.pyc
|   |   |       |   |   |           projection.cpython-312.pyc
|   |   |       |   |   |           redundancy.cpython-312.pyc
|   |   |       |   |   |           spectral.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---centrality
|   |   |       |   |   |   |   betweenness.py
|   |   |       |   |   |   |   betweenness_subset.py
|   |   |       |   |   |   |   closeness.py
|   |   |       |   |   |   |   current_flow_betweenness.py
|   |   |       |   |   |   |   current_flow_betweenness_subset.py
|   |   |       |   |   |   |   current_flow_closeness.py
|   |   |       |   |   |   |   degree_alg.py
|   |   |       |   |   |   |   dispersion.py
|   |   |       |   |   |   |   eigenvector.py
|   |   |       |   |   |   |   flow_matrix.py
|   |   |       |   |   |   |   group.py
|   |   |       |   |   |   |   harmonic.py
|   |   |       |   |   |   |   katz.py
|   |   |       |   |   |   |   laplacian.py
|   |   |       |   |   |   |   load.py
|   |   |       |   |   |   |   percolation.py
|   |   |       |   |   |   |   reaching.py
|   |   |       |   |   |   |   second_order.py
|   |   |       |   |   |   |   subgraph_alg.py
|   |   |       |   |   |   |   trophic.py
|   |   |       |   |   |   |   voterank_alg.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_betweenness_centrality.py
|   |   |       |   |   |   |   |   test_betweenness_centrality_subset.py
|   |   |       |   |   |   |   |   test_closeness_centrality.py
|   |   |       |   |   |   |   |   test_current_flow_betweenness_centrality.py
|   |   |       |   |   |   |   |   test_current_flow_betweenness_centrality_subset.py
|   |   |       |   |   |   |   |   test_current_flow_closeness.py
|   |   |       |   |   |   |   |   test_degree_centrality.py
|   |   |       |   |   |   |   |   test_dispersion.py
|   |   |       |   |   |   |   |   test_eigenvector_centrality.py
|   |   |       |   |   |   |   |   test_group.py
|   |   |       |   |   |   |   |   test_harmonic_centrality.py
|   |   |       |   |   |   |   |   test_katz_centrality.py
|   |   |       |   |   |   |   |   test_laplacian_centrality.py
|   |   |       |   |   |   |   |   test_load_centrality.py
|   |   |       |   |   |   |   |   test_percolation_centrality.py
|   |   |       |   |   |   |   |   test_reaching.py
|   |   |       |   |   |   |   |   test_second_order_centrality.py
|   |   |       |   |   |   |   |   test_subgraph.py
|   |   |       |   |   |   |   |   test_trophic.py
|   |   |       |   |   |   |   |   test_voterank.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_betweenness_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_betweenness_centrality_subset.cpython-312.pyc
|   |   |       |   |   |   |           test_closeness_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_current_flow_betweenness_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_current_flow_betweenness_centrality_subset.cpython-312.pyc
|   |   |       |   |   |   |           test_current_flow_closeness.cpython-312.pyc
|   |   |       |   |   |   |           test_degree_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_dispersion.cpython-312.pyc
|   |   |       |   |   |   |           test_eigenvector_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_group.cpython-312.pyc
|   |   |       |   |   |   |           test_harmonic_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_katz_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_laplacian_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_load_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_percolation_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_reaching.cpython-312.pyc
|   |   |       |   |   |   |           test_second_order_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_subgraph.cpython-312.pyc
|   |   |       |   |   |   |           test_trophic.cpython-312.pyc
|   |   |       |   |   |   |           test_voterank.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           betweenness.cpython-312.pyc
|   |   |       |   |   |           betweenness_subset.cpython-312.pyc
|   |   |       |   |   |           closeness.cpython-312.pyc
|   |   |       |   |   |           current_flow_betweenness.cpython-312.pyc
|   |   |       |   |   |           current_flow_betweenness_subset.cpython-312.pyc
|   |   |       |   |   |           current_flow_closeness.cpython-312.pyc
|   |   |       |   |   |           degree_alg.cpython-312.pyc
|   |   |       |   |   |           dispersion.cpython-312.pyc
|   |   |       |   |   |           eigenvector.cpython-312.pyc
|   |   |       |   |   |           flow_matrix.cpython-312.pyc
|   |   |       |   |   |           group.cpython-312.pyc
|   |   |       |   |   |           harmonic.cpython-312.pyc
|   |   |       |   |   |           katz.cpython-312.pyc
|   |   |       |   |   |           laplacian.cpython-312.pyc
|   |   |       |   |   |           load.cpython-312.pyc
|   |   |       |   |   |           percolation.cpython-312.pyc
|   |   |       |   |   |           reaching.cpython-312.pyc
|   |   |       |   |   |           second_order.cpython-312.pyc
|   |   |       |   |   |           subgraph_alg.cpython-312.pyc
|   |   |       |   |   |           trophic.cpython-312.pyc
|   |   |       |   |   |           voterank_alg.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---coloring
|   |   |       |   |   |   |   equitable_coloring.py
|   |   |       |   |   |   |   greedy_coloring.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_coloring.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_coloring.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           equitable_coloring.cpython-312.pyc
|   |   |       |   |   |           greedy_coloring.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---community
|   |   |       |   |   |   |   asyn_fluid.py
|   |   |       |   |   |   |   centrality.py
|   |   |       |   |   |   |   community_utils.py
|   |   |       |   |   |   |   divisive.py
|   |   |       |   |   |   |   kclique.py
|   |   |       |   |   |   |   kernighan_lin.py
|   |   |       |   |   |   |   label_propagation.py
|   |   |       |   |   |   |   leiden.py
|   |   |       |   |   |   |   local.py
|   |   |       |   |   |   |   louvain.py
|   |   |       |   |   |   |   lukes.py
|   |   |       |   |   |   |   modularity_max.py
|   |   |       |   |   |   |   quality.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_asyn_fluid.py
|   |   |       |   |   |   |   |   test_centrality.py
|   |   |       |   |   |   |   |   test_divisive.py
|   |   |       |   |   |   |   |   test_kclique.py
|   |   |       |   |   |   |   |   test_kernighan_lin.py
|   |   |       |   |   |   |   |   test_label_propagation.py
|   |   |       |   |   |   |   |   test_leiden.py
|   |   |       |   |   |   |   |   test_local.py
|   |   |       |   |   |   |   |   test_louvain.py
|   |   |       |   |   |   |   |   test_lukes.py
|   |   |       |   |   |   |   |   test_modularity_max.py
|   |   |       |   |   |   |   |   test_quality.py
|   |   |       |   |   |   |   |   test_utils.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_asyn_fluid.cpython-312.pyc
|   |   |       |   |   |   |           test_centrality.cpython-312.pyc
|   |   |       |   |   |   |           test_divisive.cpython-312.pyc
|   |   |       |   |   |   |           test_kclique.cpython-312.pyc
|   |   |       |   |   |   |           test_kernighan_lin.cpython-312.pyc
|   |   |       |   |   |   |           test_label_propagation.cpython-312.pyc
|   |   |       |   |   |   |           test_leiden.cpython-312.pyc
|   |   |       |   |   |   |           test_local.cpython-312.pyc
|   |   |       |   |   |   |           test_louvain.cpython-312.pyc
|   |   |       |   |   |   |           test_lukes.cpython-312.pyc
|   |   |       |   |   |   |           test_modularity_max.cpython-312.pyc
|   |   |       |   |   |   |           test_quality.cpython-312.pyc
|   |   |       |   |   |   |           test_utils.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           asyn_fluid.cpython-312.pyc
|   |   |       |   |   |           centrality.cpython-312.pyc
|   |   |       |   |   |           community_utils.cpython-312.pyc
|   |   |       |   |   |           divisive.cpython-312.pyc
|   |   |       |   |   |           kclique.cpython-312.pyc
|   |   |       |   |   |           kernighan_lin.cpython-312.pyc
|   |   |       |   |   |           label_propagation.cpython-312.pyc
|   |   |       |   |   |           leiden.cpython-312.pyc
|   |   |       |   |   |           local.cpython-312.pyc
|   |   |       |   |   |           louvain.cpython-312.pyc
|   |   |       |   |   |           lukes.cpython-312.pyc
|   |   |       |   |   |           modularity_max.cpython-312.pyc
|   |   |       |   |   |           quality.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---components
|   |   |       |   |   |   |   attracting.py
|   |   |       |   |   |   |   biconnected.py
|   |   |       |   |   |   |   connected.py
|   |   |       |   |   |   |   semiconnected.py
|   |   |       |   |   |   |   strongly_connected.py
|   |   |       |   |   |   |   weakly_connected.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_attracting.py
|   |   |       |   |   |   |   |   test_biconnected.py
|   |   |       |   |   |   |   |   test_connected.py
|   |   |       |   |   |   |   |   test_semiconnected.py
|   |   |       |   |   |   |   |   test_strongly_connected.py
|   |   |       |   |   |   |   |   test_weakly_connected.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_attracting.cpython-312.pyc
|   |   |       |   |   |   |           test_biconnected.cpython-312.pyc
|   |   |       |   |   |   |           test_connected.cpython-312.pyc
|   |   |       |   |   |   |           test_semiconnected.cpython-312.pyc
|   |   |       |   |   |   |           test_strongly_connected.cpython-312.pyc
|   |   |       |   |   |   |           test_weakly_connected.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           attracting.cpython-312.pyc
|   |   |       |   |   |           biconnected.cpython-312.pyc
|   |   |       |   |   |           connected.cpython-312.pyc
|   |   |       |   |   |           semiconnected.cpython-312.pyc
|   |   |       |   |   |           strongly_connected.cpython-312.pyc
|   |   |       |   |   |           weakly_connected.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---connectivity
|   |   |       |   |   |   |   connectivity.py
|   |   |       |   |   |   |   cuts.py
|   |   |       |   |   |   |   disjoint_paths.py
|   |   |       |   |   |   |   edge_augmentation.py
|   |   |       |   |   |   |   edge_kcomponents.py
|   |   |       |   |   |   |   kcomponents.py
|   |   |       |   |   |   |   kcutsets.py
|   |   |       |   |   |   |   stoerwagner.py
|   |   |       |   |   |   |   utils.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_connectivity.py
|   |   |       |   |   |   |   |   test_cuts.py
|   |   |       |   |   |   |   |   test_disjoint_paths.py
|   |   |       |   |   |   |   |   test_edge_augmentation.py
|   |   |       |   |   |   |   |   test_edge_kcomponents.py
|   |   |       |   |   |   |   |   test_kcomponents.py
|   |   |       |   |   |   |   |   test_kcutsets.py
|   |   |       |   |   |   |   |   test_stoer_wagner.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_connectivity.cpython-312.pyc
|   |   |       |   |   |   |           test_cuts.cpython-312.pyc
|   |   |       |   |   |   |           test_disjoint_paths.cpython-312.pyc
|   |   |       |   |   |   |           test_edge_augmentation.cpython-312.pyc
|   |   |       |   |   |   |           test_edge_kcomponents.cpython-312.pyc
|   |   |       |   |   |   |           test_kcomponents.cpython-312.pyc
|   |   |       |   |   |   |           test_kcutsets.cpython-312.pyc
|   |   |       |   |   |   |           test_stoer_wagner.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           connectivity.cpython-312.pyc
|   |   |       |   |   |           cuts.cpython-312.pyc
|   |   |       |   |   |           disjoint_paths.cpython-312.pyc
|   |   |       |   |   |           edge_augmentation.cpython-312.pyc
|   |   |       |   |   |           edge_kcomponents.cpython-312.pyc
|   |   |       |   |   |           kcomponents.cpython-312.pyc
|   |   |       |   |   |           kcutsets.cpython-312.pyc
|   |   |       |   |   |           stoerwagner.cpython-312.pyc
|   |   |       |   |   |           utils.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---flow
|   |   |       |   |   |   |   boykovkolmogorov.py
|   |   |       |   |   |   |   capacityscaling.py
|   |   |       |   |   |   |   dinitz_alg.py
|   |   |       |   |   |   |   edmondskarp.py
|   |   |       |   |   |   |   gomory_hu.py
|   |   |       |   |   |   |   maxflow.py
|   |   |       |   |   |   |   mincost.py
|   |   |       |   |   |   |   networksimplex.py
|   |   |       |   |   |   |   preflowpush.py
|   |   |       |   |   |   |   shortestaugmentingpath.py
|   |   |       |   |   |   |   utils.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   gl1.gpickle.bz2
|   |   |       |   |   |   |   |   gw1.gpickle.bz2
|   |   |       |   |   |   |   |   netgen-2.gpickle.bz2
|   |   |       |   |   |   |   |   test_gomory_hu.py
|   |   |       |   |   |   |   |   test_maxflow.py
|   |   |       |   |   |   |   |   test_maxflow_large_graph.py
|   |   |       |   |   |   |   |   test_mincost.py
|   |   |       |   |   |   |   |   test_networksimplex.py
|   |   |       |   |   |   |   |   wlm3.gpickle.bz2
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_gomory_hu.cpython-312.pyc
|   |   |       |   |   |   |           test_maxflow.cpython-312.pyc
|   |   |       |   |   |   |           test_maxflow_large_graph.cpython-312.pyc
|   |   |       |   |   |   |           test_mincost.cpython-312.pyc
|   |   |       |   |   |   |           test_networksimplex.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           boykovkolmogorov.cpython-312.pyc
|   |   |       |   |   |           capacityscaling.cpython-312.pyc
|   |   |       |   |   |           dinitz_alg.cpython-312.pyc
|   |   |       |   |   |           edmondskarp.cpython-312.pyc
|   |   |       |   |   |           gomory_hu.cpython-312.pyc
|   |   |       |   |   |           maxflow.cpython-312.pyc
|   |   |       |   |   |           mincost.cpython-312.pyc
|   |   |       |   |   |           networksimplex.cpython-312.pyc
|   |   |       |   |   |           preflowpush.cpython-312.pyc
|   |   |       |   |   |           shortestaugmentingpath.cpython-312.pyc
|   |   |       |   |   |           utils.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---isomorphism
|   |   |       |   |   |   |   ismags.py
|   |   |       |   |   |   |   isomorph.py
|   |   |       |   |   |   |   isomorphvf2.py
|   |   |       |   |   |   |   matchhelpers.py
|   |   |       |   |   |   |   temporalisomorphvf2.py
|   |   |       |   |   |   |   tree_isomorphism.py
|   |   |       |   |   |   |   vf2pp.py
|   |   |       |   |   |   |   vf2userfunc.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   iso_r01_s80.A99
|   |   |       |   |   |   |   |   iso_r01_s80.B99
|   |   |       |   |   |   |   |   si2_b06_m200.A99
|   |   |       |   |   |   |   |   si2_b06_m200.B99
|   |   |       |   |   |   |   |   test_ismags.py
|   |   |       |   |   |   |   |   test_isomorphism.py
|   |   |       |   |   |   |   |   test_isomorphvf2.py
|   |   |       |   |   |   |   |   test_match_helpers.py
|   |   |       |   |   |   |   |   test_temporalisomorphvf2.py
|   |   |       |   |   |   |   |   test_tree_isomorphism.py
|   |   |       |   |   |   |   |   test_vf2pp.py
|   |   |       |   |   |   |   |   test_vf2pp_helpers.py
|   |   |       |   |   |   |   |   test_vf2userfunc.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_ismags.cpython-312.pyc
|   |   |       |   |   |   |           test_isomorphism.cpython-312.pyc
|   |   |       |   |   |   |           test_isomorphvf2.cpython-312.pyc
|   |   |       |   |   |   |           test_match_helpers.cpython-312.pyc
|   |   |       |   |   |   |           test_temporalisomorphvf2.cpython-312.pyc
|   |   |       |   |   |   |           test_tree_isomorphism.cpython-312.pyc
|   |   |       |   |   |   |           test_vf2pp.cpython-312.pyc
|   |   |       |   |   |   |           test_vf2pp_helpers.cpython-312.pyc
|   |   |       |   |   |   |           test_vf2userfunc.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           ismags.cpython-312.pyc
|   |   |       |   |   |           isomorph.cpython-312.pyc
|   |   |       |   |   |           isomorphvf2.cpython-312.pyc
|   |   |       |   |   |           matchhelpers.cpython-312.pyc
|   |   |       |   |   |           temporalisomorphvf2.cpython-312.pyc
|   |   |       |   |   |           tree_isomorphism.cpython-312.pyc
|   |   |       |   |   |           vf2pp.cpython-312.pyc
|   |   |       |   |   |           vf2userfunc.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---link_analysis
|   |   |       |   |   |   |   hits_alg.py
|   |   |       |   |   |   |   pagerank_alg.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_hits.py
|   |   |       |   |   |   |   |   test_pagerank.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_hits.cpython-312.pyc
|   |   |       |   |   |   |           test_pagerank.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           hits_alg.cpython-312.pyc
|   |   |       |   |   |           pagerank_alg.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---minors
|   |   |       |   |   |   |   contraction.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_contraction.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_contraction.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           contraction.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---operators
|   |   |       |   |   |   |   all.py
|   |   |       |   |   |   |   binary.py
|   |   |       |   |   |   |   product.py
|   |   |       |   |   |   |   unary.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_all.py
|   |   |       |   |   |   |   |   test_binary.py
|   |   |       |   |   |   |   |   test_product.py
|   |   |       |   |   |   |   |   test_unary.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_all.cpython-312.pyc
|   |   |       |   |   |   |           test_binary.cpython-312.pyc
|   |   |       |   |   |   |           test_product.cpython-312.pyc
|   |   |       |   |   |   |           test_unary.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           all.cpython-312.pyc
|   |   |       |   |   |           binary.cpython-312.pyc
|   |   |       |   |   |           product.cpython-312.pyc
|   |   |       |   |   |           unary.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---shortest_paths
|   |   |       |   |   |   |   astar.py
|   |   |       |   |   |   |   dense.py
|   |   |       |   |   |   |   generic.py
|   |   |       |   |   |   |   unweighted.py
|   |   |       |   |   |   |   weighted.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_astar.py
|   |   |       |   |   |   |   |   test_dense.py
|   |   |       |   |   |   |   |   test_dense_numpy.py
|   |   |       |   |   |   |   |   test_generic.py
|   |   |       |   |   |   |   |   test_unweighted.py
|   |   |       |   |   |   |   |   test_weighted.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_astar.cpython-312.pyc
|   |   |       |   |   |   |           test_dense.cpython-312.pyc
|   |   |       |   |   |   |           test_dense_numpy.cpython-312.pyc
|   |   |       |   |   |   |           test_generic.cpython-312.pyc
|   |   |       |   |   |   |           test_unweighted.cpython-312.pyc
|   |   |       |   |   |   |           test_weighted.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           astar.cpython-312.pyc
|   |   |       |   |   |           dense.cpython-312.pyc
|   |   |       |   |   |           generic.cpython-312.pyc
|   |   |       |   |   |           unweighted.cpython-312.pyc
|   |   |       |   |   |           weighted.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---tests
|   |   |       |   |   |   |   test_asteroidal.py
|   |   |       |   |   |   |   test_boundary.py
|   |   |       |   |   |   |   test_bridges.py
|   |   |       |   |   |   |   test_broadcasting.py
|   |   |       |   |   |   |   test_chains.py
|   |   |       |   |   |   |   test_chordal.py
|   |   |       |   |   |   |   test_clique.py
|   |   |       |   |   |   |   test_cluster.py
|   |   |       |   |   |   |   test_communicability.py
|   |   |       |   |   |   |   test_core.py
|   |   |       |   |   |   |   test_covering.py
|   |   |       |   |   |   |   test_cuts.py
|   |   |       |   |   |   |   test_cycles.py
|   |   |       |   |   |   |   test_dag.py
|   |   |       |   |   |   |   test_distance_measures.py
|   |   |       |   |   |   |   test_distance_regular.py
|   |   |       |   |   |   |   test_dominance.py
|   |   |       |   |   |   |   test_dominating.py
|   |   |       |   |   |   |   test_d_separation.py
|   |   |       |   |   |   |   test_efficiency.py
|   |   |       |   |   |   |   test_euler.py
|   |   |       |   |   |   |   test_graphical.py
|   |   |       |   |   |   |   test_graph_hashing.py
|   |   |       |   |   |   |   test_hierarchy.py
|   |   |       |   |   |   |   test_hybrid.py
|   |   |       |   |   |   |   test_isolate.py
|   |   |       |   |   |   |   test_link_prediction.py
|   |   |       |   |   |   |   test_lowest_common_ancestors.py
|   |   |       |   |   |   |   test_matching.py
|   |   |       |   |   |   |   test_max_weight_clique.py
|   |   |       |   |   |   |   test_mis.py
|   |   |       |   |   |   |   test_moral.py
|   |   |       |   |   |   |   test_node_classification.py
|   |   |       |   |   |   |   test_non_randomness.py
|   |   |       |   |   |   |   test_planarity.py
|   |   |       |   |   |   |   test_planar_drawing.py
|   |   |       |   |   |   |   test_polynomials.py
|   |   |       |   |   |   |   test_reciprocity.py
|   |   |       |   |   |   |   test_regular.py
|   |   |       |   |   |   |   test_richclub.py
|   |   |       |   |   |   |   test_similarity.py
|   |   |       |   |   |   |   test_simple_paths.py
|   |   |       |   |   |   |   test_smallworld.py
|   |   |       |   |   |   |   test_smetric.py
|   |   |       |   |   |   |   test_sparsifiers.py
|   |   |       |   |   |   |   test_structuralholes.py
|   |   |       |   |   |   |   test_summarization.py
|   |   |       |   |   |   |   test_swap.py
|   |   |       |   |   |   |   test_threshold.py
|   |   |       |   |   |   |   test_time_dependent.py
|   |   |       |   |   |   |   test_tournament.py
|   |   |       |   |   |   |   test_triads.py
|   |   |       |   |   |   |   test_vitality.py
|   |   |       |   |   |   |   test_voronoi.py
|   |   |       |   |   |   |   test_walks.py
|   |   |       |   |   |   |   test_wiener.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           test_asteroidal.cpython-312.pyc
|   |   |       |   |   |           test_boundary.cpython-312.pyc
|   |   |       |   |   |           test_bridges.cpython-312.pyc
|   |   |       |   |   |           test_broadcasting.cpython-312.pyc
|   |   |       |   |   |           test_chains.cpython-312.pyc
|   |   |       |   |   |           test_chordal.cpython-312.pyc
|   |   |       |   |   |           test_clique.cpython-312.pyc
|   |   |       |   |   |           test_cluster.cpython-312.pyc
|   |   |       |   |   |           test_communicability.cpython-312.pyc
|   |   |       |   |   |           test_core.cpython-312.pyc
|   |   |       |   |   |           test_covering.cpython-312.pyc
|   |   |       |   |   |           test_cuts.cpython-312.pyc
|   |   |       |   |   |           test_cycles.cpython-312.pyc
|   |   |       |   |   |           test_dag.cpython-312.pyc
|   |   |       |   |   |           test_distance_measures.cpython-312.pyc
|   |   |       |   |   |           test_distance_regular.cpython-312.pyc
|   |   |       |   |   |           test_dominance.cpython-312.pyc
|   |   |       |   |   |           test_dominating.cpython-312.pyc
|   |   |       |   |   |           test_d_separation.cpython-312.pyc
|   |   |       |   |   |           test_efficiency.cpython-312.pyc
|   |   |       |   |   |           test_euler.cpython-312.pyc
|   |   |       |   |   |           test_graphical.cpython-312.pyc
|   |   |       |   |   |           test_graph_hashing.cpython-312.pyc
|   |   |       |   |   |           test_hierarchy.cpython-312.pyc
|   |   |       |   |   |           test_hybrid.cpython-312.pyc
|   |   |       |   |   |           test_isolate.cpython-312.pyc
|   |   |       |   |   |           test_link_prediction.cpython-312.pyc
|   |   |       |   |   |           test_lowest_common_ancestors.cpython-312.pyc
|   |   |       |   |   |           test_matching.cpython-312.pyc
|   |   |       |   |   |           test_max_weight_clique.cpython-312.pyc
|   |   |       |   |   |           test_mis.cpython-312.pyc
|   |   |       |   |   |           test_moral.cpython-312.pyc
|   |   |       |   |   |           test_node_classification.cpython-312.pyc
|   |   |       |   |   |           test_non_randomness.cpython-312.pyc
|   |   |       |   |   |           test_planarity.cpython-312.pyc
|   |   |       |   |   |           test_planar_drawing.cpython-312.pyc
|   |   |       |   |   |           test_polynomials.cpython-312.pyc
|   |   |       |   |   |           test_reciprocity.cpython-312.pyc
|   |   |       |   |   |           test_regular.cpython-312.pyc
|   |   |       |   |   |           test_richclub.cpython-312.pyc
|   |   |       |   |   |           test_similarity.cpython-312.pyc
|   |   |       |   |   |           test_simple_paths.cpython-312.pyc
|   |   |       |   |   |           test_smallworld.cpython-312.pyc
|   |   |       |   |   |           test_smetric.cpython-312.pyc
|   |   |       |   |   |           test_sparsifiers.cpython-312.pyc
|   |   |       |   |   |           test_structuralholes.cpython-312.pyc
|   |   |       |   |   |           test_summarization.cpython-312.pyc
|   |   |       |   |   |           test_swap.cpython-312.pyc
|   |   |       |   |   |           test_threshold.cpython-312.pyc
|   |   |       |   |   |           test_time_dependent.cpython-312.pyc
|   |   |       |   |   |           test_tournament.cpython-312.pyc
|   |   |       |   |   |           test_triads.cpython-312.pyc
|   |   |       |   |   |           test_vitality.cpython-312.pyc
|   |   |       |   |   |           test_voronoi.cpython-312.pyc
|   |   |       |   |   |           test_walks.cpython-312.pyc
|   |   |       |   |   |           test_wiener.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---traversal
|   |   |       |   |   |   |   beamsearch.py
|   |   |       |   |   |   |   breadth_first_search.py
|   |   |       |   |   |   |   depth_first_search.py
|   |   |       |   |   |   |   edgebfs.py
|   |   |       |   |   |   |   edgedfs.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_beamsearch.py
|   |   |       |   |   |   |   |   test_bfs.py
|   |   |       |   |   |   |   |   test_dfs.py
|   |   |       |   |   |   |   |   test_edgebfs.py
|   |   |       |   |   |   |   |   test_edgedfs.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_beamsearch.cpython-312.pyc
|   |   |       |   |   |   |           test_bfs.cpython-312.pyc
|   |   |       |   |   |   |           test_dfs.cpython-312.pyc
|   |   |       |   |   |   |           test_edgebfs.cpython-312.pyc
|   |   |       |   |   |   |           test_edgedfs.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           beamsearch.cpython-312.pyc
|   |   |       |   |   |           breadth_first_search.cpython-312.pyc
|   |   |       |   |   |           depth_first_search.cpython-312.pyc
|   |   |       |   |   |           edgebfs.cpython-312.pyc
|   |   |       |   |   |           edgedfs.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---tree
|   |   |       |   |   |   |   branchings.py
|   |   |       |   |   |   |   coding.py
|   |   |       |   |   |   |   decomposition.py
|   |   |       |   |   |   |   mst.py
|   |   |       |   |   |   |   operations.py
|   |   |       |   |   |   |   recognition.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_branchings.py
|   |   |       |   |   |   |   |   test_coding.py
|   |   |       |   |   |   |   |   test_decomposition.py
|   |   |       |   |   |   |   |   test_mst.py
|   |   |       |   |   |   |   |   test_operations.py
|   |   |       |   |   |   |   |   test_recognition.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_branchings.cpython-312.pyc
|   |   |       |   |   |   |           test_coding.cpython-312.pyc
|   |   |       |   |   |   |           test_decomposition.cpython-312.pyc
|   |   |       |   |   |   |           test_mst.cpython-312.pyc
|   |   |       |   |   |   |           test_operations.cpython-312.pyc
|   |   |       |   |   |   |           test_recognition.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           branchings.cpython-312.pyc
|   |   |       |   |   |           coding.cpython-312.pyc
|   |   |       |   |   |           decomposition.cpython-312.pyc
|   |   |       |   |   |           mst.cpython-312.pyc
|   |   |       |   |   |           operations.cpython-312.pyc
|   |   |       |   |   |           recognition.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           asteroidal.cpython-312.pyc
|   |   |       |   |           boundary.cpython-312.pyc
|   |   |       |   |           bridges.cpython-312.pyc
|   |   |       |   |           broadcasting.cpython-312.pyc
|   |   |       |   |           chains.cpython-312.pyc
|   |   |       |   |           chordal.cpython-312.pyc
|   |   |       |   |           clique.cpython-312.pyc
|   |   |       |   |           cluster.cpython-312.pyc
|   |   |       |   |           communicability_alg.cpython-312.pyc
|   |   |       |   |           core.cpython-312.pyc
|   |   |       |   |           covering.cpython-312.pyc
|   |   |       |   |           cuts.cpython-312.pyc
|   |   |       |   |           cycles.cpython-312.pyc
|   |   |       |   |           dag.cpython-312.pyc
|   |   |       |   |           distance_measures.cpython-312.pyc
|   |   |       |   |           distance_regular.cpython-312.pyc
|   |   |       |   |           dominance.cpython-312.pyc
|   |   |       |   |           dominating.cpython-312.pyc
|   |   |       |   |           d_separation.cpython-312.pyc
|   |   |       |   |           efficiency_measures.cpython-312.pyc
|   |   |       |   |           euler.cpython-312.pyc
|   |   |       |   |           graphical.cpython-312.pyc
|   |   |       |   |           graph_hashing.cpython-312.pyc
|   |   |       |   |           hierarchy.cpython-312.pyc
|   |   |       |   |           hybrid.cpython-312.pyc
|   |   |       |   |           isolate.cpython-312.pyc
|   |   |       |   |           link_prediction.cpython-312.pyc
|   |   |       |   |           lowest_common_ancestors.cpython-312.pyc
|   |   |       |   |           matching.cpython-312.pyc
|   |   |       |   |           mis.cpython-312.pyc
|   |   |       |   |           moral.cpython-312.pyc
|   |   |       |   |           node_classification.cpython-312.pyc
|   |   |       |   |           non_randomness.cpython-312.pyc
|   |   |       |   |           planarity.cpython-312.pyc
|   |   |       |   |           planar_drawing.cpython-312.pyc
|   |   |       |   |           polynomials.cpython-312.pyc
|   |   |       |   |           reciprocity.cpython-312.pyc
|   |   |       |   |           regular.cpython-312.pyc
|   |   |       |   |           richclub.cpython-312.pyc
|   |   |       |   |           similarity.cpython-312.pyc
|   |   |       |   |           simple_paths.cpython-312.pyc
|   |   |       |   |           smallworld.cpython-312.pyc
|   |   |       |   |           smetric.cpython-312.pyc
|   |   |       |   |           sparsifiers.cpython-312.pyc
|   |   |       |   |           structuralholes.cpython-312.pyc
|   |   |       |   |           summarization.cpython-312.pyc
|   |   |       |   |           swap.cpython-312.pyc
|   |   |       |   |           threshold.cpython-312.pyc
|   |   |       |   |           time_dependent.cpython-312.pyc
|   |   |       |   |           tournament.cpython-312.pyc
|   |   |       |   |           triads.cpython-312.pyc
|   |   |       |   |           vitality.cpython-312.pyc
|   |   |       |   |           voronoi.cpython-312.pyc
|   |   |       |   |           walks.cpython-312.pyc
|   |   |       |   |           wiener.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---classes
|   |   |       |   |   |   coreviews.py
|   |   |       |   |   |   digraph.py
|   |   |       |   |   |   filters.py
|   |   |       |   |   |   function.py
|   |   |       |   |   |   graph.py
|   |   |       |   |   |   graphviews.py
|   |   |       |   |   |   multidigraph.py
|   |   |       |   |   |   multigraph.py
|   |   |       |   |   |   reportviews.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---tests
|   |   |       |   |   |   |   dispatch_interface.py
|   |   |       |   |   |   |   historical_tests.py
|   |   |       |   |   |   |   test_coreviews.py
|   |   |       |   |   |   |   test_digraph.py
|   |   |       |   |   |   |   test_digraph_historical.py
|   |   |       |   |   |   |   test_filters.py
|   |   |       |   |   |   |   test_function.py
|   |   |       |   |   |   |   test_graph.py
|   |   |       |   |   |   |   test_graphviews.py
|   |   |       |   |   |   |   test_graph_historical.py
|   |   |       |   |   |   |   test_multidigraph.py
|   |   |       |   |   |   |   test_multigraph.py
|   |   |       |   |   |   |   test_reportviews.py
|   |   |       |   |   |   |   test_special.py
|   |   |       |   |   |   |   test_subgraphviews.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           dispatch_interface.cpython-312.pyc
|   |   |       |   |   |           historical_tests.cpython-312.pyc
|   |   |       |   |   |           test_coreviews.cpython-312.pyc
|   |   |       |   |   |           test_digraph.cpython-312.pyc
|   |   |       |   |   |           test_digraph_historical.cpython-312.pyc
|   |   |       |   |   |           test_filters.cpython-312.pyc
|   |   |       |   |   |           test_function.cpython-312.pyc
|   |   |       |   |   |           test_graph.cpython-312.pyc
|   |   |       |   |   |           test_graphviews.cpython-312.pyc
|   |   |       |   |   |           test_graph_historical.cpython-312.pyc
|   |   |       |   |   |           test_multidigraph.cpython-312.pyc
|   |   |       |   |   |           test_multigraph.cpython-312.pyc
|   |   |       |   |   |           test_reportviews.cpython-312.pyc
|   |   |       |   |   |           test_special.cpython-312.pyc
|   |   |       |   |   |           test_subgraphviews.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           coreviews.cpython-312.pyc
|   |   |       |   |           digraph.cpython-312.pyc
|   |   |       |   |           filters.cpython-312.pyc
|   |   |       |   |           function.cpython-312.pyc
|   |   |       |   |           graph.cpython-312.pyc
|   |   |       |   |           graphviews.cpython-312.pyc
|   |   |       |   |           multidigraph.cpython-312.pyc
|   |   |       |   |           multigraph.cpython-312.pyc
|   |   |       |   |           reportviews.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---drawing
|   |   |       |   |   |   layout.py
|   |   |       |   |   |   nx_agraph.py
|   |   |       |   |   |   nx_latex.py
|   |   |       |   |   |   nx_pydot.py
|   |   |       |   |   |   nx_pylab.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---tests
|   |   |       |   |   |   |   test_agraph.py
|   |   |       |   |   |   |   test_latex.py
|   |   |       |   |   |   |   test_layout.py
|   |   |       |   |   |   |   test_pydot.py
|   |   |       |   |   |   |   test_pylab.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---baseline
|   |   |       |   |   |   |       test_display_complex.png
|   |   |       |   |   |   |       test_display_empty_graph.png
|   |   |       |   |   |   |       test_display_house_with_colors.png
|   |   |       |   |   |   |       test_display_labels_and_colors.png
|   |   |       |   |   |   |       test_display_shortest_path.png
|   |   |       |   |   |   |       test_house_with_colors.png
|   |   |       |   |   |   |       
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           test_agraph.cpython-312.pyc
|   |   |       |   |   |           test_latex.cpython-312.pyc
|   |   |       |   |   |           test_layout.cpython-312.pyc
|   |   |       |   |   |           test_pydot.cpython-312.pyc
|   |   |       |   |   |           test_pylab.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           layout.cpython-312.pyc
|   |   |       |   |           nx_agraph.cpython-312.pyc
|   |   |       |   |           nx_latex.cpython-312.pyc
|   |   |       |   |           nx_pydot.cpython-312.pyc
|   |   |       |   |           nx_pylab.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---generators
|   |   |       |   |   |   atlas.dat.gz
|   |   |       |   |   |   atlas.py
|   |   |       |   |   |   classic.py
|   |   |       |   |   |   cographs.py
|   |   |       |   |   |   community.py
|   |   |       |   |   |   degree_seq.py
|   |   |       |   |   |   directed.py
|   |   |       |   |   |   duplication.py
|   |   |       |   |   |   ego.py
|   |   |       |   |   |   expanders.py
|   |   |       |   |   |   geometric.py
|   |   |       |   |   |   harary_graph.py
|   |   |       |   |   |   internet_as_graphs.py
|   |   |       |   |   |   intersection.py
|   |   |       |   |   |   interval_graph.py
|   |   |       |   |   |   joint_degree_seq.py
|   |   |       |   |   |   lattice.py
|   |   |       |   |   |   line.py
|   |   |       |   |   |   mycielski.py
|   |   |       |   |   |   nonisomorphic_trees.py
|   |   |       |   |   |   random_clustered.py
|   |   |       |   |   |   random_graphs.py
|   |   |       |   |   |   small.py
|   |   |       |   |   |   social.py
|   |   |       |   |   |   spectral_graph_forge.py
|   |   |       |   |   |   stochastic.py
|   |   |       |   |   |   sudoku.py
|   |   |       |   |   |   time_series.py
|   |   |       |   |   |   trees.py
|   |   |       |   |   |   triads.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---tests
|   |   |       |   |   |   |   test_atlas.py
|   |   |       |   |   |   |   test_classic.py
|   |   |       |   |   |   |   test_cographs.py
|   |   |       |   |   |   |   test_community.py
|   |   |       |   |   |   |   test_degree_seq.py
|   |   |       |   |   |   |   test_directed.py
|   |   |       |   |   |   |   test_duplication.py
|   |   |       |   |   |   |   test_ego.py
|   |   |       |   |   |   |   test_expanders.py
|   |   |       |   |   |   |   test_geometric.py
|   |   |       |   |   |   |   test_harary_graph.py
|   |   |       |   |   |   |   test_internet_as_graphs.py
|   |   |       |   |   |   |   test_intersection.py
|   |   |       |   |   |   |   test_interval_graph.py
|   |   |       |   |   |   |   test_joint_degree_seq.py
|   |   |       |   |   |   |   test_lattice.py
|   |   |       |   |   |   |   test_line.py
|   |   |       |   |   |   |   test_mycielski.py
|   |   |       |   |   |   |   test_nonisomorphic_trees.py
|   |   |       |   |   |   |   test_random_clustered.py
|   |   |       |   |   |   |   test_random_graphs.py
|   |   |       |   |   |   |   test_small.py
|   |   |       |   |   |   |   test_spectral_graph_forge.py
|   |   |       |   |   |   |   test_stochastic.py
|   |   |       |   |   |   |   test_sudoku.py
|   |   |       |   |   |   |   test_time_series.py
|   |   |       |   |   |   |   test_trees.py
|   |   |       |   |   |   |   test_triads.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           test_atlas.cpython-312.pyc
|   |   |       |   |   |           test_classic.cpython-312.pyc
|   |   |       |   |   |           test_cographs.cpython-312.pyc
|   |   |       |   |   |           test_community.cpython-312.pyc
|   |   |       |   |   |           test_degree_seq.cpython-312.pyc
|   |   |       |   |   |           test_directed.cpython-312.pyc
|   |   |       |   |   |           test_duplication.cpython-312.pyc
|   |   |       |   |   |           test_ego.cpython-312.pyc
|   |   |       |   |   |           test_expanders.cpython-312.pyc
|   |   |       |   |   |           test_geometric.cpython-312.pyc
|   |   |       |   |   |           test_harary_graph.cpython-312.pyc
|   |   |       |   |   |           test_internet_as_graphs.cpython-312.pyc
|   |   |       |   |   |           test_intersection.cpython-312.pyc
|   |   |       |   |   |           test_interval_graph.cpython-312.pyc
|   |   |       |   |   |           test_joint_degree_seq.cpython-312.pyc
|   |   |       |   |   |           test_lattice.cpython-312.pyc
|   |   |       |   |   |           test_line.cpython-312.pyc
|   |   |       |   |   |           test_mycielski.cpython-312.pyc
|   |   |       |   |   |           test_nonisomorphic_trees.cpython-312.pyc
|   |   |       |   |   |           test_random_clustered.cpython-312.pyc
|   |   |       |   |   |           test_random_graphs.cpython-312.pyc
|   |   |       |   |   |           test_small.cpython-312.pyc
|   |   |       |   |   |           test_spectral_graph_forge.cpython-312.pyc
|   |   |       |   |   |           test_stochastic.cpython-312.pyc
|   |   |       |   |   |           test_sudoku.cpython-312.pyc
|   |   |       |   |   |           test_time_series.cpython-312.pyc
|   |   |       |   |   |           test_trees.cpython-312.pyc
|   |   |       |   |   |           test_triads.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           atlas.cpython-312.pyc
|   |   |       |   |           classic.cpython-312.pyc
|   |   |       |   |           cographs.cpython-312.pyc
|   |   |       |   |           community.cpython-312.pyc
|   |   |       |   |           degree_seq.cpython-312.pyc
|   |   |       |   |           directed.cpython-312.pyc
|   |   |       |   |           duplication.cpython-312.pyc
|   |   |       |   |           ego.cpython-312.pyc
|   |   |       |   |           expanders.cpython-312.pyc
|   |   |       |   |           geometric.cpython-312.pyc
|   |   |       |   |           harary_graph.cpython-312.pyc
|   |   |       |   |           internet_as_graphs.cpython-312.pyc
|   |   |       |   |           intersection.cpython-312.pyc
|   |   |       |   |           interval_graph.cpython-312.pyc
|   |   |       |   |           joint_degree_seq.cpython-312.pyc
|   |   |       |   |           lattice.cpython-312.pyc
|   |   |       |   |           line.cpython-312.pyc
|   |   |       |   |           mycielski.cpython-312.pyc
|   |   |       |   |           nonisomorphic_trees.cpython-312.pyc
|   |   |       |   |           random_clustered.cpython-312.pyc
|   |   |       |   |           random_graphs.cpython-312.pyc
|   |   |       |   |           small.cpython-312.pyc
|   |   |       |   |           social.cpython-312.pyc
|   |   |       |   |           spectral_graph_forge.cpython-312.pyc
|   |   |       |   |           stochastic.cpython-312.pyc
|   |   |       |   |           sudoku.cpython-312.pyc
|   |   |       |   |           time_series.cpython-312.pyc
|   |   |       |   |           trees.cpython-312.pyc
|   |   |       |   |           triads.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---linalg
|   |   |       |   |   |   algebraicconnectivity.py
|   |   |       |   |   |   attrmatrix.py
|   |   |       |   |   |   bethehessianmatrix.py
|   |   |       |   |   |   graphmatrix.py
|   |   |       |   |   |   laplacianmatrix.py
|   |   |       |   |   |   modularitymatrix.py
|   |   |       |   |   |   spectrum.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---tests
|   |   |       |   |   |   |   test_algebraic_connectivity.py
|   |   |       |   |   |   |   test_attrmatrix.py
|   |   |       |   |   |   |   test_bethehessian.py
|   |   |       |   |   |   |   test_graphmatrix.py
|   |   |       |   |   |   |   test_laplacian.py
|   |   |       |   |   |   |   test_modularity.py
|   |   |       |   |   |   |   test_spectrum.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           test_algebraic_connectivity.cpython-312.pyc
|   |   |       |   |   |           test_attrmatrix.cpython-312.pyc
|   |   |       |   |   |           test_bethehessian.cpython-312.pyc
|   |   |       |   |   |           test_graphmatrix.cpython-312.pyc
|   |   |       |   |   |           test_laplacian.cpython-312.pyc
|   |   |       |   |   |           test_modularity.cpython-312.pyc
|   |   |       |   |   |           test_spectrum.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           algebraicconnectivity.cpython-312.pyc
|   |   |       |   |           attrmatrix.cpython-312.pyc
|   |   |       |   |           bethehessianmatrix.cpython-312.pyc
|   |   |       |   |           graphmatrix.cpython-312.pyc
|   |   |       |   |           laplacianmatrix.cpython-312.pyc
|   |   |       |   |           modularitymatrix.cpython-312.pyc
|   |   |       |   |           spectrum.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---readwrite
|   |   |       |   |   |   adjlist.py
|   |   |       |   |   |   edgelist.py
|   |   |       |   |   |   gexf.py
|   |   |       |   |   |   gml.py
|   |   |       |   |   |   graph6.py
|   |   |       |   |   |   graphml.py
|   |   |       |   |   |   leda.py
|   |   |       |   |   |   multiline_adjlist.py
|   |   |       |   |   |   p2g.py
|   |   |       |   |   |   pajek.py
|   |   |       |   |   |   sparse6.py
|   |   |       |   |   |   text.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---json_graph
|   |   |       |   |   |   |   adjacency.py
|   |   |       |   |   |   |   cytoscape.py
|   |   |       |   |   |   |   node_link.py
|   |   |       |   |   |   |   tree.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---tests
|   |   |       |   |   |   |   |   test_adjacency.py
|   |   |       |   |   |   |   |   test_cytoscape.py
|   |   |       |   |   |   |   |   test_node_link.py
|   |   |       |   |   |   |   |   test_tree.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           test_adjacency.cpython-312.pyc
|   |   |       |   |   |   |           test_cytoscape.cpython-312.pyc
|   |   |       |   |   |   |           test_node_link.cpython-312.pyc
|   |   |       |   |   |   |           test_tree.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           adjacency.cpython-312.pyc
|   |   |       |   |   |           cytoscape.cpython-312.pyc
|   |   |       |   |   |           node_link.cpython-312.pyc
|   |   |       |   |   |           tree.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---tests
|   |   |       |   |   |   |   test_adjlist.py
|   |   |       |   |   |   |   test_edgelist.py
|   |   |       |   |   |   |   test_gexf.py
|   |   |       |   |   |   |   test_gml.py
|   |   |       |   |   |   |   test_graph6.py
|   |   |       |   |   |   |   test_graphml.py
|   |   |       |   |   |   |   test_leda.py
|   |   |       |   |   |   |   test_p2g.py
|   |   |       |   |   |   |   test_pajek.py
|   |   |       |   |   |   |   test_sparse6.py
|   |   |       |   |   |   |   test_text.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           test_adjlist.cpython-312.pyc
|   |   |       |   |   |           test_edgelist.cpython-312.pyc
|   |   |       |   |   |           test_gexf.cpython-312.pyc
|   |   |       |   |   |           test_gml.cpython-312.pyc
|   |   |       |   |   |           test_graph6.cpython-312.pyc
|   |   |       |   |   |           test_graphml.cpython-312.pyc
|   |   |       |   |   |           test_leda.cpython-312.pyc
|   |   |       |   |   |           test_p2g.cpython-312.pyc
|   |   |       |   |   |           test_pajek.cpython-312.pyc
|   |   |       |   |   |           test_sparse6.cpython-312.pyc
|   |   |       |   |   |           test_text.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           adjlist.cpython-312.pyc
|   |   |       |   |           edgelist.cpython-312.pyc
|   |   |       |   |           gexf.cpython-312.pyc
|   |   |       |   |           gml.cpython-312.pyc
|   |   |       |   |           graph6.cpython-312.pyc
|   |   |       |   |           graphml.cpython-312.pyc
|   |   |       |   |           leda.cpython-312.pyc
|   |   |       |   |           multiline_adjlist.cpython-312.pyc
|   |   |       |   |           p2g.cpython-312.pyc
|   |   |       |   |           pajek.cpython-312.pyc
|   |   |       |   |           sparse6.cpython-312.pyc
|   |   |       |   |           text.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---tests
|   |   |       |   |   |   test_all_random_functions.py
|   |   |       |   |   |   test_convert.py
|   |   |       |   |   |   test_convert_numpy.py
|   |   |       |   |   |   test_convert_pandas.py
|   |   |       |   |   |   test_convert_scipy.py
|   |   |       |   |   |   test_exceptions.py
|   |   |       |   |   |   test_import.py
|   |   |       |   |   |   test_lazy_imports.py
|   |   |       |   |   |   test_relabel.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           test_all_random_functions.cpython-312.pyc
|   |   |       |   |           test_convert.cpython-312.pyc
|   |   |       |   |           test_convert_numpy.cpython-312.pyc
|   |   |       |   |           test_convert_pandas.cpython-312.pyc
|   |   |       |   |           test_convert_scipy.cpython-312.pyc
|   |   |       |   |           test_exceptions.cpython-312.pyc
|   |   |       |   |           test_import.cpython-312.pyc
|   |   |       |   |           test_lazy_imports.cpython-312.pyc
|   |   |       |   |           test_relabel.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---utils
|   |   |       |   |   |   backends.py
|   |   |       |   |   |   configs.py
|   |   |       |   |   |   decorators.py
|   |   |       |   |   |   heaps.py
|   |   |       |   |   |   mapped_queue.py
|   |   |       |   |   |   misc.py
|   |   |       |   |   |   random_sequence.py
|   |   |       |   |   |   rcm.py
|   |   |       |   |   |   union_find.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---tests
|   |   |       |   |   |   |   test_backends.py
|   |   |       |   |   |   |   test_config.py
|   |   |       |   |   |   |   test_decorators.py
|   |   |       |   |   |   |   test_heaps.py
|   |   |       |   |   |   |   test_mapped_queue.py
|   |   |       |   |   |   |   test_misc.py
|   |   |       |   |   |   |   test_random_sequence.py
|   |   |       |   |   |   |   test_rcm.py
|   |   |       |   |   |   |   test_unionfind.py
|   |   |       |   |   |   |   test__init.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           test_backends.cpython-312.pyc
|   |   |       |   |   |           test_config.cpython-312.pyc
|   |   |       |   |   |           test_decorators.cpython-312.pyc
|   |   |       |   |   |           test_heaps.cpython-312.pyc
|   |   |       |   |   |           test_mapped_queue.cpython-312.pyc
|   |   |       |   |   |           test_misc.cpython-312.pyc
|   |   |       |   |   |           test_random_sequence.cpython-312.pyc
|   |   |       |   |   |           test_rcm.cpython-312.pyc
|   |   |       |   |   |           test_unionfind.cpython-312.pyc
|   |   |       |   |   |           test__init.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           backends.cpython-312.pyc
|   |   |       |   |           configs.cpython-312.pyc
|   |   |       |   |           decorators.cpython-312.pyc
|   |   |       |   |           heaps.cpython-312.pyc
|   |   |       |   |           mapped_queue.cpython-312.pyc
|   |   |       |   |           misc.cpython-312.pyc
|   |   |       |   |           random_sequence.cpython-312.pyc
|   |   |       |   |           rcm.cpython-312.pyc
|   |   |       |   |           union_find.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           conftest.cpython-312.pyc
|   |   |       |           convert.cpython-312.pyc
|   |   |       |           convert_matrix.cpython-312.pyc
|   |   |       |           exception.cpython-312.pyc
|   |   |       |           lazy_imports.cpython-312.pyc
|   |   |       |           relabel.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---networkx-3.5.dist-info
|   |   |       |   |   entry_points.txt
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   top_level.txt
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           LICENSE.txt
|   |   |       |           
|   |   |       +---parso
|   |   |       |   |   cache.py
|   |   |       |   |   file_io.py
|   |   |       |   |   grammar.py
|   |   |       |   |   normalizer.py
|   |   |       |   |   parser.py
|   |   |       |   |   py.typed
|   |   |       |   |   tree.py
|   |   |       |   |   utils.py
|   |   |       |   |   _compatibility.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   +---pgen2
|   |   |       |   |   |   generator.py
|   |   |       |   |   |   grammar_parser.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           generator.cpython-312.pyc
|   |   |       |   |           grammar_parser.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---python
|   |   |       |   |   |   diff.py
|   |   |       |   |   |   errors.py
|   |   |       |   |   |   grammar310.txt
|   |   |       |   |   |   grammar311.txt
|   |   |       |   |   |   grammar312.txt
|   |   |       |   |   |   grammar313.txt
|   |   |       |   |   |   grammar314.txt
|   |   |       |   |   |   grammar36.txt
|   |   |       |   |   |   grammar37.txt
|   |   |       |   |   |   grammar38.txt
|   |   |       |   |   |   grammar39.txt
|   |   |       |   |   |   parser.py
|   |   |       |   |   |   pep8.py
|   |   |       |   |   |   prefix.py
|   |   |       |   |   |   token.py
|   |   |       |   |   |   tokenize.py
|   |   |       |   |   |   tree.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           diff.cpython-312.pyc
|   |   |       |   |           errors.cpython-312.pyc
|   |   |       |   |           parser.cpython-312.pyc
|   |   |       |   |           pep8.cpython-312.pyc
|   |   |       |   |           prefix.cpython-312.pyc
|   |   |       |   |           token.cpython-312.pyc
|   |   |       |   |           tokenize.cpython-312.pyc
|   |   |       |   |           tree.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           cache.cpython-312.pyc
|   |   |       |           file_io.cpython-312.pyc
|   |   |       |           grammar.cpython-312.pyc
|   |   |       |           normalizer.cpython-312.pyc
|   |   |       |           parser.cpython-312.pyc
|   |   |       |           tree.cpython-312.pyc
|   |   |       |           utils.cpython-312.pyc
|   |   |       |           _compatibility.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---parso-0.8.5.dist-info
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   top_level.txt
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           AUTHORS.txt
|   |   |       |           LICENSE.txt
|   |   |       |           
|   |   |       +---pip
|   |   |       |   |   py.typed
|   |   |       |   |   __init__.py
|   |   |       |   |   __main__.py
|   |   |       |   |   __pip-runner__.py
|   |   |       |   |   
|   |   |       |   +---_internal
|   |   |       |   |   |   build_env.py
|   |   |       |   |   |   cache.py
|   |   |       |   |   |   configuration.py
|   |   |       |   |   |   exceptions.py
|   |   |       |   |   |   main.py
|   |   |       |   |   |   pyproject.py
|   |   |       |   |   |   self_outdated_check.py
|   |   |       |   |   |   wheel_builder.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---cli
|   |   |       |   |   |   |   autocompletion.py
|   |   |       |   |   |   |   base_command.py
|   |   |       |   |   |   |   cmdoptions.py
|   |   |       |   |   |   |   command_context.py
|   |   |       |   |   |   |   index_command.py
|   |   |       |   |   |   |   main.py
|   |   |       |   |   |   |   main_parser.py
|   |   |       |   |   |   |   parser.py
|   |   |       |   |   |   |   progress_bars.py
|   |   |       |   |   |   |   req_command.py
|   |   |       |   |   |   |   spinners.py
|   |   |       |   |   |   |   status_codes.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           autocompletion.cpython-312.pyc
|   |   |       |   |   |           base_command.cpython-312.pyc
|   |   |       |   |   |           cmdoptions.cpython-312.pyc
|   |   |       |   |   |           command_context.cpython-312.pyc
|   |   |       |   |   |           index_command.cpython-312.pyc
|   |   |       |   |   |           main.cpython-312.pyc
|   |   |       |   |   |           main_parser.cpython-312.pyc
|   |   |       |   |   |           parser.cpython-312.pyc
|   |   |       |   |   |           progress_bars.cpython-312.pyc
|   |   |       |   |   |           req_command.cpython-312.pyc
|   |   |       |   |   |           spinners.cpython-312.pyc
|   |   |       |   |   |           status_codes.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---commands
|   |   |       |   |   |   |   cache.py
|   |   |       |   |   |   |   check.py
|   |   |       |   |   |   |   completion.py
|   |   |       |   |   |   |   configuration.py
|   |   |       |   |   |   |   debug.py
|   |   |       |   |   |   |   download.py
|   |   |       |   |   |   |   freeze.py
|   |   |       |   |   |   |   hash.py
|   |   |       |   |   |   |   help.py
|   |   |       |   |   |   |   index.py
|   |   |       |   |   |   |   inspect.py
|   |   |       |   |   |   |   install.py
|   |   |       |   |   |   |   list.py
|   |   |       |   |   |   |   search.py
|   |   |       |   |   |   |   show.py
|   |   |       |   |   |   |   uninstall.py
|   |   |       |   |   |   |   wheel.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           cache.cpython-312.pyc
|   |   |       |   |   |           check.cpython-312.pyc
|   |   |       |   |   |           completion.cpython-312.pyc
|   |   |       |   |   |           configuration.cpython-312.pyc
|   |   |       |   |   |           debug.cpython-312.pyc
|   |   |       |   |   |           download.cpython-312.pyc
|   |   |       |   |   |           freeze.cpython-312.pyc
|   |   |       |   |   |           hash.cpython-312.pyc
|   |   |       |   |   |           help.cpython-312.pyc
|   |   |       |   |   |           index.cpython-312.pyc
|   |   |       |   |   |           inspect.cpython-312.pyc
|   |   |       |   |   |           install.cpython-312.pyc
|   |   |       |   |   |           list.cpython-312.pyc
|   |   |       |   |   |           search.cpython-312.pyc
|   |   |       |   |   |           show.cpython-312.pyc
|   |   |       |   |   |           uninstall.cpython-312.pyc
|   |   |       |   |   |           wheel.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---distributions
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   installed.py
|   |   |       |   |   |   |   sdist.py
|   |   |       |   |   |   |   wheel.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           installed.cpython-312.pyc
|   |   |       |   |   |           sdist.cpython-312.pyc
|   |   |       |   |   |           wheel.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---index
|   |   |       |   |   |   |   collector.py
|   |   |       |   |   |   |   package_finder.py
|   |   |       |   |   |   |   sources.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           collector.cpython-312.pyc
|   |   |       |   |   |           package_finder.cpython-312.pyc
|   |   |       |   |   |           sources.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---locations
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   _distutils.py
|   |   |       |   |   |   |   _sysconfig.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           _distutils.cpython-312.pyc
|   |   |       |   |   |           _sysconfig.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---metadata
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   pkg_resources.py
|   |   |       |   |   |   |   _json.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---importlib
|   |   |       |   |   |   |   |   _compat.py
|   |   |       |   |   |   |   |   _dists.py
|   |   |       |   |   |   |   |   _envs.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           _compat.cpython-312.pyc
|   |   |       |   |   |   |           _dists.cpython-312.pyc
|   |   |       |   |   |   |           _envs.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           pkg_resources.cpython-312.pyc
|   |   |       |   |   |           _json.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---models
|   |   |       |   |   |   |   candidate.py
|   |   |       |   |   |   |   direct_url.py
|   |   |       |   |   |   |   format_control.py
|   |   |       |   |   |   |   index.py
|   |   |       |   |   |   |   installation_report.py
|   |   |       |   |   |   |   link.py
|   |   |       |   |   |   |   scheme.py
|   |   |       |   |   |   |   search_scope.py
|   |   |       |   |   |   |   selection_prefs.py
|   |   |       |   |   |   |   target_python.py
|   |   |       |   |   |   |   wheel.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           candidate.cpython-312.pyc
|   |   |       |   |   |           direct_url.cpython-312.pyc
|   |   |       |   |   |           format_control.cpython-312.pyc
|   |   |       |   |   |           index.cpython-312.pyc
|   |   |       |   |   |           installation_report.cpython-312.pyc
|   |   |       |   |   |           link.cpython-312.pyc
|   |   |       |   |   |           scheme.cpython-312.pyc
|   |   |       |   |   |           search_scope.cpython-312.pyc
|   |   |       |   |   |           selection_prefs.cpython-312.pyc
|   |   |       |   |   |           target_python.cpython-312.pyc
|   |   |       |   |   |           wheel.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---network
|   |   |       |   |   |   |   auth.py
|   |   |       |   |   |   |   cache.py
|   |   |       |   |   |   |   download.py
|   |   |       |   |   |   |   lazy_wheel.py
|   |   |       |   |   |   |   session.py
|   |   |       |   |   |   |   utils.py
|   |   |       |   |   |   |   xmlrpc.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           auth.cpython-312.pyc
|   |   |       |   |   |           cache.cpython-312.pyc
|   |   |       |   |   |           download.cpython-312.pyc
|   |   |       |   |   |           lazy_wheel.cpython-312.pyc
|   |   |       |   |   |           session.cpython-312.pyc
|   |   |       |   |   |           utils.cpython-312.pyc
|   |   |       |   |   |           xmlrpc.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---operations
|   |   |       |   |   |   |   check.py
|   |   |       |   |   |   |   freeze.py
|   |   |       |   |   |   |   prepare.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---build
|   |   |       |   |   |   |   |   build_tracker.py
|   |   |       |   |   |   |   |   metadata.py
|   |   |       |   |   |   |   |   metadata_editable.py
|   |   |       |   |   |   |   |   metadata_legacy.py
|   |   |       |   |   |   |   |   wheel.py
|   |   |       |   |   |   |   |   wheel_editable.py
|   |   |       |   |   |   |   |   wheel_legacy.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           build_tracker.cpython-312.pyc
|   |   |       |   |   |   |           metadata.cpython-312.pyc
|   |   |       |   |   |   |           metadata_editable.cpython-312.pyc
|   |   |       |   |   |   |           metadata_legacy.cpython-312.pyc
|   |   |       |   |   |   |           wheel.cpython-312.pyc
|   |   |       |   |   |   |           wheel_editable.cpython-312.pyc
|   |   |       |   |   |   |           wheel_legacy.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   +---install
|   |   |       |   |   |   |   |   editable_legacy.py
|   |   |       |   |   |   |   |   wheel.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           editable_legacy.cpython-312.pyc
|   |   |       |   |   |   |           wheel.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           check.cpython-312.pyc
|   |   |       |   |   |           freeze.cpython-312.pyc
|   |   |       |   |   |           prepare.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---req
|   |   |       |   |   |   |   constructors.py
|   |   |       |   |   |   |   req_file.py
|   |   |       |   |   |   |   req_install.py
|   |   |       |   |   |   |   req_set.py
|   |   |       |   |   |   |   req_uninstall.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           constructors.cpython-312.pyc
|   |   |       |   |   |           req_file.cpython-312.pyc
|   |   |       |   |   |           req_install.cpython-312.pyc
|   |   |       |   |   |           req_set.cpython-312.pyc
|   |   |       |   |   |           req_uninstall.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---resolution
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---legacy
|   |   |       |   |   |   |   |   resolver.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           resolver.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   +---resolvelib
|   |   |       |   |   |   |   |   base.py
|   |   |       |   |   |   |   |   candidates.py
|   |   |       |   |   |   |   |   factory.py
|   |   |       |   |   |   |   |   found_candidates.py
|   |   |       |   |   |   |   |   provider.py
|   |   |       |   |   |   |   |   reporter.py
|   |   |       |   |   |   |   |   requirements.py
|   |   |       |   |   |   |   |   resolver.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           base.cpython-312.pyc
|   |   |       |   |   |   |           candidates.cpython-312.pyc
|   |   |       |   |   |   |           factory.cpython-312.pyc
|   |   |       |   |   |   |           found_candidates.cpython-312.pyc
|   |   |       |   |   |   |           provider.cpython-312.pyc
|   |   |       |   |   |   |           reporter.cpython-312.pyc
|   |   |       |   |   |   |           requirements.cpython-312.pyc
|   |   |       |   |   |   |           resolver.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---utils
|   |   |       |   |   |   |   appdirs.py
|   |   |       |   |   |   |   compat.py
|   |   |       |   |   |   |   compatibility_tags.py
|   |   |       |   |   |   |   datetime.py
|   |   |       |   |   |   |   deprecation.py
|   |   |       |   |   |   |   direct_url_helpers.py
|   |   |       |   |   |   |   egg_link.py
|   |   |       |   |   |   |   encoding.py
|   |   |       |   |   |   |   entrypoints.py
|   |   |       |   |   |   |   filesystem.py
|   |   |       |   |   |   |   filetypes.py
|   |   |       |   |   |   |   glibc.py
|   |   |       |   |   |   |   hashes.py
|   |   |       |   |   |   |   logging.py
|   |   |       |   |   |   |   misc.py
|   |   |       |   |   |   |   packaging.py
|   |   |       |   |   |   |   retry.py
|   |   |       |   |   |   |   setuptools_build.py
|   |   |       |   |   |   |   subprocess.py
|   |   |       |   |   |   |   temp_dir.py
|   |   |       |   |   |   |   unpacking.py
|   |   |       |   |   |   |   urls.py
|   |   |       |   |   |   |   virtualenv.py
|   |   |       |   |   |   |   wheel.py
|   |   |       |   |   |   |   _jaraco_text.py
|   |   |       |   |   |   |   _log.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           appdirs.cpython-312.pyc
|   |   |       |   |   |           compat.cpython-312.pyc
|   |   |       |   |   |           compatibility_tags.cpython-312.pyc
|   |   |       |   |   |           datetime.cpython-312.pyc
|   |   |       |   |   |           deprecation.cpython-312.pyc
|   |   |       |   |   |           direct_url_helpers.cpython-312.pyc
|   |   |       |   |   |           egg_link.cpython-312.pyc
|   |   |       |   |   |           encoding.cpython-312.pyc
|   |   |       |   |   |           entrypoints.cpython-312.pyc
|   |   |       |   |   |           filesystem.cpython-312.pyc
|   |   |       |   |   |           filetypes.cpython-312.pyc
|   |   |       |   |   |           glibc.cpython-312.pyc
|   |   |       |   |   |           hashes.cpython-312.pyc
|   |   |       |   |   |           logging.cpython-312.pyc
|   |   |       |   |   |           misc.cpython-312.pyc
|   |   |       |   |   |           packaging.cpython-312.pyc
|   |   |       |   |   |           retry.cpython-312.pyc
|   |   |       |   |   |           setuptools_build.cpython-312.pyc
|   |   |       |   |   |           subprocess.cpython-312.pyc
|   |   |       |   |   |           temp_dir.cpython-312.pyc
|   |   |       |   |   |           unpacking.cpython-312.pyc
|   |   |       |   |   |           urls.cpython-312.pyc
|   |   |       |   |   |           virtualenv.cpython-312.pyc
|   |   |       |   |   |           wheel.cpython-312.pyc
|   |   |       |   |   |           _jaraco_text.cpython-312.pyc
|   |   |       |   |   |           _log.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---vcs
|   |   |       |   |   |   |   bazaar.py
|   |   |       |   |   |   |   git.py
|   |   |       |   |   |   |   mercurial.py
|   |   |       |   |   |   |   subversion.py
|   |   |       |   |   |   |   versioncontrol.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           bazaar.cpython-312.pyc
|   |   |       |   |   |           git.cpython-312.pyc
|   |   |       |   |   |           mercurial.cpython-312.pyc
|   |   |       |   |   |           subversion.cpython-312.pyc
|   |   |       |   |   |           versioncontrol.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           build_env.cpython-312.pyc
|   |   |       |   |           cache.cpython-312.pyc
|   |   |       |   |           configuration.cpython-312.pyc
|   |   |       |   |           exceptions.cpython-312.pyc
|   |   |       |   |           main.cpython-312.pyc
|   |   |       |   |           pyproject.cpython-312.pyc
|   |   |       |   |           self_outdated_check.cpython-312.pyc
|   |   |       |   |           wheel_builder.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---_vendor
|   |   |       |   |   |   typing_extensions.py
|   |   |       |   |   |   vendor.txt
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---cachecontrol
|   |   |       |   |   |   |   adapter.py
|   |   |       |   |   |   |   cache.py
|   |   |       |   |   |   |   controller.py
|   |   |       |   |   |   |   filewrapper.py
|   |   |       |   |   |   |   heuristics.py
|   |   |       |   |   |   |   py.typed
|   |   |       |   |   |   |   serialize.py
|   |   |       |   |   |   |   wrapper.py
|   |   |       |   |   |   |   _cmd.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---caches
|   |   |       |   |   |   |   |   file_cache.py
|   |   |       |   |   |   |   |   redis_cache.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           file_cache.cpython-312.pyc
|   |   |       |   |   |   |           redis_cache.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           adapter.cpython-312.pyc
|   |   |       |   |   |           cache.cpython-312.pyc
|   |   |       |   |   |           controller.cpython-312.pyc
|   |   |       |   |   |           filewrapper.cpython-312.pyc
|   |   |       |   |   |           heuristics.cpython-312.pyc
|   |   |       |   |   |           serialize.cpython-312.pyc
|   |   |       |   |   |           wrapper.cpython-312.pyc
|   |   |       |   |   |           _cmd.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---certifi
|   |   |       |   |   |   |   cacert.pem
|   |   |       |   |   |   |   core.py
|   |   |       |   |   |   |   py.typed
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   __main__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           core.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           __main__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---distlib
|   |   |       |   |   |   |   compat.py
|   |   |       |   |   |   |   database.py
|   |   |       |   |   |   |   index.py
|   |   |       |   |   |   |   locators.py
|   |   |       |   |   |   |   manifest.py
|   |   |       |   |   |   |   markers.py
|   |   |       |   |   |   |   metadata.py
|   |   |       |   |   |   |   resources.py
|   |   |       |   |   |   |   scripts.py
|   |   |       |   |   |   |   t32.exe
|   |   |       |   |   |   |   t64-arm.exe
|   |   |       |   |   |   |   t64.exe
|   |   |       |   |   |   |   util.py
|   |   |       |   |   |   |   version.py
|   |   |       |   |   |   |   w32.exe
|   |   |       |   |   |   |   w64-arm.exe
|   |   |       |   |   |   |   w64.exe
|   |   |       |   |   |   |   wheel.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           compat.cpython-312.pyc
|   |   |       |   |   |           database.cpython-312.pyc
|   |   |       |   |   |           index.cpython-312.pyc
|   |   |       |   |   |           locators.cpython-312.pyc
|   |   |       |   |   |           manifest.cpython-312.pyc
|   |   |       |   |   |           markers.cpython-312.pyc
|   |   |       |   |   |           metadata.cpython-312.pyc
|   |   |       |   |   |           resources.cpython-312.pyc
|   |   |       |   |   |           scripts.cpython-312.pyc
|   |   |       |   |   |           util.cpython-312.pyc
|   |   |       |   |   |           version.cpython-312.pyc
|   |   |       |   |   |           wheel.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---distro
|   |   |       |   |   |   |   distro.py
|   |   |       |   |   |   |   py.typed
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   __main__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           distro.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           __main__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---idna
|   |   |       |   |   |   |   codec.py
|   |   |       |   |   |   |   compat.py
|   |   |       |   |   |   |   core.py
|   |   |       |   |   |   |   idnadata.py
|   |   |       |   |   |   |   intranges.py
|   |   |       |   |   |   |   package_data.py
|   |   |       |   |   |   |   py.typed
|   |   |       |   |   |   |   uts46data.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           codec.cpython-312.pyc
|   |   |       |   |   |           compat.cpython-312.pyc
|   |   |       |   |   |           core.cpython-312.pyc
|   |   |       |   |   |           idnadata.cpython-312.pyc
|   |   |       |   |   |           intranges.cpython-312.pyc
|   |   |       |   |   |           package_data.cpython-312.pyc
|   |   |       |   |   |           uts46data.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---msgpack
|   |   |       |   |   |   |   exceptions.py
|   |   |       |   |   |   |   ext.py
|   |   |       |   |   |   |   fallback.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           exceptions.cpython-312.pyc
|   |   |       |   |   |           ext.cpython-312.pyc
|   |   |       |   |   |           fallback.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---packaging
|   |   |       |   |   |   |   markers.py
|   |   |       |   |   |   |   metadata.py
|   |   |       |   |   |   |   py.typed
|   |   |       |   |   |   |   requirements.py
|   |   |       |   |   |   |   specifiers.py
|   |   |       |   |   |   |   tags.py
|   |   |       |   |   |   |   utils.py
|   |   |       |   |   |   |   version.py
|   |   |       |   |   |   |   _elffile.py
|   |   |       |   |   |   |   _manylinux.py
|   |   |       |   |   |   |   _musllinux.py
|   |   |       |   |   |   |   _parser.py
|   |   |       |   |   |   |   _structures.py
|   |   |       |   |   |   |   _tokenizer.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           markers.cpython-312.pyc
|   |   |       |   |   |           metadata.cpython-312.pyc
|   |   |       |   |   |           requirements.cpython-312.pyc
|   |   |       |   |   |           specifiers.cpython-312.pyc
|   |   |       |   |   |           tags.cpython-312.pyc
|   |   |       |   |   |           utils.cpython-312.pyc
|   |   |       |   |   |           version.cpython-312.pyc
|   |   |       |   |   |           _elffile.cpython-312.pyc
|   |   |       |   |   |           _manylinux.cpython-312.pyc
|   |   |       |   |   |           _musllinux.cpython-312.pyc
|   |   |       |   |   |           _parser.cpython-312.pyc
|   |   |       |   |   |           _structures.cpython-312.pyc
|   |   |       |   |   |           _tokenizer.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---pkg_resources
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---platformdirs
|   |   |       |   |   |   |   android.py
|   |   |       |   |   |   |   api.py
|   |   |       |   |   |   |   macos.py
|   |   |       |   |   |   |   py.typed
|   |   |       |   |   |   |   unix.py
|   |   |       |   |   |   |   version.py
|   |   |       |   |   |   |   windows.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   __main__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           android.cpython-312.pyc
|   |   |       |   |   |           api.cpython-312.pyc
|   |   |       |   |   |           macos.cpython-312.pyc
|   |   |       |   |   |           unix.cpython-312.pyc
|   |   |       |   |   |           version.cpython-312.pyc
|   |   |       |   |   |           windows.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           __main__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---pygments
|   |   |       |   |   |   |   cmdline.py
|   |   |       |   |   |   |   console.py
|   |   |       |   |   |   |   filter.py
|   |   |       |   |   |   |   formatter.py
|   |   |       |   |   |   |   lexer.py
|   |   |       |   |   |   |   modeline.py
|   |   |       |   |   |   |   plugin.py
|   |   |       |   |   |   |   regexopt.py
|   |   |       |   |   |   |   scanner.py
|   |   |       |   |   |   |   sphinxext.py
|   |   |       |   |   |   |   style.py
|   |   |       |   |   |   |   token.py
|   |   |       |   |   |   |   unistring.py
|   |   |       |   |   |   |   util.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   __main__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---filters
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   +---formatters
|   |   |       |   |   |   |   |   bbcode.py
|   |   |       |   |   |   |   |   groff.py
|   |   |       |   |   |   |   |   html.py
|   |   |       |   |   |   |   |   img.py
|   |   |       |   |   |   |   |   irc.py
|   |   |       |   |   |   |   |   latex.py
|   |   |       |   |   |   |   |   other.py
|   |   |       |   |   |   |   |   pangomarkup.py
|   |   |       |   |   |   |   |   rtf.py
|   |   |       |   |   |   |   |   svg.py
|   |   |       |   |   |   |   |   terminal.py
|   |   |       |   |   |   |   |   terminal256.py
|   |   |       |   |   |   |   |   _mapping.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           bbcode.cpython-312.pyc
|   |   |       |   |   |   |           groff.cpython-312.pyc
|   |   |       |   |   |   |           html.cpython-312.pyc
|   |   |       |   |   |   |           img.cpython-312.pyc
|   |   |       |   |   |   |           irc.cpython-312.pyc
|   |   |       |   |   |   |           latex.cpython-312.pyc
|   |   |       |   |   |   |           other.cpython-312.pyc
|   |   |       |   |   |   |           pangomarkup.cpython-312.pyc
|   |   |       |   |   |   |           rtf.cpython-312.pyc
|   |   |       |   |   |   |           svg.cpython-312.pyc
|   |   |       |   |   |   |           terminal.cpython-312.pyc
|   |   |       |   |   |   |           terminal256.cpython-312.pyc
|   |   |       |   |   |   |           _mapping.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   +---lexers
|   |   |       |   |   |   |   |   python.py
|   |   |       |   |   |   |   |   _mapping.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           python.cpython-312.pyc
|   |   |       |   |   |   |           _mapping.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   +---styles
|   |   |       |   |   |   |   |   _mapping.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           _mapping.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           cmdline.cpython-312.pyc
|   |   |       |   |   |           console.cpython-312.pyc
|   |   |       |   |   |           filter.cpython-312.pyc
|   |   |       |   |   |           formatter.cpython-312.pyc
|   |   |       |   |   |           lexer.cpython-312.pyc
|   |   |       |   |   |           modeline.cpython-312.pyc
|   |   |       |   |   |           plugin.cpython-312.pyc
|   |   |       |   |   |           regexopt.cpython-312.pyc
|   |   |       |   |   |           scanner.cpython-312.pyc
|   |   |       |   |   |           sphinxext.cpython-312.pyc
|   |   |       |   |   |           style.cpython-312.pyc
|   |   |       |   |   |           token.cpython-312.pyc
|   |   |       |   |   |           unistring.cpython-312.pyc
|   |   |       |   |   |           util.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           __main__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---pyproject_hooks
|   |   |       |   |   |   |   _compat.py
|   |   |       |   |   |   |   _impl.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---_in_process
|   |   |       |   |   |   |   |   _in_process.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           _in_process.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           _compat.cpython-312.pyc
|   |   |       |   |   |           _impl.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---requests
|   |   |       |   |   |   |   adapters.py
|   |   |       |   |   |   |   api.py
|   |   |       |   |   |   |   auth.py
|   |   |       |   |   |   |   certs.py
|   |   |       |   |   |   |   compat.py
|   |   |       |   |   |   |   cookies.py
|   |   |       |   |   |   |   exceptions.py
|   |   |       |   |   |   |   help.py
|   |   |       |   |   |   |   hooks.py
|   |   |       |   |   |   |   models.py
|   |   |       |   |   |   |   packages.py
|   |   |       |   |   |   |   sessions.py
|   |   |       |   |   |   |   status_codes.py
|   |   |       |   |   |   |   structures.py
|   |   |       |   |   |   |   utils.py
|   |   |       |   |   |   |   _internal_utils.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   __version__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           adapters.cpython-312.pyc
|   |   |       |   |   |           api.cpython-312.pyc
|   |   |       |   |   |           auth.cpython-312.pyc
|   |   |       |   |   |           certs.cpython-312.pyc
|   |   |       |   |   |           compat.cpython-312.pyc
|   |   |       |   |   |           cookies.cpython-312.pyc
|   |   |       |   |   |           exceptions.cpython-312.pyc
|   |   |       |   |   |           help.cpython-312.pyc
|   |   |       |   |   |           hooks.cpython-312.pyc
|   |   |       |   |   |           models.cpython-312.pyc
|   |   |       |   |   |           packages.cpython-312.pyc
|   |   |       |   |   |           sessions.cpython-312.pyc
|   |   |       |   |   |           status_codes.cpython-312.pyc
|   |   |       |   |   |           structures.cpython-312.pyc
|   |   |       |   |   |           utils.cpython-312.pyc
|   |   |       |   |   |           _internal_utils.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           __version__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---resolvelib
|   |   |       |   |   |   |   providers.py
|   |   |       |   |   |   |   py.typed
|   |   |       |   |   |   |   reporters.py
|   |   |       |   |   |   |   resolvers.py
|   |   |       |   |   |   |   structs.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---compat
|   |   |       |   |   |   |   |   collections_abc.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           collections_abc.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           providers.cpython-312.pyc
|   |   |       |   |   |           reporters.cpython-312.pyc
|   |   |       |   |   |           resolvers.cpython-312.pyc
|   |   |       |   |   |           structs.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---rich
|   |   |       |   |   |   |   abc.py
|   |   |       |   |   |   |   align.py
|   |   |       |   |   |   |   ansi.py
|   |   |       |   |   |   |   bar.py
|   |   |       |   |   |   |   box.py
|   |   |       |   |   |   |   cells.py
|   |   |       |   |   |   |   color.py
|   |   |       |   |   |   |   color_triplet.py
|   |   |       |   |   |   |   columns.py
|   |   |       |   |   |   |   console.py
|   |   |       |   |   |   |   constrain.py
|   |   |       |   |   |   |   containers.py
|   |   |       |   |   |   |   control.py
|   |   |       |   |   |   |   default_styles.py
|   |   |       |   |   |   |   diagnose.py
|   |   |       |   |   |   |   emoji.py
|   |   |       |   |   |   |   errors.py
|   |   |       |   |   |   |   filesize.py
|   |   |       |   |   |   |   file_proxy.py
|   |   |       |   |   |   |   highlighter.py
|   |   |       |   |   |   |   json.py
|   |   |       |   |   |   |   jupyter.py
|   |   |       |   |   |   |   layout.py
|   |   |       |   |   |   |   live.py
|   |   |       |   |   |   |   live_render.py
|   |   |       |   |   |   |   logging.py
|   |   |       |   |   |   |   markup.py
|   |   |       |   |   |   |   measure.py
|   |   |       |   |   |   |   padding.py
|   |   |       |   |   |   |   pager.py
|   |   |       |   |   |   |   palette.py
|   |   |       |   |   |   |   panel.py
|   |   |       |   |   |   |   pretty.py
|   |   |       |   |   |   |   progress.py
|   |   |       |   |   |   |   progress_bar.py
|   |   |       |   |   |   |   prompt.py
|   |   |       |   |   |   |   protocol.py
|   |   |       |   |   |   |   py.typed
|   |   |       |   |   |   |   region.py
|   |   |       |   |   |   |   repr.py
|   |   |       |   |   |   |   rule.py
|   |   |       |   |   |   |   scope.py
|   |   |       |   |   |   |   screen.py
|   |   |       |   |   |   |   segment.py
|   |   |       |   |   |   |   spinner.py
|   |   |       |   |   |   |   status.py
|   |   |       |   |   |   |   style.py
|   |   |       |   |   |   |   styled.py
|   |   |       |   |   |   |   syntax.py
|   |   |       |   |   |   |   table.py
|   |   |       |   |   |   |   terminal_theme.py
|   |   |       |   |   |   |   text.py
|   |   |       |   |   |   |   theme.py
|   |   |       |   |   |   |   themes.py
|   |   |       |   |   |   |   traceback.py
|   |   |       |   |   |   |   tree.py
|   |   |       |   |   |   |   _cell_widths.py
|   |   |       |   |   |   |   _emoji_codes.py
|   |   |       |   |   |   |   _emoji_replace.py
|   |   |       |   |   |   |   _export_format.py
|   |   |       |   |   |   |   _extension.py
|   |   |       |   |   |   |   _fileno.py
|   |   |       |   |   |   |   _inspect.py
|   |   |       |   |   |   |   _log_render.py
|   |   |       |   |   |   |   _loop.py
|   |   |       |   |   |   |   _null_file.py
|   |   |       |   |   |   |   _palettes.py
|   |   |       |   |   |   |   _pick.py
|   |   |       |   |   |   |   _ratio.py
|   |   |       |   |   |   |   _spinners.py
|   |   |       |   |   |   |   _stack.py
|   |   |       |   |   |   |   _timer.py
|   |   |       |   |   |   |   _win32_console.py
|   |   |       |   |   |   |   _windows.py
|   |   |       |   |   |   |   _windows_renderer.py
|   |   |       |   |   |   |   _wrap.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   __main__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           abc.cpython-312.pyc
|   |   |       |   |   |           align.cpython-312.pyc
|   |   |       |   |   |           ansi.cpython-312.pyc
|   |   |       |   |   |           bar.cpython-312.pyc
|   |   |       |   |   |           box.cpython-312.pyc
|   |   |       |   |   |           cells.cpython-312.pyc
|   |   |       |   |   |           color.cpython-312.pyc
|   |   |       |   |   |           color_triplet.cpython-312.pyc
|   |   |       |   |   |           columns.cpython-312.pyc
|   |   |       |   |   |           console.cpython-312.pyc
|   |   |       |   |   |           constrain.cpython-312.pyc
|   |   |       |   |   |           containers.cpython-312.pyc
|   |   |       |   |   |           control.cpython-312.pyc
|   |   |       |   |   |           default_styles.cpython-312.pyc
|   |   |       |   |   |           diagnose.cpython-312.pyc
|   |   |       |   |   |           emoji.cpython-312.pyc
|   |   |       |   |   |           errors.cpython-312.pyc
|   |   |       |   |   |           filesize.cpython-312.pyc
|   |   |       |   |   |           file_proxy.cpython-312.pyc
|   |   |       |   |   |           highlighter.cpython-312.pyc
|   |   |       |   |   |           json.cpython-312.pyc
|   |   |       |   |   |           jupyter.cpython-312.pyc
|   |   |       |   |   |           layout.cpython-312.pyc
|   |   |       |   |   |           live.cpython-312.pyc
|   |   |       |   |   |           live_render.cpython-312.pyc
|   |   |       |   |   |           logging.cpython-312.pyc
|   |   |       |   |   |           markup.cpython-312.pyc
|   |   |       |   |   |           measure.cpython-312.pyc
|   |   |       |   |   |           padding.cpython-312.pyc
|   |   |       |   |   |           pager.cpython-312.pyc
|   |   |       |   |   |           palette.cpython-312.pyc
|   |   |       |   |   |           panel.cpython-312.pyc
|   |   |       |   |   |           pretty.cpython-312.pyc
|   |   |       |   |   |           progress.cpython-312.pyc
|   |   |       |   |   |           progress_bar.cpython-312.pyc
|   |   |       |   |   |           prompt.cpython-312.pyc
|   |   |       |   |   |           protocol.cpython-312.pyc
|   |   |       |   |   |           region.cpython-312.pyc
|   |   |       |   |   |           repr.cpython-312.pyc
|   |   |       |   |   |           rule.cpython-312.pyc
|   |   |       |   |   |           scope.cpython-312.pyc
|   |   |       |   |   |           screen.cpython-312.pyc
|   |   |       |   |   |           segment.cpython-312.pyc
|   |   |       |   |   |           spinner.cpython-312.pyc
|   |   |       |   |   |           status.cpython-312.pyc
|   |   |       |   |   |           style.cpython-312.pyc
|   |   |       |   |   |           styled.cpython-312.pyc
|   |   |       |   |   |           syntax.cpython-312.pyc
|   |   |       |   |   |           table.cpython-312.pyc
|   |   |       |   |   |           terminal_theme.cpython-312.pyc
|   |   |       |   |   |           text.cpython-312.pyc
|   |   |       |   |   |           theme.cpython-312.pyc
|   |   |       |   |   |           themes.cpython-312.pyc
|   |   |       |   |   |           traceback.cpython-312.pyc
|   |   |       |   |   |           tree.cpython-312.pyc
|   |   |       |   |   |           _cell_widths.cpython-312.pyc
|   |   |       |   |   |           _emoji_codes.cpython-312.pyc
|   |   |       |   |   |           _emoji_replace.cpython-312.pyc
|   |   |       |   |   |           _export_format.cpython-312.pyc
|   |   |       |   |   |           _extension.cpython-312.pyc
|   |   |       |   |   |           _fileno.cpython-312.pyc
|   |   |       |   |   |           _inspect.cpython-312.pyc
|   |   |       |   |   |           _log_render.cpython-312.pyc
|   |   |       |   |   |           _loop.cpython-312.pyc
|   |   |       |   |   |           _null_file.cpython-312.pyc
|   |   |       |   |   |           _palettes.cpython-312.pyc
|   |   |       |   |   |           _pick.cpython-312.pyc
|   |   |       |   |   |           _ratio.cpython-312.pyc
|   |   |       |   |   |           _spinners.cpython-312.pyc
|   |   |       |   |   |           _stack.cpython-312.pyc
|   |   |       |   |   |           _timer.cpython-312.pyc
|   |   |       |   |   |           _win32_console.cpython-312.pyc
|   |   |       |   |   |           _windows.cpython-312.pyc
|   |   |       |   |   |           _windows_renderer.cpython-312.pyc
|   |   |       |   |   |           _wrap.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           __main__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---tomli
|   |   |       |   |   |   |   py.typed
|   |   |       |   |   |   |   _parser.py
|   |   |       |   |   |   |   _re.py
|   |   |       |   |   |   |   _types.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           _parser.cpython-312.pyc
|   |   |       |   |   |           _re.cpython-312.pyc
|   |   |       |   |   |           _types.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---truststore
|   |   |       |   |   |   |   py.typed
|   |   |       |   |   |   |   _api.py
|   |   |       |   |   |   |   _macos.py
|   |   |       |   |   |   |   _openssl.py
|   |   |       |   |   |   |   _ssl_constants.py
|   |   |       |   |   |   |   _windows.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           _api.cpython-312.pyc
|   |   |       |   |   |           _macos.cpython-312.pyc
|   |   |       |   |   |           _openssl.cpython-312.pyc
|   |   |       |   |   |           _ssl_constants.cpython-312.pyc
|   |   |       |   |   |           _windows.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---urllib3
|   |   |       |   |   |   |   connection.py
|   |   |       |   |   |   |   connectionpool.py
|   |   |       |   |   |   |   exceptions.py
|   |   |       |   |   |   |   fields.py
|   |   |       |   |   |   |   filepost.py
|   |   |       |   |   |   |   poolmanager.py
|   |   |       |   |   |   |   request.py
|   |   |       |   |   |   |   response.py
|   |   |       |   |   |   |   _collections.py
|   |   |       |   |   |   |   _version.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   +---contrib
|   |   |       |   |   |   |   |   appengine.py
|   |   |       |   |   |   |   |   ntlmpool.py
|   |   |       |   |   |   |   |   pyopenssl.py
|   |   |       |   |   |   |   |   securetransport.py
|   |   |       |   |   |   |   |   socks.py
|   |   |       |   |   |   |   |   _appengine_environ.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   +---_securetransport
|   |   |       |   |   |   |   |   |   bindings.py
|   |   |       |   |   |   |   |   |   low_level.py
|   |   |       |   |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   |   
|   |   |       |   |   |   |   |   \---__pycache__
|   |   |       |   |   |   |   |           bindings.cpython-312.pyc
|   |   |       |   |   |   |   |           low_level.cpython-312.pyc
|   |   |       |   |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |   |           
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           appengine.cpython-312.pyc
|   |   |       |   |   |   |           ntlmpool.cpython-312.pyc
|   |   |       |   |   |   |           pyopenssl.cpython-312.pyc
|   |   |       |   |   |   |           securetransport.cpython-312.pyc
|   |   |       |   |   |   |           socks.cpython-312.pyc
|   |   |       |   |   |   |           _appengine_environ.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   +---packages
|   |   |       |   |   |   |   |   six.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   +---backports
|   |   |       |   |   |   |   |   |   makefile.py
|   |   |       |   |   |   |   |   |   weakref_finalize.py
|   |   |       |   |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   |   
|   |   |       |   |   |   |   |   \---__pycache__
|   |   |       |   |   |   |   |           makefile.cpython-312.pyc
|   |   |       |   |   |   |   |           weakref_finalize.cpython-312.pyc
|   |   |       |   |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |   |           
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           six.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   +---util
|   |   |       |   |   |   |   |   connection.py
|   |   |       |   |   |   |   |   proxy.py
|   |   |       |   |   |   |   |   queue.py
|   |   |       |   |   |   |   |   request.py
|   |   |       |   |   |   |   |   response.py
|   |   |       |   |   |   |   |   retry.py
|   |   |       |   |   |   |   |   ssltransport.py
|   |   |       |   |   |   |   |   ssl_.py
|   |   |       |   |   |   |   |   ssl_match_hostname.py
|   |   |       |   |   |   |   |   timeout.py
|   |   |       |   |   |   |   |   url.py
|   |   |       |   |   |   |   |   wait.py
|   |   |       |   |   |   |   |   __init__.py
|   |   |       |   |   |   |   |   
|   |   |       |   |   |   |   \---__pycache__
|   |   |       |   |   |   |           connection.cpython-312.pyc
|   |   |       |   |   |   |           proxy.cpython-312.pyc
|   |   |       |   |   |   |           queue.cpython-312.pyc
|   |   |       |   |   |   |           request.cpython-312.pyc
|   |   |       |   |   |   |           response.cpython-312.pyc
|   |   |       |   |   |   |           retry.cpython-312.pyc
|   |   |       |   |   |   |           ssltransport.cpython-312.pyc
|   |   |       |   |   |   |           ssl_.cpython-312.pyc
|   |   |       |   |   |   |           ssl_match_hostname.cpython-312.pyc
|   |   |       |   |   |   |           timeout.cpython-312.pyc
|   |   |       |   |   |   |           url.cpython-312.pyc
|   |   |       |   |   |   |           wait.cpython-312.pyc
|   |   |       |   |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |   |           
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           connection.cpython-312.pyc
|   |   |       |   |   |           connectionpool.cpython-312.pyc
|   |   |       |   |   |           exceptions.cpython-312.pyc
|   |   |       |   |   |           fields.cpython-312.pyc
|   |   |       |   |   |           filepost.cpython-312.pyc
|   |   |       |   |   |           poolmanager.cpython-312.pyc
|   |   |       |   |   |           request.cpython-312.pyc
|   |   |       |   |   |           response.cpython-312.pyc
|   |   |       |   |   |           _collections.cpython-312.pyc
|   |   |       |   |   |           _version.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           typing_extensions.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           __main__.cpython-312.pyc
|   |   |       |           __pip-runner__.cpython-312.pyc
|   |   |       |           
|   |   |       +---pip-24.2.dist-info
|   |   |       |       AUTHORS.txt
|   |   |       |       entry_points.txt
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.txt
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       REQUESTED
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---prompt_toolkit
|   |   |       |   |   auto_suggest.py
|   |   |       |   |   buffer.py
|   |   |       |   |   cache.py
|   |   |       |   |   cursor_shapes.py
|   |   |       |   |   data_structures.py
|   |   |       |   |   document.py
|   |   |       |   |   enums.py
|   |   |       |   |   history.py
|   |   |       |   |   keys.py
|   |   |       |   |   log.py
|   |   |       |   |   mouse_events.py
|   |   |       |   |   patch_stdout.py
|   |   |       |   |   py.typed
|   |   |       |   |   renderer.py
|   |   |       |   |   search.py
|   |   |       |   |   selection.py
|   |   |       |   |   token.py
|   |   |       |   |   utils.py
|   |   |       |   |   validation.py
|   |   |       |   |   win32_types.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   +---application
|   |   |       |   |   |   application.py
|   |   |       |   |   |   current.py
|   |   |       |   |   |   dummy.py
|   |   |       |   |   |   run_in_terminal.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           application.cpython-312.pyc
|   |   |       |   |           current.cpython-312.pyc
|   |   |       |   |           dummy.cpython-312.pyc
|   |   |       |   |           run_in_terminal.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---clipboard
|   |   |       |   |   |   base.py
|   |   |       |   |   |   in_memory.py
|   |   |       |   |   |   pyperclip.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           in_memory.cpython-312.pyc
|   |   |       |   |           pyperclip.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---completion
|   |   |       |   |   |   base.py
|   |   |       |   |   |   deduplicate.py
|   |   |       |   |   |   filesystem.py
|   |   |       |   |   |   fuzzy_completer.py
|   |   |       |   |   |   nested.py
|   |   |       |   |   |   word_completer.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           deduplicate.cpython-312.pyc
|   |   |       |   |           filesystem.cpython-312.pyc
|   |   |       |   |           fuzzy_completer.cpython-312.pyc
|   |   |       |   |           nested.cpython-312.pyc
|   |   |       |   |           word_completer.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---contrib
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---completers
|   |   |       |   |   |   |   system.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           system.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---regular_languages
|   |   |       |   |   |   |   compiler.py
|   |   |       |   |   |   |   completion.py
|   |   |       |   |   |   |   lexer.py
|   |   |       |   |   |   |   regex_parser.py
|   |   |       |   |   |   |   validation.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           compiler.cpython-312.pyc
|   |   |       |   |   |           completion.cpython-312.pyc
|   |   |       |   |   |           lexer.cpython-312.pyc
|   |   |       |   |   |           regex_parser.cpython-312.pyc
|   |   |       |   |   |           validation.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---ssh
|   |   |       |   |   |   |   server.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           server.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---telnet
|   |   |       |   |   |   |   log.py
|   |   |       |   |   |   |   protocol.py
|   |   |       |   |   |   |   server.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           log.cpython-312.pyc
|   |   |       |   |   |           protocol.cpython-312.pyc
|   |   |       |   |   |           server.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---eventloop
|   |   |       |   |   |   async_generator.py
|   |   |       |   |   |   inputhook.py
|   |   |       |   |   |   utils.py
|   |   |       |   |   |   win32.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           async_generator.cpython-312.pyc
|   |   |       |   |           inputhook.cpython-312.pyc
|   |   |       |   |           utils.cpython-312.pyc
|   |   |       |   |           win32.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---filters
|   |   |       |   |   |   app.py
|   |   |       |   |   |   base.py
|   |   |       |   |   |   cli.py
|   |   |       |   |   |   utils.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           app.cpython-312.pyc
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           cli.cpython-312.pyc
|   |   |       |   |           utils.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---formatted_text
|   |   |       |   |   |   ansi.py
|   |   |       |   |   |   base.py
|   |   |       |   |   |   html.py
|   |   |       |   |   |   pygments.py
|   |   |       |   |   |   utils.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           ansi.cpython-312.pyc
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           html.cpython-312.pyc
|   |   |       |   |           pygments.cpython-312.pyc
|   |   |       |   |           utils.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---input
|   |   |       |   |   |   ansi_escape_sequences.py
|   |   |       |   |   |   base.py
|   |   |       |   |   |   defaults.py
|   |   |       |   |   |   posix_pipe.py
|   |   |       |   |   |   posix_utils.py
|   |   |       |   |   |   typeahead.py
|   |   |       |   |   |   vt100.py
|   |   |       |   |   |   vt100_parser.py
|   |   |       |   |   |   win32.py
|   |   |       |   |   |   win32_pipe.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           ansi_escape_sequences.cpython-312.pyc
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           defaults.cpython-312.pyc
|   |   |       |   |           posix_pipe.cpython-312.pyc
|   |   |       |   |           posix_utils.cpython-312.pyc
|   |   |       |   |           typeahead.cpython-312.pyc
|   |   |       |   |           vt100.cpython-312.pyc
|   |   |       |   |           vt100_parser.cpython-312.pyc
|   |   |       |   |           win32.cpython-312.pyc
|   |   |       |   |           win32_pipe.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---key_binding
|   |   |       |   |   |   defaults.py
|   |   |       |   |   |   digraphs.py
|   |   |       |   |   |   emacs_state.py
|   |   |       |   |   |   key_bindings.py
|   |   |       |   |   |   key_processor.py
|   |   |       |   |   |   vi_state.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---bindings
|   |   |       |   |   |   |   auto_suggest.py
|   |   |       |   |   |   |   basic.py
|   |   |       |   |   |   |   completion.py
|   |   |       |   |   |   |   cpr.py
|   |   |       |   |   |   |   emacs.py
|   |   |       |   |   |   |   focus.py
|   |   |       |   |   |   |   mouse.py
|   |   |       |   |   |   |   named_commands.py
|   |   |       |   |   |   |   open_in_editor.py
|   |   |       |   |   |   |   page_navigation.py
|   |   |       |   |   |   |   scroll.py
|   |   |       |   |   |   |   search.py
|   |   |       |   |   |   |   vi.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           auto_suggest.cpython-312.pyc
|   |   |       |   |   |           basic.cpython-312.pyc
|   |   |       |   |   |           completion.cpython-312.pyc
|   |   |       |   |   |           cpr.cpython-312.pyc
|   |   |       |   |   |           emacs.cpython-312.pyc
|   |   |       |   |   |           focus.cpython-312.pyc
|   |   |       |   |   |           mouse.cpython-312.pyc
|   |   |       |   |   |           named_commands.cpython-312.pyc
|   |   |       |   |   |           open_in_editor.cpython-312.pyc
|   |   |       |   |   |           page_navigation.cpython-312.pyc
|   |   |       |   |   |           scroll.cpython-312.pyc
|   |   |       |   |   |           search.cpython-312.pyc
|   |   |       |   |   |           vi.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           defaults.cpython-312.pyc
|   |   |       |   |           digraphs.cpython-312.pyc
|   |   |       |   |           emacs_state.cpython-312.pyc
|   |   |       |   |           key_bindings.cpython-312.pyc
|   |   |       |   |           key_processor.cpython-312.pyc
|   |   |       |   |           vi_state.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---layout
|   |   |       |   |   |   containers.py
|   |   |       |   |   |   controls.py
|   |   |       |   |   |   dimension.py
|   |   |       |   |   |   dummy.py
|   |   |       |   |   |   layout.py
|   |   |       |   |   |   margins.py
|   |   |       |   |   |   menus.py
|   |   |       |   |   |   mouse_handlers.py
|   |   |       |   |   |   processors.py
|   |   |       |   |   |   screen.py
|   |   |       |   |   |   scrollable_pane.py
|   |   |       |   |   |   utils.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           containers.cpython-312.pyc
|   |   |       |   |           controls.cpython-312.pyc
|   |   |       |   |           dimension.cpython-312.pyc
|   |   |       |   |           dummy.cpython-312.pyc
|   |   |       |   |           layout.cpython-312.pyc
|   |   |       |   |           margins.cpython-312.pyc
|   |   |       |   |           menus.cpython-312.pyc
|   |   |       |   |           mouse_handlers.cpython-312.pyc
|   |   |       |   |           processors.cpython-312.pyc
|   |   |       |   |           screen.cpython-312.pyc
|   |   |       |   |           scrollable_pane.cpython-312.pyc
|   |   |       |   |           utils.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---lexers
|   |   |       |   |   |   base.py
|   |   |       |   |   |   pygments.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           pygments.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---output
|   |   |       |   |   |   base.py
|   |   |       |   |   |   color_depth.py
|   |   |       |   |   |   conemu.py
|   |   |       |   |   |   defaults.py
|   |   |       |   |   |   flush_stdout.py
|   |   |       |   |   |   plain_text.py
|   |   |       |   |   |   vt100.py
|   |   |       |   |   |   win32.py
|   |   |       |   |   |   windows10.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           color_depth.cpython-312.pyc
|   |   |       |   |           conemu.cpython-312.pyc
|   |   |       |   |           defaults.cpython-312.pyc
|   |   |       |   |           flush_stdout.cpython-312.pyc
|   |   |       |   |           plain_text.cpython-312.pyc
|   |   |       |   |           vt100.cpython-312.pyc
|   |   |       |   |           win32.cpython-312.pyc
|   |   |       |   |           windows10.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---shortcuts
|   |   |       |   |   |   choice_input.py
|   |   |       |   |   |   dialogs.py
|   |   |       |   |   |   prompt.py
|   |   |       |   |   |   utils.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---progress_bar
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   formatters.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           formatters.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           choice_input.cpython-312.pyc
|   |   |       |   |           dialogs.cpython-312.pyc
|   |   |       |   |           prompt.cpython-312.pyc
|   |   |       |   |           utils.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---styles
|   |   |       |   |   |   base.py
|   |   |       |   |   |   defaults.py
|   |   |       |   |   |   named_colors.py
|   |   |       |   |   |   pygments.py
|   |   |       |   |   |   style.py
|   |   |       |   |   |   style_transformation.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           defaults.cpython-312.pyc
|   |   |       |   |           named_colors.cpython-312.pyc
|   |   |       |   |           pygments.cpython-312.pyc
|   |   |       |   |           style.cpython-312.pyc
|   |   |       |   |           style_transformation.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---widgets
|   |   |       |   |   |   base.py
|   |   |       |   |   |   dialogs.py
|   |   |       |   |   |   menus.py
|   |   |       |   |   |   toolbars.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           dialogs.cpython-312.pyc
|   |   |       |   |           menus.cpython-312.pyc
|   |   |       |   |           toolbars.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           auto_suggest.cpython-312.pyc
|   |   |       |           buffer.cpython-312.pyc
|   |   |       |           cache.cpython-312.pyc
|   |   |       |           cursor_shapes.cpython-312.pyc
|   |   |       |           data_structures.cpython-312.pyc
|   |   |       |           document.cpython-312.pyc
|   |   |       |           enums.cpython-312.pyc
|   |   |       |           history.cpython-312.pyc
|   |   |       |           keys.cpython-312.pyc
|   |   |       |           log.cpython-312.pyc
|   |   |       |           mouse_events.cpython-312.pyc
|   |   |       |           patch_stdout.cpython-312.pyc
|   |   |       |           renderer.cpython-312.pyc
|   |   |       |           search.cpython-312.pyc
|   |   |       |           selection.cpython-312.pyc
|   |   |       |           token.cpython-312.pyc
|   |   |       |           utils.cpython-312.pyc
|   |   |       |           validation.cpython-312.pyc
|   |   |       |           win32_types.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---prompt_toolkit-3.0.52.dist-info
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   top_level.txt
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           AUTHORS.rst
|   |   |       |           LICENSE
|   |   |       |           
|   |   |       +---pure_eval
|   |   |       |   |   core.py
|   |   |       |   |   my_getattr_static.py
|   |   |       |   |   py.typed
|   |   |       |   |   utils.py
|   |   |       |   |   version.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           core.cpython-312.pyc
|   |   |       |           my_getattr_static.cpython-312.pyc
|   |   |       |           utils.cpython-312.pyc
|   |   |       |           version.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---pure_eval-0.2.3.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.txt
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---pygments
|   |   |       |   |   cmdline.py
|   |   |       |   |   console.py
|   |   |       |   |   filter.py
|   |   |       |   |   formatter.py
|   |   |       |   |   lexer.py
|   |   |       |   |   modeline.py
|   |   |       |   |   plugin.py
|   |   |       |   |   regexopt.py
|   |   |       |   |   scanner.py
|   |   |       |   |   sphinxext.py
|   |   |       |   |   style.py
|   |   |       |   |   token.py
|   |   |       |   |   unistring.py
|   |   |       |   |   util.py
|   |   |       |   |   __init__.py
|   |   |       |   |   __main__.py
|   |   |       |   |   
|   |   |       |   +---filters
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---formatters
|   |   |       |   |   |   bbcode.py
|   |   |       |   |   |   groff.py
|   |   |       |   |   |   html.py
|   |   |       |   |   |   img.py
|   |   |       |   |   |   irc.py
|   |   |       |   |   |   latex.py
|   |   |       |   |   |   other.py
|   |   |       |   |   |   pangomarkup.py
|   |   |       |   |   |   rtf.py
|   |   |       |   |   |   svg.py
|   |   |       |   |   |   terminal.py
|   |   |       |   |   |   terminal256.py
|   |   |       |   |   |   _mapping.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           bbcode.cpython-312.pyc
|   |   |       |   |           groff.cpython-312.pyc
|   |   |       |   |           html.cpython-312.pyc
|   |   |       |   |           img.cpython-312.pyc
|   |   |       |   |           irc.cpython-312.pyc
|   |   |       |   |           latex.cpython-312.pyc
|   |   |       |   |           other.cpython-312.pyc
|   |   |       |   |           pangomarkup.cpython-312.pyc
|   |   |       |   |           rtf.cpython-312.pyc
|   |   |       |   |           svg.cpython-312.pyc
|   |   |       |   |           terminal.cpython-312.pyc
|   |   |       |   |           terminal256.cpython-312.pyc
|   |   |       |   |           _mapping.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---lexers
|   |   |       |   |   |   actionscript.py
|   |   |       |   |   |   ada.py
|   |   |       |   |   |   agile.py
|   |   |       |   |   |   algebra.py
|   |   |       |   |   |   ambient.py
|   |   |       |   |   |   amdgpu.py
|   |   |       |   |   |   ampl.py
|   |   |       |   |   |   apdlexer.py
|   |   |       |   |   |   apl.py
|   |   |       |   |   |   archetype.py
|   |   |       |   |   |   arrow.py
|   |   |       |   |   |   arturo.py
|   |   |       |   |   |   asc.py
|   |   |       |   |   |   asm.py
|   |   |       |   |   |   asn1.py
|   |   |       |   |   |   automation.py
|   |   |       |   |   |   bare.py
|   |   |       |   |   |   basic.py
|   |   |       |   |   |   bdd.py
|   |   |       |   |   |   berry.py
|   |   |       |   |   |   bibtex.py
|   |   |       |   |   |   blueprint.py
|   |   |       |   |   |   boa.py
|   |   |       |   |   |   bqn.py
|   |   |       |   |   |   business.py
|   |   |       |   |   |   capnproto.py
|   |   |       |   |   |   carbon.py
|   |   |       |   |   |   cddl.py
|   |   |       |   |   |   chapel.py
|   |   |       |   |   |   clean.py
|   |   |       |   |   |   codeql.py
|   |   |       |   |   |   comal.py
|   |   |       |   |   |   compiled.py
|   |   |       |   |   |   configs.py
|   |   |       |   |   |   console.py
|   |   |       |   |   |   cplint.py
|   |   |       |   |   |   crystal.py
|   |   |       |   |   |   csound.py
|   |   |       |   |   |   css.py
|   |   |       |   |   |   c_cpp.py
|   |   |       |   |   |   c_like.py
|   |   |       |   |   |   d.py
|   |   |       |   |   |   dalvik.py
|   |   |       |   |   |   data.py
|   |   |       |   |   |   dax.py
|   |   |       |   |   |   devicetree.py
|   |   |       |   |   |   diff.py
|   |   |       |   |   |   dns.py
|   |   |       |   |   |   dotnet.py
|   |   |       |   |   |   dsls.py
|   |   |       |   |   |   dylan.py
|   |   |       |   |   |   ecl.py
|   |   |       |   |   |   eiffel.py
|   |   |       |   |   |   elm.py
|   |   |       |   |   |   elpi.py
|   |   |       |   |   |   email.py
|   |   |       |   |   |   erlang.py
|   |   |       |   |   |   esoteric.py
|   |   |       |   |   |   ezhil.py
|   |   |       |   |   |   factor.py
|   |   |       |   |   |   fantom.py
|   |   |       |   |   |   felix.py
|   |   |       |   |   |   fift.py
|   |   |       |   |   |   floscript.py
|   |   |       |   |   |   forth.py
|   |   |       |   |   |   fortran.py
|   |   |       |   |   |   foxpro.py
|   |   |       |   |   |   freefem.py
|   |   |       |   |   |   func.py
|   |   |       |   |   |   functional.py
|   |   |       |   |   |   futhark.py
|   |   |       |   |   |   gcodelexer.py
|   |   |       |   |   |   gdscript.py
|   |   |       |   |   |   gleam.py
|   |   |       |   |   |   go.py
|   |   |       |   |   |   grammar_notation.py
|   |   |       |   |   |   graph.py
|   |   |       |   |   |   graphics.py
|   |   |       |   |   |   graphql.py
|   |   |       |   |   |   graphviz.py
|   |   |       |   |   |   gsql.py
|   |   |       |   |   |   hare.py
|   |   |       |   |   |   haskell.py
|   |   |       |   |   |   haxe.py
|   |   |       |   |   |   hdl.py
|   |   |       |   |   |   hexdump.py
|   |   |       |   |   |   html.py
|   |   |       |   |   |   idl.py
|   |   |       |   |   |   igor.py
|   |   |       |   |   |   inferno.py
|   |   |       |   |   |   installers.py
|   |   |       |   |   |   int_fiction.py
|   |   |       |   |   |   iolang.py
|   |   |       |   |   |   j.py
|   |   |       |   |   |   javascript.py
|   |   |       |   |   |   jmespath.py
|   |   |       |   |   |   jslt.py
|   |   |       |   |   |   json5.py
|   |   |       |   |   |   jsonnet.py
|   |   |       |   |   |   jsx.py
|   |   |       |   |   |   julia.py
|   |   |       |   |   |   jvm.py
|   |   |       |   |   |   kuin.py
|   |   |       |   |   |   kusto.py
|   |   |       |   |   |   ldap.py
|   |   |       |   |   |   lean.py
|   |   |       |   |   |   lilypond.py
|   |   |       |   |   |   lisp.py
|   |   |       |   |   |   macaulay2.py
|   |   |       |   |   |   make.py
|   |   |       |   |   |   maple.py
|   |   |       |   |   |   markup.py
|   |   |       |   |   |   math.py
|   |   |       |   |   |   matlab.py
|   |   |       |   |   |   maxima.py
|   |   |       |   |   |   meson.py
|   |   |       |   |   |   mime.py
|   |   |       |   |   |   minecraft.py
|   |   |       |   |   |   mips.py
|   |   |       |   |   |   ml.py
|   |   |       |   |   |   modeling.py
|   |   |       |   |   |   modula2.py
|   |   |       |   |   |   mojo.py
|   |   |       |   |   |   monte.py
|   |   |       |   |   |   mosel.py
|   |   |       |   |   |   ncl.py
|   |   |       |   |   |   nimrod.py
|   |   |       |   |   |   nit.py
|   |   |       |   |   |   nix.py
|   |   |       |   |   |   numbair.py
|   |   |       |   |   |   oberon.py
|   |   |       |   |   |   objective.py
|   |   |       |   |   |   ooc.py
|   |   |       |   |   |   openscad.py
|   |   |       |   |   |   other.py
|   |   |       |   |   |   parasail.py
|   |   |       |   |   |   parsers.py
|   |   |       |   |   |   pascal.py
|   |   |       |   |   |   pawn.py
|   |   |       |   |   |   pddl.py
|   |   |       |   |   |   perl.py
|   |   |       |   |   |   phix.py
|   |   |       |   |   |   php.py
|   |   |       |   |   |   pointless.py
|   |   |       |   |   |   pony.py
|   |   |       |   |   |   praat.py
|   |   |       |   |   |   procfile.py
|   |   |       |   |   |   prolog.py
|   |   |       |   |   |   promql.py
|   |   |       |   |   |   prql.py
|   |   |       |   |   |   ptx.py
|   |   |       |   |   |   python.py
|   |   |       |   |   |   q.py
|   |   |       |   |   |   qlik.py
|   |   |       |   |   |   qvt.py
|   |   |       |   |   |   r.py
|   |   |       |   |   |   rdf.py
|   |   |       |   |   |   rebol.py
|   |   |       |   |   |   rego.py
|   |   |       |   |   |   resource.py
|   |   |       |   |   |   ride.py
|   |   |       |   |   |   rita.py
|   |   |       |   |   |   rnc.py
|   |   |       |   |   |   roboconf.py
|   |   |       |   |   |   robotframework.py
|   |   |       |   |   |   ruby.py
|   |   |       |   |   |   rust.py
|   |   |       |   |   |   sas.py
|   |   |       |   |   |   savi.py
|   |   |       |   |   |   scdoc.py
|   |   |       |   |   |   scripting.py
|   |   |       |   |   |   sgf.py
|   |   |       |   |   |   shell.py
|   |   |       |   |   |   sieve.py
|   |   |       |   |   |   slash.py
|   |   |       |   |   |   smalltalk.py
|   |   |       |   |   |   smithy.py
|   |   |       |   |   |   smv.py
|   |   |       |   |   |   snobol.py
|   |   |       |   |   |   solidity.py
|   |   |       |   |   |   soong.py
|   |   |       |   |   |   sophia.py
|   |   |       |   |   |   special.py
|   |   |       |   |   |   spice.py
|   |   |       |   |   |   sql.py
|   |   |       |   |   |   srcinfo.py
|   |   |       |   |   |   stata.py
|   |   |       |   |   |   supercollider.py
|   |   |       |   |   |   tablegen.py
|   |   |       |   |   |   tact.py
|   |   |       |   |   |   tal.py
|   |   |       |   |   |   tcl.py
|   |   |       |   |   |   teal.py
|   |   |       |   |   |   templates.py
|   |   |       |   |   |   teraterm.py
|   |   |       |   |   |   testing.py
|   |   |       |   |   |   text.py
|   |   |       |   |   |   textedit.py
|   |   |       |   |   |   textfmts.py
|   |   |       |   |   |   theorem.py
|   |   |       |   |   |   thingsdb.py
|   |   |       |   |   |   tlb.py
|   |   |       |   |   |   tls.py
|   |   |       |   |   |   tnt.py
|   |   |       |   |   |   trafficscript.py
|   |   |       |   |   |   typoscript.py
|   |   |       |   |   |   typst.py
|   |   |       |   |   |   ul4.py
|   |   |       |   |   |   unicon.py
|   |   |       |   |   |   urbi.py
|   |   |       |   |   |   usd.py
|   |   |       |   |   |   varnish.py
|   |   |       |   |   |   verification.py
|   |   |       |   |   |   verifpal.py
|   |   |       |   |   |   vip.py
|   |   |       |   |   |   vyper.py
|   |   |       |   |   |   web.py
|   |   |       |   |   |   webassembly.py
|   |   |       |   |   |   webidl.py
|   |   |       |   |   |   webmisc.py
|   |   |       |   |   |   wgsl.py
|   |   |       |   |   |   whiley.py
|   |   |       |   |   |   wowtoc.py
|   |   |       |   |   |   wren.py
|   |   |       |   |   |   x10.py
|   |   |       |   |   |   xorg.py
|   |   |       |   |   |   yang.py
|   |   |       |   |   |   yara.py
|   |   |       |   |   |   zig.py
|   |   |       |   |   |   _ada_builtins.py
|   |   |       |   |   |   _asy_builtins.py
|   |   |       |   |   |   _cl_builtins.py
|   |   |       |   |   |   _cocoa_builtins.py
|   |   |       |   |   |   _csound_builtins.py
|   |   |       |   |   |   _css_builtins.py
|   |   |       |   |   |   _googlesql_builtins.py
|   |   |       |   |   |   _julia_builtins.py
|   |   |       |   |   |   _lasso_builtins.py
|   |   |       |   |   |   _lilypond_builtins.py
|   |   |       |   |   |   _luau_builtins.py
|   |   |       |   |   |   _lua_builtins.py
|   |   |       |   |   |   _mapping.py
|   |   |       |   |   |   _mql_builtins.py
|   |   |       |   |   |   _mysql_builtins.py
|   |   |       |   |   |   _openedge_builtins.py
|   |   |       |   |   |   _php_builtins.py
|   |   |       |   |   |   _postgres_builtins.py
|   |   |       |   |   |   _qlik_builtins.py
|   |   |       |   |   |   _scheme_builtins.py
|   |   |       |   |   |   _scilab_builtins.py
|   |   |       |   |   |   _sourcemod_builtins.py
|   |   |       |   |   |   _sql_builtins.py
|   |   |       |   |   |   _stan_builtins.py
|   |   |       |   |   |   _stata_builtins.py
|   |   |       |   |   |   _tsql_builtins.py
|   |   |       |   |   |   _usd_builtins.py
|   |   |       |   |   |   _vbscript_builtins.py
|   |   |       |   |   |   _vim_builtins.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           actionscript.cpython-312.pyc
|   |   |       |   |           ada.cpython-312.pyc
|   |   |       |   |           agile.cpython-312.pyc
|   |   |       |   |           algebra.cpython-312.pyc
|   |   |       |   |           ambient.cpython-312.pyc
|   |   |       |   |           amdgpu.cpython-312.pyc
|   |   |       |   |           ampl.cpython-312.pyc
|   |   |       |   |           apdlexer.cpython-312.pyc
|   |   |       |   |           apl.cpython-312.pyc
|   |   |       |   |           archetype.cpython-312.pyc
|   |   |       |   |           arrow.cpython-312.pyc
|   |   |       |   |           arturo.cpython-312.pyc
|   |   |       |   |           asc.cpython-312.pyc
|   |   |       |   |           asm.cpython-312.pyc
|   |   |       |   |           asn1.cpython-312.pyc
|   |   |       |   |           automation.cpython-312.pyc
|   |   |       |   |           bare.cpython-312.pyc
|   |   |       |   |           basic.cpython-312.pyc
|   |   |       |   |           bdd.cpython-312.pyc
|   |   |       |   |           berry.cpython-312.pyc
|   |   |       |   |           bibtex.cpython-312.pyc
|   |   |       |   |           blueprint.cpython-312.pyc
|   |   |       |   |           boa.cpython-312.pyc
|   |   |       |   |           bqn.cpython-312.pyc
|   |   |       |   |           business.cpython-312.pyc
|   |   |       |   |           capnproto.cpython-312.pyc
|   |   |       |   |           carbon.cpython-312.pyc
|   |   |       |   |           cddl.cpython-312.pyc
|   |   |       |   |           chapel.cpython-312.pyc
|   |   |       |   |           clean.cpython-312.pyc
|   |   |       |   |           codeql.cpython-312.pyc
|   |   |       |   |           comal.cpython-312.pyc
|   |   |       |   |           compiled.cpython-312.pyc
|   |   |       |   |           configs.cpython-312.pyc
|   |   |       |   |           console.cpython-312.pyc
|   |   |       |   |           cplint.cpython-312.pyc
|   |   |       |   |           crystal.cpython-312.pyc
|   |   |       |   |           csound.cpython-312.pyc
|   |   |       |   |           css.cpython-312.pyc
|   |   |       |   |           c_cpp.cpython-312.pyc
|   |   |       |   |           c_like.cpython-312.pyc
|   |   |       |   |           d.cpython-312.pyc
|   |   |       |   |           dalvik.cpython-312.pyc
|   |   |       |   |           data.cpython-312.pyc
|   |   |       |   |           dax.cpython-312.pyc
|   |   |       |   |           devicetree.cpython-312.pyc
|   |   |       |   |           diff.cpython-312.pyc
|   |   |       |   |           dns.cpython-312.pyc
|   |   |       |   |           dotnet.cpython-312.pyc
|   |   |       |   |           dsls.cpython-312.pyc
|   |   |       |   |           dylan.cpython-312.pyc
|   |   |       |   |           ecl.cpython-312.pyc
|   |   |       |   |           eiffel.cpython-312.pyc
|   |   |       |   |           elm.cpython-312.pyc
|   |   |       |   |           elpi.cpython-312.pyc
|   |   |       |   |           email.cpython-312.pyc
|   |   |       |   |           erlang.cpython-312.pyc
|   |   |       |   |           esoteric.cpython-312.pyc
|   |   |       |   |           ezhil.cpython-312.pyc
|   |   |       |   |           factor.cpython-312.pyc
|   |   |       |   |           fantom.cpython-312.pyc
|   |   |       |   |           felix.cpython-312.pyc
|   |   |       |   |           fift.cpython-312.pyc
|   |   |       |   |           floscript.cpython-312.pyc
|   |   |       |   |           forth.cpython-312.pyc
|   |   |       |   |           fortran.cpython-312.pyc
|   |   |       |   |           foxpro.cpython-312.pyc
|   |   |       |   |           freefem.cpython-312.pyc
|   |   |       |   |           func.cpython-312.pyc
|   |   |       |   |           functional.cpython-312.pyc
|   |   |       |   |           futhark.cpython-312.pyc
|   |   |       |   |           gcodelexer.cpython-312.pyc
|   |   |       |   |           gdscript.cpython-312.pyc
|   |   |       |   |           gleam.cpython-312.pyc
|   |   |       |   |           go.cpython-312.pyc
|   |   |       |   |           grammar_notation.cpython-312.pyc
|   |   |       |   |           graph.cpython-312.pyc
|   |   |       |   |           graphics.cpython-312.pyc
|   |   |       |   |           graphql.cpython-312.pyc
|   |   |       |   |           graphviz.cpython-312.pyc
|   |   |       |   |           gsql.cpython-312.pyc
|   |   |       |   |           hare.cpython-312.pyc
|   |   |       |   |           haskell.cpython-312.pyc
|   |   |       |   |           haxe.cpython-312.pyc
|   |   |       |   |           hdl.cpython-312.pyc
|   |   |       |   |           hexdump.cpython-312.pyc
|   |   |       |   |           html.cpython-312.pyc
|   |   |       |   |           idl.cpython-312.pyc
|   |   |       |   |           igor.cpython-312.pyc
|   |   |       |   |           inferno.cpython-312.pyc
|   |   |       |   |           installers.cpython-312.pyc
|   |   |       |   |           int_fiction.cpython-312.pyc
|   |   |       |   |           iolang.cpython-312.pyc
|   |   |       |   |           j.cpython-312.pyc
|   |   |       |   |           javascript.cpython-312.pyc
|   |   |       |   |           jmespath.cpython-312.pyc
|   |   |       |   |           jslt.cpython-312.pyc
|   |   |       |   |           json5.cpython-312.pyc
|   |   |       |   |           jsonnet.cpython-312.pyc
|   |   |       |   |           jsx.cpython-312.pyc
|   |   |       |   |           julia.cpython-312.pyc
|   |   |       |   |           jvm.cpython-312.pyc
|   |   |       |   |           kuin.cpython-312.pyc
|   |   |       |   |           kusto.cpython-312.pyc
|   |   |       |   |           ldap.cpython-312.pyc
|   |   |       |   |           lean.cpython-312.pyc
|   |   |       |   |           lilypond.cpython-312.pyc
|   |   |       |   |           lisp.cpython-312.pyc
|   |   |       |   |           macaulay2.cpython-312.pyc
|   |   |       |   |           make.cpython-312.pyc
|   |   |       |   |           maple.cpython-312.pyc
|   |   |       |   |           markup.cpython-312.pyc
|   |   |       |   |           math.cpython-312.pyc
|   |   |       |   |           matlab.cpython-312.pyc
|   |   |       |   |           maxima.cpython-312.pyc
|   |   |       |   |           meson.cpython-312.pyc
|   |   |       |   |           mime.cpython-312.pyc
|   |   |       |   |           minecraft.cpython-312.pyc
|   |   |       |   |           mips.cpython-312.pyc
|   |   |       |   |           ml.cpython-312.pyc
|   |   |       |   |           modeling.cpython-312.pyc
|   |   |       |   |           modula2.cpython-312.pyc
|   |   |       |   |           mojo.cpython-312.pyc
|   |   |       |   |           monte.cpython-312.pyc
|   |   |       |   |           mosel.cpython-312.pyc
|   |   |       |   |           ncl.cpython-312.pyc
|   |   |       |   |           nimrod.cpython-312.pyc
|   |   |       |   |           nit.cpython-312.pyc
|   |   |       |   |           nix.cpython-312.pyc
|   |   |       |   |           numbair.cpython-312.pyc
|   |   |       |   |           oberon.cpython-312.pyc
|   |   |       |   |           objective.cpython-312.pyc
|   |   |       |   |           ooc.cpython-312.pyc
|   |   |       |   |           openscad.cpython-312.pyc
|   |   |       |   |           other.cpython-312.pyc
|   |   |       |   |           parasail.cpython-312.pyc
|   |   |       |   |           parsers.cpython-312.pyc
|   |   |       |   |           pascal.cpython-312.pyc
|   |   |       |   |           pawn.cpython-312.pyc
|   |   |       |   |           pddl.cpython-312.pyc
|   |   |       |   |           perl.cpython-312.pyc
|   |   |       |   |           phix.cpython-312.pyc
|   |   |       |   |           php.cpython-312.pyc
|   |   |       |   |           pointless.cpython-312.pyc
|   |   |       |   |           pony.cpython-312.pyc
|   |   |       |   |           praat.cpython-312.pyc
|   |   |       |   |           procfile.cpython-312.pyc
|   |   |       |   |           prolog.cpython-312.pyc
|   |   |       |   |           promql.cpython-312.pyc
|   |   |       |   |           prql.cpython-312.pyc
|   |   |       |   |           ptx.cpython-312.pyc
|   |   |       |   |           python.cpython-312.pyc
|   |   |       |   |           q.cpython-312.pyc
|   |   |       |   |           qlik.cpython-312.pyc
|   |   |       |   |           qvt.cpython-312.pyc
|   |   |       |   |           r.cpython-312.pyc
|   |   |       |   |           rdf.cpython-312.pyc
|   |   |       |   |           rebol.cpython-312.pyc
|   |   |       |   |           rego.cpython-312.pyc
|   |   |       |   |           resource.cpython-312.pyc
|   |   |       |   |           ride.cpython-312.pyc
|   |   |       |   |           rita.cpython-312.pyc
|   |   |       |   |           rnc.cpython-312.pyc
|   |   |       |   |           roboconf.cpython-312.pyc
|   |   |       |   |           robotframework.cpython-312.pyc
|   |   |       |   |           ruby.cpython-312.pyc
|   |   |       |   |           rust.cpython-312.pyc
|   |   |       |   |           sas.cpython-312.pyc
|   |   |       |   |           savi.cpython-312.pyc
|   |   |       |   |           scdoc.cpython-312.pyc
|   |   |       |   |           scripting.cpython-312.pyc
|   |   |       |   |           sgf.cpython-312.pyc
|   |   |       |   |           shell.cpython-312.pyc
|   |   |       |   |           sieve.cpython-312.pyc
|   |   |       |   |           slash.cpython-312.pyc
|   |   |       |   |           smalltalk.cpython-312.pyc
|   |   |       |   |           smithy.cpython-312.pyc
|   |   |       |   |           smv.cpython-312.pyc
|   |   |       |   |           snobol.cpython-312.pyc
|   |   |       |   |           solidity.cpython-312.pyc
|   |   |       |   |           soong.cpython-312.pyc
|   |   |       |   |           sophia.cpython-312.pyc
|   |   |       |   |           special.cpython-312.pyc
|   |   |       |   |           spice.cpython-312.pyc
|   |   |       |   |           sql.cpython-312.pyc
|   |   |       |   |           srcinfo.cpython-312.pyc
|   |   |       |   |           stata.cpython-312.pyc
|   |   |       |   |           supercollider.cpython-312.pyc
|   |   |       |   |           tablegen.cpython-312.pyc
|   |   |       |   |           tact.cpython-312.pyc
|   |   |       |   |           tal.cpython-312.pyc
|   |   |       |   |           tcl.cpython-312.pyc
|   |   |       |   |           teal.cpython-312.pyc
|   |   |       |   |           templates.cpython-312.pyc
|   |   |       |   |           teraterm.cpython-312.pyc
|   |   |       |   |           testing.cpython-312.pyc
|   |   |       |   |           text.cpython-312.pyc
|   |   |       |   |           textedit.cpython-312.pyc
|   |   |       |   |           textfmts.cpython-312.pyc
|   |   |       |   |           theorem.cpython-312.pyc
|   |   |       |   |           thingsdb.cpython-312.pyc
|   |   |       |   |           tlb.cpython-312.pyc
|   |   |       |   |           tls.cpython-312.pyc
|   |   |       |   |           tnt.cpython-312.pyc
|   |   |       |   |           trafficscript.cpython-312.pyc
|   |   |       |   |           typoscript.cpython-312.pyc
|   |   |       |   |           typst.cpython-312.pyc
|   |   |       |   |           ul4.cpython-312.pyc
|   |   |       |   |           unicon.cpython-312.pyc
|   |   |       |   |           urbi.cpython-312.pyc
|   |   |       |   |           usd.cpython-312.pyc
|   |   |       |   |           varnish.cpython-312.pyc
|   |   |       |   |           verification.cpython-312.pyc
|   |   |       |   |           verifpal.cpython-312.pyc
|   |   |       |   |           vip.cpython-312.pyc
|   |   |       |   |           vyper.cpython-312.pyc
|   |   |       |   |           web.cpython-312.pyc
|   |   |       |   |           webassembly.cpython-312.pyc
|   |   |       |   |           webidl.cpython-312.pyc
|   |   |       |   |           webmisc.cpython-312.pyc
|   |   |       |   |           wgsl.cpython-312.pyc
|   |   |       |   |           whiley.cpython-312.pyc
|   |   |       |   |           wowtoc.cpython-312.pyc
|   |   |       |   |           wren.cpython-312.pyc
|   |   |       |   |           x10.cpython-312.pyc
|   |   |       |   |           xorg.cpython-312.pyc
|   |   |       |   |           yang.cpython-312.pyc
|   |   |       |   |           yara.cpython-312.pyc
|   |   |       |   |           zig.cpython-312.pyc
|   |   |       |   |           _ada_builtins.cpython-312.pyc
|   |   |       |   |           _asy_builtins.cpython-312.pyc
|   |   |       |   |           _cl_builtins.cpython-312.pyc
|   |   |       |   |           _cocoa_builtins.cpython-312.pyc
|   |   |       |   |           _csound_builtins.cpython-312.pyc
|   |   |       |   |           _css_builtins.cpython-312.pyc
|   |   |       |   |           _googlesql_builtins.cpython-312.pyc
|   |   |       |   |           _julia_builtins.cpython-312.pyc
|   |   |       |   |           _lasso_builtins.cpython-312.pyc
|   |   |       |   |           _lilypond_builtins.cpython-312.pyc
|   |   |       |   |           _luau_builtins.cpython-312.pyc
|   |   |       |   |           _lua_builtins.cpython-312.pyc
|   |   |       |   |           _mapping.cpython-312.pyc
|   |   |       |   |           _mql_builtins.cpython-312.pyc
|   |   |       |   |           _mysql_builtins.cpython-312.pyc
|   |   |       |   |           _openedge_builtins.cpython-312.pyc
|   |   |       |   |           _php_builtins.cpython-312.pyc
|   |   |       |   |           _postgres_builtins.cpython-312.pyc
|   |   |       |   |           _qlik_builtins.cpython-312.pyc
|   |   |       |   |           _scheme_builtins.cpython-312.pyc
|   |   |       |   |           _scilab_builtins.cpython-312.pyc
|   |   |       |   |           _sourcemod_builtins.cpython-312.pyc
|   |   |       |   |           _sql_builtins.cpython-312.pyc
|   |   |       |   |           _stan_builtins.cpython-312.pyc
|   |   |       |   |           _stata_builtins.cpython-312.pyc
|   |   |       |   |           _tsql_builtins.cpython-312.pyc
|   |   |       |   |           _usd_builtins.cpython-312.pyc
|   |   |       |   |           _vbscript_builtins.cpython-312.pyc
|   |   |       |   |           _vim_builtins.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---styles
|   |   |       |   |   |   abap.py
|   |   |       |   |   |   algol.py
|   |   |       |   |   |   algol_nu.py
|   |   |       |   |   |   arduino.py
|   |   |       |   |   |   autumn.py
|   |   |       |   |   |   borland.py
|   |   |       |   |   |   bw.py
|   |   |       |   |   |   coffee.py
|   |   |       |   |   |   colorful.py
|   |   |       |   |   |   default.py
|   |   |       |   |   |   dracula.py
|   |   |       |   |   |   emacs.py
|   |   |       |   |   |   friendly.py
|   |   |       |   |   |   friendly_grayscale.py
|   |   |       |   |   |   fruity.py
|   |   |       |   |   |   gh_dark.py
|   |   |       |   |   |   gruvbox.py
|   |   |       |   |   |   igor.py
|   |   |       |   |   |   inkpot.py
|   |   |       |   |   |   lightbulb.py
|   |   |       |   |   |   lilypond.py
|   |   |       |   |   |   lovelace.py
|   |   |       |   |   |   manni.py
|   |   |       |   |   |   material.py
|   |   |       |   |   |   monokai.py
|   |   |       |   |   |   murphy.py
|   |   |       |   |   |   native.py
|   |   |       |   |   |   nord.py
|   |   |       |   |   |   onedark.py
|   |   |       |   |   |   paraiso_dark.py
|   |   |       |   |   |   paraiso_light.py
|   |   |       |   |   |   pastie.py
|   |   |       |   |   |   perldoc.py
|   |   |       |   |   |   rainbow_dash.py
|   |   |       |   |   |   rrt.py
|   |   |       |   |   |   sas.py
|   |   |       |   |   |   solarized.py
|   |   |       |   |   |   staroffice.py
|   |   |       |   |   |   stata_dark.py
|   |   |       |   |   |   stata_light.py
|   |   |       |   |   |   tango.py
|   |   |       |   |   |   trac.py
|   |   |       |   |   |   vim.py
|   |   |       |   |   |   vs.py
|   |   |       |   |   |   xcode.py
|   |   |       |   |   |   zenburn.py
|   |   |       |   |   |   _mapping.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           abap.cpython-312.pyc
|   |   |       |   |           algol.cpython-312.pyc
|   |   |       |   |           algol_nu.cpython-312.pyc
|   |   |       |   |           arduino.cpython-312.pyc
|   |   |       |   |           autumn.cpython-312.pyc
|   |   |       |   |           borland.cpython-312.pyc
|   |   |       |   |           bw.cpython-312.pyc
|   |   |       |   |           coffee.cpython-312.pyc
|   |   |       |   |           colorful.cpython-312.pyc
|   |   |       |   |           default.cpython-312.pyc
|   |   |       |   |           dracula.cpython-312.pyc
|   |   |       |   |           emacs.cpython-312.pyc
|   |   |       |   |           friendly.cpython-312.pyc
|   |   |       |   |           friendly_grayscale.cpython-312.pyc
|   |   |       |   |           fruity.cpython-312.pyc
|   |   |       |   |           gh_dark.cpython-312.pyc
|   |   |       |   |           gruvbox.cpython-312.pyc
|   |   |       |   |           igor.cpython-312.pyc
|   |   |       |   |           inkpot.cpython-312.pyc
|   |   |       |   |           lightbulb.cpython-312.pyc
|   |   |       |   |           lilypond.cpython-312.pyc
|   |   |       |   |           lovelace.cpython-312.pyc
|   |   |       |   |           manni.cpython-312.pyc
|   |   |       |   |           material.cpython-312.pyc
|   |   |       |   |           monokai.cpython-312.pyc
|   |   |       |   |           murphy.cpython-312.pyc
|   |   |       |   |           native.cpython-312.pyc
|   |   |       |   |           nord.cpython-312.pyc
|   |   |       |   |           onedark.cpython-312.pyc
|   |   |       |   |           paraiso_dark.cpython-312.pyc
|   |   |       |   |           paraiso_light.cpython-312.pyc
|   |   |       |   |           pastie.cpython-312.pyc
|   |   |       |   |           perldoc.cpython-312.pyc
|   |   |       |   |           rainbow_dash.cpython-312.pyc
|   |   |       |   |           rrt.cpython-312.pyc
|   |   |       |   |           sas.cpython-312.pyc
|   |   |       |   |           solarized.cpython-312.pyc
|   |   |       |   |           staroffice.cpython-312.pyc
|   |   |       |   |           stata_dark.cpython-312.pyc
|   |   |       |   |           stata_light.cpython-312.pyc
|   |   |       |   |           tango.cpython-312.pyc
|   |   |       |   |           trac.cpython-312.pyc
|   |   |       |   |           vim.cpython-312.pyc
|   |   |       |   |           vs.cpython-312.pyc
|   |   |       |   |           xcode.cpython-312.pyc
|   |   |       |   |           zenburn.cpython-312.pyc
|   |   |       |   |           _mapping.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           cmdline.cpython-312.pyc
|   |   |       |           console.cpython-312.pyc
|   |   |       |           filter.cpython-312.pyc
|   |   |       |           formatter.cpython-312.pyc
|   |   |       |           lexer.cpython-312.pyc
|   |   |       |           modeline.cpython-312.pyc
|   |   |       |           plugin.cpython-312.pyc
|   |   |       |           regexopt.cpython-312.pyc
|   |   |       |           scanner.cpython-312.pyc
|   |   |       |           sphinxext.cpython-312.pyc
|   |   |       |           style.cpython-312.pyc
|   |   |       |           token.cpython-312.pyc
|   |   |       |           unistring.cpython-312.pyc
|   |   |       |           util.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           __main__.cpython-312.pyc
|   |   |       |           
|   |   |       +---pygments-2.19.2.dist-info
|   |   |       |   |   entry_points.txt
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           AUTHORS
|   |   |       |           LICENSE
|   |   |       |           
|   |   |       +---pyvis
|   |   |       |   |   edge.py
|   |   |       |   |   network.py
|   |   |       |   |   node.py
|   |   |       |   |   options.py
|   |   |       |   |   physics.py
|   |   |       |   |   utils.py
|   |   |       |   |   _version.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   +---lib
|   |   |       |   |   +---bindings
|   |   |       |   |   |       utils.js
|   |   |       |   |   |       
|   |   |       |   |   +---tom-select
|   |   |       |   |   |       tom-select.complete.min.js
|   |   |       |   |   |       tom-select.css
|   |   |       |   |   |       
|   |   |       |   |   +---vis-9.0.4
|   |   |       |   |   |       vis-network.css
|   |   |       |   |   |       vis-network.min.js
|   |   |       |   |   |       
|   |   |       |   |   \---vis-9.1.2
|   |   |       |   |           vis-network.css
|   |   |       |   |           vis-network.min.js
|   |   |       |   |           
|   |   |       |   +---templates
|   |   |       |   |   |   animation_template.html
|   |   |       |   |   |   template.html
|   |   |       |   |   |   
|   |   |       |   |   \---lib
|   |   |       |   |       +---bindings
|   |   |       |   |       |       utils.js
|   |   |       |   |       |       
|   |   |       |   |       +---tom-select
|   |   |       |   |       |       tom-select.complete.min.js
|   |   |       |   |       |       tom-select.css
|   |   |       |   |       |       
|   |   |       |   |       +---vis-9.0.4
|   |   |       |   |       |       vis-network.css
|   |   |       |   |       |       vis-network.min.js
|   |   |       |   |       |       
|   |   |       |   |       \---vis-9.1.2
|   |   |       |   |               vis-network.css
|   |   |       |   |               vis-network.min.js
|   |   |       |   |               
|   |   |       |   +---tests
|   |   |       |   |   |   test_graph.py
|   |   |       |   |   |   test_html.py
|   |   |       |   |   |   test_me.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           test_graph.cpython-312.pyc
|   |   |       |   |           test_html.cpython-312.pyc
|   |   |       |   |           test_me.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           edge.cpython-312.pyc
|   |   |       |           network.cpython-312.pyc
|   |   |       |           node.cpython-312.pyc
|   |   |       |           options.cpython-312.pyc
|   |   |       |           physics.cpython-312.pyc
|   |   |       |           utils.cpython-312.pyc
|   |   |       |           _version.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---pyvis-0.3.2.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE_BSD.txt
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       REQUESTED
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---sqlalchemy
|   |   |       |   |   events.py
|   |   |       |   |   exc.py
|   |   |       |   |   inspection.py
|   |   |       |   |   log.py
|   |   |       |   |   py.typed
|   |   |       |   |   schema.py
|   |   |       |   |   types.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   +---connectors
|   |   |       |   |   |   aioodbc.py
|   |   |       |   |   |   asyncio.py
|   |   |       |   |   |   pyodbc.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           aioodbc.cpython-312.pyc
|   |   |       |   |           asyncio.cpython-312.pyc
|   |   |       |   |           pyodbc.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---cyextension
|   |   |       |   |   |   collections.cp312-win_amd64.pyd
|   |   |       |   |   |   collections.pyx
|   |   |       |   |   |   immutabledict.cp312-win_amd64.pyd
|   |   |       |   |   |   immutabledict.pxd
|   |   |       |   |   |   immutabledict.pyx
|   |   |       |   |   |   processors.cp312-win_amd64.pyd
|   |   |       |   |   |   processors.pyx
|   |   |       |   |   |   resultproxy.cp312-win_amd64.pyd
|   |   |       |   |   |   resultproxy.pyx
|   |   |       |   |   |   util.cp312-win_amd64.pyd
|   |   |       |   |   |   util.pyx
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---dialects
|   |   |       |   |   |   type_migration_guidelines.txt
|   |   |       |   |   |   _typing.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---mssql
|   |   |       |   |   |   |   aioodbc.py
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   information_schema.py
|   |   |       |   |   |   |   json.py
|   |   |       |   |   |   |   provision.py
|   |   |       |   |   |   |   pymssql.py
|   |   |       |   |   |   |   pyodbc.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           aioodbc.cpython-312.pyc
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           information_schema.cpython-312.pyc
|   |   |       |   |   |           json.cpython-312.pyc
|   |   |       |   |   |           provision.cpython-312.pyc
|   |   |       |   |   |           pymssql.cpython-312.pyc
|   |   |       |   |   |           pyodbc.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---mysql
|   |   |       |   |   |   |   aiomysql.py
|   |   |       |   |   |   |   asyncmy.py
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   cymysql.py
|   |   |       |   |   |   |   dml.py
|   |   |       |   |   |   |   enumerated.py
|   |   |       |   |   |   |   expression.py
|   |   |       |   |   |   |   json.py
|   |   |       |   |   |   |   mariadb.py
|   |   |       |   |   |   |   mariadbconnector.py
|   |   |       |   |   |   |   mysqlconnector.py
|   |   |       |   |   |   |   mysqldb.py
|   |   |       |   |   |   |   provision.py
|   |   |       |   |   |   |   pymysql.py
|   |   |       |   |   |   |   pyodbc.py
|   |   |       |   |   |   |   reflection.py
|   |   |       |   |   |   |   reserved_words.py
|   |   |       |   |   |   |   types.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           aiomysql.cpython-312.pyc
|   |   |       |   |   |           asyncmy.cpython-312.pyc
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           cymysql.cpython-312.pyc
|   |   |       |   |   |           dml.cpython-312.pyc
|   |   |       |   |   |           enumerated.cpython-312.pyc
|   |   |       |   |   |           expression.cpython-312.pyc
|   |   |       |   |   |           json.cpython-312.pyc
|   |   |       |   |   |           mariadb.cpython-312.pyc
|   |   |       |   |   |           mariadbconnector.cpython-312.pyc
|   |   |       |   |   |           mysqlconnector.cpython-312.pyc
|   |   |       |   |   |           mysqldb.cpython-312.pyc
|   |   |       |   |   |           provision.cpython-312.pyc
|   |   |       |   |   |           pymysql.cpython-312.pyc
|   |   |       |   |   |           pyodbc.cpython-312.pyc
|   |   |       |   |   |           reflection.cpython-312.pyc
|   |   |       |   |   |           reserved_words.cpython-312.pyc
|   |   |       |   |   |           types.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---oracle
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   cx_oracle.py
|   |   |       |   |   |   |   dictionary.py
|   |   |       |   |   |   |   oracledb.py
|   |   |       |   |   |   |   provision.py
|   |   |       |   |   |   |   types.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           cx_oracle.cpython-312.pyc
|   |   |       |   |   |           dictionary.cpython-312.pyc
|   |   |       |   |   |           oracledb.cpython-312.pyc
|   |   |       |   |   |           provision.cpython-312.pyc
|   |   |       |   |   |           types.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---postgresql
|   |   |       |   |   |   |   array.py
|   |   |       |   |   |   |   asyncpg.py
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   dml.py
|   |   |       |   |   |   |   ext.py
|   |   |       |   |   |   |   hstore.py
|   |   |       |   |   |   |   json.py
|   |   |       |   |   |   |   named_types.py
|   |   |       |   |   |   |   operators.py
|   |   |       |   |   |   |   pg8000.py
|   |   |       |   |   |   |   pg_catalog.py
|   |   |       |   |   |   |   provision.py
|   |   |       |   |   |   |   psycopg.py
|   |   |       |   |   |   |   psycopg2.py
|   |   |       |   |   |   |   psycopg2cffi.py
|   |   |       |   |   |   |   ranges.py
|   |   |       |   |   |   |   types.py
|   |   |       |   |   |   |   _psycopg_common.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           array.cpython-312.pyc
|   |   |       |   |   |           asyncpg.cpython-312.pyc
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           dml.cpython-312.pyc
|   |   |       |   |   |           ext.cpython-312.pyc
|   |   |       |   |   |           hstore.cpython-312.pyc
|   |   |       |   |   |           json.cpython-312.pyc
|   |   |       |   |   |           named_types.cpython-312.pyc
|   |   |       |   |   |           operators.cpython-312.pyc
|   |   |       |   |   |           pg8000.cpython-312.pyc
|   |   |       |   |   |           pg_catalog.cpython-312.pyc
|   |   |       |   |   |           provision.cpython-312.pyc
|   |   |       |   |   |           psycopg.cpython-312.pyc
|   |   |       |   |   |           psycopg2.cpython-312.pyc
|   |   |       |   |   |           psycopg2cffi.cpython-312.pyc
|   |   |       |   |   |           ranges.cpython-312.pyc
|   |   |       |   |   |           types.cpython-312.pyc
|   |   |       |   |   |           _psycopg_common.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---sqlite
|   |   |       |   |   |   |   aiosqlite.py
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   dml.py
|   |   |       |   |   |   |   json.py
|   |   |       |   |   |   |   provision.py
|   |   |       |   |   |   |   pysqlcipher.py
|   |   |       |   |   |   |   pysqlite.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           aiosqlite.cpython-312.pyc
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           dml.cpython-312.pyc
|   |   |       |   |   |           json.cpython-312.pyc
|   |   |       |   |   |           provision.cpython-312.pyc
|   |   |       |   |   |           pysqlcipher.cpython-312.pyc
|   |   |       |   |   |           pysqlite.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           _typing.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---engine
|   |   |       |   |   |   base.py
|   |   |       |   |   |   characteristics.py
|   |   |       |   |   |   create.py
|   |   |       |   |   |   cursor.py
|   |   |       |   |   |   default.py
|   |   |       |   |   |   events.py
|   |   |       |   |   |   interfaces.py
|   |   |       |   |   |   mock.py
|   |   |       |   |   |   processors.py
|   |   |       |   |   |   reflection.py
|   |   |       |   |   |   result.py
|   |   |       |   |   |   row.py
|   |   |       |   |   |   strategies.py
|   |   |       |   |   |   url.py
|   |   |       |   |   |   util.py
|   |   |       |   |   |   _py_processors.py
|   |   |       |   |   |   _py_row.py
|   |   |       |   |   |   _py_util.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           characteristics.cpython-312.pyc
|   |   |       |   |           create.cpython-312.pyc
|   |   |       |   |           cursor.cpython-312.pyc
|   |   |       |   |           default.cpython-312.pyc
|   |   |       |   |           events.cpython-312.pyc
|   |   |       |   |           interfaces.cpython-312.pyc
|   |   |       |   |           mock.cpython-312.pyc
|   |   |       |   |           processors.cpython-312.pyc
|   |   |       |   |           reflection.cpython-312.pyc
|   |   |       |   |           result.cpython-312.pyc
|   |   |       |   |           row.cpython-312.pyc
|   |   |       |   |           strategies.cpython-312.pyc
|   |   |       |   |           url.cpython-312.pyc
|   |   |       |   |           util.cpython-312.pyc
|   |   |       |   |           _py_processors.cpython-312.pyc
|   |   |       |   |           _py_row.cpython-312.pyc
|   |   |       |   |           _py_util.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---event
|   |   |       |   |   |   api.py
|   |   |       |   |   |   attr.py
|   |   |       |   |   |   base.py
|   |   |       |   |   |   legacy.py
|   |   |       |   |   |   registry.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           api.cpython-312.pyc
|   |   |       |   |           attr.cpython-312.pyc
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           legacy.cpython-312.pyc
|   |   |       |   |           registry.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---ext
|   |   |       |   |   |   associationproxy.py
|   |   |       |   |   |   automap.py
|   |   |       |   |   |   baked.py
|   |   |       |   |   |   compiler.py
|   |   |       |   |   |   horizontal_shard.py
|   |   |       |   |   |   hybrid.py
|   |   |       |   |   |   indexable.py
|   |   |       |   |   |   instrumentation.py
|   |   |       |   |   |   mutable.py
|   |   |       |   |   |   orderinglist.py
|   |   |       |   |   |   serializer.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---asyncio
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   engine.py
|   |   |       |   |   |   |   exc.py
|   |   |       |   |   |   |   result.py
|   |   |       |   |   |   |   scoping.py
|   |   |       |   |   |   |   session.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           engine.cpython-312.pyc
|   |   |       |   |   |           exc.cpython-312.pyc
|   |   |       |   |   |           result.cpython-312.pyc
|   |   |       |   |   |           scoping.cpython-312.pyc
|   |   |       |   |   |           session.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---declarative
|   |   |       |   |   |   |   extensions.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           extensions.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---mypy
|   |   |       |   |   |   |   apply.py
|   |   |       |   |   |   |   decl_class.py
|   |   |       |   |   |   |   infer.py
|   |   |       |   |   |   |   names.py
|   |   |       |   |   |   |   plugin.py
|   |   |       |   |   |   |   util.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           apply.cpython-312.pyc
|   |   |       |   |   |           decl_class.cpython-312.pyc
|   |   |       |   |   |           infer.cpython-312.pyc
|   |   |       |   |   |           names.cpython-312.pyc
|   |   |       |   |   |           plugin.cpython-312.pyc
|   |   |       |   |   |           util.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           associationproxy.cpython-312.pyc
|   |   |       |   |           automap.cpython-312.pyc
|   |   |       |   |           baked.cpython-312.pyc
|   |   |       |   |           compiler.cpython-312.pyc
|   |   |       |   |           horizontal_shard.cpython-312.pyc
|   |   |       |   |           hybrid.cpython-312.pyc
|   |   |       |   |           indexable.cpython-312.pyc
|   |   |       |   |           instrumentation.cpython-312.pyc
|   |   |       |   |           mutable.cpython-312.pyc
|   |   |       |   |           orderinglist.cpython-312.pyc
|   |   |       |   |           serializer.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---future
|   |   |       |   |   |   engine.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           engine.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---orm
|   |   |       |   |   |   attributes.py
|   |   |       |   |   |   base.py
|   |   |       |   |   |   bulk_persistence.py
|   |   |       |   |   |   clsregistry.py
|   |   |       |   |   |   collections.py
|   |   |       |   |   |   context.py
|   |   |       |   |   |   decl_api.py
|   |   |       |   |   |   decl_base.py
|   |   |       |   |   |   dependency.py
|   |   |       |   |   |   descriptor_props.py
|   |   |       |   |   |   dynamic.py
|   |   |       |   |   |   evaluator.py
|   |   |       |   |   |   events.py
|   |   |       |   |   |   exc.py
|   |   |       |   |   |   identity.py
|   |   |       |   |   |   instrumentation.py
|   |   |       |   |   |   interfaces.py
|   |   |       |   |   |   loading.py
|   |   |       |   |   |   mapped_collection.py
|   |   |       |   |   |   mapper.py
|   |   |       |   |   |   path_registry.py
|   |   |       |   |   |   persistence.py
|   |   |       |   |   |   properties.py
|   |   |       |   |   |   query.py
|   |   |       |   |   |   relationships.py
|   |   |       |   |   |   scoping.py
|   |   |       |   |   |   session.py
|   |   |       |   |   |   state.py
|   |   |       |   |   |   state_changes.py
|   |   |       |   |   |   strategies.py
|   |   |       |   |   |   strategy_options.py
|   |   |       |   |   |   sync.py
|   |   |       |   |   |   unitofwork.py
|   |   |       |   |   |   util.py
|   |   |       |   |   |   writeonly.py
|   |   |       |   |   |   _orm_constructors.py
|   |   |       |   |   |   _typing.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           attributes.cpython-312.pyc
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           bulk_persistence.cpython-312.pyc
|   |   |       |   |           clsregistry.cpython-312.pyc
|   |   |       |   |           collections.cpython-312.pyc
|   |   |       |   |           context.cpython-312.pyc
|   |   |       |   |           decl_api.cpython-312.pyc
|   |   |       |   |           decl_base.cpython-312.pyc
|   |   |       |   |           dependency.cpython-312.pyc
|   |   |       |   |           descriptor_props.cpython-312.pyc
|   |   |       |   |           dynamic.cpython-312.pyc
|   |   |       |   |           evaluator.cpython-312.pyc
|   |   |       |   |           events.cpython-312.pyc
|   |   |       |   |           exc.cpython-312.pyc
|   |   |       |   |           identity.cpython-312.pyc
|   |   |       |   |           instrumentation.cpython-312.pyc
|   |   |       |   |           interfaces.cpython-312.pyc
|   |   |       |   |           loading.cpython-312.pyc
|   |   |       |   |           mapped_collection.cpython-312.pyc
|   |   |       |   |           mapper.cpython-312.pyc
|   |   |       |   |           path_registry.cpython-312.pyc
|   |   |       |   |           persistence.cpython-312.pyc
|   |   |       |   |           properties.cpython-312.pyc
|   |   |       |   |           query.cpython-312.pyc
|   |   |       |   |           relationships.cpython-312.pyc
|   |   |       |   |           scoping.cpython-312.pyc
|   |   |       |   |           session.cpython-312.pyc
|   |   |       |   |           state.cpython-312.pyc
|   |   |       |   |           state_changes.cpython-312.pyc
|   |   |       |   |           strategies.cpython-312.pyc
|   |   |       |   |           strategy_options.cpython-312.pyc
|   |   |       |   |           sync.cpython-312.pyc
|   |   |       |   |           unitofwork.cpython-312.pyc
|   |   |       |   |           util.cpython-312.pyc
|   |   |       |   |           writeonly.cpython-312.pyc
|   |   |       |   |           _orm_constructors.cpython-312.pyc
|   |   |       |   |           _typing.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---pool
|   |   |       |   |   |   base.py
|   |   |       |   |   |   events.py
|   |   |       |   |   |   impl.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           events.cpython-312.pyc
|   |   |       |   |           impl.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---sql
|   |   |       |   |   |   annotation.py
|   |   |       |   |   |   base.py
|   |   |       |   |   |   cache_key.py
|   |   |       |   |   |   coercions.py
|   |   |       |   |   |   compiler.py
|   |   |       |   |   |   crud.py
|   |   |       |   |   |   ddl.py
|   |   |       |   |   |   default_comparator.py
|   |   |       |   |   |   dml.py
|   |   |       |   |   |   elements.py
|   |   |       |   |   |   events.py
|   |   |       |   |   |   expression.py
|   |   |       |   |   |   functions.py
|   |   |       |   |   |   lambdas.py
|   |   |       |   |   |   naming.py
|   |   |       |   |   |   operators.py
|   |   |       |   |   |   roles.py
|   |   |       |   |   |   schema.py
|   |   |       |   |   |   selectable.py
|   |   |       |   |   |   sqltypes.py
|   |   |       |   |   |   traversals.py
|   |   |       |   |   |   type_api.py
|   |   |       |   |   |   util.py
|   |   |       |   |   |   visitors.py
|   |   |       |   |   |   _dml_constructors.py
|   |   |       |   |   |   _elements_constructors.py
|   |   |       |   |   |   _orm_types.py
|   |   |       |   |   |   _py_util.py
|   |   |       |   |   |   _selectable_constructors.py
|   |   |       |   |   |   _typing.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           annotation.cpython-312.pyc
|   |   |       |   |           base.cpython-312.pyc
|   |   |       |   |           cache_key.cpython-312.pyc
|   |   |       |   |           coercions.cpython-312.pyc
|   |   |       |   |           compiler.cpython-312.pyc
|   |   |       |   |           crud.cpython-312.pyc
|   |   |       |   |           ddl.cpython-312.pyc
|   |   |       |   |           default_comparator.cpython-312.pyc
|   |   |       |   |           dml.cpython-312.pyc
|   |   |       |   |           elements.cpython-312.pyc
|   |   |       |   |           events.cpython-312.pyc
|   |   |       |   |           expression.cpython-312.pyc
|   |   |       |   |           functions.cpython-312.pyc
|   |   |       |   |           lambdas.cpython-312.pyc
|   |   |       |   |           naming.cpython-312.pyc
|   |   |       |   |           operators.cpython-312.pyc
|   |   |       |   |           roles.cpython-312.pyc
|   |   |       |   |           schema.cpython-312.pyc
|   |   |       |   |           selectable.cpython-312.pyc
|   |   |       |   |           sqltypes.cpython-312.pyc
|   |   |       |   |           traversals.cpython-312.pyc
|   |   |       |   |           type_api.cpython-312.pyc
|   |   |       |   |           util.cpython-312.pyc
|   |   |       |   |           visitors.cpython-312.pyc
|   |   |       |   |           _dml_constructors.cpython-312.pyc
|   |   |       |   |           _elements_constructors.cpython-312.pyc
|   |   |       |   |           _orm_types.cpython-312.pyc
|   |   |       |   |           _py_util.cpython-312.pyc
|   |   |       |   |           _selectable_constructors.cpython-312.pyc
|   |   |       |   |           _typing.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---testing
|   |   |       |   |   |   assertions.py
|   |   |       |   |   |   assertsql.py
|   |   |       |   |   |   asyncio.py
|   |   |       |   |   |   config.py
|   |   |       |   |   |   engines.py
|   |   |       |   |   |   entities.py
|   |   |       |   |   |   exclusions.py
|   |   |       |   |   |   pickleable.py
|   |   |       |   |   |   profiling.py
|   |   |       |   |   |   provision.py
|   |   |       |   |   |   requirements.py
|   |   |       |   |   |   schema.py
|   |   |       |   |   |   util.py
|   |   |       |   |   |   warnings.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---fixtures
|   |   |       |   |   |   |   base.py
|   |   |       |   |   |   |   mypy.py
|   |   |       |   |   |   |   orm.py
|   |   |       |   |   |   |   sql.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           base.cpython-312.pyc
|   |   |       |   |   |           mypy.cpython-312.pyc
|   |   |       |   |   |           orm.cpython-312.pyc
|   |   |       |   |   |           sql.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---plugin
|   |   |       |   |   |   |   bootstrap.py
|   |   |       |   |   |   |   plugin_base.py
|   |   |       |   |   |   |   pytestplugin.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           bootstrap.cpython-312.pyc
|   |   |       |   |   |           plugin_base.cpython-312.pyc
|   |   |       |   |   |           pytestplugin.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   +---suite
|   |   |       |   |   |   |   test_cte.py
|   |   |       |   |   |   |   test_ddl.py
|   |   |       |   |   |   |   test_deprecations.py
|   |   |       |   |   |   |   test_dialect.py
|   |   |       |   |   |   |   test_insert.py
|   |   |       |   |   |   |   test_reflection.py
|   |   |       |   |   |   |   test_results.py
|   |   |       |   |   |   |   test_rowcount.py
|   |   |       |   |   |   |   test_select.py
|   |   |       |   |   |   |   test_sequence.py
|   |   |       |   |   |   |   test_types.py
|   |   |       |   |   |   |   test_unicode_ddl.py
|   |   |       |   |   |   |   test_update_delete.py
|   |   |       |   |   |   |   __init__.py
|   |   |       |   |   |   |   
|   |   |       |   |   |   \---__pycache__
|   |   |       |   |   |           test_cte.cpython-312.pyc
|   |   |       |   |   |           test_ddl.cpython-312.pyc
|   |   |       |   |   |           test_deprecations.cpython-312.pyc
|   |   |       |   |   |           test_dialect.cpython-312.pyc
|   |   |       |   |   |           test_insert.cpython-312.pyc
|   |   |       |   |   |           test_reflection.cpython-312.pyc
|   |   |       |   |   |           test_results.cpython-312.pyc
|   |   |       |   |   |           test_rowcount.cpython-312.pyc
|   |   |       |   |   |           test_select.cpython-312.pyc
|   |   |       |   |   |           test_sequence.cpython-312.pyc
|   |   |       |   |   |           test_types.cpython-312.pyc
|   |   |       |   |   |           test_unicode_ddl.cpython-312.pyc
|   |   |       |   |   |           test_update_delete.cpython-312.pyc
|   |   |       |   |   |           __init__.cpython-312.pyc
|   |   |       |   |   |           
|   |   |       |   |   \---__pycache__
|   |   |       |   |           assertions.cpython-312.pyc
|   |   |       |   |           assertsql.cpython-312.pyc
|   |   |       |   |           asyncio.cpython-312.pyc
|   |   |       |   |           config.cpython-312.pyc
|   |   |       |   |           engines.cpython-312.pyc
|   |   |       |   |           entities.cpython-312.pyc
|   |   |       |   |           exclusions.cpython-312.pyc
|   |   |       |   |           pickleable.cpython-312.pyc
|   |   |       |   |           profiling.cpython-312.pyc
|   |   |       |   |           provision.cpython-312.pyc
|   |   |       |   |           requirements.cpython-312.pyc
|   |   |       |   |           schema.cpython-312.pyc
|   |   |       |   |           util.cpython-312.pyc
|   |   |       |   |           warnings.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---util
|   |   |       |   |   |   compat.py
|   |   |       |   |   |   concurrency.py
|   |   |       |   |   |   deprecations.py
|   |   |       |   |   |   langhelpers.py
|   |   |       |   |   |   preloaded.py
|   |   |       |   |   |   queue.py
|   |   |       |   |   |   tool_support.py
|   |   |       |   |   |   topological.py
|   |   |       |   |   |   typing.py
|   |   |       |   |   |   _collections.py
|   |   |       |   |   |   _concurrency_py3k.py
|   |   |       |   |   |   _has_cy.py
|   |   |       |   |   |   _py_collections.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           compat.cpython-312.pyc
|   |   |       |   |           concurrency.cpython-312.pyc
|   |   |       |   |           deprecations.cpython-312.pyc
|   |   |       |   |           langhelpers.cpython-312.pyc
|   |   |       |   |           preloaded.cpython-312.pyc
|   |   |       |   |           queue.cpython-312.pyc
|   |   |       |   |           tool_support.cpython-312.pyc
|   |   |       |   |           topological.cpython-312.pyc
|   |   |       |   |           typing.cpython-312.pyc
|   |   |       |   |           _collections.cpython-312.pyc
|   |   |       |   |           _concurrency_py3k.cpython-312.pyc
|   |   |       |   |           _has_cy.cpython-312.pyc
|   |   |       |   |           _py_collections.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           events.cpython-312.pyc
|   |   |       |           exc.cpython-312.pyc
|   |   |       |           inspection.cpython-312.pyc
|   |   |       |           log.cpython-312.pyc
|   |   |       |           schema.cpython-312.pyc
|   |   |       |           types.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---SQLAlchemy-2.0.31.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       REQUESTED
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---stack_data
|   |   |       |   |   core.py
|   |   |       |   |   formatting.py
|   |   |       |   |   py.typed
|   |   |       |   |   serializing.py
|   |   |       |   |   utils.py
|   |   |       |   |   version.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           core.cpython-312.pyc
|   |   |       |           formatting.cpython-312.pyc
|   |   |       |           serializing.cpython-312.pyc
|   |   |       |           utils.cpython-312.pyc
|   |   |       |           version.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---stack_data-0.6.3.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.txt
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       top_level.txt
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       +---traitlets
|   |   |       |   |   log.py
|   |   |       |   |   py.typed
|   |   |       |   |   traitlets.py
|   |   |       |   |   _version.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   +---config
|   |   |       |   |   |   application.py
|   |   |       |   |   |   argcomplete_config.py
|   |   |       |   |   |   configurable.py
|   |   |       |   |   |   loader.py
|   |   |       |   |   |   manager.py
|   |   |       |   |   |   sphinxdoc.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           application.cpython-312.pyc
|   |   |       |   |           argcomplete_config.cpython-312.pyc
|   |   |       |   |           configurable.cpython-312.pyc
|   |   |       |   |           loader.cpython-312.pyc
|   |   |       |   |           manager.cpython-312.pyc
|   |   |       |   |           sphinxdoc.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---tests
|   |   |       |   |   |   test_traitlets.py
|   |   |       |   |   |   utils.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           test_traitlets.cpython-312.pyc
|   |   |       |   |           utils.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---utils
|   |   |       |   |   |   bunch.py
|   |   |       |   |   |   decorators.py
|   |   |       |   |   |   descriptions.py
|   |   |       |   |   |   getargspec.py
|   |   |       |   |   |   importstring.py
|   |   |       |   |   |   nested_update.py
|   |   |       |   |   |   sentinel.py
|   |   |       |   |   |   text.py
|   |   |       |   |   |   warnings.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           bunch.cpython-312.pyc
|   |   |       |   |           decorators.cpython-312.pyc
|   |   |       |   |           descriptions.cpython-312.pyc
|   |   |       |   |           getargspec.cpython-312.pyc
|   |   |       |   |           importstring.cpython-312.pyc
|   |   |       |   |           nested_update.cpython-312.pyc
|   |   |       |   |           sentinel.cpython-312.pyc
|   |   |       |   |           text.cpython-312.pyc
|   |   |       |   |           warnings.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           log.cpython-312.pyc
|   |   |       |           traitlets.cpython-312.pyc
|   |   |       |           _version.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---traitlets-5.14.3.dist-info
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           LICENSE
|   |   |       |           
|   |   |       +---typing_extensions-4.15.0.dist-info
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   WHEEL
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           LICENSE
|   |   |       |           
|   |   |       +---wcwidth
|   |   |       |   |   table_vs15.py
|   |   |       |   |   table_vs16.py
|   |   |       |   |   table_wide.py
|   |   |       |   |   table_zero.py
|   |   |       |   |   unicode_versions.py
|   |   |       |   |   wcwidth.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   \---__pycache__
|   |   |       |           table_vs15.cpython-312.pyc
|   |   |       |           table_vs16.cpython-312.pyc
|   |   |       |           table_wide.cpython-312.pyc
|   |   |       |           table_zero.cpython-312.pyc
|   |   |       |           unicode_versions.cpython-312.pyc
|   |   |       |           wcwidth.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---wcwidth-0.2.14.dist-info
|   |   |       |   |   INSTALLER
|   |   |       |   |   METADATA
|   |   |       |   |   RECORD
|   |   |       |   |   top_level.txt
|   |   |       |   |   WHEEL
|   |   |       |   |   zip-safe
|   |   |       |   |   
|   |   |       |   \---licenses
|   |   |       |           LICENSE
|   |   |       |           
|   |   |       +---werkzeug
|   |   |       |   |   exceptions.py
|   |   |       |   |   formparser.py
|   |   |       |   |   http.py
|   |   |       |   |   local.py
|   |   |       |   |   py.typed
|   |   |       |   |   security.py
|   |   |       |   |   serving.py
|   |   |       |   |   test.py
|   |   |       |   |   testapp.py
|   |   |       |   |   urls.py
|   |   |       |   |   user_agent.py
|   |   |       |   |   utils.py
|   |   |       |   |   wsgi.py
|   |   |       |   |   _internal.py
|   |   |       |   |   _reloader.py
|   |   |       |   |   __init__.py
|   |   |       |   |   
|   |   |       |   +---datastructures
|   |   |       |   |   |   accept.py
|   |   |       |   |   |   auth.py
|   |   |       |   |   |   cache_control.py
|   |   |       |   |   |   csp.py
|   |   |       |   |   |   etag.py
|   |   |       |   |   |   file_storage.py
|   |   |       |   |   |   headers.py
|   |   |       |   |   |   mixins.py
|   |   |       |   |   |   range.py
|   |   |       |   |   |   structures.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           accept.cpython-312.pyc
|   |   |       |   |           auth.cpython-312.pyc
|   |   |       |   |           cache_control.cpython-312.pyc
|   |   |       |   |           csp.cpython-312.pyc
|   |   |       |   |           etag.cpython-312.pyc
|   |   |       |   |           file_storage.cpython-312.pyc
|   |   |       |   |           headers.cpython-312.pyc
|   |   |       |   |           mixins.cpython-312.pyc
|   |   |       |   |           range.cpython-312.pyc
|   |   |       |   |           structures.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---debug
|   |   |       |   |   |   console.py
|   |   |       |   |   |   repr.py
|   |   |       |   |   |   tbtools.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   +---shared
|   |   |       |   |   |       console.png
|   |   |       |   |   |       debugger.js
|   |   |       |   |   |       ICON_LICENSE.md
|   |   |       |   |   |       less.png
|   |   |       |   |   |       more.png
|   |   |       |   |   |       style.css
|   |   |       |   |   |       
|   |   |       |   |   \---__pycache__
|   |   |       |   |           console.cpython-312.pyc
|   |   |       |   |           repr.cpython-312.pyc
|   |   |       |   |           tbtools.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---middleware
|   |   |       |   |   |   dispatcher.py
|   |   |       |   |   |   http_proxy.py
|   |   |       |   |   |   lint.py
|   |   |       |   |   |   profiler.py
|   |   |       |   |   |   proxy_fix.py
|   |   |       |   |   |   shared_data.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           dispatcher.cpython-312.pyc
|   |   |       |   |           http_proxy.cpython-312.pyc
|   |   |       |   |           lint.cpython-312.pyc
|   |   |       |   |           profiler.cpython-312.pyc
|   |   |       |   |           proxy_fix.cpython-312.pyc
|   |   |       |   |           shared_data.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---routing
|   |   |       |   |   |   converters.py
|   |   |       |   |   |   exceptions.py
|   |   |       |   |   |   map.py
|   |   |       |   |   |   matcher.py
|   |   |       |   |   |   rules.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           converters.cpython-312.pyc
|   |   |       |   |           exceptions.cpython-312.pyc
|   |   |       |   |           map.cpython-312.pyc
|   |   |       |   |           matcher.cpython-312.pyc
|   |   |       |   |           rules.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---sansio
|   |   |       |   |   |   http.py
|   |   |       |   |   |   multipart.py
|   |   |       |   |   |   request.py
|   |   |       |   |   |   response.py
|   |   |       |   |   |   utils.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           http.cpython-312.pyc
|   |   |       |   |           multipart.cpython-312.pyc
|   |   |       |   |           request.cpython-312.pyc
|   |   |       |   |           response.cpython-312.pyc
|   |   |       |   |           utils.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   +---wrappers
|   |   |       |   |   |   request.py
|   |   |       |   |   |   response.py
|   |   |       |   |   |   __init__.py
|   |   |       |   |   |   
|   |   |       |   |   \---__pycache__
|   |   |       |   |           request.cpython-312.pyc
|   |   |       |   |           response.cpython-312.pyc
|   |   |       |   |           __init__.cpython-312.pyc
|   |   |       |   |           
|   |   |       |   \---__pycache__
|   |   |       |           exceptions.cpython-312.pyc
|   |   |       |           formparser.cpython-312.pyc
|   |   |       |           http.cpython-312.pyc
|   |   |       |           local.cpython-312.pyc
|   |   |       |           security.cpython-312.pyc
|   |   |       |           serving.cpython-312.pyc
|   |   |       |           test.cpython-312.pyc
|   |   |       |           testapp.cpython-312.pyc
|   |   |       |           urls.cpython-312.pyc
|   |   |       |           user_agent.cpython-312.pyc
|   |   |       |           utils.cpython-312.pyc
|   |   |       |           wsgi.cpython-312.pyc
|   |   |       |           _internal.cpython-312.pyc
|   |   |       |           _reloader.cpython-312.pyc
|   |   |       |           __init__.cpython-312.pyc
|   |   |       |           
|   |   |       +---werkzeug-3.1.3.dist-info
|   |   |       |       INSTALLER
|   |   |       |       LICENSE.txt
|   |   |       |       METADATA
|   |   |       |       RECORD
|   |   |       |       WHEEL
|   |   |       |       
|   |   |       \---__pycache__
|   |   |               decorator.cpython-312.pyc
|   |   |               ipython_pygments_lexers.cpython-312.pyc
|   |   |               typing_extensions.cpython-312.pyc
|   |   |               
|   |   +---Scripts
|   |   |       activate
|   |   |       activate.bat
|   |   |       Activate.ps1
|   |   |       deactivate.bat
|   |   |       flask.exe
|   |   |       ipython.exe
|   |   |       ipython3.exe
|   |   |       pip.exe
|   |   |       pip3.12.exe
|   |   |       pip3.exe
|   |   |       pygmentize.exe
|   |   |       python.exe
|   |   |       pythonw.exe
|   |   |       
|   |   \---share
|   |       \---man
|   |           \---man1
|   |                   ipython.1
|   |                   
|   \---lib
|       +---bindings
|       |       utils.js
|       |       
|       +---tom-select
|       |       tom-select.complete.min.js
|       |       tom-select.css
|       |       
|       \---vis-9.1.2
|               vis-network.css
|               vis-network.min.js
|               
\---frontend
    |   .env.local
    |   index.html
    |   package-lock.json
    |   package.json
    |   README.md
    |   vite.config.js
    |   
    +---node_modules
    |   |   .package-lock.json
    |   |   
    |   +---.bin
    |   |       baseline-browser-mapping
    |   |       baseline-browser-mapping.cmd
    |   |       baseline-browser-mapping.ps1
    |   |       browserslist
    |   |       browserslist.cmd
    |   |       browserslist.ps1
    |   |       esbuild
    |   |       esbuild.cmd
    |   |       esbuild.ps1
    |   |       jsesc
    |   |       jsesc.cmd
    |   |       jsesc.ps1
    |   |       json5
    |   |       json5.cmd
    |   |       json5.ps1
    |   |       loose-envify
    |   |       loose-envify.cmd
    |   |       loose-envify.ps1
    |   |       nanoid
    |   |       nanoid.cmd
    |   |       nanoid.ps1
    |   |       parser
    |   |       parser.cmd
    |   |       parser.ps1
    |   |       rollup
    |   |       rollup.cmd
    |   |       rollup.ps1
    |   |       semver
    |   |       semver.cmd
    |   |       semver.ps1
    |   |       update-browserslist-db
    |   |       update-browserslist-db.cmd
    |   |       update-browserslist-db.ps1
    |   |       vite
    |   |       vite.cmd
    |   |       vite.ps1
    |   |       
    |   +---.vite
    |   |   \---deps
    |   |           axios.js
    |   |           axios.js.map
    |   |           chunk-DRWLMN53.js
    |   |           chunk-DRWLMN53.js.map
    |   |           chunk-G3PMV62Z.js
    |   |           chunk-G3PMV62Z.js.map
    |   |           chunk-PJEEZAML.js
    |   |           chunk-PJEEZAML.js.map
    |   |           package.json
    |   |           react-dom.js
    |   |           react-dom.js.map
    |   |           react-dom_client.js
    |   |           react-dom_client.js.map
    |   |           react-router-dom.js
    |   |           react-router-dom.js.map
    |   |           react.js
    |   |           react.js.map
    |   |           react_jsx-dev-runtime.js
    |   |           react_jsx-dev-runtime.js.map
    |   |           react_jsx-runtime.js
    |   |           react_jsx-runtime.js.map
    |   |           _metadata.json
    |   |           
    |   +---@babel
    |   |   +---code-frame
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           
    |   |   +---compat-data
    |   |   |   |   corejs2-built-ins.js
    |   |   |   |   corejs3-shipped-proposals.js
    |   |   |   |   LICENSE
    |   |   |   |   native-modules.js
    |   |   |   |   overlapping-plugins.js
    |   |   |   |   package.json
    |   |   |   |   plugin-bugfixes.js
    |   |   |   |   plugins.js
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---data
    |   |   |           corejs2-built-ins.json
    |   |   |           corejs3-shipped-proposals.json
    |   |   |           native-modules.json
    |   |   |           overlapping-plugins.json
    |   |   |           plugin-bugfixes.json
    |   |   |           plugins.json
    |   |   |           
    |   |   +---core
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   +---lib
    |   |   |   |   |   index.js
    |   |   |   |   |   index.js.map
    |   |   |   |   |   parse.js
    |   |   |   |   |   parse.js.map
    |   |   |   |   |   transform-ast.js
    |   |   |   |   |   transform-ast.js.map
    |   |   |   |   |   transform-file-browser.js
    |   |   |   |   |   transform-file-browser.js.map
    |   |   |   |   |   transform-file.js
    |   |   |   |   |   transform-file.js.map
    |   |   |   |   |   transform.js
    |   |   |   |   |   transform.js.map
    |   |   |   |   |   
    |   |   |   |   +---config
    |   |   |   |   |   |   cache-contexts.js
    |   |   |   |   |   |   cache-contexts.js.map
    |   |   |   |   |   |   caching.js
    |   |   |   |   |   |   caching.js.map
    |   |   |   |   |   |   config-chain.js
    |   |   |   |   |   |   config-chain.js.map
    |   |   |   |   |   |   config-descriptors.js
    |   |   |   |   |   |   config-descriptors.js.map
    |   |   |   |   |   |   full.js
    |   |   |   |   |   |   full.js.map
    |   |   |   |   |   |   index.js
    |   |   |   |   |   |   index.js.map
    |   |   |   |   |   |   item.js
    |   |   |   |   |   |   item.js.map
    |   |   |   |   |   |   partial.js
    |   |   |   |   |   |   partial.js.map
    |   |   |   |   |   |   pattern-to-regex.js
    |   |   |   |   |   |   pattern-to-regex.js.map
    |   |   |   |   |   |   plugin.js
    |   |   |   |   |   |   plugin.js.map
    |   |   |   |   |   |   printer.js
    |   |   |   |   |   |   printer.js.map
    |   |   |   |   |   |   resolve-targets-browser.js
    |   |   |   |   |   |   resolve-targets-browser.js.map
    |   |   |   |   |   |   resolve-targets.js
    |   |   |   |   |   |   resolve-targets.js.map
    |   |   |   |   |   |   util.js
    |   |   |   |   |   |   util.js.map
    |   |   |   |   |   |   
    |   |   |   |   |   +---files
    |   |   |   |   |   |       configuration.js
    |   |   |   |   |   |       configuration.js.map
    |   |   |   |   |   |       import.cjs
    |   |   |   |   |   |       import.cjs.map
    |   |   |   |   |   |       index-browser.js
    |   |   |   |   |   |       index-browser.js.map
    |   |   |   |   |   |       index.js
    |   |   |   |   |   |       index.js.map
    |   |   |   |   |   |       module-types.js
    |   |   |   |   |   |       module-types.js.map
    |   |   |   |   |   |       package.js
    |   |   |   |   |   |       package.js.map
    |   |   |   |   |   |       plugins.js
    |   |   |   |   |   |       plugins.js.map
    |   |   |   |   |   |       types.js
    |   |   |   |   |   |       types.js.map
    |   |   |   |   |   |       utils.js
    |   |   |   |   |   |       utils.js.map
    |   |   |   |   |   |       
    |   |   |   |   |   +---helpers
    |   |   |   |   |   |       config-api.js
    |   |   |   |   |   |       config-api.js.map
    |   |   |   |   |   |       deep-array.js
    |   |   |   |   |   |       deep-array.js.map
    |   |   |   |   |   |       environment.js
    |   |   |   |   |   |       environment.js.map
    |   |   |   |   |   |       
    |   |   |   |   |   \---validation
    |   |   |   |   |           option-assertions.js
    |   |   |   |   |           option-assertions.js.map
    |   |   |   |   |           options.js
    |   |   |   |   |           options.js.map
    |   |   |   |   |           plugins.js
    |   |   |   |   |           plugins.js.map
    |   |   |   |   |           removed.js
    |   |   |   |   |           removed.js.map
    |   |   |   |   |           
    |   |   |   |   +---errors
    |   |   |   |   |       config-error.js
    |   |   |   |   |       config-error.js.map
    |   |   |   |   |       rewrite-stack-trace.js
    |   |   |   |   |       rewrite-stack-trace.js.map
    |   |   |   |   |       
    |   |   |   |   +---gensync-utils
    |   |   |   |   |       async.js
    |   |   |   |   |       async.js.map
    |   |   |   |   |       fs.js
    |   |   |   |   |       fs.js.map
    |   |   |   |   |       functional.js
    |   |   |   |   |       functional.js.map
    |   |   |   |   |       
    |   |   |   |   +---parser
    |   |   |   |   |   |   index.js
    |   |   |   |   |   |   index.js.map
    |   |   |   |   |   |   
    |   |   |   |   |   \---util
    |   |   |   |   |           missing-plugin-helper.js
    |   |   |   |   |           missing-plugin-helper.js.map
    |   |   |   |   |           
    |   |   |   |   +---tools
    |   |   |   |   |       build-external-helpers.js
    |   |   |   |   |       build-external-helpers.js.map
    |   |   |   |   |       
    |   |   |   |   +---transformation
    |   |   |   |   |   |   block-hoist-plugin.js
    |   |   |   |   |   |   block-hoist-plugin.js.map
    |   |   |   |   |   |   index.js
    |   |   |   |   |   |   index.js.map
    |   |   |   |   |   |   normalize-file.js
    |   |   |   |   |   |   normalize-file.js.map
    |   |   |   |   |   |   normalize-opts.js
    |   |   |   |   |   |   normalize-opts.js.map
    |   |   |   |   |   |   plugin-pass.js
    |   |   |   |   |   |   plugin-pass.js.map
    |   |   |   |   |   |   
    |   |   |   |   |   +---file
    |   |   |   |   |   |       babel-7-helpers.cjs
    |   |   |   |   |   |       babel-7-helpers.cjs.map
    |   |   |   |   |   |       file.js
    |   |   |   |   |   |       file.js.map
    |   |   |   |   |   |       generate.js
    |   |   |   |   |   |       generate.js.map
    |   |   |   |   |   |       merge-map.js
    |   |   |   |   |   |       merge-map.js.map
    |   |   |   |   |   |       
    |   |   |   |   |   \---util
    |   |   |   |   |           clone-deep.js
    |   |   |   |   |           clone-deep.js.map
    |   |   |   |   |           
    |   |   |   |   \---vendor
    |   |   |   |           import-meta-resolve.js
    |   |   |   |           import-meta-resolve.js.map
    |   |   |   |           
    |   |   |   \---src
    |   |   |       |   transform-file-browser.ts
    |   |   |       |   transform-file.ts
    |   |   |       |   
    |   |   |       \---config
    |   |   |           |   resolve-targets-browser.ts
    |   |   |           |   resolve-targets.ts
    |   |   |           |   
    |   |   |           \---files
    |   |   |                   index-browser.ts
    |   |   |                   index.ts
    |   |   |                   
    |   |   +---generator
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |       |   buffer.js
    |   |   |       |   buffer.js.map
    |   |   |       |   index.js
    |   |   |       |   index.js.map
    |   |   |       |   printer.js
    |   |   |       |   printer.js.map
    |   |   |       |   source-map.js
    |   |   |       |   source-map.js.map
    |   |   |       |   token-map.js
    |   |   |       |   token-map.js.map
    |   |   |       |   
    |   |   |       +---generators
    |   |   |       |       base.js
    |   |   |       |       base.js.map
    |   |   |       |       classes.js
    |   |   |       |       classes.js.map
    |   |   |       |       deprecated.js
    |   |   |       |       deprecated.js.map
    |   |   |       |       expressions.js
    |   |   |       |       expressions.js.map
    |   |   |       |       flow.js
    |   |   |       |       flow.js.map
    |   |   |       |       index.js
    |   |   |       |       index.js.map
    |   |   |       |       jsx.js
    |   |   |       |       jsx.js.map
    |   |   |       |       methods.js
    |   |   |       |       methods.js.map
    |   |   |       |       modules.js
    |   |   |       |       modules.js.map
    |   |   |       |       statements.js
    |   |   |       |       statements.js.map
    |   |   |       |       template-literals.js
    |   |   |       |       template-literals.js.map
    |   |   |       |       types.js
    |   |   |       |       types.js.map
    |   |   |       |       typescript.js
    |   |   |       |       typescript.js.map
    |   |   |       |       
    |   |   |       \---node
    |   |   |               index.js
    |   |   |               index.js.map
    |   |   |               parentheses.js
    |   |   |               parentheses.js.map
    |   |   |               whitespace.js
    |   |   |               whitespace.js.map
    |   |   |               
    |   |   +---helper-compilation-targets
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           debug.js
    |   |   |           debug.js.map
    |   |   |           filter-items.js
    |   |   |           filter-items.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           options.js
    |   |   |           options.js.map
    |   |   |           pretty.js
    |   |   |           pretty.js.map
    |   |   |           targets.js
    |   |   |           targets.js.map
    |   |   |           utils.js
    |   |   |           utils.js.map
    |   |   |           
    |   |   +---helper-globals
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---data
    |   |   |           browser-upper.json
    |   |   |           builtin-lower.json
    |   |   |           builtin-upper.json
    |   |   |           
    |   |   +---helper-module-imports
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           import-builder.js
    |   |   |           import-builder.js.map
    |   |   |           import-injector.js
    |   |   |           import-injector.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           is-module.js
    |   |   |           is-module.js.map
    |   |   |           
    |   |   +---helper-module-transforms
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           dynamic-import.js
    |   |   |           dynamic-import.js.map
    |   |   |           get-module-name.js
    |   |   |           get-module-name.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           lazy-modules.js
    |   |   |           lazy-modules.js.map
    |   |   |           normalize-and-load-metadata.js
    |   |   |           normalize-and-load-metadata.js.map
    |   |   |           rewrite-live-references.js
    |   |   |           rewrite-live-references.js.map
    |   |   |           rewrite-this.js
    |   |   |           rewrite-this.js.map
    |   |   |           
    |   |   +---helper-plugin-utils
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           
    |   |   +---helper-string-parser
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           
    |   |   +---helper-validator-identifier
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           identifier.js
    |   |   |           identifier.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           keyword.js
    |   |   |           keyword.js.map
    |   |   |           
    |   |   +---helper-validator-option
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           find-suggestion.js
    |   |   |           find-suggestion.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           validator.js
    |   |   |           validator.js.map
    |   |   |           
    |   |   +---helpers
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |       |   helpers-generated.js
    |   |   |       |   helpers-generated.js.map
    |   |   |       |   index.js
    |   |   |       |   index.js.map
    |   |   |       |   
    |   |   |       \---helpers
    |   |   |               applyDecoratedDescriptor.js
    |   |   |               applyDecoratedDescriptor.js.map
    |   |   |               applyDecs.js
    |   |   |               applyDecs.js.map
    |   |   |               applyDecs2203.js
    |   |   |               applyDecs2203.js.map
    |   |   |               applyDecs2203R.js
    |   |   |               applyDecs2203R.js.map
    |   |   |               applyDecs2301.js
    |   |   |               applyDecs2301.js.map
    |   |   |               applyDecs2305.js
    |   |   |               applyDecs2305.js.map
    |   |   |               applyDecs2311.js
    |   |   |               applyDecs2311.js.map
    |   |   |               arrayLikeToArray.js
    |   |   |               arrayLikeToArray.js.map
    |   |   |               arrayWithHoles.js
    |   |   |               arrayWithHoles.js.map
    |   |   |               arrayWithoutHoles.js
    |   |   |               arrayWithoutHoles.js.map
    |   |   |               assertClassBrand.js
    |   |   |               assertClassBrand.js.map
    |   |   |               assertThisInitialized.js
    |   |   |               assertThisInitialized.js.map
    |   |   |               asyncGeneratorDelegate.js
    |   |   |               asyncGeneratorDelegate.js.map
    |   |   |               asyncIterator.js
    |   |   |               asyncIterator.js.map
    |   |   |               asyncToGenerator.js
    |   |   |               asyncToGenerator.js.map
    |   |   |               awaitAsyncGenerator.js
    |   |   |               awaitAsyncGenerator.js.map
    |   |   |               AwaitValue.js
    |   |   |               AwaitValue.js.map
    |   |   |               callSuper.js
    |   |   |               callSuper.js.map
    |   |   |               checkInRHS.js
    |   |   |               checkInRHS.js.map
    |   |   |               checkPrivateRedeclaration.js
    |   |   |               checkPrivateRedeclaration.js.map
    |   |   |               classApplyDescriptorDestructureSet.js
    |   |   |               classApplyDescriptorDestructureSet.js.map
    |   |   |               classApplyDescriptorGet.js
    |   |   |               classApplyDescriptorGet.js.map
    |   |   |               classApplyDescriptorSet.js
    |   |   |               classApplyDescriptorSet.js.map
    |   |   |               classCallCheck.js
    |   |   |               classCallCheck.js.map
    |   |   |               classCheckPrivateStaticAccess.js
    |   |   |               classCheckPrivateStaticAccess.js.map
    |   |   |               classCheckPrivateStaticFieldDescriptor.js
    |   |   |               classCheckPrivateStaticFieldDescriptor.js.map
    |   |   |               classExtractFieldDescriptor.js
    |   |   |               classExtractFieldDescriptor.js.map
    |   |   |               classNameTDZError.js
    |   |   |               classNameTDZError.js.map
    |   |   |               classPrivateFieldDestructureSet.js
    |   |   |               classPrivateFieldDestructureSet.js.map
    |   |   |               classPrivateFieldGet.js
    |   |   |               classPrivateFieldGet.js.map
    |   |   |               classPrivateFieldGet2.js
    |   |   |               classPrivateFieldGet2.js.map
    |   |   |               classPrivateFieldInitSpec.js
    |   |   |               classPrivateFieldInitSpec.js.map
    |   |   |               classPrivateFieldLooseBase.js
    |   |   |               classPrivateFieldLooseBase.js.map
    |   |   |               classPrivateFieldLooseKey.js
    |   |   |               classPrivateFieldLooseKey.js.map
    |   |   |               classPrivateFieldSet.js
    |   |   |               classPrivateFieldSet.js.map
    |   |   |               classPrivateFieldSet2.js
    |   |   |               classPrivateFieldSet2.js.map
    |   |   |               classPrivateGetter.js
    |   |   |               classPrivateGetter.js.map
    |   |   |               classPrivateMethodGet.js
    |   |   |               classPrivateMethodGet.js.map
    |   |   |               classPrivateMethodInitSpec.js
    |   |   |               classPrivateMethodInitSpec.js.map
    |   |   |               classPrivateMethodSet.js
    |   |   |               classPrivateMethodSet.js.map
    |   |   |               classPrivateSetter.js
    |   |   |               classPrivateSetter.js.map
    |   |   |               classStaticPrivateFieldDestructureSet.js
    |   |   |               classStaticPrivateFieldDestructureSet.js.map
    |   |   |               classStaticPrivateFieldSpecGet.js
    |   |   |               classStaticPrivateFieldSpecGet.js.map
    |   |   |               classStaticPrivateFieldSpecSet.js
    |   |   |               classStaticPrivateFieldSpecSet.js.map
    |   |   |               classStaticPrivateMethodGet.js
    |   |   |               classStaticPrivateMethodGet.js.map
    |   |   |               classStaticPrivateMethodSet.js
    |   |   |               classStaticPrivateMethodSet.js.map
    |   |   |               construct.js
    |   |   |               construct.js.map
    |   |   |               createClass.js
    |   |   |               createClass.js.map
    |   |   |               createForOfIteratorHelper.js
    |   |   |               createForOfIteratorHelper.js.map
    |   |   |               createForOfIteratorHelperLoose.js
    |   |   |               createForOfIteratorHelperLoose.js.map
    |   |   |               createSuper.js
    |   |   |               createSuper.js.map
    |   |   |               decorate.js
    |   |   |               decorate.js.map
    |   |   |               defaults.js
    |   |   |               defaults.js.map
    |   |   |               defineAccessor.js
    |   |   |               defineAccessor.js.map
    |   |   |               defineEnumerableProperties.js
    |   |   |               defineEnumerableProperties.js.map
    |   |   |               defineProperty.js
    |   |   |               defineProperty.js.map
    |   |   |               dispose.js
    |   |   |               dispose.js.map
    |   |   |               extends.js
    |   |   |               extends.js.map
    |   |   |               get.js
    |   |   |               get.js.map
    |   |   |               getPrototypeOf.js
    |   |   |               getPrototypeOf.js.map
    |   |   |               identity.js
    |   |   |               identity.js.map
    |   |   |               importDeferProxy.js
    |   |   |               importDeferProxy.js.map
    |   |   |               inherits.js
    |   |   |               inherits.js.map
    |   |   |               inheritsLoose.js
    |   |   |               inheritsLoose.js.map
    |   |   |               initializerDefineProperty.js
    |   |   |               initializerDefineProperty.js.map
    |   |   |               initializerWarningHelper.js
    |   |   |               initializerWarningHelper.js.map
    |   |   |               instanceof.js
    |   |   |               instanceof.js.map
    |   |   |               interopRequireDefault.js
    |   |   |               interopRequireDefault.js.map
    |   |   |               interopRequireWildcard.js
    |   |   |               interopRequireWildcard.js.map
    |   |   |               isNativeFunction.js
    |   |   |               isNativeFunction.js.map
    |   |   |               isNativeReflectConstruct.js
    |   |   |               isNativeReflectConstruct.js.map
    |   |   |               iterableToArray.js
    |   |   |               iterableToArray.js.map
    |   |   |               iterableToArrayLimit.js
    |   |   |               iterableToArrayLimit.js.map
    |   |   |               jsx.js
    |   |   |               jsx.js.map
    |   |   |               maybeArrayLike.js
    |   |   |               maybeArrayLike.js.map
    |   |   |               newArrowCheck.js
    |   |   |               newArrowCheck.js.map
    |   |   |               nonIterableRest.js
    |   |   |               nonIterableRest.js.map
    |   |   |               nonIterableSpread.js
    |   |   |               nonIterableSpread.js.map
    |   |   |               nullishReceiverError.js
    |   |   |               nullishReceiverError.js.map
    |   |   |               objectDestructuringEmpty.js
    |   |   |               objectDestructuringEmpty.js.map
    |   |   |               objectSpread.js
    |   |   |               objectSpread.js.map
    |   |   |               objectSpread2.js
    |   |   |               objectSpread2.js.map
    |   |   |               objectWithoutProperties.js
    |   |   |               objectWithoutProperties.js.map
    |   |   |               objectWithoutPropertiesLoose.js
    |   |   |               objectWithoutPropertiesLoose.js.map
    |   |   |               OverloadYield.js
    |   |   |               OverloadYield.js.map
    |   |   |               possibleConstructorReturn.js
    |   |   |               possibleConstructorReturn.js.map
    |   |   |               readOnlyError.js
    |   |   |               readOnlyError.js.map
    |   |   |               regenerator.js
    |   |   |               regenerator.js.map
    |   |   |               regeneratorAsync.js
    |   |   |               regeneratorAsync.js.map
    |   |   |               regeneratorAsyncGen.js
    |   |   |               regeneratorAsyncGen.js.map
    |   |   |               regeneratorAsyncIterator.js
    |   |   |               regeneratorAsyncIterator.js.map
    |   |   |               regeneratorDefine.js
    |   |   |               regeneratorDefine.js.map
    |   |   |               regeneratorKeys.js
    |   |   |               regeneratorKeys.js.map
    |   |   |               regeneratorRuntime.js
    |   |   |               regeneratorRuntime.js.map
    |   |   |               regeneratorValues.js
    |   |   |               regeneratorValues.js.map
    |   |   |               set.js
    |   |   |               set.js.map
    |   |   |               setFunctionName.js
    |   |   |               setFunctionName.js.map
    |   |   |               setPrototypeOf.js
    |   |   |               setPrototypeOf.js.map
    |   |   |               skipFirstGeneratorNext.js
    |   |   |               skipFirstGeneratorNext.js.map
    |   |   |               slicedToArray.js
    |   |   |               slicedToArray.js.map
    |   |   |               superPropBase.js
    |   |   |               superPropBase.js.map
    |   |   |               superPropGet.js
    |   |   |               superPropGet.js.map
    |   |   |               superPropSet.js
    |   |   |               superPropSet.js.map
    |   |   |               taggedTemplateLiteral.js
    |   |   |               taggedTemplateLiteral.js.map
    |   |   |               taggedTemplateLiteralLoose.js
    |   |   |               taggedTemplateLiteralLoose.js.map
    |   |   |               tdz.js
    |   |   |               tdz.js.map
    |   |   |               temporalRef.js
    |   |   |               temporalRef.js.map
    |   |   |               temporalUndefined.js
    |   |   |               temporalUndefined.js.map
    |   |   |               toArray.js
    |   |   |               toArray.js.map
    |   |   |               toConsumableArray.js
    |   |   |               toConsumableArray.js.map
    |   |   |               toPrimitive.js
    |   |   |               toPrimitive.js.map
    |   |   |               toPropertyKey.js
    |   |   |               toPropertyKey.js.map
    |   |   |               toSetter.js
    |   |   |               toSetter.js.map
    |   |   |               tsRewriteRelativeImportExtensions.js
    |   |   |               tsRewriteRelativeImportExtensions.js.map
    |   |   |               typeof.js
    |   |   |               typeof.js.map
    |   |   |               unsupportedIterableToArray.js
    |   |   |               unsupportedIterableToArray.js.map
    |   |   |               using.js
    |   |   |               using.js.map
    |   |   |               usingCtx.js
    |   |   |               usingCtx.js.map
    |   |   |               wrapAsyncGenerator.js
    |   |   |               wrapAsyncGenerator.js.map
    |   |   |               wrapNativeSuper.js
    |   |   |               wrapNativeSuper.js.map
    |   |   |               wrapRegExp.js
    |   |   |               wrapRegExp.js.map
    |   |   |               writeOnlyError.js
    |   |   |               writeOnlyError.js.map
    |   |   |               
    |   |   +---parser
    |   |   |   |   CHANGELOG.md
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   +---bin
    |   |   |   |       babel-parser.js
    |   |   |   |       
    |   |   |   +---lib
    |   |   |   |       index.js
    |   |   |   |       index.js.map
    |   |   |   |       
    |   |   |   \---typings
    |   |   |           babel-parser.d.ts
    |   |   |           
    |   |   +---plugin-transform-react-jsx-self
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           
    |   |   +---plugin-transform-react-jsx-source
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           
    |   |   +---template
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |           builder.js
    |   |   |           builder.js.map
    |   |   |           formatters.js
    |   |   |           formatters.js.map
    |   |   |           index.js
    |   |   |           index.js.map
    |   |   |           literal.js
    |   |   |           literal.js.map
    |   |   |           options.js
    |   |   |           options.js.map
    |   |   |           parse.js
    |   |   |           parse.js.map
    |   |   |           populate.js
    |   |   |           populate.js.map
    |   |   |           string.js
    |   |   |           string.js.map
    |   |   |           
    |   |   +---traverse
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---lib
    |   |   |       |   cache.js
    |   |   |       |   cache.js.map
    |   |   |       |   context.js
    |   |   |       |   context.js.map
    |   |   |       |   hub.js
    |   |   |       |   hub.js.map
    |   |   |       |   index.js
    |   |   |       |   index.js.map
    |   |   |       |   traverse-node.js
    |   |   |       |   traverse-node.js.map
    |   |   |       |   types.js
    |   |   |       |   types.js.map
    |   |   |       |   visitors.js
    |   |   |       |   visitors.js.map
    |   |   |       |   
    |   |   |       +---path
    |   |   |       |   |   ancestry.js
    |   |   |       |   |   ancestry.js.map
    |   |   |       |   |   comments.js
    |   |   |       |   |   comments.js.map
    |   |   |       |   |   context.js
    |   |   |       |   |   context.js.map
    |   |   |       |   |   conversion.js
    |   |   |       |   |   conversion.js.map
    |   |   |       |   |   evaluation.js
    |   |   |       |   |   evaluation.js.map
    |   |   |       |   |   family.js
    |   |   |       |   |   family.js.map
    |   |   |       |   |   index.js
    |   |   |       |   |   index.js.map
    |   |   |       |   |   introspection.js
    |   |   |       |   |   introspection.js.map
    |   |   |       |   |   modification.js
    |   |   |       |   |   modification.js.map
    |   |   |       |   |   removal.js
    |   |   |       |   |   removal.js.map
    |   |   |       |   |   replacement.js
    |   |   |       |   |   replacement.js.map
    |   |   |       |   |   
    |   |   |       |   +---inference
    |   |   |       |   |       index.js
    |   |   |       |   |       index.js.map
    |   |   |       |   |       inferer-reference.js
    |   |   |       |   |       inferer-reference.js.map
    |   |   |       |   |       inferers.js
    |   |   |       |   |       inferers.js.map
    |   |   |       |   |       util.js
    |   |   |       |   |       util.js.map
    |   |   |       |   |       
    |   |   |       |   \---lib
    |   |   |       |           hoister.js
    |   |   |       |           hoister.js.map
    |   |   |       |           removal-hooks.js
    |   |   |       |           removal-hooks.js.map
    |   |   |       |           virtual-types-validator.js
    |   |   |       |           virtual-types-validator.js.map
    |   |   |       |           virtual-types.js
    |   |   |       |           virtual-types.js.map
    |   |   |       |           
    |   |   |       \---scope
    |   |   |           |   binding.js
    |   |   |           |   binding.js.map
    |   |   |           |   index.js
    |   |   |           |   index.js.map
    |   |   |           |   
    |   |   |           \---lib
    |   |   |                   renamer.js
    |   |   |                   renamer.js.map
    |   |   |                   
    |   |   \---types
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |   
    |   |       \---lib
    |   |           |   index-legacy.d.ts
    |   |           |   index.d.ts
    |   |           |   index.js
    |   |           |   index.js.flow
    |   |           |   index.js.map
    |   |           |   
    |   |           +---asserts
    |   |           |   |   assertNode.js
    |   |           |   |   assertNode.js.map
    |   |           |   |   
    |   |           |   \---generated
    |   |           |           index.js
    |   |           |           index.js.map
    |   |           |           
    |   |           +---ast-types
    |   |           |   \---generated
    |   |           |           index.js
    |   |           |           index.js.map
    |   |           |           
    |   |           +---builders
    |   |           |   |   productions.js
    |   |           |   |   productions.js.map
    |   |           |   |   validateNode.js
    |   |           |   |   validateNode.js.map
    |   |           |   |   
    |   |           |   +---flow
    |   |           |   |       createFlowUnionType.js
    |   |           |   |       createFlowUnionType.js.map
    |   |           |   |       createTypeAnnotationBasedOnTypeof.js
    |   |           |   |       createTypeAnnotationBasedOnTypeof.js.map
    |   |           |   |       
    |   |           |   +---generated
    |   |           |   |       index.js
    |   |           |   |       index.js.map
    |   |           |   |       lowercase.js
    |   |           |   |       lowercase.js.map
    |   |           |   |       uppercase.js
    |   |           |   |       uppercase.js.map
    |   |           |   |       
    |   |           |   +---react
    |   |           |   |       buildChildren.js
    |   |           |   |       buildChildren.js.map
    |   |           |   |       
    |   |           |   \---typescript
    |   |           |           createTSUnionType.js
    |   |           |           createTSUnionType.js.map
    |   |           |           
    |   |           +---clone
    |   |           |       clone.js
    |   |           |       clone.js.map
    |   |           |       cloneDeep.js
    |   |           |       cloneDeep.js.map
    |   |           |       cloneDeepWithoutLoc.js
    |   |           |       cloneDeepWithoutLoc.js.map
    |   |           |       cloneNode.js
    |   |           |       cloneNode.js.map
    |   |           |       cloneWithoutLoc.js
    |   |           |       cloneWithoutLoc.js.map
    |   |           |       
    |   |           +---comments
    |   |           |       addComment.js
    |   |           |       addComment.js.map
    |   |           |       addComments.js
    |   |           |       addComments.js.map
    |   |           |       inheritInnerComments.js
    |   |           |       inheritInnerComments.js.map
    |   |           |       inheritLeadingComments.js
    |   |           |       inheritLeadingComments.js.map
    |   |           |       inheritsComments.js
    |   |           |       inheritsComments.js.map
    |   |           |       inheritTrailingComments.js
    |   |           |       inheritTrailingComments.js.map
    |   |           |       removeComments.js
    |   |           |       removeComments.js.map
    |   |           |       
    |   |           +---constants
    |   |           |   |   index.js
    |   |           |   |   index.js.map
    |   |           |   |   
    |   |           |   \---generated
    |   |           |           index.js
    |   |           |           index.js.map
    |   |           |           
    |   |           +---converters
    |   |           |       ensureBlock.js
    |   |           |       ensureBlock.js.map
    |   |           |       gatherSequenceExpressions.js
    |   |           |       gatherSequenceExpressions.js.map
    |   |           |       toBindingIdentifierName.js
    |   |           |       toBindingIdentifierName.js.map
    |   |           |       toBlock.js
    |   |           |       toBlock.js.map
    |   |           |       toComputedKey.js
    |   |           |       toComputedKey.js.map
    |   |           |       toExpression.js
    |   |           |       toExpression.js.map
    |   |           |       toIdentifier.js
    |   |           |       toIdentifier.js.map
    |   |           |       toKeyAlias.js
    |   |           |       toKeyAlias.js.map
    |   |           |       toSequenceExpression.js
    |   |           |       toSequenceExpression.js.map
    |   |           |       toStatement.js
    |   |           |       toStatement.js.map
    |   |           |       valueToNode.js
    |   |           |       valueToNode.js.map
    |   |           |       
    |   |           +---definitions
    |   |           |       core.js
    |   |           |       core.js.map
    |   |           |       deprecated-aliases.js
    |   |           |       deprecated-aliases.js.map
    |   |           |       experimental.js
    |   |           |       experimental.js.map
    |   |           |       flow.js
    |   |           |       flow.js.map
    |   |           |       index.js
    |   |           |       index.js.map
    |   |           |       jsx.js
    |   |           |       jsx.js.map
    |   |           |       misc.js
    |   |           |       misc.js.map
    |   |           |       placeholders.js
    |   |           |       placeholders.js.map
    |   |           |       typescript.js
    |   |           |       typescript.js.map
    |   |           |       utils.js
    |   |           |       utils.js.map
    |   |           |       
    |   |           +---modifications
    |   |           |   |   appendToMemberExpression.js
    |   |           |   |   appendToMemberExpression.js.map
    |   |           |   |   inherits.js
    |   |           |   |   inherits.js.map
    |   |           |   |   prependToMemberExpression.js
    |   |           |   |   prependToMemberExpression.js.map
    |   |           |   |   removeProperties.js
    |   |           |   |   removeProperties.js.map
    |   |           |   |   removePropertiesDeep.js
    |   |           |   |   removePropertiesDeep.js.map
    |   |           |   |   
    |   |           |   +---flow
    |   |           |   |       removeTypeDuplicates.js
    |   |           |   |       removeTypeDuplicates.js.map
    |   |           |   |       
    |   |           |   \---typescript
    |   |           |           removeTypeDuplicates.js
    |   |           |           removeTypeDuplicates.js.map
    |   |           |           
    |   |           +---retrievers
    |   |           |       getAssignmentIdentifiers.js
    |   |           |       getAssignmentIdentifiers.js.map
    |   |           |       getBindingIdentifiers.js
    |   |           |       getBindingIdentifiers.js.map
    |   |           |       getFunctionName.js
    |   |           |       getFunctionName.js.map
    |   |           |       getOuterBindingIdentifiers.js
    |   |           |       getOuterBindingIdentifiers.js.map
    |   |           |       
    |   |           +---traverse
    |   |           |       traverse.js
    |   |           |       traverse.js.map
    |   |           |       traverseFast.js
    |   |           |       traverseFast.js.map
    |   |           |       
    |   |           +---utils
    |   |           |   |   deprecationWarning.js
    |   |           |   |   deprecationWarning.js.map
    |   |           |   |   inherit.js
    |   |           |   |   inherit.js.map
    |   |           |   |   shallowEqual.js
    |   |           |   |   shallowEqual.js.map
    |   |           |   |   
    |   |           |   \---react
    |   |           |           cleanJSXElementLiteralChild.js
    |   |           |           cleanJSXElementLiteralChild.js.map
    |   |           |           
    |   |           \---validators
    |   |               |   buildMatchMemberExpression.js
    |   |               |   buildMatchMemberExpression.js.map
    |   |               |   is.js
    |   |               |   is.js.map
    |   |               |   isBinding.js
    |   |               |   isBinding.js.map
    |   |               |   isBlockScoped.js
    |   |               |   isBlockScoped.js.map
    |   |               |   isImmutable.js
    |   |               |   isImmutable.js.map
    |   |               |   isLet.js
    |   |               |   isLet.js.map
    |   |               |   isNode.js
    |   |               |   isNode.js.map
    |   |               |   isNodesEquivalent.js
    |   |               |   isNodesEquivalent.js.map
    |   |               |   isPlaceholderType.js
    |   |               |   isPlaceholderType.js.map
    |   |               |   isReferenced.js
    |   |               |   isReferenced.js.map
    |   |               |   isScope.js
    |   |               |   isScope.js.map
    |   |               |   isSpecifierDefault.js
    |   |               |   isSpecifierDefault.js.map
    |   |               |   isType.js
    |   |               |   isType.js.map
    |   |               |   isValidES3Identifier.js
    |   |               |   isValidES3Identifier.js.map
    |   |               |   isValidIdentifier.js
    |   |               |   isValidIdentifier.js.map
    |   |               |   isVar.js
    |   |               |   isVar.js.map
    |   |               |   matchesPattern.js
    |   |               |   matchesPattern.js.map
    |   |               |   validate.js
    |   |               |   validate.js.map
    |   |               |   
    |   |               +---generated
    |   |               |       index.js
    |   |               |       index.js.map
    |   |               |       
    |   |               \---react
    |   |                       isCompatTag.js
    |   |                       isCompatTag.js.map
    |   |                       isReactComponent.js
    |   |                       isReactComponent.js.map
    |   |                       
    |   +---@esbuild
    |   |   \---win32-x64
    |   |           esbuild.exe
    |   |           package.json
    |   |           README.md
    |   |           
    |   +---@jridgewell
    |   |   +---gen-mapping
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   +---dist
    |   |   |   |   |   gen-mapping.mjs
    |   |   |   |   |   gen-mapping.mjs.map
    |   |   |   |   |   gen-mapping.umd.js
    |   |   |   |   |   gen-mapping.umd.js.map
    |   |   |   |   |   
    |   |   |   |   \---types
    |   |   |   |           gen-mapping.d.ts
    |   |   |   |           set-array.d.ts
    |   |   |   |           sourcemap-segment.d.ts
    |   |   |   |           types.d.ts
    |   |   |   |           
    |   |   |   +---src
    |   |   |   |       gen-mapping.ts
    |   |   |   |       set-array.ts
    |   |   |   |       sourcemap-segment.ts
    |   |   |   |       types.ts
    |   |   |   |       
    |   |   |   \---types
    |   |   |           gen-mapping.d.cts
    |   |   |           gen-mapping.d.cts.map
    |   |   |           gen-mapping.d.mts
    |   |   |           gen-mapping.d.mts.map
    |   |   |           set-array.d.cts
    |   |   |           set-array.d.cts.map
    |   |   |           set-array.d.mts
    |   |   |           set-array.d.mts.map
    |   |   |           sourcemap-segment.d.cts
    |   |   |           sourcemap-segment.d.cts.map
    |   |   |           sourcemap-segment.d.mts
    |   |   |           sourcemap-segment.d.mts.map
    |   |   |           types.d.cts
    |   |   |           types.d.cts.map
    |   |   |           types.d.mts
    |   |   |           types.d.mts.map
    |   |   |           
    |   |   +---remapping
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   +---dist
    |   |   |   |       remapping.mjs
    |   |   |   |       remapping.mjs.map
    |   |   |   |       remapping.umd.js
    |   |   |   |       remapping.umd.js.map
    |   |   |   |       
    |   |   |   +---src
    |   |   |   |       build-source-map-tree.ts
    |   |   |   |       remapping.ts
    |   |   |   |       source-map-tree.ts
    |   |   |   |       source-map.ts
    |   |   |   |       types.ts
    |   |   |   |       
    |   |   |   \---types
    |   |   |           build-source-map-tree.d.cts
    |   |   |           build-source-map-tree.d.cts.map
    |   |   |           build-source-map-tree.d.mts
    |   |   |           build-source-map-tree.d.mts.map
    |   |   |           remapping.d.cts
    |   |   |           remapping.d.cts.map
    |   |   |           remapping.d.mts
    |   |   |           remapping.d.mts.map
    |   |   |           source-map-tree.d.cts
    |   |   |           source-map-tree.d.cts.map
    |   |   |           source-map-tree.d.mts
    |   |   |           source-map-tree.d.mts.map
    |   |   |           source-map.d.cts
    |   |   |           source-map.d.cts.map
    |   |   |           source-map.d.mts
    |   |   |           source-map.d.mts.map
    |   |   |           types.d.cts
    |   |   |           types.d.cts.map
    |   |   |           types.d.mts
    |   |   |           types.d.mts.map
    |   |   |           
    |   |   +---resolve-uri
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   \---dist
    |   |   |       |   resolve-uri.mjs
    |   |   |       |   resolve-uri.mjs.map
    |   |   |       |   resolve-uri.umd.js
    |   |   |       |   resolve-uri.umd.js.map
    |   |   |       |   
    |   |   |       \---types
    |   |   |               resolve-uri.d.ts
    |   |   |               
    |   |   +---sourcemap-codec
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   
    |   |   |   +---dist
    |   |   |   |       sourcemap-codec.mjs
    |   |   |   |       sourcemap-codec.mjs.map
    |   |   |   |       sourcemap-codec.umd.js
    |   |   |   |       sourcemap-codec.umd.js.map
    |   |   |   |       
    |   |   |   +---src
    |   |   |   |       scopes.ts
    |   |   |   |       sourcemap-codec.ts
    |   |   |   |       strings.ts
    |   |   |   |       vlq.ts
    |   |   |   |       
    |   |   |   \---types
    |   |   |           scopes.d.cts
    |   |   |           scopes.d.cts.map
    |   |   |           scopes.d.mts
    |   |   |           scopes.d.mts.map
    |   |   |           sourcemap-codec.d.cts
    |   |   |           sourcemap-codec.d.cts.map
    |   |   |           sourcemap-codec.d.mts
    |   |   |           sourcemap-codec.d.mts.map
    |   |   |           strings.d.cts
    |   |   |           strings.d.cts.map
    |   |   |           strings.d.mts
    |   |   |           strings.d.mts.map
    |   |   |           vlq.d.cts
    |   |   |           vlq.d.cts.map
    |   |   |           vlq.d.mts
    |   |   |           vlq.d.mts.map
    |   |   |           
    |   |   \---trace-mapping
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |   
    |   |       +---dist
    |   |       |       trace-mapping.mjs
    |   |       |       trace-mapping.mjs.map
    |   |       |       trace-mapping.umd.js
    |   |       |       trace-mapping.umd.js.map
    |   |       |       
    |   |       +---src
    |   |       |       binary-search.ts
    |   |       |       by-source.ts
    |   |       |       flatten-map.ts
    |   |       |       resolve.ts
    |   |       |       sort.ts
    |   |       |       sourcemap-segment.ts
    |   |       |       strip-filename.ts
    |   |       |       trace-mapping.ts
    |   |       |       types.ts
    |   |       |       
    |   |       \---types
    |   |               binary-search.d.cts
    |   |               binary-search.d.cts.map
    |   |               binary-search.d.mts
    |   |               binary-search.d.mts.map
    |   |               by-source.d.cts
    |   |               by-source.d.cts.map
    |   |               by-source.d.mts
    |   |               by-source.d.mts.map
    |   |               flatten-map.d.cts
    |   |               flatten-map.d.cts.map
    |   |               flatten-map.d.mts
    |   |               flatten-map.d.mts.map
    |   |               resolve.d.cts
    |   |               resolve.d.cts.map
    |   |               resolve.d.mts
    |   |               resolve.d.mts.map
    |   |               sort.d.cts
    |   |               sort.d.cts.map
    |   |               sort.d.mts
    |   |               sort.d.mts.map
    |   |               sourcemap-segment.d.cts
    |   |               sourcemap-segment.d.cts.map
    |   |               sourcemap-segment.d.mts
    |   |               sourcemap-segment.d.mts.map
    |   |               strip-filename.d.cts
    |   |               strip-filename.d.cts.map
    |   |               strip-filename.d.mts
    |   |               strip-filename.d.mts.map
    |   |               trace-mapping.d.cts
    |   |               trace-mapping.d.cts.map
    |   |               trace-mapping.d.mts
    |   |               trace-mapping.d.mts.map
    |   |               types.d.cts
    |   |               types.d.cts.map
    |   |               types.d.mts
    |   |               types.d.mts.map
    |   |               
    |   +---@remix-run
    |   |   \---router
    |   |       |   CHANGELOG.md
    |   |       |   history.ts
    |   |       |   index.ts
    |   |       |   LICENSE.md
    |   |       |   package.json
    |   |       |   README.md
    |   |       |   router.ts
    |   |       |   utils.ts
    |   |       |   
    |   |       \---dist
    |   |               history.d.ts
    |   |               index.d.ts
    |   |               router.cjs.js
    |   |               router.cjs.js.map
    |   |               router.d.ts
    |   |               router.js
    |   |               router.js.map
    |   |               router.umd.js
    |   |               router.umd.js.map
    |   |               router.umd.min.js
    |   |               router.umd.min.js.map
    |   |               utils.d.ts
    |   |               
    |   +---@rolldown
    |   |   \---pluginutils
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   
    |   |       \---dist
    |   |               index.cjs
    |   |               index.d.cts
    |   |               index.d.ts
    |   |               index.js
    |   |               
    |   +---@rollup
    |   |   +---rollup-win32-x64-gnu
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       rollup.win32-x64-gnu.node
    |   |   |       
    |   |   \---rollup-win32-x64-msvc
    |   |           package.json
    |   |           README.md
    |   |           rollup.win32-x64-msvc.node
    |   |           
    |   +---@types
    |   |   +---babel__core
    |   |   |       index.d.ts
    |   |   |       LICENSE
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       
    |   |   +---babel__generator
    |   |   |       index.d.ts
    |   |   |       LICENSE
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       
    |   |   +---babel__template
    |   |   |       index.d.ts
    |   |   |       LICENSE
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       
    |   |   +---babel__traverse
    |   |   |       index.d.ts
    |   |   |       LICENSE
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       
    |   |   \---estree
    |   |           flow.d.ts
    |   |           index.d.ts
    |   |           LICENSE
    |   |           package.json
    |   |           README.md
    |   |           
    |   +---@vitejs
    |   |   \---plugin-react
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |   
    |   |       \---dist
    |   |               index.cjs
    |   |               index.d.cts
    |   |               index.d.ts
    |   |               index.js
    |   |               refresh-runtime.js
    |   |               
    |   +---asynckit
    |   |   |   bench.js
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   parallel.js
    |   |   |   README.md
    |   |   |   serial.js
    |   |   |   serialOrdered.js
    |   |   |   stream.js
    |   |   |   
    |   |   \---lib
    |   |           abort.js
    |   |           async.js
    |   |           defer.js
    |   |           iterate.js
    |   |           readable_asynckit.js
    |   |           readable_parallel.js
    |   |           readable_serial.js
    |   |           readable_serial_ordered.js
    |   |           state.js
    |   |           streamify.js
    |   |           terminator.js
    |   |           
    |   +---axios
    |   |   |   CHANGELOG.md
    |   |   |   index.d.cts
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   MIGRATION_GUIDE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---dist
    |   |   |   |   axios.js
    |   |   |   |   axios.js.map
    |   |   |   |   axios.min.js
    |   |   |   |   axios.min.js.map
    |   |   |   |   
    |   |   |   +---browser
    |   |   |   |       axios.cjs
    |   |   |   |       axios.cjs.map
    |   |   |   |       
    |   |   |   +---esm
    |   |   |   |       axios.js
    |   |   |   |       axios.js.map
    |   |   |   |       axios.min.js
    |   |   |   |       axios.min.js.map
    |   |   |   |       
    |   |   |   \---node
    |   |   |           axios.cjs
    |   |   |           axios.cjs.map
    |   |   |           
    |   |   \---lib
    |   |       |   axios.js
    |   |       |   utils.js
    |   |       |   
    |   |       +---adapters
    |   |       |       adapters.js
    |   |       |       fetch.js
    |   |       |       http.js
    |   |       |       README.md
    |   |       |       xhr.js
    |   |       |       
    |   |       +---cancel
    |   |       |       CanceledError.js
    |   |       |       CancelToken.js
    |   |       |       isCancel.js
    |   |       |       
    |   |       +---core
    |   |       |       Axios.js
    |   |       |       AxiosError.js
    |   |       |       AxiosHeaders.js
    |   |       |       buildFullPath.js
    |   |       |       dispatchRequest.js
    |   |       |       InterceptorManager.js
    |   |       |       mergeConfig.js
    |   |       |       README.md
    |   |       |       settle.js
    |   |       |       transformData.js
    |   |       |       
    |   |       +---defaults
    |   |       |       index.js
    |   |       |       transitional.js
    |   |       |       
    |   |       +---env
    |   |       |   |   data.js
    |   |       |   |   README.md
    |   |       |   |   
    |   |       |   \---classes
    |   |       |           FormData.js
    |   |       |           
    |   |       +---helpers
    |   |       |       AxiosTransformStream.js
    |   |       |       AxiosURLSearchParams.js
    |   |       |       bind.js
    |   |       |       buildURL.js
    |   |       |       callbackify.js
    |   |       |       combineURLs.js
    |   |       |       composeSignals.js
    |   |       |       cookies.js
    |   |       |       deprecatedMethod.js
    |   |       |       estimateDataURLDecodedBytes.js
    |   |       |       formDataToJSON.js
    |   |       |       formDataToStream.js
    |   |       |       fromDataURI.js
    |   |       |       HttpStatusCode.js
    |   |       |       isAbsoluteURL.js
    |   |       |       isAxiosError.js
    |   |       |       isURLSameOrigin.js
    |   |       |       null.js
    |   |       |       parseHeaders.js
    |   |       |       parseProtocol.js
    |   |       |       progressEventReducer.js
    |   |       |       readBlob.js
    |   |       |       README.md
    |   |       |       resolveConfig.js
    |   |       |       speedometer.js
    |   |       |       spread.js
    |   |       |       throttle.js
    |   |       |       toFormData.js
    |   |       |       toURLEncodedForm.js
    |   |       |       trackStream.js
    |   |       |       validator.js
    |   |       |       ZlibHeaderTransformStream.js
    |   |       |       
    |   |       \---platform
    |   |           |   index.js
    |   |           |   
    |   |           +---browser
    |   |           |   |   index.js
    |   |           |   |   
    |   |           |   \---classes
    |   |           |           Blob.js
    |   |           |           FormData.js
    |   |           |           URLSearchParams.js
    |   |           |           
    |   |           +---common
    |   |           |       utils.js
    |   |           |       
    |   |           \---node
    |   |               |   index.js
    |   |               |   
    |   |               \---classes
    |   |                       FormData.js
    |   |                       URLSearchParams.js
    |   |                       
    |   +---baseline-browser-mapping
    |   |   |   LICENSE.txt
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---dist
    |   |           cli.js
    |   |           index.cjs
    |   |           index.d.ts
    |   |           index.js
    |   |           
    |   +---browserslist
    |   |       browser.js
    |   |       cli.js
    |   |       error.d.ts
    |   |       error.js
    |   |       index.d.ts
    |   |       index.js
    |   |       LICENSE
    |   |       node.js
    |   |       package.json
    |   |       parse.js
    |   |       README.md
    |   |       
    |   +---call-bind-apply-helpers
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   actualApply.d.ts
    |   |   |   actualApply.js
    |   |   |   applyBind.d.ts
    |   |   |   applyBind.js
    |   |   |   CHANGELOG.md
    |   |   |   functionApply.d.ts
    |   |   |   functionApply.js
    |   |   |   functionCall.d.ts
    |   |   |   functionCall.js
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   reflectApply.d.ts
    |   |   |   reflectApply.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---caniuse-lite
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---data
    |   |   |   |   agents.js
    |   |   |   |   browsers.js
    |   |   |   |   browserVersions.js
    |   |   |   |   features.js
    |   |   |   |   
    |   |   |   +---features
    |   |   |   |       aac.js
    |   |   |   |       abortcontroller.js
    |   |   |   |       ac3-ec3.js
    |   |   |   |       accelerometer.js
    |   |   |   |       addeventlistener.js
    |   |   |   |       alternate-stylesheet.js
    |   |   |   |       ambient-light.js
    |   |   |   |       apng.js
    |   |   |   |       array-find-index.js
    |   |   |   |       array-find.js
    |   |   |   |       array-flat.js
    |   |   |   |       array-includes.js
    |   |   |   |       arrow-functions.js
    |   |   |   |       asmjs.js
    |   |   |   |       async-clipboard.js
    |   |   |   |       async-functions.js
    |   |   |   |       atob-btoa.js
    |   |   |   |       audio-api.js
    |   |   |   |       audio.js
    |   |   |   |       audiotracks.js
    |   |   |   |       autofocus.js
    |   |   |   |       auxclick.js
    |   |   |   |       av1.js
    |   |   |   |       avif.js
    |   |   |   |       background-attachment.js
    |   |   |   |       background-clip-text.js
    |   |   |   |       background-img-opts.js
    |   |   |   |       background-position-x-y.js
    |   |   |   |       background-repeat-round-space.js
    |   |   |   |       background-sync.js
    |   |   |   |       battery-status.js
    |   |   |   |       beacon.js
    |   |   |   |       beforeafterprint.js
    |   |   |   |       bigint.js
    |   |   |   |       blobbuilder.js
    |   |   |   |       bloburls.js
    |   |   |   |       border-image.js
    |   |   |   |       border-radius.js
    |   |   |   |       broadcastchannel.js
    |   |   |   |       brotli.js
    |   |   |   |       calc.js
    |   |   |   |       canvas-blending.js
    |   |   |   |       canvas-text.js
    |   |   |   |       canvas.js
    |   |   |   |       ch-unit.js
    |   |   |   |       chacha20-poly1305.js
    |   |   |   |       channel-messaging.js
    |   |   |   |       childnode-remove.js
    |   |   |   |       classlist.js
    |   |   |   |       client-hints-dpr-width-viewport.js
    |   |   |   |       clipboard.js
    |   |   |   |       colr-v1.js
    |   |   |   |       colr.js
    |   |   |   |       comparedocumentposition.js
    |   |   |   |       console-basic.js
    |   |   |   |       console-time.js
    |   |   |   |       const.js
    |   |   |   |       constraint-validation.js
    |   |   |   |       contenteditable.js
    |   |   |   |       contentsecuritypolicy.js
    |   |   |   |       contentsecuritypolicy2.js
    |   |   |   |       cookie-store-api.js
    |   |   |   |       cors.js
    |   |   |   |       createimagebitmap.js
    |   |   |   |       credential-management.js
    |   |   |   |       cross-document-view-transitions.js
    |   |   |   |       cryptography.js
    |   |   |   |       css-all.js
    |   |   |   |       css-anchor-positioning.js
    |   |   |   |       css-animation.js
    |   |   |   |       css-any-link.js
    |   |   |   |       css-appearance.js
    |   |   |   |       css-at-counter-style.js
    |   |   |   |       css-autofill.js
    |   |   |   |       css-backdrop-filter.js
    |   |   |   |       css-background-offsets.js
    |   |   |   |       css-backgroundblendmode.js
    |   |   |   |       css-boxdecorationbreak.js
    |   |   |   |       css-boxshadow.js
    |   |   |   |       css-canvas.js
    |   |   |   |       css-caret-color.js
    |   |   |   |       css-cascade-layers.js
    |   |   |   |       css-cascade-scope.js
    |   |   |   |       css-case-insensitive.js
    |   |   |   |       css-clip-path.js
    |   |   |   |       css-color-adjust.js
    |   |   |   |       css-color-function.js
    |   |   |   |       css-conic-gradients.js
    |   |   |   |       css-container-queries-style.js
    |   |   |   |       css-container-queries.js
    |   |   |   |       css-container-query-units.js
    |   |   |   |       css-containment.js
    |   |   |   |       css-content-visibility.js
    |   |   |   |       css-counters.js
    |   |   |   |       css-crisp-edges.js
    |   |   |   |       css-cross-fade.js
    |   |   |   |       css-default-pseudo.js
    |   |   |   |       css-descendant-gtgt.js
    |   |   |   |       css-deviceadaptation.js
    |   |   |   |       css-dir-pseudo.js
    |   |   |   |       css-display-contents.js
    |   |   |   |       css-element-function.js
    |   |   |   |       css-env-function.js
    |   |   |   |       css-exclusions.js
    |   |   |   |       css-featurequeries.js
    |   |   |   |       css-file-selector-button.js
    |   |   |   |       css-filter-function.js
    |   |   |   |       css-filters.js
    |   |   |   |       css-first-letter.js
    |   |   |   |       css-first-line.js
    |   |   |   |       css-fixed.js
    |   |   |   |       css-focus-visible.js
    |   |   |   |       css-focus-within.js
    |   |   |   |       css-font-palette.js
    |   |   |   |       css-font-rendering-controls.js
    |   |   |   |       css-font-stretch.js
    |   |   |   |       css-gencontent.js
    |   |   |   |       css-gradients.js
    |   |   |   |       css-grid-animation.js
    |   |   |   |       css-grid.js
    |   |   |   |       css-hanging-punctuation.js
    |   |   |   |       css-has.js
    |   |   |   |       css-hyphens.js
    |   |   |   |       css-if.js
    |   |   |   |       css-image-orientation.js
    |   |   |   |       css-image-set.js
    |   |   |   |       css-in-out-of-range.js
    |   |   |   |       css-indeterminate-pseudo.js
    |   |   |   |       css-initial-letter.js
    |   |   |   |       css-initial-value.js
    |   |   |   |       css-lch-lab.js
    |   |   |   |       css-letter-spacing.js
    |   |   |   |       css-line-clamp.js
    |   |   |   |       css-logical-props.js
    |   |   |   |       css-marker-pseudo.js
    |   |   |   |       css-masks.js
    |   |   |   |       css-matches-pseudo.js
    |   |   |   |       css-math-functions.js
    |   |   |   |       css-media-interaction.js
    |   |   |   |       css-media-range-syntax.js
    |   |   |   |       css-media-resolution.js
    |   |   |   |       css-media-scripting.js
    |   |   |   |       css-mediaqueries.js
    |   |   |   |       css-mixblendmode.js
    |   |   |   |       css-module-scripts.js
    |   |   |   |       css-motion-paths.js
    |   |   |   |       css-namespaces.js
    |   |   |   |       css-nesting.js
    |   |   |   |       css-not-sel-list.js
    |   |   |   |       css-nth-child-of.js
    |   |   |   |       css-opacity.js
    |   |   |   |       css-optional-pseudo.js
    |   |   |   |       css-overflow-anchor.js
    |   |   |   |       css-overflow-overlay.js
    |   |   |   |       css-overflow.js
    |   |   |   |       css-overscroll-behavior.js
    |   |   |   |       css-page-break.js
    |   |   |   |       css-paged-media.js
    |   |   |   |       css-paint-api.js
    |   |   |   |       css-placeholder-shown.js
    |   |   |   |       css-placeholder.js
    |   |   |   |       css-print-color-adjust.js
    |   |   |   |       css-read-only-write.js
    |   |   |   |       css-rebeccapurple.js
    |   |   |   |       css-reflections.js
    |   |   |   |       css-regions.js
    |   |   |   |       css-relative-colors.js
    |   |   |   |       css-repeating-gradients.js
    |   |   |   |       css-resize.js
    |   |   |   |       css-revert-value.js
    |   |   |   |       css-rrggbbaa.js
    |   |   |   |       css-scroll-behavior.js
    |   |   |   |       css-scrollbar.js
    |   |   |   |       css-sel2.js
    |   |   |   |       css-sel3.js
    |   |   |   |       css-selection.js
    |   |   |   |       css-shapes.js
    |   |   |   |       css-snappoints.js
    |   |   |   |       css-sticky.js
    |   |   |   |       css-subgrid.js
    |   |   |   |       css-supports-api.js
    |   |   |   |       css-table.js
    |   |   |   |       css-text-align-last.js
    |   |   |   |       css-text-box-trim.js
    |   |   |   |       css-text-indent.js
    |   |   |   |       css-text-justify.js
    |   |   |   |       css-text-orientation.js
    |   |   |   |       css-text-spacing.js
    |   |   |   |       css-text-wrap-balance.js
    |   |   |   |       css-textshadow.js
    |   |   |   |       css-touch-action.js
    |   |   |   |       css-transitions.js
    |   |   |   |       css-unicode-bidi.js
    |   |   |   |       css-unset-value.js
    |   |   |   |       css-variables.js
    |   |   |   |       css-when-else.js
    |   |   |   |       css-widows-orphans.js
    |   |   |   |       css-width-stretch.js
    |   |   |   |       css-writing-mode.js
    |   |   |   |       css-zoom.js
    |   |   |   |       css3-attr.js
    |   |   |   |       css3-boxsizing.js
    |   |   |   |       css3-colors.js
    |   |   |   |       css3-cursors-grab.js
    |   |   |   |       css3-cursors-newer.js
    |   |   |   |       css3-cursors.js
    |   |   |   |       css3-tabsize.js
    |   |   |   |       currentcolor.js
    |   |   |   |       custom-elements.js
    |   |   |   |       custom-elementsv1.js
    |   |   |   |       customevent.js
    |   |   |   |       datalist.js
    |   |   |   |       dataset.js
    |   |   |   |       datauri.js
    |   |   |   |       date-tolocaledatestring.js
    |   |   |   |       declarative-shadow-dom.js
    |   |   |   |       decorators.js
    |   |   |   |       details.js
    |   |   |   |       deviceorientation.js
    |   |   |   |       devicepixelratio.js
    |   |   |   |       dialog.js
    |   |   |   |       dispatchevent.js
    |   |   |   |       dnssec.js
    |   |   |   |       do-not-track.js
    |   |   |   |       document-currentscript.js
    |   |   |   |       document-evaluate-xpath.js
    |   |   |   |       document-execcommand.js
    |   |   |   |       document-policy.js
    |   |   |   |       document-scrollingelement.js
    |   |   |   |       documenthead.js
    |   |   |   |       dom-manip-convenience.js
    |   |   |   |       dom-range.js
    |   |   |   |       domcontentloaded.js
    |   |   |   |       dommatrix.js
    |   |   |   |       download.js
    |   |   |   |       dragndrop.js
    |   |   |   |       element-closest.js
    |   |   |   |       element-from-point.js
    |   |   |   |       element-scroll-methods.js
    |   |   |   |       eme.js
    |   |   |   |       eot.js
    |   |   |   |       es5.js
    |   |   |   |       es6-class.js
    |   |   |   |       es6-generators.js
    |   |   |   |       es6-module-dynamic-import.js
    |   |   |   |       es6-module.js
    |   |   |   |       es6-number.js
    |   |   |   |       es6-string-includes.js
    |   |   |   |       es6.js
    |   |   |   |       eventsource.js
    |   |   |   |       extended-system-fonts.js
    |   |   |   |       feature-policy.js
    |   |   |   |       fetch.js
    |   |   |   |       fieldset-disabled.js
    |   |   |   |       fileapi.js
    |   |   |   |       filereader.js
    |   |   |   |       filereadersync.js
    |   |   |   |       filesystem.js
    |   |   |   |       flac.js
    |   |   |   |       flexbox-gap.js
    |   |   |   |       flexbox.js
    |   |   |   |       flow-root.js
    |   |   |   |       focusin-focusout-events.js
    |   |   |   |       font-family-system-ui.js
    |   |   |   |       font-feature.js
    |   |   |   |       font-kerning.js
    |   |   |   |       font-loading.js
    |   |   |   |       font-size-adjust.js
    |   |   |   |       font-smooth.js
    |   |   |   |       font-unicode-range.js
    |   |   |   |       font-variant-alternates.js
    |   |   |   |       font-variant-numeric.js
    |   |   |   |       fontface.js
    |   |   |   |       form-attribute.js
    |   |   |   |       form-submit-attributes.js
    |   |   |   |       form-validation.js
    |   |   |   |       forms.js
    |   |   |   |       fullscreen.js
    |   |   |   |       gamepad.js
    |   |   |   |       geolocation.js
    |   |   |   |       getboundingclientrect.js
    |   |   |   |       getcomputedstyle.js
    |   |   |   |       getelementsbyclassname.js
    |   |   |   |       getrandomvalues.js
    |   |   |   |       gyroscope.js
    |   |   |   |       hardwareconcurrency.js
    |   |   |   |       hashchange.js
    |   |   |   |       heif.js
    |   |   |   |       hevc.js
    |   |   |   |       hidden.js
    |   |   |   |       high-resolution-time.js
    |   |   |   |       history.js
    |   |   |   |       html-media-capture.js
    |   |   |   |       html5semantic.js
    |   |   |   |       http-live-streaming.js
    |   |   |   |       http2.js
    |   |   |   |       http3.js
    |   |   |   |       iframe-sandbox.js
    |   |   |   |       iframe-seamless.js
    |   |   |   |       iframe-srcdoc.js
    |   |   |   |       imagecapture.js
    |   |   |   |       ime.js
    |   |   |   |       img-naturalwidth-naturalheight.js
    |   |   |   |       import-maps.js
    |   |   |   |       imports.js
    |   |   |   |       indeterminate-checkbox.js
    |   |   |   |       indexeddb.js
    |   |   |   |       indexeddb2.js
    |   |   |   |       inline-block.js
    |   |   |   |       innertext.js
    |   |   |   |       input-autocomplete-onoff.js
    |   |   |   |       input-color.js
    |   |   |   |       input-datetime.js
    |   |   |   |       input-email-tel-url.js
    |   |   |   |       input-event.js
    |   |   |   |       input-file-accept.js
    |   |   |   |       input-file-directory.js
    |   |   |   |       input-file-multiple.js
    |   |   |   |       input-inputmode.js
    |   |   |   |       input-minlength.js
    |   |   |   |       input-number.js
    |   |   |   |       input-pattern.js
    |   |   |   |       input-placeholder.js
    |   |   |   |       input-range.js
    |   |   |   |       input-search.js
    |   |   |   |       input-selection.js
    |   |   |   |       insert-adjacent.js
    |   |   |   |       insertadjacenthtml.js
    |   |   |   |       internationalization.js
    |   |   |   |       intersectionobserver-v2.js
    |   |   |   |       intersectionobserver.js
    |   |   |   |       intl-pluralrules.js
    |   |   |   |       intrinsic-width.js
    |   |   |   |       jpeg2000.js
    |   |   |   |       jpegxl.js
    |   |   |   |       jpegxr.js
    |   |   |   |       js-regexp-lookbehind.js
    |   |   |   |       json.js
    |   |   |   |       justify-content-space-evenly.js
    |   |   |   |       kerning-pairs-ligatures.js
    |   |   |   |       keyboardevent-charcode.js
    |   |   |   |       keyboardevent-code.js
    |   |   |   |       keyboardevent-getmodifierstate.js
    |   |   |   |       keyboardevent-key.js
    |   |   |   |       keyboardevent-location.js
    |   |   |   |       keyboardevent-which.js
    |   |   |   |       lazyload.js
    |   |   |   |       let.js
    |   |   |   |       link-icon-png.js
    |   |   |   |       link-icon-svg.js
    |   |   |   |       link-rel-dns-prefetch.js
    |   |   |   |       link-rel-modulepreload.js
    |   |   |   |       link-rel-preconnect.js
    |   |   |   |       link-rel-prefetch.js
    |   |   |   |       link-rel-preload.js
    |   |   |   |       link-rel-prerender.js
    |   |   |   |       loading-lazy-attr.js
    |   |   |   |       localecompare.js
    |   |   |   |       magnetometer.js
    |   |   |   |       matchesselector.js
    |   |   |   |       matchmedia.js
    |   |   |   |       mathml.js
    |   |   |   |       maxlength.js
    |   |   |   |       mdn-css-backdrop-pseudo-element.js
    |   |   |   |       mdn-css-unicode-bidi-isolate-override.js
    |   |   |   |       mdn-css-unicode-bidi-isolate.js
    |   |   |   |       mdn-css-unicode-bidi-plaintext.js
    |   |   |   |       mdn-text-decoration-color.js
    |   |   |   |       mdn-text-decoration-line.js
    |   |   |   |       mdn-text-decoration-shorthand.js
    |   |   |   |       mdn-text-decoration-style.js
    |   |   |   |       media-fragments.js
    |   |   |   |       mediacapture-fromelement.js
    |   |   |   |       mediarecorder.js
    |   |   |   |       mediasource.js
    |   |   |   |       menu.js
    |   |   |   |       meta-theme-color.js
    |   |   |   |       meter.js
    |   |   |   |       midi.js
    |   |   |   |       minmaxwh.js
    |   |   |   |       mp3.js
    |   |   |   |       mpeg-dash.js
    |   |   |   |       mpeg4.js
    |   |   |   |       multibackgrounds.js
    |   |   |   |       multicolumn.js
    |   |   |   |       mutation-events.js
    |   |   |   |       mutationobserver.js
    |   |   |   |       namevalue-storage.js
    |   |   |   |       native-filesystem-api.js
    |   |   |   |       nav-timing.js
    |   |   |   |       netinfo.js
    |   |   |   |       notifications.js
    |   |   |   |       object-entries.js
    |   |   |   |       object-fit.js
    |   |   |   |       object-observe.js
    |   |   |   |       object-values.js
    |   |   |   |       objectrtc.js
    |   |   |   |       offline-apps.js
    |   |   |   |       offscreencanvas.js
    |   |   |   |       ogg-vorbis.js
    |   |   |   |       ogv.js
    |   |   |   |       ol-reversed.js
    |   |   |   |       once-event-listener.js
    |   |   |   |       online-status.js
    |   |   |   |       opus.js
    |   |   |   |       orientation-sensor.js
    |   |   |   |       outline.js
    |   |   |   |       pad-start-end.js
    |   |   |   |       page-transition-events.js
    |   |   |   |       pagevisibility.js
    |   |   |   |       passive-event-listener.js
    |   |   |   |       passkeys.js
    |   |   |   |       passwordrules.js
    |   |   |   |       path2d.js
    |   |   |   |       payment-request.js
    |   |   |   |       pdf-viewer.js
    |   |   |   |       permissions-api.js
    |   |   |   |       permissions-policy.js
    |   |   |   |       picture-in-picture.js
    |   |   |   |       picture.js
    |   |   |   |       ping.js
    |   |   |   |       png-alpha.js
    |   |   |   |       pointer-events.js
    |   |   |   |       pointer.js
    |   |   |   |       pointerlock.js
    |   |   |   |       portals.js
    |   |   |   |       prefers-color-scheme.js
    |   |   |   |       prefers-reduced-motion.js
    |   |   |   |       progress.js
    |   |   |   |       promise-finally.js
    |   |   |   |       promises.js
    |   |   |   |       proximity.js
    |   |   |   |       proxy.js
    |   |   |   |       publickeypinning.js
    |   |   |   |       push-api.js
    |   |   |   |       queryselector.js
    |   |   |   |       readonly-attr.js
    |   |   |   |       referrer-policy.js
    |   |   |   |       registerprotocolhandler.js
    |   |   |   |       rel-noopener.js
    |   |   |   |       rel-noreferrer.js
    |   |   |   |       rellist.js
    |   |   |   |       rem.js
    |   |   |   |       requestanimationframe.js
    |   |   |   |       requestidlecallback.js
    |   |   |   |       resizeobserver.js
    |   |   |   |       resource-timing.js
    |   |   |   |       rest-parameters.js
    |   |   |   |       rtcpeerconnection.js
    |   |   |   |       ruby.js
    |   |   |   |       run-in.js
    |   |   |   |       same-site-cookie-attribute.js
    |   |   |   |       screen-orientation.js
    |   |   |   |       script-async.js
    |   |   |   |       script-defer.js
    |   |   |   |       scrollintoview.js
    |   |   |   |       scrollintoviewifneeded.js
    |   |   |   |       sdch.js
    |   |   |   |       selection-api.js
    |   |   |   |       selectlist.js
    |   |   |   |       server-timing.js
    |   |   |   |       serviceworkers.js
    |   |   |   |       setimmediate.js
    |   |   |   |       shadowdom.js
    |   |   |   |       shadowdomv1.js
    |   |   |   |       sharedarraybuffer.js
    |   |   |   |       sharedworkers.js
    |   |   |   |       sni.js
    |   |   |   |       spdy.js
    |   |   |   |       speech-recognition.js
    |   |   |   |       speech-synthesis.js
    |   |   |   |       spellcheck-attribute.js
    |   |   |   |       sql-storage.js
    |   |   |   |       srcset.js
    |   |   |   |       stream.js
    |   |   |   |       streams.js
    |   |   |   |       stricttransportsecurity.js
    |   |   |   |       style-scoped.js
    |   |   |   |       subresource-bundling.js
    |   |   |   |       subresource-integrity.js
    |   |   |   |       svg-css.js
    |   |   |   |       svg-filters.js
    |   |   |   |       svg-fonts.js
    |   |   |   |       svg-fragment.js
    |   |   |   |       svg-html.js
    |   |   |   |       svg-html5.js
    |   |   |   |       svg-img.js
    |   |   |   |       svg-smil.js
    |   |   |   |       svg.js
    |   |   |   |       sxg.js
    |   |   |   |       tabindex-attr.js
    |   |   |   |       template-literals.js
    |   |   |   |       template.js
    |   |   |   |       temporal.js
    |   |   |   |       testfeat.js
    |   |   |   |       text-decoration.js
    |   |   |   |       text-emphasis.js
    |   |   |   |       text-overflow.js
    |   |   |   |       text-size-adjust.js
    |   |   |   |       text-stroke.js
    |   |   |   |       textcontent.js
    |   |   |   |       textencoder.js
    |   |   |   |       tls1-1.js
    |   |   |   |       tls1-2.js
    |   |   |   |       tls1-3.js
    |   |   |   |       touch.js
    |   |   |   |       transforms2d.js
    |   |   |   |       transforms3d.js
    |   |   |   |       trusted-types.js
    |   |   |   |       ttf.js
    |   |   |   |       typedarrays.js
    |   |   |   |       u2f.js
    |   |   |   |       unhandledrejection.js
    |   |   |   |       upgradeinsecurerequests.js
    |   |   |   |       url-scroll-to-text-fragment.js
    |   |   |   |       url.js
    |   |   |   |       urlsearchparams.js
    |   |   |   |       use-strict.js
    |   |   |   |       user-select-none.js
    |   |   |   |       user-timing.js
    |   |   |   |       variable-fonts.js
    |   |   |   |       vector-effect.js
    |   |   |   |       vibration.js
    |   |   |   |       video.js
    |   |   |   |       videotracks.js
    |   |   |   |       view-transitions.js
    |   |   |   |       viewport-unit-variants.js
    |   |   |   |       viewport-units.js
    |   |   |   |       wai-aria.js
    |   |   |   |       wake-lock.js
    |   |   |   |       wasm-bigint.js
    |   |   |   |       wasm-bulk-memory.js
    |   |   |   |       wasm-extended-const.js
    |   |   |   |       wasm-gc.js
    |   |   |   |       wasm-multi-memory.js
    |   |   |   |       wasm-multi-value.js
    |   |   |   |       wasm-mutable-globals.js
    |   |   |   |       wasm-nontrapping-fptoint.js
    |   |   |   |       wasm-reference-types.js
    |   |   |   |       wasm-relaxed-simd.js
    |   |   |   |       wasm-signext.js
    |   |   |   |       wasm-simd.js
    |   |   |   |       wasm-tail-calls.js
    |   |   |   |       wasm-threads.js
    |   |   |   |       wasm.js
    |   |   |   |       wav.js
    |   |   |   |       wbr-element.js
    |   |   |   |       web-animation.js
    |   |   |   |       web-app-manifest.js
    |   |   |   |       web-bluetooth.js
    |   |   |   |       web-serial.js
    |   |   |   |       web-share.js
    |   |   |   |       webauthn.js
    |   |   |   |       webcodecs.js
    |   |   |   |       webgl.js
    |   |   |   |       webgl2.js
    |   |   |   |       webgpu.js
    |   |   |   |       webhid.js
    |   |   |   |       webkit-user-drag.js
    |   |   |   |       webm.js
    |   |   |   |       webnfc.js
    |   |   |   |       webp.js
    |   |   |   |       websockets.js
    |   |   |   |       webtransport.js
    |   |   |   |       webusb.js
    |   |   |   |       webvr.js
    |   |   |   |       webvtt.js
    |   |   |   |       webworkers.js
    |   |   |   |       webxr.js
    |   |   |   |       will-change.js
    |   |   |   |       woff.js
    |   |   |   |       woff2.js
    |   |   |   |       word-break.js
    |   |   |   |       wordwrap.js
    |   |   |   |       x-doc-messaging.js
    |   |   |   |       x-frame-options.js
    |   |   |   |       xhr2.js
    |   |   |   |       xhtml.js
    |   |   |   |       xhtmlsmil.js
    |   |   |   |       xml-serializer.js
    |   |   |   |       zstd.js
    |   |   |   |       
    |   |   |   \---regions
    |   |   |           AD.js
    |   |   |           AE.js
    |   |   |           AF.js
    |   |   |           AG.js
    |   |   |           AI.js
    |   |   |           AL.js
    |   |   |           alt-af.js
    |   |   |           alt-an.js
    |   |   |           alt-as.js
    |   |   |           alt-eu.js
    |   |   |           alt-na.js
    |   |   |           alt-oc.js
    |   |   |           alt-sa.js
    |   |   |           alt-ww.js
    |   |   |           AM.js
    |   |   |           AO.js
    |   |   |           AR.js
    |   |   |           AS.js
    |   |   |           AT.js
    |   |   |           AU.js
    |   |   |           AW.js
    |   |   |           AX.js
    |   |   |           AZ.js
    |   |   |           BA.js
    |   |   |           BB.js
    |   |   |           BD.js
    |   |   |           BE.js
    |   |   |           BF.js
    |   |   |           BG.js
    |   |   |           BH.js
    |   |   |           BI.js
    |   |   |           BJ.js
    |   |   |           BM.js
    |   |   |           BN.js
    |   |   |           BO.js
    |   |   |           BR.js
    |   |   |           BS.js
    |   |   |           BT.js
    |   |   |           BW.js
    |   |   |           BY.js
    |   |   |           BZ.js
    |   |   |           CA.js
    |   |   |           CD.js
    |   |   |           CF.js
    |   |   |           CG.js
    |   |   |           CH.js
    |   |   |           CI.js
    |   |   |           CK.js
    |   |   |           CL.js
    |   |   |           CM.js
    |   |   |           CN.js
    |   |   |           CO.js
    |   |   |           CR.js
    |   |   |           CU.js
    |   |   |           CV.js
    |   |   |           CX.js
    |   |   |           CY.js
    |   |   |           CZ.js
    |   |   |           DE.js
    |   |   |           DJ.js
    |   |   |           DK.js
    |   |   |           DM.js
    |   |   |           DO.js
    |   |   |           DZ.js
    |   |   |           EC.js
    |   |   |           EE.js
    |   |   |           EG.js
    |   |   |           ER.js
    |   |   |           ES.js
    |   |   |           ET.js
    |   |   |           FI.js
    |   |   |           FJ.js
    |   |   |           FK.js
    |   |   |           FM.js
    |   |   |           FO.js
    |   |   |           FR.js
    |   |   |           GA.js
    |   |   |           GB.js
    |   |   |           GD.js
    |   |   |           GE.js
    |   |   |           GF.js
    |   |   |           GG.js
    |   |   |           GH.js
    |   |   |           GI.js
    |   |   |           GL.js
    |   |   |           GM.js
    |   |   |           GN.js
    |   |   |           GP.js
    |   |   |           GQ.js
    |   |   |           GR.js
    |   |   |           GT.js
    |   |   |           GU.js
    |   |   |           GW.js
    |   |   |           GY.js
    |   |   |           HK.js
    |   |   |           HN.js
    |   |   |           HR.js
    |   |   |           HT.js
    |   |   |           HU.js
    |   |   |           ID.js
    |   |   |           IE.js
    |   |   |           IL.js
    |   |   |           IM.js
    |   |   |           IN.js
    |   |   |           IQ.js
    |   |   |           IR.js
    |   |   |           IS.js
    |   |   |           IT.js
    |   |   |           JE.js
    |   |   |           JM.js
    |   |   |           JO.js
    |   |   |           JP.js
    |   |   |           KE.js
    |   |   |           KG.js
    |   |   |           KH.js
    |   |   |           KI.js
    |   |   |           KM.js
    |   |   |           KN.js
    |   |   |           KP.js
    |   |   |           KR.js
    |   |   |           KW.js
    |   |   |           KY.js
    |   |   |           KZ.js
    |   |   |           LA.js
    |   |   |           LB.js
    |   |   |           LC.js
    |   |   |           LI.js
    |   |   |           LK.js
    |   |   |           LR.js
    |   |   |           LS.js
    |   |   |           LT.js
    |   |   |           LU.js
    |   |   |           LV.js
    |   |   |           LY.js
    |   |   |           MA.js
    |   |   |           MC.js
    |   |   |           MD.js
    |   |   |           ME.js
    |   |   |           MG.js
    |   |   |           MH.js
    |   |   |           MK.js
    |   |   |           ML.js
    |   |   |           MM.js
    |   |   |           MN.js
    |   |   |           MO.js
    |   |   |           MP.js
    |   |   |           MQ.js
    |   |   |           MR.js
    |   |   |           MS.js
    |   |   |           MT.js
    |   |   |           MU.js
    |   |   |           MV.js
    |   |   |           MW.js
    |   |   |           MX.js
    |   |   |           MY.js
    |   |   |           MZ.js
    |   |   |           NA.js
    |   |   |           NC.js
    |   |   |           NE.js
    |   |   |           NF.js
    |   |   |           NG.js
    |   |   |           NI.js
    |   |   |           NL.js
    |   |   |           NO.js
    |   |   |           NP.js
    |   |   |           NR.js
    |   |   |           NU.js
    |   |   |           NZ.js
    |   |   |           OM.js
    |   |   |           PA.js
    |   |   |           PE.js
    |   |   |           PF.js
    |   |   |           PG.js
    |   |   |           PH.js
    |   |   |           PK.js
    |   |   |           PL.js
    |   |   |           PM.js
    |   |   |           PN.js
    |   |   |           PR.js
    |   |   |           PS.js
    |   |   |           PT.js
    |   |   |           PW.js
    |   |   |           PY.js
    |   |   |           QA.js
    |   |   |           RE.js
    |   |   |           RO.js
    |   |   |           RS.js
    |   |   |           RU.js
    |   |   |           RW.js
    |   |   |           SA.js
    |   |   |           SB.js
    |   |   |           SC.js
    |   |   |           SD.js
    |   |   |           SE.js
    |   |   |           SG.js
    |   |   |           SH.js
    |   |   |           SI.js
    |   |   |           SK.js
    |   |   |           SL.js
    |   |   |           SM.js
    |   |   |           SN.js
    |   |   |           SO.js
    |   |   |           SR.js
    |   |   |           ST.js
    |   |   |           SV.js
    |   |   |           SY.js
    |   |   |           SZ.js
    |   |   |           TC.js
    |   |   |           TD.js
    |   |   |           TG.js
    |   |   |           TH.js
    |   |   |           TJ.js
    |   |   |           TL.js
    |   |   |           TM.js
    |   |   |           TN.js
    |   |   |           TO.js
    |   |   |           TR.js
    |   |   |           TT.js
    |   |   |           TV.js
    |   |   |           TW.js
    |   |   |           TZ.js
    |   |   |           UA.js
    |   |   |           UG.js
    |   |   |           US.js
    |   |   |           UY.js
    |   |   |           UZ.js
    |   |   |           VA.js
    |   |   |           VC.js
    |   |   |           VE.js
    |   |   |           VG.js
    |   |   |           VI.js
    |   |   |           VN.js
    |   |   |           VU.js
    |   |   |           WF.js
    |   |   |           WS.js
    |   |   |           YE.js
    |   |   |           YT.js
    |   |   |           ZA.js
    |   |   |           ZM.js
    |   |   |           ZW.js
    |   |   |           
    |   |   \---dist
    |   |       +---lib
    |   |       |       statuses.js
    |   |       |       supported.js
    |   |       |       
    |   |       \---unpacker
    |   |               agents.js
    |   |               browsers.js
    |   |               browserVersions.js
    |   |               feature.js
    |   |               features.js
    |   |               index.js
    |   |               region.js
    |   |               
    |   +---combined-stream
    |   |   |   License
    |   |   |   package.json
    |   |   |   Readme.md
    |   |   |   yarn.lock
    |   |   |   
    |   |   \---lib
    |   |           combined_stream.js
    |   |           
    |   +---convert-source-map
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---debug
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---src
    |   |           browser.js
    |   |           common.js
    |   |           index.js
    |   |           node.js
    |   |           
    |   +---delayed-stream
    |   |   |   .npmignore
    |   |   |   License
    |   |   |   Makefile
    |   |   |   package.json
    |   |   |   Readme.md
    |   |   |   
    |   |   \---lib
    |   |           delayed_stream.js
    |   |           
    |   +---dunder-proto
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   get.d.ts
    |   |   |   get.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   set.d.ts
    |   |   |   set.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           get.js
    |   |           index.js
    |   |           set.js
    |   |           
    |   +---electron-to-chromium
    |   |       chromium-versions.js
    |   |       chromium-versions.json
    |   |       full-chromium-versions.js
    |   |       full-chromium-versions.json
    |   |       full-versions.js
    |   |       full-versions.json
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       versions.js
    |   |       versions.json
    |   |       
    |   +---es-define-property
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---es-errors
    |   |   |   .eslintrc
    |   |   |   CHANGELOG.md
    |   |   |   eval.d.ts
    |   |   |   eval.js
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   range.d.ts
    |   |   |   range.js
    |   |   |   README.md
    |   |   |   ref.d.ts
    |   |   |   ref.js
    |   |   |   syntax.d.ts
    |   |   |   syntax.js
    |   |   |   tsconfig.json
    |   |   |   type.d.ts
    |   |   |   type.js
    |   |   |   uri.d.ts
    |   |   |   uri.js
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---es-object-atoms
    |   |   |   .eslintrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   isObject.d.ts
    |   |   |   isObject.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   RequireObjectCoercible.d.ts
    |   |   |   RequireObjectCoercible.js
    |   |   |   ToObject.d.ts
    |   |   |   ToObject.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---es-set-tostringtag
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |   
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---esbuild
    |   |   |   install.js
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---bin
    |   |   |       esbuild
    |   |   |       
    |   |   \---lib
    |   |           main.d.ts
    |   |           main.js
    |   |           
    |   +---escalade
    |   |   |   index.d.mts
    |   |   |   index.d.ts
    |   |   |   license
    |   |   |   package.json
    |   |   |   readme.md
    |   |   |   
    |   |   +---dist
    |   |   |       index.js
    |   |   |       index.mjs
    |   |   |       
    |   |   \---sync
    |   |           index.d.mts
    |   |           index.d.ts
    |   |           index.js
    |   |           index.mjs
    |   |           
    |   +---follow-redirects
    |   |       debug.js
    |   |       http.js
    |   |       https.js
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---form-data
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   License
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---lib
    |   |           browser.js
    |   |           form_data.js
    |   |           populate.js
    |   |           
    |   +---function-bind
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   implementation.js
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       SECURITY.md
    |   |   |       
    |   |   \---test
    |   |           .eslintrc
    |   |           index.js
    |   |           
    |   +---gensync
    |   |   |   index.js
    |   |   |   index.js.flow
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---test
    |   |           .babelrc
    |   |           index.test.js
    |   |           
    |   +---get-intrinsic
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           GetIntrinsic.js
    |   |           
    |   +---get-proto
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   Object.getPrototypeOf.d.ts
    |   |   |   Object.getPrototypeOf.js
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   Reflect.getPrototypeOf.d.ts
    |   |   |   Reflect.getPrototypeOf.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---gopd
    |   |   |   .eslintrc
    |   |   |   CHANGELOG.md
    |   |   |   gOPD.d.ts
    |   |   |   gOPD.js
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---has-symbols
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   shams.d.ts
    |   |   |   shams.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |       |   index.js
    |   |       |   tests.js
    |   |       |   
    |   |       \---shams
    |   |               core-js.js
    |   |               get-own-property-symbols.js
    |   |               
    |   +---has-tostringtag
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   shams.d.ts
    |   |   |   shams.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   \---test
    |   |       |   index.js
    |   |       |   tests.js
    |   |       |   
    |   |       \---shams
    |   |               core-js.js
    |   |               get-own-property-symbols.js
    |   |               
    |   +---hasown
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |   
    |   |   \---.github
    |   |           FUNDING.yml
    |   |           
    |   +---js-tokens
    |   |       CHANGELOG.md
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---jsesc
    |   |   |   jsesc.js
    |   |   |   LICENSE-MIT.txt
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---bin
    |   |   |       jsesc
    |   |   |       
    |   |   \---man
    |   |           jsesc.1
    |   |           
    |   +---json5
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---dist
    |   |   |       index.js
    |   |   |       index.min.js
    |   |   |       index.min.mjs
    |   |   |       index.mjs
    |   |   |       
    |   |   \---lib
    |   |           cli.js
    |   |           index.d.ts
    |   |           index.js
    |   |           parse.d.ts
    |   |           parse.js
    |   |           register.js
    |   |           require.js
    |   |           stringify.d.ts
    |   |           stringify.js
    |   |           unicode.d.ts
    |   |           unicode.js
    |   |           util.d.ts
    |   |           util.js
    |   |           
    |   +---loose-envify
    |   |       cli.js
    |   |       custom.js
    |   |       index.js
    |   |       LICENSE
    |   |       loose-envify.js
    |   |       package.json
    |   |       README.md
    |   |       replace.js
    |   |       
    |   +---lru-cache
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---math-intrinsics
    |   |   |   .eslintrc
    |   |   |   abs.d.ts
    |   |   |   abs.js
    |   |   |   CHANGELOG.md
    |   |   |   floor.d.ts
    |   |   |   floor.js
    |   |   |   isFinite.d.ts
    |   |   |   isFinite.js
    |   |   |   isInteger.d.ts
    |   |   |   isInteger.js
    |   |   |   isNaN.d.ts
    |   |   |   isNaN.js
    |   |   |   isNegativeZero.d.ts
    |   |   |   isNegativeZero.js
    |   |   |   LICENSE
    |   |   |   max.d.ts
    |   |   |   max.js
    |   |   |   min.d.ts
    |   |   |   min.js
    |   |   |   mod.d.ts
    |   |   |   mod.js
    |   |   |   package.json
    |   |   |   pow.d.ts
    |   |   |   pow.js
    |   |   |   README.md
    |   |   |   round.d.ts
    |   |   |   round.js
    |   |   |   sign.d.ts
    |   |   |   sign.js
    |   |   |   tsconfig.json
    |   |   |   
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       
    |   |   +---constants
    |   |   |       maxArrayLength.d.ts
    |   |   |       maxArrayLength.js
    |   |   |       maxSafeInteger.d.ts
    |   |   |       maxSafeInteger.js
    |   |   |       maxValue.d.ts
    |   |   |       maxValue.js
    |   |   |       
    |   |   \---test
    |   |           index.js
    |   |           
    |   +---mime-db
    |   |       db.json
    |   |       HISTORY.md
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---mime-types
    |   |       HISTORY.md
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       
    |   +---ms
    |   |       index.js
    |   |       license.md
    |   |       package.json
    |   |       readme.md
    |   |       
    |   +---nanoid
    |   |   |   index.browser.cjs
    |   |   |   index.browser.js
    |   |   |   index.cjs
    |   |   |   index.d.cts
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   nanoid.js
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---async
    |   |   |       index.browser.cjs
    |   |   |       index.browser.js
    |   |   |       index.cjs
    |   |   |       index.d.ts
    |   |   |       index.js
    |   |   |       index.native.js
    |   |   |       package.json
    |   |   |       
    |   |   +---bin
    |   |   |       nanoid.cjs
    |   |   |       
    |   |   +---non-secure
    |   |   |       index.cjs
    |   |   |       index.d.ts
    |   |   |       index.js
    |   |   |       package.json
    |   |   |       
    |   |   \---url-alphabet
    |   |           index.cjs
    |   |           index.js
    |   |           package.json
    |   |           
    |   +---node-releases
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---data
    |   |       +---processed
    |   |       |       envs.json
    |   |       |       
    |   |       \---release-schedule
    |   |               release-schedule.json
    |   |               
    |   +---picocolors
    |   |       LICENSE
    |   |       package.json
    |   |       picocolors.browser.js
    |   |       picocolors.d.ts
    |   |       picocolors.js
    |   |       README.md
    |   |       types.d.ts
    |   |       
    |   +---postcss
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---lib
    |   |           at-rule.d.ts
    |   |           at-rule.js
    |   |           comment.d.ts
    |   |           comment.js
    |   |           container.d.ts
    |   |           container.js
    |   |           css-syntax-error.d.ts
    |   |           css-syntax-error.js
    |   |           declaration.d.ts
    |   |           declaration.js
    |   |           document.d.ts
    |   |           document.js
    |   |           fromJSON.d.ts
    |   |           fromJSON.js
    |   |           input.d.ts
    |   |           input.js
    |   |           lazy-result.d.ts
    |   |           lazy-result.js
    |   |           list.d.ts
    |   |           list.js
    |   |           map-generator.js
    |   |           no-work-result.d.ts
    |   |           no-work-result.js
    |   |           node.d.ts
    |   |           node.js
    |   |           parse.d.ts
    |   |           parse.js
    |   |           parser.js
    |   |           postcss.d.mts
    |   |           postcss.d.ts
    |   |           postcss.js
    |   |           postcss.mjs
    |   |           previous-map.d.ts
    |   |           previous-map.js
    |   |           processor.d.ts
    |   |           processor.js
    |   |           result.d.ts
    |   |           result.js
    |   |           root.d.ts
    |   |           root.js
    |   |           rule.d.ts
    |   |           rule.js
    |   |           stringifier.d.ts
    |   |           stringifier.js
    |   |           stringify.d.ts
    |   |           stringify.js
    |   |           symbols.js
    |   |           terminal-highlight.js
    |   |           tokenize.js
    |   |           warn-once.js
    |   |           warning.d.ts
    |   |           warning.js
    |   |           
    |   +---proxy-from-env
    |   |       .eslintrc
    |   |       .travis.yml
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       test.js
    |   |       
    |   +---react
    |   |   |   index.js
    |   |   |   jsx-dev-runtime.js
    |   |   |   jsx-runtime.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   react.shared-subset.js
    |   |   |   README.md
    |   |   |   
    |   |   +---cjs
    |   |   |       react-jsx-dev-runtime.development.js
    |   |   |       react-jsx-dev-runtime.production.min.js
    |   |   |       react-jsx-dev-runtime.profiling.min.js
    |   |   |       react-jsx-runtime.development.js
    |   |   |       react-jsx-runtime.production.min.js
    |   |   |       react-jsx-runtime.profiling.min.js
    |   |   |       react.development.js
    |   |   |       react.production.min.js
    |   |   |       react.shared-subset.development.js
    |   |   |       react.shared-subset.production.min.js
    |   |   |       
    |   |   \---umd
    |   |           react.development.js
    |   |           react.production.min.js
    |   |           react.profiling.min.js
    |   |           
    |   +---react-dom
    |   |   |   client.js
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   profiling.js
    |   |   |   README.md
    |   |   |   server.browser.js
    |   |   |   server.js
    |   |   |   server.node.js
    |   |   |   test-utils.js
    |   |   |   
    |   |   +---cjs
    |   |   |       react-dom-server-legacy.browser.development.js
    |   |   |       react-dom-server-legacy.browser.production.min.js
    |   |   |       react-dom-server-legacy.node.development.js
    |   |   |       react-dom-server-legacy.node.production.min.js
    |   |   |       react-dom-server.browser.development.js
    |   |   |       react-dom-server.browser.production.min.js
    |   |   |       react-dom-server.node.development.js
    |   |   |       react-dom-server.node.production.min.js
    |   |   |       react-dom-test-utils.development.js
    |   |   |       react-dom-test-utils.production.min.js
    |   |   |       react-dom.development.js
    |   |   |       react-dom.production.min.js
    |   |   |       react-dom.profiling.min.js
    |   |   |       
    |   |   \---umd
    |   |           react-dom-server-legacy.browser.development.js
    |   |           react-dom-server-legacy.browser.production.min.js
    |   |           react-dom-server.browser.development.js
    |   |           react-dom-server.browser.production.min.js
    |   |           react-dom-test-utils.development.js
    |   |           react-dom-test-utils.production.min.js
    |   |           react-dom.development.js
    |   |           react-dom.production.min.js
    |   |           react-dom.profiling.min.js
    |   |           
    |   +---react-refresh
    |   |   |   babel.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   runtime.js
    |   |   |   
    |   |   \---cjs
    |   |           react-refresh-babel.development.js
    |   |           react-refresh-babel.production.js
    |   |           react-refresh-runtime.development.js
    |   |           react-refresh-runtime.production.js
    |   |           
    |   +---react-router
    |   |   |   CHANGELOG.md
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---dist
    |   |       |   index.d.ts
    |   |       |   index.js
    |   |       |   index.js.map
    |   |       |   main.js
    |   |       |   react-router.development.js
    |   |       |   react-router.development.js.map
    |   |       |   react-router.production.min.js
    |   |       |   react-router.production.min.js.map
    |   |       |   
    |   |       +---lib
    |   |       |       components.d.ts
    |   |       |       context.d.ts
    |   |       |       deprecations.d.ts
    |   |       |       hooks.d.ts
    |   |       |       
    |   |       \---umd
    |   |               react-router.development.js
    |   |               react-router.development.js.map
    |   |               react-router.production.min.js
    |   |               react-router.production.min.js.map
    |   |               
    |   +---react-router-dom
    |   |   |   CHANGELOG.md
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   server.d.ts
    |   |   |   server.js
    |   |   |   server.mjs
    |   |   |   
    |   |   \---dist
    |   |       |   dom.d.ts
    |   |       |   index.d.ts
    |   |       |   index.js
    |   |       |   index.js.map
    |   |       |   main.js
    |   |       |   react-router-dom.development.js
    |   |       |   react-router-dom.development.js.map
    |   |       |   react-router-dom.production.min.js
    |   |       |   react-router-dom.production.min.js.map
    |   |       |   server.d.ts
    |   |       |   server.js
    |   |       |   server.mjs
    |   |       |   
    |   |       \---umd
    |   |               react-router-dom.development.js
    |   |               react-router-dom.development.js.map
    |   |               react-router-dom.production.min.js
    |   |               react-router-dom.production.min.js.map
    |   |               
    |   +---rollup
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   \---dist
    |   |       |   getLogFilter.d.ts
    |   |       |   getLogFilter.js
    |   |       |   loadConfigFile.d.ts
    |   |       |   loadConfigFile.js
    |   |       |   native.js
    |   |       |   parseAst.d.ts
    |   |       |   parseAst.js
    |   |       |   rollup.d.ts
    |   |       |   rollup.js
    |   |       |   
    |   |       +---bin
    |   |       |       rollup
    |   |       |       
    |   |       +---es
    |   |       |   |   getLogFilter.js
    |   |       |   |   package.json
    |   |       |   |   parseAst.js
    |   |       |   |   rollup.js
    |   |       |   |   
    |   |       |   \---shared
    |   |       |           node-entry.js
    |   |       |           parseAst.js
    |   |       |           watch.js
    |   |       |           
    |   |       \---shared
    |   |               fsevents-importer.js
    |   |               index.js
    |   |               loadConfigFile.js
    |   |               parseAst.js
    |   |               rollup.js
    |   |               watch-cli.js
    |   |               watch.js
    |   |               
    |   +---scheduler
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   unstable_mock.js
    |   |   |   unstable_post_task.js
    |   |   |   
    |   |   +---cjs
    |   |   |       scheduler-unstable_mock.development.js
    |   |   |       scheduler-unstable_mock.production.min.js
    |   |   |       scheduler-unstable_post_task.development.js
    |   |   |       scheduler-unstable_post_task.production.min.js
    |   |   |       scheduler.development.js
    |   |   |       scheduler.production.min.js
    |   |   |       
    |   |   \---umd
    |   |           scheduler-unstable_mock.development.js
    |   |           scheduler-unstable_mock.production.min.js
    |   |           scheduler.development.js
    |   |           scheduler.production.min.js
    |   |           scheduler.profiling.min.js
    |   |           
    |   +---semver
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   range.bnf
    |   |   |   README.md
    |   |   |   semver.js
    |   |   |   
    |   |   \---bin
    |   |           semver.js
    |   |           
    |   +---source-map-js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   source-map.d.ts
    |   |   |   source-map.js
    |   |   |   
    |   |   \---lib
    |   |           array-set.js
    |   |           base64-vlq.js
    |   |           base64.js
    |   |           binary-search.js
    |   |           mapping-list.js
    |   |           quick-sort.js
    |   |           source-map-consumer.d.ts
    |   |           source-map-consumer.js
    |   |           source-map-generator.d.ts
    |   |           source-map-generator.js
    |   |           source-node.d.ts
    |   |           source-node.js
    |   |           util.js
    |   |           
    |   +---update-browserslist-db
    |   |       check-npm-version.js
    |   |       cli.js
    |   |       index.d.ts
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       utils.js
    |   |       
    |   +---vite
    |   |   |   client.d.ts
    |   |   |   index.cjs
    |   |   |   index.d.cts
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   
    |   |   +---bin
    |   |   |       openChrome.applescript
    |   |   |       vite.js
    |   |   |       
    |   |   +---dist
    |   |   |   +---client
    |   |   |   |       client.mjs
    |   |   |   |       env.mjs
    |   |   |   |       
    |   |   |   +---node
    |   |   |   |   |   cli.js
    |   |   |   |   |   constants.js
    |   |   |   |   |   index.d.ts
    |   |   |   |   |   index.js
    |   |   |   |   |   runtime.d.ts
    |   |   |   |   |   runtime.js
    |   |   |   |   |   types.d-aGj9QkWt.d.ts
    |   |   |   |   |   
    |   |   |   |   \---chunks
    |   |   |   |           dep-D-7KCb9p.js
    |   |   |   |           dep-D_zLpgQd.js
    |   |   |   |           dep-e9kYborm.js
    |   |   |   |           dep-IQS-Za7F.js
    |   |   |   |           dep-YkMKzX4u.js
    |   |   |   |           
    |   |   |   \---node-cjs
    |   |   |           publicUtils.cjs
    |   |   |           
    |   |   \---types
    |   |           customEvent.d.ts
    |   |           hmrPayload.d.ts
    |   |           hot.d.ts
    |   |           import-meta.d.ts
    |   |           importGlob.d.ts
    |   |           importMeta.d.ts
    |   |           metadata.d.ts
    |   |           package.json
    |   |           
    |   \---yallist
    |           iterator.js
    |           LICENSE
    |           package.json
    |           README.md
    |           yallist.js
    |           
    \---src
        |   App.jsx
        |   dashboard.css
        |   layout-2col.css
        |   main.jsx
        |   preview.css
        |   projectview.css
        |   styles.css
        |   
        +---assets
        |   \---brand
        |           logo.png
        |           
        +---components
        |       CharacterWizard.jsx
        |       GraphModal.jsx
        |       RelationshipDrawer.jsx
        |       
        +---layouts
        |       ProjectTabsLayout.jsx
        |       
        +---lib
        |       api.js
        |       mentions.js
        |       
        +---pages
        |       Characters.jsx
        |       Dashboard.jsx
        |       Preview.jsx
        |       ProjectView.jsx
        |       World.jsx
        |       
        \---ui
                AppHeader.jsx
                Editor.jsx
                ProjectNav.jsx
                
```

## Dateien

### `.vs\roman-writing-mvp\v17\DocumentLayout.backup.json`
```json
{
  "Version": 1,
  "WorkspaceRootPath": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\",
  "Documents": [
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\projectview.css||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\pages\\ProjectView.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\Editor.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\ui\\Editor.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    }
  ],
  "DocumentGroupContainers": [
    {
      "Orientation": 0,
      "VerticalTabListWidth": 256,
      "DocumentGroups": [
        {
          "DockedWidth": 200,
          "SelectedChildIndex": 0,
          "Children": [
            {
              "$type": "Document",
              "DocumentIndex": 0,
              "Title": "projectview.css",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css",
              "RelativeDocumentMoniker": "frontend\\src\\projectview.css",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css",
              "RelativeToolTip": "frontend\\src\\projectview.css",
              "ViewState": "AgIAAFgAAAAAAAAAAAAiwF4AAAA3AAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003000|",
              "WhenOpened": "2025-10-05T20:57:40.782Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 2,
              "Title": "Editor.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\Editor.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\ui\\Editor.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\Editor.jsx",
              "RelativeToolTip": "frontend\\src\\ui\\Editor.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-05T20:33:49.797Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 1,
              "Title": "ProjectView.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\pages\\ProjectView.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx",
              "RelativeToolTip": "frontend\\src\\pages\\ProjectView.jsx",
              "ViewState": "AgIAAI0BAAAAAAAAAAAiwKEBAAAYAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-05T20:33:19.182Z",
              "EditorCaption": ""
            }
          ]
        }
      ]
    }
  ]
}
```

### `.vs\roman-writing-mvp\v17\DocumentLayout.json`
```json
{
  "Version": 1,
  "WorkspaceRootPath": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\",
  "Documents": [
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\lib\\api.js||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\lib\\api.js||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\app.py||{8B382828-6202-11D1-8870-0000F87579D2}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:backend\\app.py||{8B382828-6202-11D1-8870-0000F87579D2}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\.env.local||{8B382828-6202-11D1-8870-0000F87579D2}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\.env.local||{8B382828-6202-11D1-8870-0000F87579D2}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\package.json||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\package.json||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\Dockerfile||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:backend\\Dockerfile||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\requirements.txt||{8B382828-6202-11D1-8870-0000F87579D2}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:backend\\requirements.txt||{8B382828-6202-11D1-8870-0000F87579D2}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\.gitignore||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:.gitignore||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\.dockerignore||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:.dockerignore||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\Dockerfile||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:Dockerfile||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\World.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\pages\\World.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\components\\GraphModal.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\components\\GraphModal.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\projectview.css||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Characters.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\pages\\Characters.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\components\\RelationshipDrawer.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\components\\RelationshipDrawer.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\layouts\\ProjectTabsLayout.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\layouts\\ProjectTabsLayout.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\lib\\mentions.js||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\lib\\mentions.js||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\components\\CharacterWizard.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\components\\CharacterWizard.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\pages\\ProjectView.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\dashboard.css||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\dashboard.css||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Dashboard.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\pages\\Dashboard.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\main.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\main.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\App.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\App.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\AppHeader.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\ui\\AppHeader.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    },
    {
      "AbsoluteMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\Editor.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}",
      "RelativeMoniker": "D:0:0:{A2FE74E1-B743-11D0-AE1A-00A0C90FFFC3}|\u003CMiscFiles\u003E|solutionrelative:frontend\\src\\ui\\Editor.jsx||{3B902123-F8A7-4915-9F01-361F908088D0}"
    }
  ],
  "DocumentGroupContainers": [
    {
      "Orientation": 0,
      "VerticalTabListWidth": 256,
      "DocumentGroups": [
        {
          "DockedWidth": 200,
          "SelectedChildIndex": 9,
          "Children": [
            {
              "$type": "Document",
              "DocumentIndex": 2,
              "Title": ".env.local",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\.env.local",
              "RelativeDocumentMoniker": "frontend\\.env.local",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\.env.local",
              "RelativeToolTip": "frontend\\.env.local",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.001001|",
              "WhenOpened": "2025-10-06T22:06:23.261Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 3,
              "Title": "package.json",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\package.json",
              "RelativeDocumentMoniker": "frontend\\package.json",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\package.json",
              "RelativeToolTip": "frontend\\package.json",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.001642|",
              "WhenOpened": "2025-10-06T20:58:04.74Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 4,
              "Title": "Dockerfile",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\Dockerfile",
              "RelativeDocumentMoniker": "backend\\Dockerfile",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\Dockerfile",
              "RelativeToolTip": "backend\\Dockerfile",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.001001|",
              "WhenOpened": "2025-10-06T20:31:11.086Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 6,
              "Title": ".gitignore",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\.gitignore",
              "RelativeDocumentMoniker": ".gitignore",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\.gitignore",
              "RelativeToolTip": ".gitignore",
              "ViewState": "AgIAADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.001001|",
              "WhenOpened": "2025-10-06T19:58:44.393Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 7,
              "Title": ".dockerignore",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\.dockerignore",
              "RelativeDocumentMoniker": ".dockerignore",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\.dockerignore",
              "RelativeToolTip": ".dockerignore",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.001001|",
              "WhenOpened": "2025-10-06T17:38:37.694Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 8,
              "Title": "Dockerfile",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\Dockerfile",
              "RelativeDocumentMoniker": "Dockerfile",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\Dockerfile",
              "RelativeToolTip": "Dockerfile",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.001001|",
              "WhenOpened": "2025-10-06T17:34:09.558Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 5,
              "Title": "requirements.txt",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\requirements.txt",
              "RelativeDocumentMoniker": "backend\\requirements.txt",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\requirements.txt",
              "RelativeToolTip": "backend\\requirements.txt",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAAQAAAAIAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003109|",
              "WhenOpened": "2025-10-06T17:33:29.862Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 1,
              "Title": "app.py",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\app.py",
              "RelativeDocumentMoniker": "backend\\app.py",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\backend\\app.py",
              "RelativeToolTip": "backend\\app.py",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAA==",
              "Icon": "00000000-0000-0000-0000-000000000000.000000|iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHfSURBVDhPpZCxaxNhGMZ/9zVJaUuDUlq1FBWLZBFTCXo4BFyU1qGKi4OkIHhkzF/g0KF00M2lR9YUdDDQQVAcJILoQUd1UNRmkhoRm8RL777v7nOoCZd4AcEH3uF5nvd73vd74X\u002BgtTai3LIsHeWDEEJct217a1DvwbIs7bpubFUqFW3b9naxWLwWfSOipAvHcfqqi0KhkMtms3cty1rsaomeG4FpmoMSANVqlXQ6nQMWgacMC4hOBchduEj\u002ByjKjScGh8SS1Wq3nxQZEN3j1eY/Vrfe8rTeQvsf89ARLS1cz5XIZ/uUGXxptQiVRUhJIybudXaZn52a7vbEBpmkyNb/A69YM9W8tDEJOTI2hpI\u002BSkvOZH2f13sNAB\u002B07sV9wHIdH9Unquz9RvoeUPtL3UFISKkky\u002BAT7HwTi6FpsgGma3N9\u002Bg5I\u002BKaFZyU8wOpJChwHnjiuE9wKCXyC/zsQGOI7DeELjtiUPbgky6Wd/HA3KBelC4AIpNfQGl88cQ0mfI5PugRhKkM2DUk0INYwtPI/dAGAlf4rbl06T6DyBVgeCABJzYPhwcm0V8ICNvwJKpVIf37h3IxSyKVAuBMDIYQAMw1jvaxwGrYNl3Xq5o79vat3Y3Nedj4\u002B11je7/m\u002BXOuyzFtDhUgAAAABJRU5ErkJggg==",
              "WhenOpened": "2025-10-06T11:53:32.676Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 9,
              "Title": "World.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\World.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\pages\\World.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\World.jsx",
              "RelativeToolTip": "frontend\\src\\pages\\World.jsx",
              "ViewState": "AgIAANAAAAAAAAAAAAAAwPMAAAAJAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-06T14:32:17.806Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 0,
              "Title": "api.js",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\lib\\api.js",
              "RelativeDocumentMoniker": "frontend\\src\\lib\\api.js",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\lib\\api.js",
              "RelativeToolTip": "frontend\\src\\lib\\api.js",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAB4AAAA4AAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.001646|",
              "WhenOpened": "2025-10-06T14:30:03.622Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 10,
              "Title": "GraphModal.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\components\\GraphModal.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\components\\GraphModal.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\components\\GraphModal.jsx",
              "RelativeToolTip": "frontend\\src\\components\\GraphModal.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAwC4AAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-06T12:29:22.202Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 15,
              "Title": "mentions.js",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\lib\\mentions.js",
              "RelativeDocumentMoniker": "frontend\\src\\lib\\mentions.js",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\lib\\mentions.js",
              "RelativeToolTip": "frontend\\src\\lib\\mentions.js",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAACsAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.001646|",
              "WhenOpened": "2025-10-06T11:25:13.142Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 13,
              "Title": "RelationshipDrawer.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\components\\RelationshipDrawer.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\components\\RelationshipDrawer.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\components\\RelationshipDrawer.jsx",
              "RelativeToolTip": "frontend\\src\\components\\RelationshipDrawer.jsx",
              "ViewState": "AgIAACIAAAAAAAAAAAAAwFQAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-06T11:24:54.412Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 16,
              "Title": "CharacterWizard.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\components\\CharacterWizard.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\components\\CharacterWizard.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\components\\CharacterWizard.jsx",
              "RelativeToolTip": "frontend\\src\\components\\CharacterWizard.jsx",
              "ViewState": "AgIAAFgAAAAAAAAAAAAiwIwAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-06T11:24:37.187Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 12,
              "Title": "Characters.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Characters.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\pages\\Characters.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Characters.jsx",
              "RelativeToolTip": "frontend\\src\\pages\\Characters.jsx",
              "ViewState": "AgIAAMwBAAAAAAAAAAAAwP4BAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-06T10:52:33Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 20,
              "Title": "main.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\main.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\main.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\main.jsx",
              "RelativeToolTip": "frontend\\src\\main.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-06T10:08:38.662Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 19,
              "Title": "Dashboard.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Dashboard.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\pages\\Dashboard.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\Dashboard.jsx",
              "RelativeToolTip": "frontend\\src\\pages\\Dashboard.jsx",
              "ViewState": "AgIAAHsAAAAAAAAAAAAiwK8AAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-06T09:59:15.762Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 18,
              "Title": "dashboard.css",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\dashboard.css",
              "RelativeDocumentMoniker": "frontend\\src\\dashboard.css",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\dashboard.css",
              "RelativeToolTip": "frontend\\src\\dashboard.css",
              "ViewState": "AgIAABUAAAAAAAAAAAAiwDQAAAAbAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003000|",
              "WhenOpened": "2025-10-06T09:58:59.962Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 11,
              "Title": "projectview.css",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css",
              "RelativeDocumentMoniker": "frontend\\src\\projectview.css",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\projectview.css",
              "RelativeToolTip": "frontend\\src\\projectview.css",
              "ViewState": "AgIAALIBAAAAAAAAAAAAwNYBAAAVAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003000|",
              "WhenOpened": "2025-10-05T20:57:40.782Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 21,
              "Title": "App.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\App.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\App.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\App.jsx",
              "RelativeToolTip": "frontend\\src\\App.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAACMAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-06T10:04:57.983Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 14,
              "Title": "ProjectTabsLayout.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\layouts\\ProjectTabsLayout.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\layouts\\ProjectTabsLayout.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\layouts\\ProjectTabsLayout.jsx",
              "RelativeToolTip": "frontend\\src\\layouts\\ProjectTabsLayout.jsx",
              "ViewState": "AgIAAAMAAAAAAAAAAAAAABgAAAAgAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-06T09:10:20.098Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 22,
              "Title": "AppHeader.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\AppHeader.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\ui\\AppHeader.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\AppHeader.jsx",
              "RelativeToolTip": "frontend\\src\\ui\\AppHeader.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-06T09:04:20.416Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 23,
              "Title": "Editor.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\Editor.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\ui\\Editor.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\ui\\Editor.jsx",
              "RelativeToolTip": "frontend\\src\\ui\\Editor.jsx",
              "ViewState": "AgIAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-05T20:33:49.797Z",
              "EditorCaption": ""
            },
            {
              "$type": "Document",
              "DocumentIndex": 17,
              "Title": "ProjectView.jsx",
              "DocumentMoniker": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx",
              "RelativeDocumentMoniker": "frontend\\src\\pages\\ProjectView.jsx",
              "ToolTip": "C:\\Users\\anton\\source\\repos\\roman-writing-mvp\\frontend\\src\\pages\\ProjectView.jsx",
              "RelativeToolTip": "frontend\\src\\pages\\ProjectView.jsx",
              "ViewState": "AgIAAI0BAAAAAAAAAAAiwKEBAAAYAAAAAAAAAA==",
              "Icon": "ae27a6b0-e345-4288-96df-5eaf394ee369.003663|",
              "WhenOpened": "2025-10-05T20:33:19.182Z",
              "EditorCaption": ""
            }
          ]
        }
      ]
    }
  ]
}
```

### `.vs\VSWorkspaceState.json`
```json
{
  "ExpandedNodes": [
    "",
    "\\backend",
    "\\frontend",
    "\\frontend\\src",
    "\\frontend\\src\\lib"
  ],
  "SelectedNode": "\\backend\\app.py",
  "PreviewInSolutionExplorer": false
}
```

### `backend\__init__.py`
```python


```

### `backend\app.py`
```python
from flask import Flask, request, jsonify, abort, Response
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import selectinload
from datetime import datetime
import os, json, tempfile

# Optional: PyVis
try:
    from pyvis.network import Network
    HAS_PYVIS = True
except Exception:
    HAS_PYVIS = False

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# ⬇ ersetzt deinen SQLite-Block
db_url = os.getenv("DATABASE_URL")

if db_url:
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url
else:
    is_aws = bool(os.getenv("AWS_EXECUTION_ENV"))
    db_path = "/tmp/app.db" if is_aws else os.path.join(os.path.dirname(__file__), "app.db")
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_path}"
    app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {"connect_args": {"check_same_thread": False}}

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# ----------------- Models -----------------
class Project(db.Model):
    __tablename__ = "projects"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, default="")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    chapters = db.relationship("Chapter", backref="project", cascade="all, delete-orphan", lazy="selectin")
    characters = db.relationship("Character", backref="project", cascade="all, delete-orphan", lazy="selectin")
    locations = db.relationship("Location", backref="project", cascade="all, delete-orphan", lazy="selectin")  # legacy
    world_items = db.relationship("WorldItem", backref="project", cascade="all, delete-orphan", lazy="selectin")

    def to_dict(self):
        return {"id": self.id, "title": self.title, "description": self.description,
                "created_at": self.created_at.isoformat() if self.created_at else None,
                "updated_at": self.updated_at.isoformat() if self.updated_at else None}

class Chapter(db.Model):
    __tablename__ = "chapters"
    __table_args__ = (db.Index("ix_chapter_project_order", "project_id", "order_index"),)
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    title = db.Column(db.String(255), nullable=False, default="Neues Kapitel")
    order_index = db.Column(db.Integer, default=0)
    content = db.Column(db.Text, default="")
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    scenes = db.relationship("Scene", backref="chapter", cascade="all, delete-orphan", lazy="selectin")

    def to_dict(self):
        return {"id": self.id, "project_id": self.project_id, "title": self.title,
                "order_index": self.order_index, "content": self.content,
                "updated_at": self.updated_at.isoformat() if self.updated_at else None}

class Scene(db.Model):
    __tablename__ = "scenes"
    __table_args__ = (db.Index("ix_scene_chapter_order", "chapter_id", "order_index"),)
    id = db.Column(db.Integer, primary_key=True)
    chapter_id = db.Column(db.Integer, db.ForeignKey("chapters.id"), nullable=False)
    title = db.Column(db.String(255), nullable=False, default="Neue Szene")
    order_index = db.Column(db.Integer, default=0)
    content = db.Column(db.Text, default="")
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {"id": self.id, "chapter_id": self.chapter_id, "title": self.title,
                "order_index": self.order_index, "content": self.content,
                "updated_at": self.updated_at.isoformat() if self.updated_at else None}

class Character(db.Model):
    __tablename__ = "characters"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(255), default="")
    age = db.Column(db.String(50), default="")
    description = db.Column(db.Text, default="")
    relations = db.Column(db.Text, default="[]")   # JSON-Array
    profile = db.Column(db.Text, default="{}")     # JSON

    def to_dict(self):
        return {"id": self.id, "project_id": self.project_id, "name": self.name,
                "role": self.role, "age": self.age, "description": self.description,
                "relations": _parse_relations(self.relations),
                "profile": _parse_profile(self.profile)}

# Legacy "locations" bleibt kompatibel (kannst du später entfernen)
class Location(db.Model):
    __tablename__ = "locations"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    region = db.Column(db.String(255), default="")
    description = db.Column(db.Text, default="")
    def to_dict(self):
        return {"id": self.id, "project_id": self.project_id,
                "name": self.name, "region": self.region, "description": self.description}

# ✅ Neue generische Welt-Elemente
class WorldItem(db.Model):
    __tablename__ = "world_items"
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)     # z. B. "Eldoria"
    kind = db.Column(db.String(120), default="Allgemein")# z. B. "Königreich", "Organisation", "Beruf", "Stadt" …
    description = db.Column(db.Text, default="")
    props = db.Column(db.Text, default="{}")             # freie Attribute (JSON)
    relations = db.Column(db.Text, default="[]")         # JSON-Array zu anderen WorldItems

    def to_dict(self):
        return {"id": self.id, "project_id": self.project_id, "name": self.name,
                "kind": self.kind, "description": self.description,
                "props": _parse_props(self.props),
                "relations": _parse_relations(self.relations)}

# ----------------- Helpers -----------------
def get_or_404(model, id_):
    item = db.session.get(model, id_)
    if not item: abort(404, f"{model.__name__} {id_} not found")
    return item

def get_or_none(model, id_): return db.session.get(model, id_)

def ensure_column(table, column, ddl):
    insp = db.inspect(db.engine)
    cols = [c["name"] for c in insp.get_columns(table)]
    if column not in cols:
        with db.engine.begin() as conn:
            conn.exec_driver_sql(f"ALTER TABLE {table} ADD COLUMN {column} {ddl}")

def ensure_relations_column():
    ensure_column("characters", "relations", "TEXT DEFAULT '[]'")

def ensure_profile_column():
    ensure_column("characters", "profile", "TEXT DEFAULT '{}'")

def _parse_relations(text):
    try:
        data = json.loads(text or "[]")
        if not isinstance(data, list): return []
        out = []
        for r in data:
            if not isinstance(r, dict): continue
            toId = r.get("toId")
            if not isinstance(toId, int): continue
            typ = r.get("type") or "Verbunden"
            strength = r.get("strength", 3)
            try: strength = int(strength)
            except: strength = 3
            notes = r.get("notes", "")
            out.append({"toId": toId, "type": typ, "strength": strength, "notes": notes})
        return out
    except: return []

_PROFILE_DEFAULT = {
    "avatarUrl": "", "pitch": "", "goal": "", "conflict": "",
    "affiliations": [], "strengths": [], "weaknesses": [],
    "voice": "", "traits": "", "secret": "",
    "birthplace": "", "residence": "", "occupation": "",
    "appearance": "", "height": "", "hairColor": "", "eyeColor": "",
    "skills": [], "backstory": ""
}
def _parse_profile(text):
    try:
        raw = json.loads(text or "{}")
        if not isinstance(raw, dict): raw = {}
    except: raw = {}
    prof = {**_PROFILE_DEFAULT, **raw}
    for k in ["affiliations","strengths","weaknesses","skills"]:
        v = prof.get(k)
        if isinstance(v, str): prof[k] = [x.strip() for x in v.split(",") if x.strip()]
        elif not isinstance(v, list): prof[k] = []
    return prof

def _parse_props(text):
    try:
        raw = json.loads(text or "{}")
        if not isinstance(raw, dict): raw = {}
    except: raw = {}
    return raw

# Character inverse mapping
_RECIPROCAL = {"Freund":"Freund","Feind":"Feind","Familie":"Familie","Liebe":"Liebe",
               "Kollege":"Kollege","Kennt":"Kennt","Mentor":"Schüler","Schüler":"Mentor"}
def _reciprocal_type(t): return _RECIPROCAL.get(t, t)

# World inverse mapping
_WORLD_RECIPROCAL = {
    "Teil von":"Hat Teil",
    "Hat Teil":"Teil von",
    "Ort in":"Beherbergt",
    "Beherbergt":"Ort in",
    "Regiert":"Wird regiert von",
    "Wird regiert von":"Regiert",
    "Hauptstadt von":"Hat Hauptstadt",
    "Hat Hauptstadt":"Hauptstadt von",
    "Mitglied von":"Hat Mitglied",
    "Hat Mitglied":"Mitglied von",
    "Übergeordnet":"Untergeordnet",
    "Untergeordnet":"Übergeordnet",
    "Verbündet":"Verbündet",
    "Konkurriert":"Konkurriert",
    "Handelt mit":"Handelt mit",
}
def _world_inv(t): return _WORLD_RECIPROCAL.get(t, t)

def _sync_bidirectional_relations(source_char, new_relations, old_relations=None):
    new_rel = _parse_relations(json.dumps(new_relations, ensure_ascii=False))
    if old_relations is None:
        old_rel = _parse_relations(source_char.relations)
    else:
        old_rel = _parse_relations(json.dumps(old_relations, ensure_ascii=False)) if isinstance(old_relations, list) else _parse_relations(old_relations)
    old_targets = {r["toId"] for r in old_rel}
    new_targets = {r["toId"] for r in new_rel}

    for r in new_rel:
        tid = r["toId"]
        if tid == source_char.id: continue
        tgt = get_or_none(Character, tid)
        if not tgt or tgt.project_id != source_char.project_id: continue
        t_rel = _parse_relations(tgt.relations)
        idx = next((i for i,x in enumerate(t_rel) if x.get("toId")==source_char.id), None)
        inv = _reciprocal_type(r.get("type"))
        if idx is None:
            t_rel.append({"toId": source_char.id, "type": inv, "strength": r.get("strength",3), "notes": ""})
        else:
            t_rel[idx]["type"] = inv
            t_rel[idx]["strength"] = r.get("strength", t_rel[idx].get("strength",3))
        tgt.relations = json.dumps(t_rel, ensure_ascii=False)

    removed = old_targets - new_targets
    for tid in removed:
        tgt = get_or_none(Character, tid)
        if not tgt or tgt.project_id != source_char.project_id: continue
        t_rel = _parse_relations(tgt.relations)
        t_rel = [x for x in t_rel if x.get("toId") != source_char.id]
        tgt.relations = json.dumps(t_rel, ensure_ascii=False)

def _sync_world_relations(src, new_relations, old_relations=None):
    new_rel = _parse_relations(json.dumps(new_relations, ensure_ascii=False))
    if old_relations is None:
        old_rel = _parse_relations(src.relations)
    else:
        old_rel = _parse_relations(json.dumps(old_relations, ensure_ascii=False)) if isinstance(old_relations, list) else _parse_relations(old_relations)

    old_targets = {r["toId"] for r in old_rel}
    new_targets = {r["toId"] for r in new_rel}

    for r in new_rel:
        tid = r["toId"]
        if tid == src.id: continue
        tgt = get_or_none(WorldItem, tid)
        if not tgt or tgt.project_id != src.project_id: continue
        t_rel = _parse_relations(tgt.relations)
        idx = next((i for i,x in enumerate(t_rel) if x.get("toId")==src.id), None)
        inv = _world_inv(r.get("type"))
        if idx is None:
            t_rel.append({"toId": src.id, "type": inv, "strength": r.get("strength",3), "notes": ""})
        else:
            t_rel[idx]["type"] = inv
            t_rel[idx]["strength"] = r.get("strength", t_rel[idx].get("strength",3))
        tgt.relations = json.dumps(t_rel, ensure_ascii=False)

    removed = old_targets - new_targets
    for tid in removed:
        tgt = get_or_none(WorldItem, tid)
        if not tgt or tgt.project_id != src.project_id: continue
        t_rel = _parse_relations(tgt.relations)
        t_rel = [x for x in t_rel if x.get("toId") != src.id]
        tgt.relations = json.dumps(t_rel, ensure_ascii=False)

# ----------------- Routes -----------------
@app.errorhandler(404)
def _404(e): return jsonify({"error": str(e)}), 404

@app.errorhandler(400)
def _400(e): return jsonify({"error":"Bad Request","detail":str(e)}), 400

# Projects
@app.route("/api/projects", methods=["GET","POST"])
def projects():
    if request.method == "POST":
        data = request.get_json() or {}
        p = Project(title=data.get("title","Neues Projekt"), description=data.get("description",""))
        db.session.add(p); db.session.commit()
        return jsonify(p.to_dict()), 201
    return jsonify([x.to_dict() for x in Project.query.all()])

from sqlalchemy import func
import traceback
from flask import current_app

@app.route("/api/projects/<int:pid>", methods=["GET", "PUT", "DELETE"])
def project_detail(pid):
    p = get_or_404(Project, pid)

    if request.method == "GET":
        try:
            data = p.to_dict()
            # defensiv, ohne order_index sortieren (nur nach id)
            chs = (
                Chapter.query
                .filter_by(project_id=pid)
                .order_by(Chapter.id.asc())
                .all()
            )
            data["chapters"] = [
                {"id": c.id, "title": c.title, "order_index": (c.order_index or 0)}
                for c in chs
            ]
            return jsonify(data)
        except Exception as ex:
            # Log für dich im Terminal und eine klare 500-Antwort
            current_app.logger.exception("GET /api/projects/<pid> failed")
            return jsonify({"error": "internal", "detail": str(ex)}), 500

    elif request.method == "PUT":
        data = request.get_json() or {}
        p.title = data.get("title", p.title)
        p.description = data.get("description", p.description)
        db.session.commit()
        return jsonify(p.to_dict())

    else:  # DELETE
        db.session.delete(p)
        db.session.commit()
        return jsonify({"ok": True})



# Chapters / Scenes (unchanged)
@app.route("/api/projects/<int:pid>/chapters", methods=["GET","POST"])
def project_chapters(pid):
    get_or_404(Project, pid)
    if request.method == "POST":
        data = request.get_json() or {}
        ch = Chapter(project_id=pid, title=data.get("title","Neues Kapitel"),
                     order_index=data.get("order_index",0), content=data.get("content",""))
        db.session.add(ch); db.session.commit(); return jsonify(ch.to_dict()), 201
    items = Chapter.query.filter_by(project_id=pid).order_by(Chapter.order_index.asc(), Chapter.id.asc()).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/chapters/<int:cid>", methods=["GET","PUT","DELETE"])
def chapter_detail(cid):
    c = get_or_404(Chapter, cid)
    if request.method == "GET": return jsonify(c.to_dict())
    if request.method == "PUT":
        data = request.get_json() or {}
        c.title = data.get("title", c.title)
        c.order_index = data.get("order_index", c.order_index)
        c.content = data.get("content", c.content)
        db.session.commit(); return jsonify(c.to_dict())
    db.session.delete(c); db.session.commit(); return jsonify({"ok":True})

@app.route("/api/chapters/<int:cid>/scenes", methods=["GET","POST"])
def chapter_scenes(cid):
    get_or_404(Chapter, cid)
    if request.method == "POST":
        data = request.get_json() or {}
        sc = Scene(chapter_id=cid, title=data.get("title","Neue Szene"),
                   order_index=data.get("order_index",0), content=data.get("content",""))
        db.session.add(sc); db.session.commit(); return jsonify(sc.to_dict()), 201
    items = Scene.query.filter_by(chapter_id=cid).order_by(Scene.order_index.asc(), Scene.id.asc()).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/scenes/<int:sid>", methods=["GET","PUT","DELETE"])
def scene_detail(sid):
    sc = get_or_404(Scene, sid)
    if request.method == "GET": return jsonify(sc.to_dict())
    if request.method == "PUT":
        data = request.get_json() or {}
        sc.title = data.get("title", sc.title)
        sc.order_index = data.get("order_index", sc.order_index)
        sc.content = data.get("content", sc.content)
        db.session.commit(); return jsonify(sc.to_dict())
    db.session.delete(sc); db.session.commit(); return jsonify({"ok":True})

# Characters (mit bidirektionaler Relation)
@app.route("/api/projects/<int:pid>/characters", methods=["GET","POST"])
def project_characters(pid):
    get_or_404(Project, pid)
    if request.method == "POST":
        data = request.get_json() or {}
        ch = Character(
            project_id=pid,
            name=data.get("name","Neue Figur"),
            role=data.get("role",""),
            age=str(data.get("age","")) if data.get("age","") is not None else "",
            description=data.get("description",""),
            relations=json.dumps(_parse_relations(json.dumps(data.get("relations",[]))), ensure_ascii=False),
            profile=json.dumps(_parse_profile(json.dumps(data.get("profile",{}))), ensure_ascii=False),
        )
        db.session.add(ch); db.session.commit()
        _sync_bidirectional_relations(ch, _parse_relations(ch.relations))
        db.session.commit()
        return jsonify(ch.to_dict()), 201
    items = Character.query.filter_by(project_id=pid).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/characters/<int:cid>", methods=["GET","PUT","DELETE"])
def character_detail(cid):
    ch = get_or_404(Character, cid)
    if request.method == "GET": return jsonify(ch.to_dict())
    if request.method == "PUT":
        data = request.get_json() or {}
        ch.name = data.get("name", ch.name)
        ch.role = data.get("role", ch.role)
        age_val = data.get("age", ch.age)
        ch.age = "" if age_val is None else str(age_val)
        ch.description = data.get("description", ch.description)
        if "relations" in data:
            old_rel = _parse_relations(ch.relations)
            new_rel = _parse_relations(json.dumps(data.get("relations") or []))
            ch.relations = json.dumps(new_rel, ensure_ascii=False)
            _sync_bidirectional_relations(ch, new_rel, old_rel)
        if "profile" in data:
            prof = _parse_profile(json.dumps(data.get("profile") or {}))
            ch.profile = json.dumps(prof, ensure_ascii=False)
        db.session.commit(); return jsonify(ch.to_dict())
    # Delete: remove inverse
    others = Character.query.filter(Character.project_id==ch.project_id, Character.id!=ch.id).all()
    for o in others:
        rels = _parse_relations(o.relations)
        o.relations = json.dumps([r for r in rels if r.get("toId") != ch.id], ensure_ascii=False)
    db.session.delete(ch); db.session.commit(); return jsonify({"ok":True})

# ---------- ✅ WorldItems (Welt-Elemente) ----------
@app.route("/api/projects/<int:pid>/world-items", methods=["GET","POST"])
def project_world_items(pid):
    get_or_404(Project, pid)
    if request.method == "POST":
        data = request.get_json() or {}
        wi = WorldItem(
            project_id=pid,
            name=data.get("name","Neues Element"),
            kind=data.get("kind","Allgemein"),
            description=data.get("description",""),
            props=json.dumps(_parse_props(json.dumps(data.get("props",{}))), ensure_ascii=False),
            relations=json.dumps(_parse_relations(json.dumps(data.get("relations",[]))), ensure_ascii=False),
        )
        db.session.add(wi); db.session.commit()
        _sync_world_relations(wi, _parse_relations(wi.relations))
        db.session.commit()
        return jsonify(wi.to_dict()), 201
    items = WorldItem.query.filter_by(project_id=pid).order_by(WorldItem.id.asc()).all()
    return jsonify([x.to_dict() for x in items])

@app.route("/api/world-items/<int:w_id>", methods=["GET","PUT","DELETE"])
def world_item_detail(w_id):
    wi = get_or_404(WorldItem, w_id)
    if request.method == "GET":
        return jsonify(wi.to_dict())
    if request.method == "PUT":
        data = request.get_json() or {}
        wi.name = data.get("name", wi.name)
        wi.kind = data.get("kind", wi.kind)
        wi.description = data.get("description", wi.description)
        if "props" in data:
            wi.props = json.dumps(_parse_props(json.dumps(data.get("props") or {})), ensure_ascii=False)
        if "relations" in data:
            old_rel = _parse_relations(wi.relations)
            new_rel = _parse_relations(json.dumps(data.get("relations") or []))
            wi.relations = json.dumps(new_rel, ensure_ascii=False)
            _sync_world_relations(wi, new_rel, old_rel)
        db.session.commit()
        return jsonify(wi.to_dict())
    # DELETE: inverse entfernen
    others = WorldItem.query.filter(WorldItem.project_id==wi.project_id, WorldItem.id!=wi.id).all()
    for o in others:
        rels = _parse_relations(o.relations)
        o.relations = json.dumps([r for r in rels if r.get("toId") != wi.id], ensure_ascii=False)
    db.session.delete(wi); db.session.commit(); return jsonify({"ok":True})

# ---------- Graphen ----------
@app.route("/api/projects/<int:pid>/relations-graph", methods=["GET"])
def project_relations_graph(pid):
    # Characters-Graph (unverändert, Labels etc.)
    if not HAS_PYVIS: abort(500, "PyVis nicht installiert (pip install pyvis).")
    get_or_404(Project, pid)
    chars = Character.query.filter_by(project_id=pid).all()
    net = Network(height="100%", width="100%", bgcolor="#ffffff", font_color="#222"); net.barnes_hut()
    for c in chars:
        label = c.name or f"#{c.id}"
        title = f"<b>{label}</b><br>Rolle: {c.role or '-'}<br>Alter: {c.age or '-'}"
        color = "#60a5fa" if (c.role or "").lower().startswith("protagon") else "#c084fc" if (c.role or "").lower().startswith("antagon") else "#94a3b8"
        net.add_node(c.id, label=label, title=title, shape='dot', size=16, color=color)
    pairs = {}
    for c in chars:
        for r in _parse_relations(c.relations):
            tid = r["toId"]; 
            if tid == c.id: continue
            a,b = (c.id, tid) if c.id < tid else (tid, c.id)
            e = pairs.setdefault((a,b), {"a":None,"b":None})
            if a == c.id: e["a"] = r
            else: e["b"] = r
    for (a,b), e in pairs.items():
        t1 = (e["a"] or {}).get("type"); t2 = (e["b"] or {}).get("type")
        s1 = int((e["a"] or {}).get("strength",3)) if str((e["a"] or {}).get("strength","")).isdigit() else 3
        s2 = int((e["b"] or {}).get("strength",3)) if str((e["b"] or {}).get("strength","")).isdigit() else 3
        weight = int(round((s1 + s2)/2))
        label = t1 if (t1 and t1==t2) else (f"{t1} ↔ {t2}" if (t1 and t2) else (t1 or t2 or "Beziehung"))
        net.add_edge(a,b, title=label, value=weight, label=label)
    net.set_options('{"physics":{"barnesHut":{"gravitationalConstant":-8000,"springLength":220,"springConstant":0.04},"stabilization":{"iterations":250}},"edges":{"smooth":{"type":"dynamic"},"color":{"inherit":true},"font":{"size":12,"background":"rgba(255,255,255,0.85)","align":"top"}},"nodes":{"scaling":{"min":10,"max":24}}}')
    tmp = os.path.join(tempfile.gettempdir(), f"relations_{pid}.html"); net.write_html(tmp, notebook=False)
    with open(tmp, "r", encoding="utf-8") as f: html = f.read()
    inject = "<style>html,body,#mynetwork{height:100vh!important;width:100%!important;margin:0;padding:0;}</style>"
    return Response(html.replace("</head>", f"{inject}</head>"), mimetype="text/html")

@app.route("/api/projects/<int:pid>/world-graph", methods=["GET"])
def project_world_graph(pid):
    if not HAS_PYVIS: abort(500, "PyVis nicht installiert (pip install pyvis).")
    get_or_404(Project, pid)
    items = WorldItem.query.filter_by(project_id=pid).all()
    net = Network(height="100%", width="100%", bgcolor="#ffffff", font_color="#222"); net.barnes_hut()
    # simple Farbpalette je Kind
    def color_for(kind):
        k = (kind or "").lower()
        if "könig" in k: return "#f59e0b"
        if "land" in k or "region" in k: return "#22c55e"
        if "stadt" in k or "ort" in k: return "#38bdf8"
        if "organisation" in k or "kirche" in k or "gilde" in k: return "#a78bfa"
        if "beruf" in k: return "#ef4444"
        return "#94a3b8"
    for it in items:
        label = it.name or f"#{it.id}"
        title = f"<b>{label}</b><br>Typ: {it.kind or '-'}"
        net.add_node(it.id, label=label, title=title, shape='dot', size=15, color=color_for(it.kind))
    pairs = {}
    for it in items:
        for r in _parse_relations(it.relations):
            tid = r["toId"]; 
            if tid == it.id: continue
            a,b = (it.id, tid) if it.id < tid else (tid, it.id)
            e = pairs.setdefault((a,b), {"a":None,"b":None})
            if a == it.id: e["a"] = r
            else: e["b"] = r
    for (a,b), e in pairs.items():
        t1 = (e["a"] or {}).get("type"); t2 = (e["b"] or {}).get("type")
        label = t1 if (t1 and t1==t2) else (f"{t1} ↔ {t2}" if (t1 and t2) else (t1 or t2 or "Beziehung"))
        net.add_edge(a,b, title=label, value=2, label=label)
    net.set_options('{"physics":{"barnesHut":{"gravitationalConstant":-9000,"springLength":220,"springConstant":0.05},"stabilization":{"iterations":250}},"edges":{"smooth":{"type":"dynamic"},"font":{"size":12,"background":"rgba(255,255,255,0.85)","align":"top"}}}')
    tmp = os.path.join(tempfile.gettempdir(), f"world_{pid}.html"); net.write_html(tmp, notebook=False)
    with open(tmp, "r", encoding="utf-8") as f: html = f.read()
    inject = "<style>html,body,#mynetwork{height:100vh!important;width:100%!important;margin:0;padding:0;}</style>"
    return Response(html.replace("</head>", f"{inject}</head>"), mimetype="text/html")

# Book export
@app.route("/api/projects/<int:pid>/book", methods=["GET"])
def project_book(pid):
    p = get_or_404(Project, pid)
    chapters = (Chapter.query.options(selectinload(Chapter.scenes))
                .filter_by(project_id=pid)
                .order_by(Chapter.order_index.asc(), Chapter.id.asc()).all())
    data = [{
        "id": c.id, "title": c.title, "order_index": c.order_index,
        "scenes": [{"id": s.id, "title": s.title, "order_index": s.order_index, "content": s.content or ""} 
                   for s in sorted(c.scenes, key=lambda s: (s.order_index, s.id))]
    } for c in chapters]
    return jsonify({"project": p.to_dict(), "chapters": data})

def ensure_project_columns():
    ensure_column("projects", "description", "TEXT DEFAULT ''")
    ensure_column("projects", "updated_at", "DATETIME")

def ensure_chapter_columns():
    ensure_column("chapters", "order_index", "INTEGER DEFAULT 0")
    ensure_column("chapters", "content", "TEXT DEFAULT ''")
    ensure_column("chapters", "updated_at", "DATETIME")

def ensure_scene_columns():
    ensure_column("scenes", "order_index", "INTEGER DEFAULT 0")
    ensure_column("scenes", "content", "TEXT DEFAULT ''")
    ensure_column("scenes", "updated_at", "DATETIME")


# ✅ Einmalige Initialisierung – läuft bei jedem Start (Gunicorn, flask run, python app.py)
with app.app_context():
    db.create_all()
    ensure_project_columns()
    ensure_chapter_columns()
    ensure_scene_columns()
    ensure_relations_column()
    ensure_profile_column()


@app.route("/healthz")
def health():
    return {"ok": True}


# Optional für lokalen Start per `python app.py`
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
```

### `backend\lib\bindings\utils.js`
```javascript
function neighbourhoodHighlight(params) {
  // console.log("in nieghbourhoodhighlight");
  allNodes = nodes.get({ returnType: "Object" });
  // originalNodes = JSON.parse(JSON.stringify(allNodes));
  // if something is selected:
  if (params.nodes.length > 0) {
    highlightActive = true;
    var i, j;
    var selectedNode = params.nodes[0];
    var degrees = 2;

    // mark all nodes as hard to read.
    for (let nodeId in allNodes) {
      // nodeColors[nodeId] = allNodes[nodeId].color;
      allNodes[nodeId].color = "rgba(200,200,200,0.5)";
      if (allNodes[nodeId].hiddenLabel === undefined) {
        allNodes[nodeId].hiddenLabel = allNodes[nodeId].label;
        allNodes[nodeId].label = undefined;
      }
    }
    var connectedNodes = network.getConnectedNodes(selectedNode);
    var allConnectedNodes = [];

    // get the second degree nodes
    for (i = 1; i < degrees; i++) {
      for (j = 0; j < connectedNodes.length; j++) {
        allConnectedNodes = allConnectedNodes.concat(
          network.getConnectedNodes(connectedNodes[j])
        );
      }
    }

    // all second degree nodes get a different color and their label back
    for (i = 0; i < allConnectedNodes.length; i++) {
      // allNodes[allConnectedNodes[i]].color = "pink";
      allNodes[allConnectedNodes[i]].color = "rgba(150,150,150,0.75)";
      if (allNodes[allConnectedNodes[i]].hiddenLabel !== undefined) {
        allNodes[allConnectedNodes[i]].label =
          allNodes[allConnectedNodes[i]].hiddenLabel;
        allNodes[allConnectedNodes[i]].hiddenLabel = undefined;
      }
    }

    // all first degree nodes get their own color and their label back
    for (i = 0; i < connectedNodes.length; i++) {
      // allNodes[connectedNodes[i]].color = undefined;
      allNodes[connectedNodes[i]].color = nodeColors[connectedNodes[i]];
      if (allNodes[connectedNodes[i]].hiddenLabel !== undefined) {
        allNodes[connectedNodes[i]].label =
          allNodes[connectedNodes[i]].hiddenLabel;
        allNodes[connectedNodes[i]].hiddenLabel = undefined;
      }
    }

    // the main node gets its own color and its label back.
    // allNodes[selectedNode].color = undefined;
    allNodes[selectedNode].color = nodeColors[selectedNode];
    if (allNodes[selectedNode].hiddenLabel !== undefined) {
      allNodes[selectedNode].label = allNodes[selectedNode].hiddenLabel;
      allNodes[selectedNode].hiddenLabel = undefined;
    }
  } else if (highlightActive === true) {
    // console.log("highlightActive was true");
    // reset all nodes
    for (let nodeId in allNodes) {
      // allNodes[nodeId].color = "purple";
      allNodes[nodeId].color = nodeColors[nodeId];
      // delete allNodes[nodeId].color;
      if (allNodes[nodeId].hiddenLabel !== undefined) {
        allNodes[nodeId].label = allNodes[nodeId].hiddenLabel;
        allNodes[nodeId].hiddenLabel = undefined;
      }
    }
    highlightActive = false;
  }

  // transform the object into an array
  var updateArray = [];
  if (params.nodes.length > 0) {
    for (let nodeId in allNodes) {
      if (allNodes.hasOwnProperty(nodeId)) {
        // console.log(allNodes[nodeId]);
        updateArray.push(allNodes[nodeId]);
      }
    }
    nodes.update(updateArray);
  } else {
    // console.log("Nothing was selected");
    for (let nodeId in allNodes) {
      if (allNodes.hasOwnProperty(nodeId)) {
        // console.log(allNodes[nodeId]);
        // allNodes[nodeId].color = {};
        updateArray.push(allNodes[nodeId]);
      }
    }
    nodes.update(updateArray);
  }
}

function filterHighlight(params) {
  allNodes = nodes.get({ returnType: "Object" });
  // if something is selected:
  if (params.nodes.length > 0) {
    filterActive = true;
    let selectedNodes = params.nodes;

    // hiding all nodes and saving the label
    for (let nodeId in allNodes) {
      allNodes[nodeId].hidden = true;
      if (allNodes[nodeId].savedLabel === undefined) {
        allNodes[nodeId].savedLabel = allNodes[nodeId].label;
        allNodes[nodeId].label = undefined;
      }
    }

    for (let i=0; i < selectedNodes.length; i++) {
      allNodes[selectedNodes[i]].hidden = false;
      if (allNodes[selectedNodes[i]].savedLabel !== undefined) {
        allNodes[selectedNodes[i]].label = allNodes[selectedNodes[i]].savedLabel;
        allNodes[selectedNodes[i]].savedLabel = undefined;
      }
    }

  } else if (filterActive === true) {
    // reset all nodes
    for (let nodeId in allNodes) {
      allNodes[nodeId].hidden = false;
      if (allNodes[nodeId].savedLabel !== undefined) {
        allNodes[nodeId].label = allNodes[nodeId].savedLabel;
        allNodes[nodeId].savedLabel = undefined;
      }
    }
    filterActive = false;
  }

  // transform the object into an array
  var updateArray = [];
  if (params.nodes.length > 0) {
    for (let nodeId in allNodes) {
      if (allNodes.hasOwnProperty(nodeId)) {
        updateArray.push(allNodes[nodeId]);
      }
    }
    nodes.update(updateArray);
  } else {
    for (let nodeId in allNodes) {
      if (allNodes.hasOwnProperty(nodeId)) {
        updateArray.push(allNodes[nodeId]);
      }
    }
    nodes.update(updateArray);
  }
}

function selectNode(nodes) {
  network.selectNodes(nodes);
  neighbourhoodHighlight({ nodes: nodes });
  return nodes;
}

function selectNodes(nodes) {
  network.selectNodes(nodes);
  filterHighlight({nodes: nodes});
  return nodes;
}

function highlightFilter(filter) {
  let selectedNodes = []
  let selectedProp = filter['property']
  if (filter['item'] === 'node') {
    let allNodes = nodes.get({ returnType: "Object" });
    for (let nodeId in allNodes) {
      if (allNodes[nodeId][selectedProp] && filter['value'].includes((allNodes[nodeId][selectedProp]).toString())) {
        selectedNodes.push(nodeId)
      }
    }
  }
  else if (filter['item'] === 'edge'){
    let allEdges = edges.get({returnType: 'object'});
    // check if the selected property exists for selected edge and select the nodes connected to the edge
    for (let edge in allEdges) {
      if (allEdges[edge][selectedProp] && filter['value'].includes((allEdges[edge][selectedProp]).toString())) {
        selectedNodes.push(allEdges[edge]['from'])
        selectedNodes.push(allEdges[edge]['to'])
      }
    }
  }
  selectNodes(selectedNodes)
}
```

### `backend\lib\tom-select\tom-select.complete.min.js`
```javascript
/**
* Tom Select v2.0.0-rc.4
* Licensed under the Apache License, Version 2.0 (the "License");
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).TomSelect=t()}(this,(function(){"use strict"
function e(e,t){e.split(/\s+/).forEach((e=>{t(e)}))}class t{constructor(){this._events={}}on(t,i){e(t,(e=>{this._events[e]=this._events[e]||[],this._events[e].push(i)}))}off(t,i){var s=arguments.length
0!==s?e(t,(e=>{if(1===s)return delete this._events[e]
e in this._events!=!1&&this._events[e].splice(this._events[e].indexOf(i),1)})):this._events={}}trigger(t,...i){var s=this
e(t,(e=>{if(e in s._events!=!1)for(let t of s._events[e])t.apply(s,i)}))}}var i
const s="[̀-ͯ·ʾ]",n=new RegExp(s,"g")
var o
const r={"æ":"ae","ⱥ":"a","ø":"o"},l=new RegExp(Object.keys(r).join("|"),"g"),a=[[67,67],[160,160],[192,438],[452,652],[961,961],[1019,1019],[1083,1083],[1281,1289],[1984,1984],[5095,5095],[7429,7441],[7545,7549],[7680,7935],[8580,8580],[9398,9449],[11360,11391],[42792,42793],[42802,42851],[42873,42897],[42912,42922],[64256,64260],[65313,65338],[65345,65370]],c=e=>e.normalize("NFKD").replace(n,"").toLowerCase().replace(l,(function(e){return r[e]})),d=(e,t="|")=>{if(1==e.length)return e[0]
var i=1
return e.forEach((e=>{i=Math.max(i,e.length)})),1==i?"["+e.join("")+"]":"(?:"+e.join(t)+")"},p=e=>{if(1===e.length)return[[e]]
var t=[]
return p(e.substring(1)).forEach((function(i){var s=i.slice(0)
s[0]=e.charAt(0)+s[0],t.push(s),(s=i.slice(0)).unshift(e.charAt(0)),t.push(s)})),t},u=e=>{void 0===o&&(o=(()=>{var e={}
a.forEach((t=>{for(let s=t[0];s<=t[1];s++){let t=String.fromCharCode(s),n=c(t)
if(n!=t.toLowerCase()){n in e||(e[n]=[n])
var i=new RegExp(d(e[n]),"iu")
t.match(i)||e[n].push(t)}}}))
var t=Object.keys(e)
t=t.sort(((e,t)=>t.length-e.length)),i=new RegExp("("+d(t)+"[̀-ͯ·ʾ]*)","g")
var s={}
return t.sort(((e,t)=>e.length-t.length)).forEach((t=>{var i=p(t).map((t=>(t=t.map((t=>e.hasOwnProperty(t)?d(e[t]):t)),d(t,""))))
s[t]=d(i)})),s})())
return e.normalize("NFKD").toLowerCase().split(i).map((e=>{if(""==e)return""
const t=c(e)
if(o.hasOwnProperty(t))return o[t]
const i=e.normalize("NFC")
return i!=e?d([e,i]):e})).join("")},h=(e,t)=>{if(e)return e[t]},g=(e,t)=>{if(e){for(var i,s=t.split(".");(i=s.shift())&&(e=e[i]););return e}},f=(e,t,i)=>{var s,n
return e?-1===(n=(e+="").search(t.regex))?0:(s=t.string.length/e.length,0===n&&(s+=.5),s*i):0},v=e=>(e+"").replace(/([\$\(-\+\.\?\[-\^\{-\}])/g,"\\$1"),m=(e,t)=>{var i=e[t]
if("function"==typeof i)return i
i&&!Array.isArray(i)&&(e[t]=[i])},y=(e,t)=>{if(Array.isArray(e))e.forEach(t)
else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},O=(e,t)=>"number"==typeof e&&"number"==typeof t?e>t?1:e<t?-1:0:(e=c(e+"").toLowerCase())>(t=c(t+"").toLowerCase())?1:t>e?-1:0
class b{constructor(e,t){this.items=e,this.settings=t||{diacritics:!0}}tokenize(e,t,i){if(!e||!e.length)return[]
const s=[],n=e.split(/\s+/)
var o
return i&&(o=new RegExp("^("+Object.keys(i).map(v).join("|")+"):(.*)$")),n.forEach((e=>{let i,n=null,r=null
o&&(i=e.match(o))&&(n=i[1],e=i[2]),e.length>0&&(r=v(e),this.settings.diacritics&&(r=u(r)),t&&(r="\\b"+r)),s.push({string:e,regex:r?new RegExp(r,"iu"):null,field:n})})),s}getScoreFunction(e,t){var i=this.prepareSearch(e,t)
return this._getScoreFunction(i)}_getScoreFunction(e){const t=e.tokens,i=t.length
if(!i)return function(){return 0}
const s=e.options.fields,n=e.weights,o=s.length,r=e.getAttrFn
if(!o)return function(){return 1}
const l=1===o?function(e,t){const i=s[0].field
return f(r(t,i),e,n[i])}:function(e,t){var i=0
if(e.field){const s=r(t,e.field)
!e.regex&&s?i+=1/o:i+=f(s,e,1)}else y(n,((s,n)=>{i+=f(r(t,n),e,s)}))
return i/o}
return 1===i?function(e){return l(t[0],e)}:"and"===e.options.conjunction?function(e){for(var s,n=0,o=0;n<i;n++){if((s=l(t[n],e))<=0)return 0
o+=s}return o/i}:function(e){var s=0
return y(t,(t=>{s+=l(t,e)})),s/i}}getSortFunction(e,t){var i=this.prepareSearch(e,t)
return this._getSortFunction(i)}_getSortFunction(e){var t,i,s
const n=this,o=e.options,r=!e.query&&o.sort_empty?o.sort_empty:o.sort,l=[],a=[]
if("function"==typeof r)return r.bind(this)
const c=function(t,i){return"$score"===t?i.score:e.getAttrFn(n.items[i.id],t)}
if(r)for(t=0,i=r.length;t<i;t++)(e.query||"$score"!==r[t].field)&&l.push(r[t])
if(e.query){for(s=!0,t=0,i=l.length;t<i;t++)if("$score"===l[t].field){s=!1
break}s&&l.unshift({field:"$score",direction:"desc"})}else for(t=0,i=l.length;t<i;t++)if("$score"===l[t].field){l.splice(t,1)
break}for(t=0,i=l.length;t<i;t++)a.push("desc"===l[t].direction?-1:1)
const d=l.length
if(d){if(1===d){const e=l[0].field,t=a[0]
return function(i,s){return t*O(c(e,i),c(e,s))}}return function(e,t){var i,s,n
for(i=0;i<d;i++)if(n=l[i].field,s=a[i]*O(c(n,e),c(n,t)))return s
return 0}}return null}prepareSearch(e,t){const i={}
var s=Object.assign({},t)
if(m(s,"sort"),m(s,"sort_empty"),s.fields){m(s,"fields")
const e=[]
s.fields.forEach((t=>{"string"==typeof t&&(t={field:t,weight:1}),e.push(t),i[t.field]="weight"in t?t.weight:1})),s.fields=e}return{options:s,query:e.toLowerCase().trim(),tokens:this.tokenize(e,s.respect_word_boundaries,i),total:0,items:[],weights:i,getAttrFn:s.nesting?g:h}}search(e,t){var i,s,n=this
s=this.prepareSearch(e,t),t=s.options,e=s.query
const o=t.score||n._getScoreFunction(s)
e.length?y(n.items,((e,n)=>{i=o(e),(!1===t.filter||i>0)&&s.items.push({score:i,id:n})})):y(n.items,((e,t)=>{s.items.push({score:1,id:t})}))
const r=n._getSortFunction(s)
return r&&s.items.sort(r),s.total=s.items.length,"number"==typeof t.limit&&(s.items=s.items.slice(0,t.limit)),s}}const w=e=>{if(e.jquery)return e[0]
if(e instanceof HTMLElement)return e
if(e.indexOf("<")>-1){let t=document.createElement("div")
return t.innerHTML=e.trim(),t.firstChild}return document.querySelector(e)},_=(e,t)=>{var i=document.createEvent("HTMLEvents")
i.initEvent(t,!0,!1),e.dispatchEvent(i)},I=(e,t)=>{Object.assign(e.style,t)},C=(e,...t)=>{var i=A(t);(e=x(e)).map((e=>{i.map((t=>{e.classList.add(t)}))}))},S=(e,...t)=>{var i=A(t);(e=x(e)).map((e=>{i.map((t=>{e.classList.remove(t)}))}))},A=e=>{var t=[]
return y(e,(e=>{"string"==typeof e&&(e=e.trim().split(/[\11\12\14\15\40]/)),Array.isArray(e)&&(t=t.concat(e))})),t.filter(Boolean)},x=e=>(Array.isArray(e)||(e=[e]),e),k=(e,t,i)=>{if(!i||i.contains(e))for(;e&&e.matches;){if(e.matches(t))return e
e=e.parentNode}},F=(e,t=0)=>t>0?e[e.length-1]:e[0],L=(e,t)=>{if(!e)return-1
t=t||e.nodeName
for(var i=0;e=e.previousElementSibling;)e.matches(t)&&i++
return i},P=(e,t)=>{y(t,((t,i)=>{null==t?e.removeAttribute(i):e.setAttribute(i,""+t)}))},E=(e,t)=>{e.parentNode&&e.parentNode.replaceChild(t,e)},T=(e,t)=>{if(null===t)return
if("string"==typeof t){if(!t.length)return
t=new RegExp(t,"i")}const i=e=>3===e.nodeType?(e=>{var i=e.data.match(t)
if(i&&e.data.length>0){var s=document.createElement("span")
s.className="highlight"
var n=e.splitText(i.index)
n.splitText(i[0].length)
var o=n.cloneNode(!0)
return s.appendChild(o),E(n,s),1}return 0})(e):((e=>{if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)&&("highlight"!==e.className||"SPAN"!==e.tagName))for(var t=0;t<e.childNodes.length;++t)t+=i(e.childNodes[t])})(e),0)
i(e)},V="undefined"!=typeof navigator&&/Mac/.test(navigator.userAgent)?"metaKey":"ctrlKey"
var j={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:null,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,shouldOpen:null,maxOptions:50,maxItems:null,hideSelected:null,duplicates:!1,addPrecedence:!1,selectOnTab:!1,preload:null,allowEmptyOption:!1,loadThrottle:300,loadingClass:"loading",dataAttr:null,optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"ts-wrapper",controlClass:"ts-control",dropdownClass:"ts-dropdown",dropdownContentClass:"ts-dropdown-content",itemClass:"item",optionClass:"option",dropdownParent:null,copyClassesToDropdown:!1,placeholder:null,hidePlaceholder:null,shouldLoad:function(e){return e.length>0},render:{}}
const q=e=>null==e?null:D(e),D=e=>"boolean"==typeof e?e?"1":"0":e+"",N=e=>(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),z=(e,t)=>{var i
return function(s,n){var o=this
i&&(o.loading=Math.max(o.loading-1,0),clearTimeout(i)),i=setTimeout((function(){i=null,o.loadedSearches[s]=!0,e.call(o,s,n)}),t)}},R=(e,t,i)=>{var s,n=e.trigger,o={}
for(s in e.trigger=function(){var i=arguments[0]
if(-1===t.indexOf(i))return n.apply(e,arguments)
o[i]=arguments},i.apply(e,[]),e.trigger=n,o)n.apply(e,o[s])},H=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},B=(e,t,i,s)=>{e.addEventListener(t,i,s)},K=(e,t)=>!!t&&(!!t[e]&&1===(t.altKey?1:0)+(t.ctrlKey?1:0)+(t.shiftKey?1:0)+(t.metaKey?1:0)),M=(e,t)=>{const i=e.getAttribute("id")
return i||(e.setAttribute("id",t),t)},Q=e=>e.replace(/[\\"']/g,"\\$&"),G=(e,t)=>{t&&e.append(t)}
function U(e,t){var i=Object.assign({},j,t),s=i.dataAttr,n=i.labelField,o=i.valueField,r=i.disabledField,l=i.optgroupField,a=i.optgroupLabelField,c=i.optgroupValueField,d=e.tagName.toLowerCase(),p=e.getAttribute("placeholder")||e.getAttribute("data-placeholder")
if(!p&&!i.allowEmptyOption){let t=e.querySelector('option[value=""]')
t&&(p=t.textContent)}var u,h,g,f,v,m,O={placeholder:p,options:[],optgroups:[],items:[],maxItems:null}
return"select"===d?(h=O.options,g={},f=1,v=e=>{var t=Object.assign({},e.dataset),i=s&&t[s]
return"string"==typeof i&&i.length&&(t=Object.assign(t,JSON.parse(i))),t},m=(e,t)=>{var s=q(e.value)
if(null!=s&&(s||i.allowEmptyOption)){if(g.hasOwnProperty(s)){if(t){var a=g[s][l]
a?Array.isArray(a)?a.push(t):g[s][l]=[a,t]:g[s][l]=t}}else{var c=v(e)
c[n]=c[n]||e.textContent,c[o]=c[o]||s,c[r]=c[r]||e.disabled,c[l]=c[l]||t,c.$option=e,g[s]=c,h.push(c)}e.selected&&O.items.push(s)}},O.maxItems=e.hasAttribute("multiple")?null:1,y(e.children,(e=>{var t,i,s
"optgroup"===(u=e.tagName.toLowerCase())?((s=v(t=e))[a]=s[a]||t.getAttribute("label")||"",s[c]=s[c]||f++,s[r]=s[r]||t.disabled,O.optgroups.push(s),i=s[c],y(t.children,(e=>{m(e,i)}))):"option"===u&&m(e)}))):(()=>{const t=e.getAttribute(s)
if(t)O.options=JSON.parse(t),y(O.options,(e=>{O.items.push(e[o])}))
else{var r=e.value.trim()||""
if(!i.allowEmptyOption&&!r.length)return
const t=r.split(i.delimiter)
y(t,(e=>{const t={}
t[n]=e,t[o]=e,O.options.push(t)})),O.items=t}})(),Object.assign({},j,O,t)}var W=0
class J extends(function(e){return e.plugins={},class extends e{constructor(...e){super(...e),this.plugins={names:[],settings:{},requested:{},loaded:{}}}static define(t,i){e.plugins[t]={name:t,fn:i}}initializePlugins(e){var t,i
const s=this,n=[]
if(Array.isArray(e))e.forEach((e=>{"string"==typeof e?n.push(e):(s.plugins.settings[e.name]=e.options,n.push(e.name))}))
else if(e)for(t in e)e.hasOwnProperty(t)&&(s.plugins.settings[t]=e[t],n.push(t))
for(;i=n.shift();)s.require(i)}loadPlugin(t){var i=this,s=i.plugins,n=e.plugins[t]
if(!e.plugins.hasOwnProperty(t))throw new Error('Unable to find "'+t+'" plugin')
s.requested[t]=!0,s.loaded[t]=n.fn.apply(i,[i.plugins.settings[t]||{}]),s.names.push(t)}require(e){var t=this,i=t.plugins
if(!t.plugins.loaded.hasOwnProperty(e)){if(i.requested[e])throw new Error('Plugin has circular dependency ("'+e+'")')
t.loadPlugin(e)}return i.loaded[e]}}}(t)){constructor(e,t){var i
super(),this.order=0,this.isOpen=!1,this.isDisabled=!1,this.isInvalid=!1,this.isValid=!0,this.isLocked=!1,this.isFocused=!1,this.isInputHidden=!1,this.isSetup=!1,this.ignoreFocus=!1,this.hasOptions=!1,this.lastValue="",this.caretPos=0,this.loading=0,this.loadedSearches={},this.activeOption=null,this.activeItems=[],this.optgroups={},this.options={},this.userOptions={},this.items=[],W++
var s=w(e)
if(s.tomselect)throw new Error("Tom Select already initialized on this element")
s.tomselect=this,i=(window.getComputedStyle&&window.getComputedStyle(s,null)).getPropertyValue("direction")
const n=U(s,t)
this.settings=n,this.input=s,this.tabIndex=s.tabIndex||0,this.is_select_tag="select"===s.tagName.toLowerCase(),this.rtl=/rtl/i.test(i),this.inputId=M(s,"tomselect-"+W),this.isRequired=s.required,this.sifter=new b(this.options,{diacritics:n.diacritics}),n.mode=n.mode||(1===n.maxItems?"single":"multi"),"boolean"!=typeof n.hideSelected&&(n.hideSelected="multi"===n.mode),"boolean"!=typeof n.hidePlaceholder&&(n.hidePlaceholder="multi"!==n.mode)
var o=n.createFilter
"function"!=typeof o&&("string"==typeof o&&(o=new RegExp(o)),o instanceof RegExp?n.createFilter=e=>o.test(e):n.createFilter=()=>!0),this.initializePlugins(n.plugins),this.setupCallbacks(),this.setupTemplates()
const r=w("<div>"),l=w("<div>"),a=this._render("dropdown"),c=w('<div role="listbox" tabindex="-1">'),d=this.input.getAttribute("class")||"",p=n.mode
var u
if(C(r,n.wrapperClass,d,p),C(l,n.controlClass),G(r,l),C(a,n.dropdownClass,p),n.copyClassesToDropdown&&C(a,d),C(c,n.dropdownContentClass),G(a,c),w(n.dropdownParent||r).appendChild(a),n.hasOwnProperty("controlInput"))n.controlInput?(u=w(n.controlInput),this.focus_node=u):(u=w("<input/>"),this.focus_node=l)
else{u=w('<input type="text" autocomplete="off" size="1" />')
y(["autocorrect","autocapitalize","autocomplete"],(e=>{s.getAttribute(e)&&P(u,{[e]:s.getAttribute(e)})})),u.tabIndex=-1,l.appendChild(u),this.focus_node=u}this.wrapper=r,this.dropdown=a,this.dropdown_content=c,this.control=l,this.control_input=u,this.setup()}setup(){const e=this,t=e.settings,i=e.control_input,s=e.dropdown,n=e.dropdown_content,o=e.wrapper,r=e.control,l=e.input,a=e.focus_node,c={passive:!0},d=e.inputId+"-ts-dropdown"
P(n,{id:d}),P(a,{role:"combobox","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":d})
const p=M(a,e.inputId+"-ts-control"),u="label[for='"+(e=>e.replace(/['"\\]/g,"\\$&"))(e.inputId)+"']",h=document.querySelector(u),g=e.focus.bind(e)
if(h){B(h,"click",g),P(h,{for:p})
const t=M(h,e.inputId+"-ts-label")
P(a,{"aria-labelledby":t}),P(n,{"aria-labelledby":t})}if(o.style.width=l.style.width,e.plugins.names.length){const t="plugin-"+e.plugins.names.join(" plugin-")
C([o,s],t)}(null===t.maxItems||t.maxItems>1)&&e.is_select_tag&&P(l,{multiple:"multiple"}),e.settings.placeholder&&P(i,{placeholder:t.placeholder}),!e.settings.splitOn&&e.settings.delimiter&&(e.settings.splitOn=new RegExp("\\s*"+v(e.settings.delimiter)+"+\\s*")),t.load&&t.loadThrottle&&(t.load=z(t.load,t.loadThrottle)),e.control_input.type=l.type,B(s,"click",(t=>{const i=k(t.target,"[data-selectable]")
i&&(e.onOptionSelect(t,i),H(t,!0))})),B(r,"click",(t=>{var s=k(t.target,"[data-ts-item]",r)
s&&e.onItemSelect(t,s)?H(t,!0):""==i.value&&(e.onClick(),H(t,!0))})),B(i,"mousedown",(e=>{""!==i.value&&e.stopPropagation()})),B(a,"keydown",(t=>e.onKeyDown(t))),B(i,"keypress",(t=>e.onKeyPress(t))),B(i,"input",(t=>e.onInput(t))),B(a,"resize",(()=>e.positionDropdown()),c),B(a,"blur",(t=>e.onBlur(t))),B(a,"focus",(t=>e.onFocus(t))),B(a,"paste",(t=>e.onPaste(t)))
const f=t=>{const i=t.composedPath()[0]
if(!o.contains(i)&&!s.contains(i))return e.isFocused&&e.blur(),void e.inputState()
H(t,!0)}
var m=()=>{e.isOpen&&e.positionDropdown()}
B(document,"mousedown",f),B(window,"scroll",m,c),B(window,"resize",m,c),this._destroy=()=>{document.removeEventListener("mousedown",f),window.removeEventListener("sroll",m),window.removeEventListener("resize",m),h&&h.removeEventListener("click",g)},this.revertSettings={innerHTML:l.innerHTML,tabIndex:l.tabIndex},l.tabIndex=-1,l.insertAdjacentElement("afterend",e.wrapper),e.sync(!1),t.items=[],delete t.optgroups,delete t.options,B(l,"invalid",(t=>{e.isValid&&(e.isValid=!1,e.isInvalid=!0,e.refreshState())})),e.updateOriginalInput(),e.refreshItems(),e.close(!1),e.inputState(),e.isSetup=!0,l.disabled?e.disable():e.enable(),e.on("change",this.onChange),C(l,"tomselected","ts-hidden-accessible"),e.trigger("initialize"),!0===t.preload&&e.preload()}setupOptions(e=[],t=[]){this.addOptions(e),y(t,(e=>{this.registerOptionGroup(e)}))}setupTemplates(){var e=this,t=e.settings.labelField,i=e.settings.optgroupLabelField,s={optgroup:e=>{let t=document.createElement("div")
return t.className="optgroup",t.appendChild(e.options),t},optgroup_header:(e,t)=>'<div class="optgroup-header">'+t(e[i])+"</div>",option:(e,i)=>"<div>"+i(e[t])+"</div>",item:(e,i)=>"<div>"+i(e[t])+"</div>",option_create:(e,t)=>'<div class="create">Add <strong>'+t(e.input)+"</strong>&hellip;</div>",no_results:()=>'<div class="no-results">No results found</div>',loading:()=>'<div class="spinner"></div>',not_loading:()=>{},dropdown:()=>"<div></div>"}
e.settings.render=Object.assign({},s,e.settings.render)}setupCallbacks(){var e,t,i={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",item_select:"onItemSelect",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"}
for(e in i)(t=this.settings[i[e]])&&this.on(e,t)}sync(e=!0){const t=this,i=e?U(t.input,{delimiter:t.settings.delimiter}):t.settings
t.setupOptions(i.options,i.optgroups),t.setValue(i.items,!0),t.lastQuery=null}onClick(){var e=this
if(e.activeItems.length>0)return e.clearActiveItems(),void e.focus()
e.isFocused&&e.isOpen?e.blur():e.focus()}onMouseDown(){}onChange(){_(this.input,"input"),_(this.input,"change")}onPaste(e){var t=this
t.isFull()||t.isInputHidden||t.isLocked?H(e):t.settings.splitOn&&setTimeout((()=>{var e=t.inputValue()
if(e.match(t.settings.splitOn)){var i=e.trim().split(t.settings.splitOn)
y(i,(e=>{t.createItem(e)}))}}),0)}onKeyPress(e){var t=this
if(!t.isLocked){var i=String.fromCharCode(e.keyCode||e.which)
return t.settings.create&&"multi"===t.settings.mode&&i===t.settings.delimiter?(t.createItem(),void H(e)):void 0}H(e)}onKeyDown(e){var t=this
if(t.isLocked)9!==e.keyCode&&H(e)
else{switch(e.keyCode){case 65:if(K(V,e))return H(e),void t.selectAll()
break
case 27:return t.isOpen&&(H(e,!0),t.close()),void t.clearActiveItems()
case 40:if(!t.isOpen&&t.hasOptions)t.open()
else if(t.activeOption){let e=t.getAdjacent(t.activeOption,1)
e&&t.setActiveOption(e)}return void H(e)
case 38:if(t.activeOption){let e=t.getAdjacent(t.activeOption,-1)
e&&t.setActiveOption(e)}return void H(e)
case 13:return void(t.isOpen&&t.activeOption?(t.onOptionSelect(e,t.activeOption),H(e)):t.settings.create&&t.createItem()&&H(e))
case 37:return void t.advanceSelection(-1,e)
case 39:return void t.advanceSelection(1,e)
case 9:return void(t.settings.selectOnTab&&(t.isOpen&&t.activeOption&&(t.onOptionSelect(e,t.activeOption),H(e)),t.settings.create&&t.createItem()&&H(e)))
case 8:case 46:return void t.deleteSelection(e)}t.isInputHidden&&!K(V,e)&&H(e)}}onInput(e){var t=this
if(!t.isLocked){var i=t.inputValue()
t.lastValue!==i&&(t.lastValue=i,t.settings.shouldLoad.call(t,i)&&t.load(i),t.refreshOptions(),t.trigger("type",i))}}onFocus(e){var t=this,i=t.isFocused
if(t.isDisabled)return t.blur(),void H(e)
t.ignoreFocus||(t.isFocused=!0,"focus"===t.settings.preload&&t.preload(),i||t.trigger("focus"),t.activeItems.length||(t.showInput(),t.refreshOptions(!!t.settings.openOnFocus)),t.refreshState())}onBlur(e){if(!1!==document.hasFocus()){var t=this
if(t.isFocused){t.isFocused=!1,t.ignoreFocus=!1
var i=()=>{t.close(),t.setActiveItem(),t.setCaret(t.items.length),t.trigger("blur")}
t.settings.create&&t.settings.createOnBlur?t.createItem(null,!1,i):i()}}}onOptionSelect(e,t){var i,s=this
t&&(t.parentElement&&t.parentElement.matches("[data-disabled]")||(t.classList.contains("create")?s.createItem(null,!0,(()=>{s.settings.closeAfterSelect&&s.close()})):void 0!==(i=t.dataset.value)&&(s.lastQuery=null,s.addItem(i),s.settings.closeAfterSelect&&s.close(),!s.settings.hideSelected&&e.type&&/click/.test(e.type)&&s.setActiveOption(t))))}onItemSelect(e,t){var i=this
return!i.isLocked&&"multi"===i.settings.mode&&(H(e),i.setActiveItem(t,e),!0)}canLoad(e){return!!this.settings.load&&!this.loadedSearches.hasOwnProperty(e)}load(e){const t=this
if(!t.canLoad(e))return
C(t.wrapper,t.settings.loadingClass),t.loading++
const i=t.loadCallback.bind(t)
t.settings.load.call(t,e,i)}loadCallback(e,t){const i=this
i.loading=Math.max(i.loading-1,0),i.lastQuery=null,i.clearActiveOption(),i.setupOptions(e,t),i.refreshOptions(i.isFocused&&!i.isInputHidden),i.loading||S(i.wrapper,i.settings.loadingClass),i.trigger("load",e,t)}preload(){var e=this.wrapper.classList
e.contains("preloaded")||(e.add("preloaded"),this.load(""))}setTextboxValue(e=""){var t=this.control_input
t.value!==e&&(t.value=e,_(t,"update"),this.lastValue=e)}getValue(){return this.is_select_tag&&this.input.hasAttribute("multiple")?this.items:this.items.join(this.settings.delimiter)}setValue(e,t){R(this,t?[]:["change"],(()=>{this.clear(t),this.addItems(e,t)}))}setMaxItems(e){0===e&&(e=null),this.settings.maxItems=e,this.refreshState()}setActiveItem(e,t){var i,s,n,o,r,l,a=this
if("single"!==a.settings.mode){if(!e)return a.clearActiveItems(),void(a.isFocused&&a.showInput())
if("click"===(i=t&&t.type.toLowerCase())&&K("shiftKey",t)&&a.activeItems.length){for(l=a.getLastActive(),(n=Array.prototype.indexOf.call(a.control.children,l))>(o=Array.prototype.indexOf.call(a.control.children,e))&&(r=n,n=o,o=r),s=n;s<=o;s++)e=a.control.children[s],-1===a.activeItems.indexOf(e)&&a.setActiveItemClass(e)
H(t)}else"click"===i&&K(V,t)||"keydown"===i&&K("shiftKey",t)?e.classList.contains("active")?a.removeActiveItem(e):a.setActiveItemClass(e):(a.clearActiveItems(),a.setActiveItemClass(e))
a.hideInput(),a.isFocused||a.focus()}}setActiveItemClass(e){const t=this,i=t.control.querySelector(".last-active")
i&&S(i,"last-active"),C(e,"active last-active"),t.trigger("item_select",e),-1==t.activeItems.indexOf(e)&&t.activeItems.push(e)}removeActiveItem(e){var t=this.activeItems.indexOf(e)
this.activeItems.splice(t,1),S(e,"active")}clearActiveItems(){S(this.activeItems,"active"),this.activeItems=[]}setActiveOption(e){e!==this.activeOption&&(this.clearActiveOption(),e&&(this.activeOption=e,P(this.focus_node,{"aria-activedescendant":e.getAttribute("id")}),P(e,{"aria-selected":"true"}),C(e,"active"),this.scrollToOption(e)))}scrollToOption(e,t){if(!e)return
const i=this.dropdown_content,s=i.clientHeight,n=i.scrollTop||0,o=e.offsetHeight,r=e.getBoundingClientRect().top-i.getBoundingClientRect().top+n
r+o>s+n?this.scroll(r-s+o,t):r<n&&this.scroll(r,t)}scroll(e,t){const i=this.dropdown_content
t&&(i.style.scrollBehavior=t),i.scrollTop=e,i.style.scrollBehavior=""}clearActiveOption(){this.activeOption&&(S(this.activeOption,"active"),P(this.activeOption,{"aria-selected":null})),this.activeOption=null,P(this.focus_node,{"aria-activedescendant":null})}selectAll(){if("single"===this.settings.mode)return
const e=this.controlChildren()
e.length&&(this.hideInput(),this.close(),this.activeItems=e,C(e,"active"))}inputState(){var e=this
e.control.contains(e.control_input)&&(P(e.control_input,{placeholder:e.settings.placeholder}),e.activeItems.length>0||!e.isFocused&&e.settings.hidePlaceholder&&e.items.length>0?(e.setTextboxValue(),e.isInputHidden=!0):(e.settings.hidePlaceholder&&e.items.length>0&&P(e.control_input,{placeholder:""}),e.isInputHidden=!1),e.wrapper.classList.toggle("input-hidden",e.isInputHidden))}hideInput(){this.inputState()}showInput(){this.inputState()}inputValue(){return this.control_input.value.trim()}focus(){var e=this
e.isDisabled||(e.ignoreFocus=!0,e.control_input.offsetWidth?e.control_input.focus():e.focus_node.focus(),setTimeout((()=>{e.ignoreFocus=!1,e.onFocus()}),0))}blur(){this.focus_node.blur(),this.onBlur()}getScoreFunction(e){return this.sifter.getScoreFunction(e,this.getSearchOptions())}getSearchOptions(){var e=this.settings,t=e.sortField
return"string"==typeof e.sortField&&(t=[{field:e.sortField}]),{fields:e.searchField,conjunction:e.searchConjunction,sort:t,nesting:e.nesting}}search(e){var t,i,s,n=this,o=this.getSearchOptions()
if(n.settings.score&&"function"!=typeof(s=n.settings.score.call(n,e)))throw new Error('Tom Select "score" setting must be a function that returns a function')
if(e!==n.lastQuery?(n.lastQuery=e,i=n.sifter.search(e,Object.assign(o,{score:s})),n.currentResults=i):i=Object.assign({},n.currentResults),n.settings.hideSelected)for(t=i.items.length-1;t>=0;t--){let e=q(i.items[t].id)
e&&-1!==n.items.indexOf(e)&&i.items.splice(t,1)}return i}refreshOptions(e=!0){var t,i,s,n,o,r,l,a,c,d,p
const u={},h=[]
var g,f=this,v=f.inputValue(),m=f.search(v),O=f.activeOption,b=f.settings.shouldOpen||!1,w=f.dropdown_content
for(O&&(c=O.dataset.value,d=O.closest("[data-group]")),n=m.items.length,"number"==typeof f.settings.maxOptions&&(n=Math.min(n,f.settings.maxOptions)),n>0&&(b=!0),t=0;t<n;t++){let e=m.items[t].id,n=f.options[e],l=f.getOption(e,!0)
for(f.settings.hideSelected||l.classList.toggle("selected",f.items.includes(e)),o=n[f.settings.optgroupField]||"",i=0,s=(r=Array.isArray(o)?o:[o])&&r.length;i<s;i++)o=r[i],f.optgroups.hasOwnProperty(o)||(o=""),u.hasOwnProperty(o)||(u[o]=document.createDocumentFragment(),h.push(o)),i>0&&(l=l.cloneNode(!0),P(l,{id:n.$id+"-clone-"+i,"aria-selected":null}),l.classList.add("ts-cloned"),S(l,"active")),c==e&&d&&d.dataset.group===o&&(O=l),u[o].appendChild(l)}this.settings.lockOptgroupOrder&&h.sort(((e,t)=>(f.optgroups[e]&&f.optgroups[e].$order||0)-(f.optgroups[t]&&f.optgroups[t].$order||0))),l=document.createDocumentFragment(),y(h,(e=>{if(f.optgroups.hasOwnProperty(e)&&u[e].children.length){let t=document.createDocumentFragment(),i=f.render("optgroup_header",f.optgroups[e])
G(t,i),G(t,u[e])
let s=f.render("optgroup",{group:f.optgroups[e],options:t})
G(l,s)}else G(l,u[e])})),w.innerHTML="",G(w,l),f.settings.highlight&&(g=w.querySelectorAll("span.highlight"),Array.prototype.forEach.call(g,(function(e){var t=e.parentNode
t.replaceChild(e.firstChild,e),t.normalize()})),m.query.length&&m.tokens.length&&y(m.tokens,(e=>{T(w,e.regex)})))
var _=e=>{let t=f.render(e,{input:v})
return t&&(b=!0,w.insertBefore(t,w.firstChild)),t}
if(f.loading?_("loading"):f.settings.shouldLoad.call(f,v)?0===m.items.length&&_("no_results"):_("not_loading"),(a=f.canCreate(v))&&(p=_("option_create")),f.hasOptions=m.items.length>0||a,b){if(m.items.length>0){if(!w.contains(O)&&"single"===f.settings.mode&&f.items.length&&(O=f.getOption(f.items[0])),!w.contains(O)){let e=0
p&&!f.settings.addPrecedence&&(e=1),O=f.selectable()[e]}}else p&&(O=p)
e&&!f.isOpen&&(f.open(),f.scrollToOption(O,"auto")),f.setActiveOption(O)}else f.clearActiveOption(),e&&f.isOpen&&f.close(!1)}selectable(){return this.dropdown_content.querySelectorAll("[data-selectable]")}addOption(e,t=!1){const i=this
if(Array.isArray(e))return i.addOptions(e,t),!1
const s=q(e[i.settings.valueField])
return null!==s&&!i.options.hasOwnProperty(s)&&(e.$order=e.$order||++i.order,e.$id=i.inputId+"-opt-"+e.$order,i.options[s]=e,i.lastQuery=null,t&&(i.userOptions[s]=t,i.trigger("option_add",s,e)),s)}addOptions(e,t=!1){y(e,(e=>{this.addOption(e,t)}))}registerOption(e){return this.addOption(e)}registerOptionGroup(e){var t=q(e[this.settings.optgroupValueField])
return null!==t&&(e.$order=e.$order||++this.order,this.optgroups[t]=e,t)}addOptionGroup(e,t){var i
t[this.settings.optgroupValueField]=e,(i=this.registerOptionGroup(t))&&this.trigger("optgroup_add",i,t)}removeOptionGroup(e){this.optgroups.hasOwnProperty(e)&&(delete this.optgroups[e],this.clearCache(),this.trigger("optgroup_remove",e))}clearOptionGroups(){this.optgroups={},this.clearCache(),this.trigger("optgroup_clear")}updateOption(e,t){const i=this
var s,n
const o=q(e),r=q(t[i.settings.valueField])
if(null===o)return
if(!i.options.hasOwnProperty(o))return
if("string"!=typeof r)throw new Error("Value must be set in option data")
const l=i.getOption(o),a=i.getItem(o)
if(t.$order=t.$order||i.options[o].$order,delete i.options[o],i.uncacheValue(r),i.options[r]=t,l){if(i.dropdown_content.contains(l)){const e=i._render("option",t)
E(l,e),i.activeOption===l&&i.setActiveOption(e)}l.remove()}a&&(-1!==(n=i.items.indexOf(o))&&i.items.splice(n,1,r),s=i._render("item",t),a.classList.contains("active")&&C(s,"active"),E(a,s)),i.lastQuery=null}removeOption(e,t){const i=this
e=D(e),i.uncacheValue(e),delete i.userOptions[e],delete i.options[e],i.lastQuery=null,i.trigger("option_remove",e),i.removeItem(e,t)}clearOptions(){this.loadedSearches={},this.userOptions={},this.clearCache()
var e={}
y(this.options,((t,i)=>{this.items.indexOf(i)>=0&&(e[i]=this.options[i])})),this.options=this.sifter.items=e,this.lastQuery=null,this.trigger("option_clear")}getOption(e,t=!1){const i=q(e)
if(null!==i&&this.options.hasOwnProperty(i)){const e=this.options[i]
if(e.$div)return e.$div
if(t)return this._render("option",e)}return null}getAdjacent(e,t,i="option"){var s
if(!e)return null
s="item"==i?this.controlChildren():this.dropdown_content.querySelectorAll("[data-selectable]")
for(let i=0;i<s.length;i++)if(s[i]==e)return t>0?s[i+1]:s[i-1]
return null}getItem(e){if("object"==typeof e)return e
var t=q(e)
return null!==t?this.control.querySelector(`[data-value="${Q(t)}"]`):null}addItems(e,t){var i=this,s=Array.isArray(e)?e:[e]
for(let e=0,n=(s=s.filter((e=>-1===i.items.indexOf(e)))).length;e<n;e++)i.isPending=e<n-1,i.addItem(s[e],t)}addItem(e,t){R(this,t?[]:["change"],(()=>{var i,s
const n=this,o=n.settings.mode,r=q(e)
if((!r||-1===n.items.indexOf(r)||("single"===o&&n.close(),"single"!==o&&n.settings.duplicates))&&null!==r&&n.options.hasOwnProperty(r)&&("single"===o&&n.clear(t),"multi"!==o||!n.isFull())){if(i=n._render("item",n.options[r]),n.control.contains(i)&&(i=i.cloneNode(!0)),s=n.isFull(),n.items.splice(n.caretPos,0,r),n.insertAtCaret(i),n.isSetup){if(!n.isPending&&n.settings.hideSelected){let e=n.getOption(r),t=n.getAdjacent(e,1)
t&&n.setActiveOption(t)}n.isPending||n.refreshOptions(n.isFocused&&"single"!==o),0!=n.settings.closeAfterSelect&&n.isFull()?n.close():n.isPending||n.positionDropdown(),n.trigger("item_add",r,i),n.isPending||n.updateOriginalInput({silent:t})}(!n.isPending||!s&&n.isFull())&&(n.inputState(),n.refreshState())}}))}removeItem(e=null,t){const i=this
if(!(e=i.getItem(e)))return
var s,n
const o=e.dataset.value
s=L(e),e.remove(),e.classList.contains("active")&&(n=i.activeItems.indexOf(e),i.activeItems.splice(n,1),S(e,"active")),i.items.splice(s,1),i.lastQuery=null,!i.settings.persist&&i.userOptions.hasOwnProperty(o)&&i.removeOption(o,t),s<i.caretPos&&i.setCaret(i.caretPos-1),i.updateOriginalInput({silent:t}),i.refreshState(),i.positionDropdown(),i.trigger("item_remove",o,e)}createItem(e=null,t=!0,i=(()=>{})){var s,n=this,o=n.caretPos
if(e=e||n.inputValue(),!n.canCreate(e))return i(),!1
n.lock()
var r=!1,l=e=>{if(n.unlock(),!e||"object"!=typeof e)return i()
var s=q(e[n.settings.valueField])
if("string"!=typeof s)return i()
n.setTextboxValue(),n.addOption(e,!0),n.setCaret(o),n.addItem(s),n.refreshOptions(t&&"single"!==n.settings.mode),i(e),r=!0}
return s="function"==typeof n.settings.create?n.settings.create.call(this,e,l):{[n.settings.labelField]:e,[n.settings.valueField]:e},r||l(s),!0}refreshItems(){var e=this
e.lastQuery=null,e.isSetup&&e.addItems(e.items),e.updateOriginalInput(),e.refreshState()}refreshState(){const e=this
e.refreshValidityState()
const t=e.isFull(),i=e.isLocked
e.wrapper.classList.toggle("rtl",e.rtl)
const s=e.wrapper.classList
var n
s.toggle("focus",e.isFocused),s.toggle("disabled",e.isDisabled),s.toggle("required",e.isRequired),s.toggle("invalid",!e.isValid),s.toggle("locked",i),s.toggle("full",t),s.toggle("input-active",e.isFocused&&!e.isInputHidden),s.toggle("dropdown-active",e.isOpen),s.toggle("has-options",(n=e.options,0===Object.keys(n).length)),s.toggle("has-items",e.items.length>0)}refreshValidityState(){var e=this
e.input.checkValidity&&(e.isValid=e.input.checkValidity(),e.isInvalid=!e.isValid)}isFull(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems}updateOriginalInput(e={}){const t=this
var i,s
const n=t.input.querySelector('option[value=""]')
if(t.is_select_tag){const e=[]
function o(i,s,o){return i||(i=w('<option value="'+N(s)+'">'+N(o)+"</option>")),i!=n&&t.input.append(i),e.push(i),i.selected=!0,i}t.input.querySelectorAll("option:checked").forEach((e=>{e.selected=!1})),0==t.items.length&&"single"==t.settings.mode?o(n,"",""):t.items.forEach((n=>{if(i=t.options[n],s=i[t.settings.labelField]||"",e.includes(i.$option)){o(t.input.querySelector(`option[value="${Q(n)}"]:not(:checked)`),n,s)}else i.$option=o(i.$option,n,s)}))}else t.input.value=t.getValue()
t.isSetup&&(e.silent||t.trigger("change",t.getValue()))}open(){var e=this
e.isLocked||e.isOpen||"multi"===e.settings.mode&&e.isFull()||(e.isOpen=!0,P(e.focus_node,{"aria-expanded":"true"}),e.refreshState(),I(e.dropdown,{visibility:"hidden",display:"block"}),e.positionDropdown(),I(e.dropdown,{visibility:"visible",display:"block"}),e.focus(),e.trigger("dropdown_open",e.dropdown))}close(e=!0){var t=this,i=t.isOpen
e&&(t.setTextboxValue(),"single"===t.settings.mode&&t.items.length&&t.hideInput()),t.isOpen=!1,P(t.focus_node,{"aria-expanded":"false"}),I(t.dropdown,{display:"none"}),t.settings.hideSelected&&t.clearActiveOption(),t.refreshState(),i&&t.trigger("dropdown_close",t.dropdown)}positionDropdown(){if("body"===this.settings.dropdownParent){var e=this.control,t=e.getBoundingClientRect(),i=e.offsetHeight+t.top+window.scrollY,s=t.left+window.scrollX
I(this.dropdown,{width:t.width+"px",top:i+"px",left:s+"px"})}}clear(e){var t=this
if(t.items.length){var i=t.controlChildren()
y(i,(e=>{t.removeItem(e,!0)})),t.showInput(),e||t.updateOriginalInput(),t.trigger("clear")}}insertAtCaret(e){const t=this,i=t.caretPos,s=t.control
s.insertBefore(e,s.children[i]),t.setCaret(i+1)}deleteSelection(e){var t,i,s,n,o,r=this
t=e&&8===e.keyCode?-1:1,i={start:(o=r.control_input).selectionStart||0,length:(o.selectionEnd||0)-(o.selectionStart||0)}
const l=[]
if(r.activeItems.length)n=F(r.activeItems,t),s=L(n),t>0&&s++,y(r.activeItems,(e=>l.push(e)))
else if((r.isFocused||"single"===r.settings.mode)&&r.items.length){const e=r.controlChildren()
t<0&&0===i.start&&0===i.length?l.push(e[r.caretPos-1]):t>0&&i.start===r.inputValue().length&&l.push(e[r.caretPos])}const a=l.map((e=>e.dataset.value))
if(!a.length||"function"==typeof r.settings.onDelete&&!1===r.settings.onDelete.call(r,a,e))return!1
for(H(e,!0),void 0!==s&&r.setCaret(s);l.length;)r.removeItem(l.pop())
return r.showInput(),r.positionDropdown(),r.refreshOptions(!1),!0}advanceSelection(e,t){var i,s,n=this
n.rtl&&(e*=-1),n.inputValue().length||(K(V,t)||K("shiftKey",t)?(s=(i=n.getLastActive(e))?i.classList.contains("active")?n.getAdjacent(i,e,"item"):i:e>0?n.control_input.nextElementSibling:n.control_input.previousElementSibling)&&(s.classList.contains("active")&&n.removeActiveItem(i),n.setActiveItemClass(s)):n.moveCaret(e))}moveCaret(e){}getLastActive(e){let t=this.control.querySelector(".last-active")
if(t)return t
var i=this.control.querySelectorAll(".active")
return i?F(i,e):void 0}setCaret(e){this.caretPos=this.items.length}controlChildren(){return Array.from(this.control.querySelectorAll("[data-ts-item]"))}lock(){this.close(),this.isLocked=!0,this.refreshState()}unlock(){this.isLocked=!1,this.refreshState()}disable(){var e=this
e.input.disabled=!0,e.control_input.disabled=!0,e.focus_node.tabIndex=-1,e.isDisabled=!0,e.lock()}enable(){var e=this
e.input.disabled=!1,e.control_input.disabled=!1,e.focus_node.tabIndex=e.tabIndex,e.isDisabled=!1,e.unlock()}destroy(){var e=this,t=e.revertSettings
e.trigger("destroy"),e.off(),e.wrapper.remove(),e.dropdown.remove(),e.input.innerHTML=t.innerHTML,e.input.tabIndex=t.tabIndex,S(e.input,"tomselected","ts-hidden-accessible"),e._destroy(),delete e.input.tomselect}render(e,t){return"function"!=typeof this.settings.render[e]?null:this._render(e,t)}_render(e,t){var i,s,n=""
const o=this
return"option"!==e&&"item"!=e||(n=D(t[o.settings.valueField])),null==(s=o.settings.render[e].call(this,t,N))||(s=w(s),"option"===e||"option_create"===e?t[o.settings.disabledField]?P(s,{"aria-disabled":"true"}):P(s,{"data-selectable":""}):"optgroup"===e&&(i=t.group[o.settings.optgroupValueField],P(s,{"data-group":i}),t.group[o.settings.disabledField]&&P(s,{"data-disabled":""})),"option"!==e&&"item"!==e||(P(s,{"data-value":n}),"item"===e?(C(s,o.settings.itemClass),P(s,{"data-ts-item":""})):(C(s,o.settings.optionClass),P(s,{role:"option",id:t.$id}),o.options[n].$div=s))),s}clearCache(){y(this.options,((e,t)=>{e.$div&&(e.$div.remove(),delete e.$div)}))}uncacheValue(e){const t=this.getOption(e)
t&&t.remove()}canCreate(e){return this.settings.create&&e.length>0&&this.settings.createFilter.call(this,e)}hook(e,t,i){var s=this,n=s[t]
s[t]=function(){var t,o
return"after"===e&&(t=n.apply(s,arguments)),o=i.apply(s,arguments),"instead"===e?o:("before"===e&&(t=n.apply(s,arguments)),t)}}}return J.define("change_listener",(function(){B(this.input,"change",(()=>{this.sync()}))})),J.define("checkbox_options",(function(){var e=this,t=e.onOptionSelect
e.settings.hideSelected=!1
var i=function(e){setTimeout((()=>{var t=e.querySelector("input")
e.classList.contains("selected")?t.checked=!0:t.checked=!1}),1)}
e.hook("after","setupTemplates",(()=>{var t=e.settings.render.option
e.settings.render.option=(i,s)=>{var n=w(t.call(e,i,s)),o=document.createElement("input")
o.addEventListener("click",(function(e){H(e)})),o.type="checkbox"
const r=q(i[e.settings.valueField])
return r&&e.items.indexOf(r)>-1&&(o.checked=!0),n.prepend(o),n}})),e.on("item_remove",(t=>{var s=e.getOption(t)
s&&(s.classList.remove("selected"),i(s))})),e.hook("instead","onOptionSelect",((s,n)=>{if(n.classList.contains("selected"))return n.classList.remove("selected"),e.removeItem(n.dataset.value),e.refreshOptions(),void H(s,!0)
t.call(e,s,n),i(n)}))})),J.define("clear_button",(function(e){const t=this,i=Object.assign({className:"clear-button",title:"Clear All",html:e=>`<div class="${e.className}" title="${e.title}">&times;</div>`},e)
t.on("initialize",(()=>{var e=w(i.html(i))
e.addEventListener("click",(e=>{t.clear(),"single"===t.settings.mode&&t.settings.allowEmptyOption&&t.addItem(""),e.preventDefault(),e.stopPropagation()})),t.control.appendChild(e)}))})),J.define("drag_drop",(function(){var e=this
if(!$.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".')
if("multi"===e.settings.mode){var t=e.lock,i=e.unlock
e.hook("instead","lock",(()=>{var i=$(e.control).data("sortable")
return i&&i.disable(),t.call(e)})),e.hook("instead","unlock",(()=>{var t=$(e.control).data("sortable")
return t&&t.enable(),i.call(e)})),e.on("initialize",(()=>{var t=$(e.control).sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:e.isLocked,start:(e,i)=>{i.placeholder.css("width",i.helper.css("width")),t.css({overflow:"visible"})},stop:()=>{t.css({overflow:"hidden"})
var i=[]
t.children("[data-value]").each((function(){this.dataset.value&&i.push(this.dataset.value)})),e.setValue(i)}})}))}})),J.define("dropdown_header",(function(e){const t=this,i=Object.assign({title:"Untitled",headerClass:"dropdown-header",titleRowClass:"dropdown-header-title",labelClass:"dropdown-header-label",closeClass:"dropdown-header-close",html:e=>'<div class="'+e.headerClass+'"><div class="'+e.titleRowClass+'"><span class="'+e.labelClass+'">'+e.title+'</span><a class="'+e.closeClass+'">&times;</a></div></div>'},e)
t.on("initialize",(()=>{var e=w(i.html(i)),s=e.querySelector("."+i.closeClass)
s&&s.addEventListener("click",(e=>{H(e,!0),t.close()})),t.dropdown.insertBefore(e,t.dropdown.firstChild)}))})),J.define("caret_position",(function(){var e=this
e.hook("instead","setCaret",(t=>{"single"!==e.settings.mode&&e.control.contains(e.control_input)?(t=Math.max(0,Math.min(e.items.length,t)))==e.caretPos||e.isPending||e.controlChildren().forEach(((i,s)=>{s<t?e.control_input.insertAdjacentElement("beforebegin",i):e.control.appendChild(i)})):t=e.items.length,e.caretPos=t})),e.hook("instead","moveCaret",(t=>{if(!e.isFocused)return
const i=e.getLastActive(t)
if(i){const s=L(i)
e.setCaret(t>0?s+1:s),e.setActiveItem()}else e.setCaret(e.caretPos+t)}))})),J.define("dropdown_input",(function(){var e=this
e.settings.shouldOpen=!0,e.hook("before","setup",(()=>{e.focus_node=e.control,C(e.control_input,"dropdown-input")
const t=w('<div class="dropdown-input-wrap">')
t.append(e.control_input),e.dropdown.insertBefore(t,e.dropdown.firstChild)})),e.on("initialize",(()=>{e.control_input.addEventListener("keydown",(t=>{switch(t.keyCode){case 27:return e.isOpen&&(H(t,!0),e.close()),void e.clearActiveItems()
case 9:e.focus_node.tabIndex=-1}return e.onKeyDown.call(e,t)})),e.on("blur",(()=>{e.focus_node.tabIndex=e.isDisabled?-1:e.tabIndex})),e.on("dropdown_open",(()=>{e.control_input.focus()}))
const t=e.onBlur
e.hook("instead","onBlur",(i=>{if(!i||i.relatedTarget!=e.control_input)return t.call(e)})),B(e.control_input,"blur",(()=>e.onBlur())),e.hook("before","close",(()=>{e.isOpen&&e.focus_node.focus()}))}))})),J.define("input_autogrow",(function(){var e=this
e.on("initialize",(()=>{var t=document.createElement("span"),i=e.control_input
t.style.cssText="position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ",e.wrapper.appendChild(t)
for(const e of["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"])t.style[e]=i.style[e]
var s=()=>{e.items.length>0?(t.textContent=i.value,i.style.width=t.clientWidth+"px"):i.style.width=""}
s(),e.on("update item_add item_remove",s),B(i,"input",s),B(i,"keyup",s),B(i,"blur",s),B(i,"update",s)}))})),J.define("no_backspace_delete",(function(){var e=this,t=e.deleteSelection
this.hook("instead","deleteSelection",(i=>!!e.activeItems.length&&t.call(e,i)))})),J.define("no_active_items",(function(){this.hook("instead","setActiveItem",(()=>{})),this.hook("instead","selectAll",(()=>{}))})),J.define("optgroup_columns",(function(){var e=this,t=e.onKeyDown
e.hook("instead","onKeyDown",(i=>{var s,n,o,r
if(!e.isOpen||37!==i.keyCode&&39!==i.keyCode)return t.call(e,i)
r=k(e.activeOption,"[data-group]"),s=L(e.activeOption,"[data-selectable]"),r&&(r=37===i.keyCode?r.previousSibling:r.nextSibling)&&(n=(o=r.querySelectorAll("[data-selectable]"))[Math.min(o.length-1,s)])&&e.setActiveOption(n)}))})),J.define("remove_button",(function(e){const t=Object.assign({label:"&times;",title:"Remove",className:"remove",append:!0},e)
var i=this
if(t.append){var s='<a href="javascript:void(0)" class="'+t.className+'" tabindex="-1" title="'+N(t.title)+'">'+t.label+"</a>"
i.hook("after","setupTemplates",(()=>{var e=i.settings.render.item
i.settings.render.item=(t,n)=>{var o=w(e.call(i,t,n)),r=w(s)
return o.appendChild(r),B(r,"mousedown",(e=>{H(e,!0)})),B(r,"click",(e=>{if(H(e,!0),!i.isLocked){var t=o.dataset.value
i.removeItem(t),i.refreshOptions(!1)}})),o}}))}})),J.define("restore_on_backspace",(function(e){const t=this,i=Object.assign({text:e=>e[t.settings.labelField]},e)
t.on("item_remove",(function(e){if(""===t.control_input.value.trim()){var s=t.options[e]
s&&t.setTextboxValue(i.text.call(t,s))}}))})),J.define("virtual_scroll",(function(){const e=this,t=e.canLoad,i=e.clearActiveOption,s=e.loadCallback
var n,o={},r=!1
if(!e.settings.firstUrl)throw"virtual_scroll plugin requires a firstUrl() method"
function l(t){return!("number"==typeof e.settings.maxOptions&&n.children.length>=e.settings.maxOptions)&&!(!(t in o)||!o[t])}e.settings.sortField=[{field:"$order"},{field:"$score"}],e.setNextUrl=function(e,t){o[e]=t},e.getUrl=function(t){if(t in o){const e=o[t]
return o[t]=!1,e}return o={},e.settings.firstUrl(t)},e.hook("instead","clearActiveOption",(()=>{if(!r)return i.call(e)})),e.hook("instead","canLoad",(i=>i in o?l(i):t.call(e,i))),e.hook("instead","loadCallback",((t,i)=>{r||e.clearOptions(),s.call(e,t,i),r=!1})),e.hook("after","refreshOptions",(()=>{const t=e.lastValue
var i
l(t)?(i=e.render("loading_more",{query:t}))&&i.setAttribute("data-selectable",""):t in o&&!n.querySelector(".no-results")&&(i=e.render("no_more_results",{query:t})),i&&(C(i,e.settings.optionClass),n.append(i))})),e.on("initialize",(()=>{n=e.dropdown_content,e.settings.render=Object.assign({},{loading_more:function(){return'<div class="loading-more-results">Loading more results ... </div>'},no_more_results:function(){return'<div class="no-more-results">No more results</div>'}},e.settings.render),n.addEventListener("scroll",(function(){n.clientHeight/(n.scrollHeight-n.scrollTop)<.95||l(e.lastValue)&&(r||(r=!0,e.load.call(e,e.lastValue)))}))}))})),J}))
var tomSelect=function(e,t){return new TomSelect(e,t)}
//# sourceMappingURL=tom-select.complete.min.js.map

```

### `backend\lib\tom-select\tom-select.css`
```css
/**
 * tom-select.css (v2.0.0-rc.4)
 * Copyright (c) contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */
.ts-wrapper.plugin-drag_drop.multi > .ts-control > div.ui-sortable-placeholder {
  visibility: visible !important;
  background: #f2f2f2 !important;
  background: rgba(0, 0, 0, 0.06) !important;
  border: 0 none !important;
  box-shadow: inset 0 0 12px 4px #fff; }

.ts-wrapper.plugin-drag_drop .ui-sortable-placeholder::after {
  content: '!';
  visibility: hidden; }

.ts-wrapper.plugin-drag_drop .ui-sortable-helper {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); }

.plugin-checkbox_options .option input {
  margin-right: 0.5rem; }

.plugin-clear_button .ts-control {
  padding-right: calc( 1em + (3 * 6px)) !important; }

.plugin-clear_button .clear-button {
  opacity: 0;
  position: absolute;
  top: 8px;
  right: calc(8px - 6px);
  margin-right: 0 !important;
  background: transparent !important;
  transition: opacity 0.5s;
  cursor: pointer; }

.plugin-clear_button.single .clear-button {
  right: calc(8px - 6px +  2rem); }

.plugin-clear_button.focus.has-items .clear-button,
.plugin-clear_button:hover.has-items .clear-button {
  opacity: 1; }

.ts-wrapper .dropdown-header {
  position: relative;
  padding: 10px 8px;
  border-bottom: 1px solid #d0d0d0;
  background: #f8f8f8;
  border-radius: 3px 3px 0 0; }

.ts-wrapper .dropdown-header-close {
  position: absolute;
  right: 8px;
  top: 50%;
  color: #303030;
  opacity: 0.4;
  margin-top: -12px;
  line-height: 20px;
  font-size: 20px !important; }

.ts-wrapper .dropdown-header-close:hover {
  color: black; }

.plugin-dropdown_input.focus.dropdown-active .ts-control {
  box-shadow: none;
  border: 1px solid #d0d0d0; }

.plugin-dropdown_input .dropdown-input {
  border: 1px solid #d0d0d0;
  border-width: 0 0 1px 0;
  display: block;
  padding: 8px 8px;
  box-shadow: none;
  width: 100%;
  background: transparent; }

.ts-wrapper.plugin-input_autogrow.has-items .ts-control > input {
  min-width: 0; }

.ts-wrapper.plugin-input_autogrow.has-items.focus .ts-control > input {
  flex: none;
  min-width: 4px; }
  .ts-wrapper.plugin-input_autogrow.has-items.focus .ts-control > input::-webkit-input-placeholder {
    color: transparent; }
  .ts-wrapper.plugin-input_autogrow.has-items.focus .ts-control > input::-ms-input-placeholder {
    color: transparent; }
  .ts-wrapper.plugin-input_autogrow.has-items.focus .ts-control > input::placeholder {
    color: transparent; }

.ts-dropdown.plugin-optgroup_columns .ts-dropdown-content {
  display: flex; }

.ts-dropdown.plugin-optgroup_columns .optgroup {
  border-right: 1px solid #f2f2f2;
  border-top: 0 none;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 0; }

.ts-dropdown.plugin-optgroup_columns .optgroup:last-child {
  border-right: 0 none; }

.ts-dropdown.plugin-optgroup_columns .optgroup:before {
  display: none; }

.ts-dropdown.plugin-optgroup_columns .optgroup-header {
  border-top: 0 none; }

.ts-wrapper.plugin-remove_button .item {
  display: inline-flex;
  align-items: center;
  padding-right: 0 !important; }

.ts-wrapper.plugin-remove_button .item .remove {
  color: inherit;
  text-decoration: none;
  vertical-align: middle;
  display: inline-block;
  padding: 2px 6px;
  border-left: 1px solid #d0d0d0;
  border-radius: 0 2px 2px 0;
  box-sizing: border-box;
  margin-left: 6px; }

.ts-wrapper.plugin-remove_button .item .remove:hover {
  background: rgba(0, 0, 0, 0.05); }

.ts-wrapper.plugin-remove_button .item.active .remove {
  border-left-color: #cacaca; }

.ts-wrapper.plugin-remove_button.disabled .item .remove:hover {
  background: none; }

.ts-wrapper.plugin-remove_button.disabled .item .remove {
  border-left-color: white; }

.ts-wrapper.plugin-remove_button .remove-single {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 23px; }

.ts-wrapper {
  position: relative; }

.ts-dropdown,
.ts-control,
.ts-control input {
  color: #303030;
  font-family: inherit;
  font-size: 13px;
  line-height: 18px;
  font-smoothing: inherit; }

.ts-control,
.ts-wrapper.single.input-active .ts-control {
  background: #fff;
  cursor: text; }

.ts-control {
  border: 1px solid #d0d0d0;
  padding: 8px 8px;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  box-shadow: none;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap; }
  .ts-wrapper.multi.has-items .ts-control {
    padding: calc( 8px - 2px - 0) 8px calc( 8px - 2px - 3px - 0); }
  .full .ts-control {
    background-color: #fff; }
  .disabled .ts-control,
  .disabled .ts-control * {
    cursor: default !important; }
  .focus .ts-control {
    box-shadow: none; }
  .ts-control > * {
    vertical-align: baseline;
    display: inline-block; }
  .ts-wrapper.multi .ts-control > div {
    cursor: pointer;
    margin: 0 3px 3px 0;
    padding: 2px 6px;
    background: #f2f2f2;
    color: #303030;
    border: 0 solid #d0d0d0; }
    .ts-wrapper.multi .ts-control > div.active {
      background: #e8e8e8;
      color: #303030;
      border: 0 solid #cacaca; }
  .ts-wrapper.multi.disabled .ts-control > div, .ts-wrapper.multi.disabled .ts-control > div.active {
    color: #7d7c7c;
    background: white;
    border: 0 solid white; }
  .ts-control > input {
    flex: 1 1 auto;
    min-width: 7rem;
    display: inline-block !important;
    padding: 0 !important;
    min-height: 0 !important;
    max-height: none !important;
    max-width: 100% !important;
    margin: 0 !important;
    text-indent: 0 !important;
    border: 0 none !important;
    background: none !important;
    line-height: inherit !important;
    -webkit-user-select: auto !important;
       -moz-user-select: auto !important;
        -ms-user-select: auto !important;
            user-select: auto !important;
    box-shadow: none !important; }
    .ts-control > input::-ms-clear {
      display: none; }
    .ts-control > input:focus {
      outline: none !important; }
  .has-items .ts-control > input {
    margin: 0 4px !important; }
  .ts-control.rtl {
    text-align: right; }
    .ts-control.rtl.single .ts-control:after {
      left: 15px;
      right: auto; }
    .ts-control.rtl .ts-control > input {
      margin: 0 4px 0 -2px !important; }
  .disabled .ts-control {
    opacity: 0.5;
    background-color: #fafafa; }
  .input-hidden .ts-control > input {
    opacity: 0;
    position: absolute;
    left: -10000px; }

.ts-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
  border: 1px solid #d0d0d0;
  background: #fff;
  margin: 0.25rem 0 0 0;
  border-top: 0 none;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 3px 3px; }
  .ts-dropdown [data-selectable] {
    cursor: pointer;
    overflow: hidden; }
    .ts-dropdown [data-selectable] .highlight {
      background: rgba(125, 168, 208, 0.2);
      border-radius: 1px; }
  .ts-dropdown .option,
  .ts-dropdown .optgroup-header,
  .ts-dropdown .no-results,
  .ts-dropdown .create {
    padding: 5px 8px; }
  .ts-dropdown .option, .ts-dropdown [data-disabled], .ts-dropdown [data-disabled] [data-selectable].option {
    cursor: inherit;
    opacity: 0.5; }
  .ts-dropdown [data-selectable].option {
    opacity: 1;
    cursor: pointer; }
  .ts-dropdown .optgroup:first-child .optgroup-header {
    border-top: 0 none; }
  .ts-dropdown .optgroup-header {
    color: #303030;
    background: #fff;
    cursor: default; }
  .ts-dropdown .create:hover,
  .ts-dropdown .option:hover,
  .ts-dropdown .active {
    background-color: #f5fafd;
    color: #495c68; }
    .ts-dropdown .create:hover.create,
    .ts-dropdown .option:hover.create,
    .ts-dropdown .active.create {
      color: #495c68; }
  .ts-dropdown .create {
    color: rgba(48, 48, 48, 0.5); }
  .ts-dropdown .spinner {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 5px 8px; }
    .ts-dropdown .spinner:after {
      content: " ";
      display: block;
      width: 24px;
      height: 24px;
      margin: 3px;
      border-radius: 50%;
      border: 5px solid #d0d0d0;
      border-color: #d0d0d0 transparent #d0d0d0 transparent;
      animation: lds-dual-ring 1.2s linear infinite; }

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(360deg); } }

.ts-dropdown-content {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 200px;
  overflow-scrolling: touch;
  scroll-behavior: smooth; }

.ts-hidden-accessible {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
          clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; }

/*# sourceMappingURL=tom-select.css.map */
```

### `backend\lib\vis-9.1.2\vis-network.css`
_Datei groesser als 200 KB, ausgelassen._

### `backend\lib\vis-9.1.2\vis-network.min.js`
_Datei groesser als 200 KB, ausgelassen._

### `backend\README.md`
```markdown
# Backend (Flask)

## Setup (Windows PowerShell)
```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
- API läuft unter: http://127.0.0.1:5000
- Healthcheck: `GET /api/health`

### Nützliche Endpunkte
- `GET /api/projects` – Liste Projekte
- `POST /api/projects` – Neues Projekt `{ "title": "Mein Roman", "description": "..." }`
- `GET/PUT/DELETE /api/projects/:id`
- `GET/POST /api/projects/:id/chapters`
- `GET/PUT/DELETE /api/chapters/:id`
- `GET/POST /api/projects/:id/characters`
- `GET/PUT/DELETE /api/characters/:id`
- `GET/POST /api/projects/:id/locations`
- `GET/PUT/DELETE /api/locations/:id`

```

### `backend\requirements.txt`
```text
flask
flask-cors
flask-sqlalchemy
sqlalchemy
gunicorn
```

### `code-snapshot.md`
_Datei groesser als 200 KB, ausgelassen._

### `frontend\index.html`
```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Crimson+Pro:wght@400;600&display=swap" rel="stylesheet">
    <title>Roman Writing MVP</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

### `frontend\package.json`
```json
{
  "name": "roman-writing-mvp",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.7.7",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.3",
    "vite": "^5.4.10"
  }
}

```

### `frontend\README.md`
```markdown
# Frontend (Vite + React)

## Setup (Windows PowerShell)
```powershell
cd frontend
npm install
npm run dev
```
- App läuft unter: http://127.0.0.1:5173
- API-Proxy ist konfiguriert: Anfragen an `/api` gehen an `http://127.0.0.1:5000`

### Seiten
- **/** – Dashboard (Projekte erstellen & öffnen)
- **/project/:id** – Projektansicht (Kapitel-Sidebar + Editor)

### Dateien
- `src/pages/Dashboard.jsx` – Projektliste
- `src/pages/ProjectView.jsx` – Kapitelverwaltung & Editor
- `src/ui/Editor.jsx` – Einfacher Texteditor (Textarea, mit Autosave)
- `src/lib/api.js` – Axios-Client

```

### `frontend\src\App.jsx`
```jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard.jsx'
import ProjectTabsLayout from './layouts/ProjectTabsLayout.jsx'
import ProjectView from './pages/ProjectView.jsx'
import Characters from './pages/Characters.jsx'
import World from './pages/World.jsx'
import Preview from './pages/Preview.jsx'

import './styles.css'
import './layout-2col.css'
// optional � nur falls vorhanden:
import './projectview.css'
import './dashboard.css'

export default function App() {
  return (
    <Routes>
      {/* Startseite */}
      <Route path="/" element={<Dashboard />} />

      {/* Projektbereich mit Tabs */}
      <Route path="/project/:id" element={<ProjectTabsLayout />}>
        <Route index element={<ProjectView />} />
        <Route path="characters" element={<Characters />} />
        <Route path="world" element={<World />} />
        <Route path="preview" element={<Preview />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

```

### `frontend\src\components\CharacterWizard.jsx`
```jsx
import React, { useState } from 'react'
import { createCharacter, updateCharacter } from '../lib/api.js'

/**
 * 3-Schritt-Wizard zum Anlegen eines Charakters.
 * Speichert am Ende via createCharacter + updateCharacter.
 * Props:
 *  - projectId: number
 *  - onDone: (character) => void
 *  - onClose: () => void
 */
export default function CharacterWizard({ projectId, onDone, onClose }) {
  const [step, setStep] = useState(1)
  const [saving, setSaving] = useState(false)

  const [name, setName] = useState('')
  const [role, setRole] = useState('Protagonist')
  const [pitch, setPitch] = useState('')
  const [goal, setGoal] = useState('')
  const [conflict, setConflict] = useState('')

  const [age, setAge] = useState('')
  const [factions, setFactions] = useState('')
  const [strengths, setStrengths] = useState('')
  const [weaknesses, setWeaknesses] = useState('')

  const [secret, setSecret] = useState('')
  const [voice, setVoice] = useState('')
  const [notes, setNotes] = useState('')

  const canNext1 = name.trim().length > 0 && pitch.trim().length > 0 && goal.trim().length > 0 && conflict.trim().length > 0
  const canFinish = canNext1

  async function finish() {
    try {
      setSaving(true)
      const c = await createCharacter(projectId, {
        name: name.trim(),
        role,
        age: age === '' ? null : Number(age),
        description: '',
      })
      const meta = {
        completeness: 60,
        relationships: [], // Drawer speichert hier
      }
      await updateCharacter(c.id, {
        name: name.trim(),
        role,
        age: age === '' ? null : Number(age),
        description: buildDescription({ pitch, goal, conflict, factions, strengths, weaknesses, secret, voice, notes }),
        meta,
      })
      onDone?.({ ...c, role, age: age === '' ? null : Number(age), meta })
      onClose?.()
    } catch (e) {
      console.error(e)
      alert('Speichern fehlgeschlagen.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <h3 style={{margin:0}}>Neuen Charakter anlegen</h3>
          <button className="icon-btn" onClick={onClose}>✕</button>
        </div>

        <div className="steps">
          <div className={'step ' + (step===1?'active':'')}>Kern</div>
          <div className={'step ' + (step===2?'active':'')}>Rolle & Tags</div>
          <div className={'step ' + (step===3?'active':'')}>Details</div>
        </div>

        <div className="modal-body">
          {step === 1 && (
            <div className="vstack" style={{gap:10}}>
              <div className="row" style={{gap:8}}>
                <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
                <select className="input" value={role} onChange={e=>setRole(e.target.value)}>
                  <option>Protagonist</option>
                  <option>Antagonist</option>
                  <option>Nebenfigur</option>
                </select>
                <input className="input" placeholder="Alter" value={age} onChange={e=>setAge(e.target.value.replace(/[^\d]/g,''))} style={{width:120}} />
              </div>
              <textarea className="editor sm" placeholder="Kurzpitch (1–2 Sätze)" maxLength={280} value={pitch} onChange={e=>setPitch(e.target.value)} />
              <div className="row" style={{gap:8}}>
                <input className="input" placeholder="Ziel (1 Satz)" value={goal} onChange={e=>setGoal(e.target.value)} />
                <input className="input" placeholder="Konflikt (1 Satz)" value={conflict} onChange={e=>setConflict(e.target.value)} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="vstack" style={{gap:10}}>
              <input className="input" placeholder="Fraktionen/Berufe (Tags, komma-getrennt)" value={factions} onChange={e=>setFactions(e.target.value)} />
              <input className="input" placeholder="Stärken (Tags, komma-getrennt)" value={strengths} onChange={e=>setStrengths(e.target.value)} />
              <input className="input" placeholder="Schwächen (Tags, komma-getrennt)" value={weaknesses} onChange={e=>setWeaknesses(e.target.value)} />
            </div>
          )}

          {step === 3 && (
            <div className="vstack" style={{gap:10}}>
              <textarea className="editor sm" placeholder="Geheimnis / Wunde (privat)" value={secret} onChange={e=>setSecret(e.target.value)} />
              <input className="input" placeholder="Stimme & Stil (3 Stichwörter)" value={voice} onChange={e=>setVoice(e.target.value)} />
              <textarea className="editor sm" placeholder="Notizen" value={notes} onChange={e=>setNotes(e.target.value)} />
            </div>
          )}
        </div>

        <div className="modal-foot">
          {step>1 ? <button className="btn ghost" onClick={()=>setStep(step-1)}>Zurück</button> : <span />}
          {step<3 ? (
            <button className="btn" disabled={step===1 && !canNext1} onClick={()=>setStep(step+1)}>Weiter</button>
          ) : (
            <button className="btn" disabled={!canFinish || saving} onClick={finish}>{saving?'Speichere…':'Fertig & Anlegen'}</button>
          )}
        </div>
      </div>
    </div>
  )
}

function buildDescription({ pitch, goal, conflict, factions, strengths, weaknesses, secret, voice, notes }) {
  const lines = []
  if (pitch) lines.push(`Pitch: ${pitch}`)
  if (goal) lines.push(`Ziel: ${goal}`)
  if (conflict) lines.push(`Konflikt: ${conflict}`)
  if (factions) lines.push(`Zugehörigkeit: ${factions}`)
  if (strengths) lines.push(`Stärken: ${strengths}`)
  if (weaknesses) lines.push(`Schwächen: ${weaknesses}`)
  if (secret) lines.push(`Geheimnis: ${secret}`)
  if (voice) lines.push(`Stimme: ${voice}`)
  if (notes) lines.push(`Notizen: ${notes}`)
  return lines.join('\n')
}

```

### `frontend\src\components\GraphModal.jsx`
```jsx
import React, { useEffect, useRef } from 'react'

export default function GraphModal({ projectId, onClose, path = 'relations-graph' }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const srcUrl = `/api/projects/${projectId}/${path}`

  function reload() {
    const el = iframeRef.current
    if (!el) return
    el.src = `${srcUrl}?t=${Date.now()}`
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal graph-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <h3 style={{margin:0}}>Graph</h3>
          <div className="row" style={{gap:8, alignItems:'center'}}>
            <button className="btn sm ghost" onClick={reload}>Neu laden</button>
            <button className="icon-btn" onClick={onClose} title="Schließen">✕</button>
          </div>
        </div>
        <div className="modal-body graph-body">
          <iframe
            ref={iframeRef}
            className="graph-frame"
            title="Graph"
            src={srcUrl}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        <div className="modal-foot">
          <span className="muted">Zieh &amp; zoome frei – Layout stabilisiert sich automatisch.</span>
          <button className="btn" onClick={onClose}>Schließen</button>
        </div>
      </div>
    </div>
  )
}

```

### `frontend\src\components\RelationshipDrawer.jsx`
```jsx
import React, { useEffect, useMemo, useState } from 'react'
import { updateCharacter } from '../lib/api.js'

export default function RelationshipDrawer({ character, allCharacters, onClose, onSaved }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const start = Array.isArray(character?.relations) ? character.relations : []
    setItems(start.map(r => ({...r})))
  }, [character])

  const candidates = useMemo(
    () => allCharacters.filter(c => c.id !== character.id),
    [allCharacters, character?.id]
  )

  function addItem() {
    const firstOther = candidates[0]?.id || null
    setItems(prev => [...prev, { toId: firstOther, type: 'Freund', strength: 3, notes: '' }])
  }
  function removeIndex(i) { setItems(prev => prev.filter((_, idx) => idx !== i)) }
  function edit(i, patch) { setItems(prev => prev.map((x, idx) => idx === i ? { ...x, ...patch } : x)) }

  async function save() {
    try {
      const updated = await updateCharacter(character.id, { relations: items })
      onSaved?.(updated)
      onClose?.()
    } catch (e) {
      console.error(e)
      alert('Speichern fehlgeschlagen.')
    }
  }

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer" onClick={e=>e.stopPropagation()}>
        <div className="drawer-head">
          <strong>Beziehungen – {character?.name || 'Unbenannt'}</strong>
          <button className="icon-btn" onClick={onClose}>✕</button>
        </div>

        <div className="drawer-body vstack" style={{gap:10}}>
          <p className="muted" style={{marginTop:0}}>
            Hinweise: Beziehungen werden automatisch <b>beidseitig</b> synchronisiert.
            Z.&nbsp;B. „Mentor“ erzeugt auf der Gegenseite „Schützling“.
          </p>

          {items.length === 0 && <p className="muted">Noch keine Beziehungen.</p>}

          {items.map((r, i) => (
            <div key={i} className="rel-row">
              <select className="input" value={r.toId ?? ''} onChange={e=>edit(i, { toId: Number(e.target.value)||null })}>
                {candidates.length===0 && <option value="">(keine weiteren Charaktere)</option>}
                {candidates.map(c => <option key={c.id} value={c.id}>{c.name || `#${c.id}`}</option>)}
              </select>
              <select className="input" value={r.type} onChange={e=>edit(i, { type: e.target.value })}>
                <option>Freund</option><option>Feind</option><option>Familie</option>
                <option>Liebe</option><option>Kollege</option><option>Kennt</option>
                <option>Mentor</option><option>Schützling</option>
              </select>
              <input className="input" style={{width:90}}
                     value={String(r.strength ?? 3)} onChange={e=>edit(i,{ strength: clampInt(e.target.value,1,5) })} />
              <input className="input" placeholder="Notizen" value={r.notes||''} onChange={e=>edit(i, { notes: e.target.value })} />
              <button className="icon-btn" title="Entfernen" onClick={()=>removeIndex(i)}>🗑</button>
            </div>
          ))}

          <button className="btn ghost" onClick={addItem}>+ Beziehung hinzufügen</button>
        </div>

        <div className="drawer-foot">
          <span />
          <button className="btn" onClick={save}>Speichern</button>
        </div>
      </div>
    </div>
  )
}

function clampInt(v, min, max){
  const n = Number(String(v).replace(/[^\d]/g,'')) || min
  return Math.max(min, Math.min(max, n))
}

```

### `frontend\src\dashboard.css`
```css
/* ==== Dashboard (nur hier g�ltig, via .dashboard wrapper) ==== */

/* Grid der Projektkacheln */
.dashboard .proj-grid{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap:20px;
}

/* Kachel: zweispaltig (Cover links, Inhalt rechts) */
.dashboard .proj-card{
  background:#fff;
  border:1px solid rgba(0,0,0,.06);
  border-radius:12px;
  box-shadow: 0 6px 18px -10px rgba(0,0,0,.2);
  padding:12px;
  display:grid;
  grid-template-columns: 160px 1fr;
  gap:16px;
  align-items:start;
}

/* Cover 2:3 */
.dashboard .cover{
  -webkit-appearance:none; appearance:none;
  width:160px; aspect-ratio: 2 / 3;
  border:1px solid rgba(0,0,0,.08);
  border-radius:10px;
  background: linear-gradient(135deg, #eef2ff 0%, #f6f8ff 100%);
  display:block; padding:0; cursor:pointer;
  box-shadow: inset 0 0 0 2px rgba(59,91,253,.06);
}
.dashboard .cover:hover{ box-shadow: inset 0 0 0 2px rgba(59,91,253,.2); }
.dashboard .cover-inner{
  width:100%; height:100%;
  display:flex; align-items:center; justify-content:center;
  color:#3b5bfd; font-weight:700; opacity:.9; letter-spacing:.05em;
}

/* Inhalt rechts � sauber ausrichten */
.dashboard .proj-meta{
  min-width: 0; /* f�r ellipsis */
  display:flex; flex-direction:column; height:100%;
}
.dashboard .proj-header{
  display:flex; align-items:center; gap:10px; margin-bottom:4px;
}
.dashboard .proj-title{
  margin:0; font-size:18px; font-weight:700;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  flex:1 1 auto;
}
.dashboard .icon-btn.rename{
  border:0; background:transparent; cursor:pointer;
  padding:6px 8px; border-radius:8px; line-height:1;
}
.dashboard .icon-btn.rename:hover{ background:rgba(0,0,0,.06); }

/* Meta & Aktionen */
.dashboard .proj-sub{ color:#64748b; font-size:13px; margin-bottom:10px; }
.dashboard .proj-actions{ margin-top:auto; display:flex; gap:8px; }

/* Eingabefeld beim Umbenennen */
.dashboard .title-input{
  width:100%;
  padding:8px 10px; border-radius:8px; border:1px solid rgba(0,0,0,.12);
  font-size:16px; font-weight:600;
}

/* Leerer Zustand */
.dashboard .empty-hint{
  grid-column: 1 / -1; padding:24px 0; text-align:center; opacity:.8;
}

```

### `frontend\src\layout-2col.css`
```css
/* Zwei-Spalten-Layout innerhalb der Seiten (links Liste, rechts Inhalt) */
.two-col{
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 20px;
  align-items: start;
}

.two-col__sidebar{
  position: sticky;
  top: var(--sticky-offset);  /* nur Topnav */
  max-height: calc(100vh - var(--sticky-offset) - 24px);
  overflow: auto;
  padding-right: 4px;
}

.two-col__main{ min-width: 0; }

@media (max-width: 980px){
  .two-col{ grid-template-columns: 1fr; }
  .two-col__sidebar{ position: static; max-height: none; overflow: visible; }
}

```

### `frontend\src\layouts\ProjectTabsLayout.jsx`
```jsx
import React from 'react'
import { NavLink, Outlet, useParams, Navigate, Link } from 'react-router-dom'
import logo from '../assets/brand/logo.png' // dein 380×140 Logo

export default function ProjectTabsLayout() {
  const { id } = useParams()
  if (!id) return <Navigate to="/" replace />

  const LinkItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
    >
      <span>{label}</span>
      <span className="active-bar" />
    </NavLink>
  )

  const base = `/project/${id}`

  return (
    <>
      {/* TOP NAV */}
      <header className="topnav">
        <div className="topnav-inner">
          <div className="nav-left">
            {/* BRAND: nur Logo; Größe proportional, ohne runde Ecken */}
            <Link
              to="/"
              className="brand"
              aria-label="Roman"
              style={{ display:'inline-flex', alignItems:'center', padding:0, borderRadius:0, marginRight:12 }}
            >
              <img
                src={logo}
                alt="Roman"
                style={{ height:45, width:'auto', display:'block', borderRadius:0 }}
              />
            </Link>

            <nav className="nav-links">
              <LinkItem to={base} label="Schreiben" />
              <LinkItem to={`${base}/characters`} label="Charaktere" />
              <LinkItem to={`${base}/world`} label="Welt" />
              <LinkItem to={`${base}/preview`} label="Vorschau" />
            </nav>
          </div>

          <div className="nav-right">
            <div className="nav-search">
              <input placeholder="Suchen…" />
            </div>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <Outlet />
    </>
  )
}

```

### `frontend\src\lib\api.js`
```javascript
const API_BASE =
  import.meta.env.VITE_API_BASE   // Prod/Dev über Env
  || '';                          // wenn Vite-Proxy benutzt wird

const JSON_HEADERS = { 'Content-Type': 'application/json' };

async function req(method, url, body) {
  const res = await fetch(`${API_BASE}${url}`, {
    method,
    headers: JSON_HEADERS,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`${method} ${url} -> ${res.status}`);
  return res.status === 204 ? null : res.json();
}



/* Projects */
export const getProject = (id) => req('GET', `/api/projects/${id}`);
export const listProjects = () => req('GET', `/api/projects`);
export const createProject = (payload) => req('POST', `/api/projects`, payload);
export const updateProject = (id, payload) => req('PUT', `/api/projects/${id}`, payload);
export const deleteProject = (id) => req('DELETE', `/api/projects/${id}`);

/* Chapters & Scenes */
export const listChapters = (pid) =>   req('GET', `/api/projects/${pid}/chapters`);
export const createChapter = (pid, payload) =>  req('POST', `/api/projects/${pid}/chapters`, payload);
export const updateChapter = (id, payload) =>  req('PUT', `/api/chapters/${id}`, payload);
export const deleteChapter = (id) =>  req('DELETE', `/api/chapters/${id}`);

/* ✅ Szenen */
export const listScenes = (cid) =>  req('GET', `/api/chapters/${cid}/scenes`);
export const createScene = (cid, payload) =>  req('POST', `/api/chapters/${cid}/scenes`, payload);
export const updateScene = (id, payload) =>  req('PUT', `/api/scenes/${id}`, payload);
export const deleteScene = (id) =>  req('DELETE', `/api/scenes/${id}`);

/* Characters */
export const listCharacters = (pid) => req('GET', `/api/projects/${pid}/characters`);
export const createCharacter = (pid, payload) => req('POST', `/api/projects/${pid}/characters`, payload);
export const updateCharacter = (id, payload) => req('PUT', `/api/characters/${id}`, payload);
export const deleteCharacter = (id) => req('DELETE', `/api/characters/${id}`);

/* World Items */
export const listWorldItems = (pid) => req('GET', `/api/projects/${pid}/world-items`);
export const createWorldItem = (pid, payload) => req('POST', `/api/projects/${pid}/world-items`, payload);
export const updateWorldItem = (id, payload) => req('PUT', `/api/world-items/${id}`, payload);
export const deleteWorldItem = (id) => req('DELETE', `/api/world-items/${id}`);

```

### `frontend\src\lib\mentions.js`
```javascript
// Utility: z�hlt Erw�hnungen eines Namens in Szenentexten.
// Erwartet, dass deine API mindestens eine der Funktionen bietet:
//   - listScenesByProject(projectId) -> [{ id, title, text, chapterId }]
//   - oder listChapters(projectId) + listScenes(chapterId)
// F�llt sonst sanft auf 0 Erw�hnungen zur�ck.

export async function scanMentions(projectId, name, api) {
  const needle = (name || '').trim()
  if (!needle) return { total: 0, byChapter: {} }

  let scenes = []
  try {
    if (typeof api.listScenesByProject === 'function') {
      scenes = await api.listScenesByProject(projectId)
    } else if (typeof api.listChapters === 'function' && typeof api.listScenes === 'function') {
      const chapters = await api.listChapters(projectId)
      for (const ch of chapters) {
        const sc = await api.listScenes(ch.id)
        scenes.push(...sc.map(s => ({...s, chapterId: ch.id})))
      }
    }
  } catch (e) {
    console.warn('scanMentions: Konnte Szenen nicht laden:', e)
    return { total: 0, byChapter: {} }
  }

  const byChapter = {}
  let total = 0
  const rx = new RegExp(`\\b${escapeRegExp(needle)}\\b`, 'gi')

  for (const s of scenes) {
    const text = (s.text || s.body || s.content || '')
    const hits = (text.match(rx) || []).length
    if (hits > 0) {
      total += hits
      const key = s.chapterId ?? s.chapter_id ?? 'unknown'
      byChapter[key] = (byChapter[key] || 0) + hits
    }
  }
  return { total, byChapter }
}

function escapeRegExp(str){ return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }

```

### `frontend\src\main.jsx`
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

```

### `frontend\src\pages\Characters.jsx`
```jsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import {
  getProject, listCharacters, createCharacter, updateCharacter, deleteCharacter
} from '../lib/api.js'
import GraphModal from '../components/GraphModal.jsx'
import '../projectview.css'
import '../layout-2col.css'

export default function Characters() {
  const { id } = useParams()
  const pid = Number(id)

  const [project, setProject] = useState(null)
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeId, setActiveId] = useState(null)

  // basic
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [age, setAge] = useState('')
  const [description, setDesc] = useState('')

  // profile (Steckbrief)
  const [profile, setProfile] = useState({
    avatarUrl: '', pitch: '', goal: '', conflict: '',
    affiliations: [], strengths: [], weaknesses: [],
    voice: '', traits: '', secret: '',
    birthplace: '', residence: '', occupation: '',
    appearance: '', height: '', hairColor: '', eyeColor: '',
    skills: [], backstory: ''
  })

  // relations (Tab)
  const [relItems, setRelItems] = useState([])
  const [relSaving, setRelSaving] = useState(false)

  const [tab, setTab] = useState('general') // general | personality | background | skills | relations | notes
  const [showGraph, setShowGraph] = useState(false)

  const saveRef = useRef(null)
  const debounce = useCallback((fn, ms = 600) => { clearTimeout(saveRef.current); saveRef.current = setTimeout(fn, ms) }, [])
  const active = useMemo(() => list.find(c => c.id === activeId) || null, [list, activeId])

  // Autosave Guards für Beziehungen
  const relSaveRef = useRef(null)
  const relSkipNextSave = useRef(false)

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const p = await getProject(pid)
        setProject({ id: p.id, title: p.title })
        const data = await listCharacters(pid)
        setList(data)
        if (data[0]) {
          setActiveId(data[0].id)
          hydrateForm(data[0])
        }
      } catch (e) {
        console.error(e); setError('Charaktere konnten nicht geladen werden.')
      } finally { setLoading(false) }
    })()
  }, [pid])

  useEffect(() => { if (active) hydrateForm(active) }, [activeId]) // eslint-disable-line

  function hydrateForm(c) {
    setName(c.name || '')
    setRole(c.role || '')
    setAge(c.age != null && c.age !== '' ? String(c.age) : '')
    setDesc(c.description || '')

    const prof = c.profile || {}
    setProfile({
      avatarUrl: prof.avatarUrl || '',
      pitch: prof.pitch || '',
      goal: prof.goal || '',
      conflict: prof.conflict || '',
      affiliations: Array.isArray(prof.affiliations) ? prof.affiliations : [],
      strengths: Array.isArray(prof.strengths) ? prof.strengths : [],
      weaknesses: Array.isArray(prof.weaknesses) ? prof.weaknesses : [],
      voice: prof.voice || '',
      traits: prof.traits || '',
      secret: prof.secret || '',
      birthplace: prof.birthplace || '',
      residence: prof.residence || '',
      occupation: prof.occupation || '',
      appearance: prof.appearance || '',
      height: prof.height || '',
      hairColor: prof.hairColor || '',
      eyeColor: prof.eyeColor || '',
      skills: Array.isArray(prof.skills) ? prof.skills : [],
      backstory: prof.backstory || ''
    })

    // Beziehungen hydratisieren (ohne Autosave auszulösen)
    relSkipNextSave.current = true
    setRelItems(Array.isArray(c.relations) ? c.relations.map(r => ({ ...r })) : [])
  }

  async function addCharacter() {
    try {
      const c = await createCharacter(pid, {
        name: 'Neuer Charakter', role: '', age: '', description: '',
        relations: [], profile: {}
      })
      setList(prev => [...prev, c]); setActiveId(c.id)
    } catch { alert('Anlegen fehlgeschlagen.') }
  }

  async function removeCharacter(cid) {
    if (!confirm('Charakter wirklich löschen?')) return
    try {
      await deleteCharacter(cid)
      setList(prev => prev.filter(c => c.id !== cid))
      if (activeId === cid) {
        const first = list.find(c => c.id !== cid)
        setActiveId(first?.id || null)
      }
    } catch { alert('Löschen fehlgeschlagen.') }
  }

  function onChangeField(field, value) {
    if (!activeId) return
    if (field === 'name') setName(value)
    if (field === 'role') setRole(value)
    if (field === 'age') setAge(value)
    if (field === 'description') setDesc(value)

    setList(prev => prev.map(c => c.id === activeId
      ? { ...c, [field]: field === 'age' ? (value === '' ? '' : Number(value)) : value }
      : c))

    debounce(async () => {
      try {
        await updateCharacter(activeId, {
          name, role, age: (age === '' ? '' : Number(age)), description,
          ...(field === 'age' ? { age: (value === '' ? '' : Number(value)) } : { [field]: value })
        })
      } catch (e) { console.error(e) }
    })
  }

  function onChangeProfile(key, val) {
    if (!activeId) return
    const next = { ...profile, [key]: val }
    setProfile(next)
    setList(prev => prev.map(c => c.id === activeId ? { ...c, profile: next } : c))
    debounce(async () => {
      try { await updateCharacter(activeId, { profile: { ...next } }) } catch (e) { console.error(e) }
    })
  }

  // helpers for arrays (weiterhin für andere Felder genutzt)
  function arrayToInput(arr){ return (arr || []).join(', ') }
  function inputToArray(str){ return (str||'').split(',').map(s=>s.trim()).filter(Boolean) }

  // ---------- Beziehungen (im Tab) ----------
  const candidateChars = useMemo(
    () => list.filter(c => c.id !== activeId),
    [list, activeId]
  )

  function addRelationRow(){
    setRelItems(prev => [...prev, {
      toId: candidateChars[0]?.id ?? null,
      type: 'Freund',
      strength: 3,
      notes: ''
    }])
  }
  function editRelRow(i, patch){ setRelItems(prev => prev.map((x, idx) => idx === i ? { ...x, ...patch } : x)) }
  function removeRelRow(i){ setRelItems(prev => prev.filter((_, idx) => idx !== i)) }

  // ✅ AUTOSAVE bei Änderungen an relItems (debounced)
  useEffect(() => {
    if (!activeId) return
    if (relSkipNextSave.current) { relSkipNextSave.current = false; return }
    const canSave = relItems.every(r => typeof r.toId === 'number' && !Number.isNaN(r.toId))
    if (!canSave) return
    setRelSaving(true)
    clearTimeout(relSaveRef.current)
    relSaveRef.current = setTimeout(async () => {
      try {
        const updated = await updateCharacter(activeId, { relations: relItems })
        setList(prev => prev.map(c => c.id === updated.id ? updated : c))
        const data = await listCharacters(pid)   // Gegenseite direkt aktualisieren
        setList(data)
      } catch (e) {
        console.error(e)
      } finally {
        setRelSaving(false)
      }
    }, 700)
  }, [relItems, activeId, pid])

  function openGraph(){ setShowGraph(true) }

  if (loading) return <main className="content"><p>Lade…</p></main>

  return (
    <main className="content">
      <div className="page-head">
        <div className="page-crumbs">
          <span className="crumb strong">{project?.title || 'Projekt'}</span>
          <span className="sep">·</span>
          <span className="crumb">Charaktere</span>
        </div>
        <div className="page-meta">
          <span className="chip">{list.length} Einträge</span>
          <button className="btn sm ghost" style={{marginLeft:8}} onClick={openGraph}>Graph</button>
        </div>
      </div>

      {error && <p style={{ color:'crimson', marginTop:0 }}>{error}</p>}

      <div className="two-col equalize">
        {/* Sidebar */}
        <aside className="two-col__sidebar">
          <div className="panel fill">
            <div className="panel-title row">
              <span>Charaktere</span>
              <button className="btn sm" onClick={addCharacter}>+ Neu</button>
            </div>

            {list.length === 0 ? (
              <div className="empty">
                <p className="muted">Du hast noch keinen Charakter.</p>
                <button className="btn" onClick={addCharacter}>+ Ersten Charakter erstellen</button>
              </div>
            ) : (
              <ul className="klist slim">
                {list.map((c, idx) => {
                  const isActive = activeId === c.id
                  const relCount = Array.isArray(c.relations) ? c.relations.length : 0
                  return (
                    <li key={c.id} className={'kitem tile ' + (isActive ? 'active' : '')}>
                      <div className="krow tile-head" onClick={() => setActiveId(c.id)} role="button" tabIndex={0}>
                        <span className="ordinal">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="ktitle" title={c.name || 'Unbenannt'}>{c.name?.trim() || 'Unbenannt'}</span>
                        <span className="bubble muted small" title="Beziehungen">{relCount}</span>
                        <div className="kactions">
                          <button className="icon-btn" title="Löschen" onClick={(ev)=>{ev.stopPropagation(); removeCharacter(c.id)}}>🗑</button>
                        </div>
                      </div>
                      {isActive && (
                        <div className="tile-body subtle">
                          <div className="dot-row"><span className="dot" /><span className="muted">{(c.role||'–')}</span></div>
                          <div className="dot-row"><span className="dot" /><span className="muted">
                            {c.age !== '' && c.age != null && isFinite(Number(c.age)) ? `${c.age} Jahre` : '–'}
                          </span></div>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </aside>

        {/* Main */}
        <section className="two-col__main">
          {list.length === 0 || !active ? (
            <div className="panel grow empty center">
              <h3 style={{ margin: 0 }}>Du hast noch keinen Charakter</h3>
              <p className="muted" style={{ marginTop: 4 }}>Lege deinen ersten Charakter an, um Details zu bearbeiten.</p>
              <button className="btn" onClick={addCharacter}>+ Ersten Charakter erstellen</button>
            </div>
          ) : (
            <div className="panel grow">
              {/* Header-Zeile */}
              <div className="row" style={{ gap: 8, marginBottom: 10, alignItems:'center' }}>
                <input className="input" style={{ flex: 1 }} placeholder="Name" value={name} onChange={e => onChangeField('name', e.target.value)} />
                <input className="input" style={{ flex: 1 }} placeholder="Rolle (z.B. Protagonist)" value={role} onChange={e => onChangeField('role', e.target.value)} />
                <input className="input" style={{ width: 120 }} placeholder="Alter" value={age} onChange={e => onChangeField('age', e.target.value.replace(/[^\d]/g,''))} />
              </div>

              {/* Tabs */}
              <div className="tabs">
                <button className={'tab-btn ' + (tab==='general'?'active':'')} onClick={()=>setTab('general')}>Allgemein</button>
                <button className={'tab-btn ' + (tab==='personality'?'active':'')} onClick={()=>setTab('personality')}>Persönlichkeit</button>
                <button className={'tab-btn ' + (tab==='background'?'active':'')} onClick={()=>setTab('background')}>Hintergrund</button>
                <button className={'tab-btn ' + (tab==='skills'?'active':'')} onClick={()=>setTab('skills')}>Fähigkeiten</button>
                <button className={'tab-btn ' + (tab==='relations'?'active':'')} onClick={()=>setTab('relations')}>Beziehungen</button>
                <button className={'tab-btn ' + (tab==='notes'?'active':'')} onClick={()=>setTab('notes')}>Notizen</button>
              </div>

              {/* Tab Inhalte */}
              {tab === 'general' && (
                <div className="tab-body">
                  <div className="grid two gap16">
                    <div>
                      <textarea className="editor sm" placeholder="Kurzpitch (1–2 Sätze)" value={profile.pitch} onChange={e=>onChangeProfile('pitch', e.target.value)} />
                      <div className="row" style={{gap:8, marginTop:8}}>
                        <input className="input" placeholder="Ziel (1 Satz)" value={profile.goal} onChange={e=>onChangeProfile('goal', e.target.value)} />
                        <input className="input" placeholder="Konflikt (1 Satz)" value={profile.conflict} onChange={e=>onChangeProfile('conflict', e.target.value)} />
                      </div>
                      <input className="input" style={{marginTop:8}} placeholder="Zugehörigkeiten/Fraktionen (kommasepariert)"
                        value={arrayToInput(profile.affiliations)} onChange={e=>onChangeProfile('affiliations', inputToArray(e.target.value))} />
                    </div>
                    <div className="avatar-box">
                      {profile.avatarUrl ? (
                        <img src={profile.avatarUrl} alt="Avatar" className="avatar-img" onError={(e)=>{e.currentTarget.style.display='none'}} />
                      ) : (
                        <div className="avatar-ph">{(name||'?').substring(0,1).toUpperCase()}</div>
                      )}
                      <input className="input" placeholder="Bild-URL einfügen…" value={profile.avatarUrl} onChange={e=>onChangeProfile('avatarUrl', e.target.value)} />
                    </div>
                  </div>
                </div>
              )}

              {tab === 'personality' && (
                <div className="tab-body">
                  <div className="grid two gap16">
                    <div>
                      <input className="input" placeholder="Stärken (kommasepariert)" value={arrayToInput(profile.strengths)} onChange={e=>onChangeProfile('strengths', inputToArray(e.target.value))} />
                      <input className="input" style={{marginTop:8}} placeholder="Schwächen (kommasepariert)" value={arrayToInput(profile.weaknesses)} onChange={e=>onChangeProfile('weaknesses', inputToArray(e.target.value))} />
                      <input className="input" style={{marginTop:8}} placeholder="Stimme & Stil (3 Stichwörter)" value={profile.voice} onChange={e=>onChangeProfile('voice', e.target.value)} />
                    </div>
                    <div>
                      <input className="input" placeholder="Persönlichkeitsmerkmale (frei)" value={profile.traits} onChange={e=>onChangeProfile('traits', e.target.value)} />
                      <textarea className="editor sm" style={{marginTop:8}} placeholder="Geheimnis / Wunde (privat)" value={profile.secret} onChange={e=>onChangeProfile('secret', e.target.value)} />
                    </div>
                  </div>
                </div>
              )}

              {tab === 'background' && (
                <div className="tab-body">
                  <div className="grid two gap16">
                    <div>
                      <input className="input" placeholder="Geburtsort" value={profile.birthplace} onChange={e=>onChangeProfile('birthplace', e.target.value)} />
                      <input className="input" style={{marginTop:8}} placeholder="Wohnort" value={profile.residence} onChange={e=>onChangeProfile('residence', e.target.value)} />
                      <input className="input" style={{marginTop:8}} placeholder="Beruf/Zugehörigkeit" value={profile.occupation} onChange={e=>onChangeProfile('occupation', e.target.value)} />
                    </div>
                    <div>
                      <div className="row" style={{gap:8}}>
                        <input className="input" placeholder="Größe/Größe" value={profile.height} onChange={e=>onChangeProfile('height', e.target.value)} />
                        <input className="input" placeholder="Haarfarbe" value={profile.hairColor} onChange={e=>onChangeProfile('hairColor', e.target.value)} />
                        <input className="input" placeholder="Augenfarbe" value={profile.eyeColor} onChange={e=>onChangeProfile('eyeColor', e.target.value)} />
                      </div>
                      <textarea className="editor sm" style={{marginTop:8}} placeholder="Aussehen (Silhouette, Merkmale …)" value={profile.appearance} onChange={e=>onChangeProfile('appearance', e.target.value)} />
                    </div>
                  </div>
                  <textarea className="editor" style={{marginTop:12}} placeholder="Biografie / Hintergrund" value={profile.backstory} onChange={e=>onChangeProfile('backstory', e.target.value)} />
                </div>
              )}

              {tab === 'skills' && (
                <div className="tab-body">
                  <TagInput
                    placeholder="Fähigkeit eingeben und Enter/Komma drücken …"
                    value={profile.skills}
                    onChange={(arr)=>onChangeProfile('skills', arr)}
                  />
                </div>
              )}

              {tab === 'relations' && (
                <div className="tab-body">
                  <div className="row" style={{justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
                    <h4 style={{margin:0}}>Beziehungen</h4>
                    <div className="row" style={{gap:8, alignItems:'center'}}>
                      <span className="muted" style={{fontSize:12}}>
                        {relSaving ? 'Speichert…' : 'Alle Änderungen gespeichert'}
                      </span>
                      <button className="btn sm ghost" onClick={addRelationRow}>+ Beziehung hinzufügen</button>
                    </div>
                  </div>

                  {candidateChars.length === 0 && (
                    <p className="muted">Es gibt noch keine weiteren Charaktere. Lege zuerst weitere Figuren an.</p>
                  )}

                  {relItems.length === 0 ? (
                    <p className="muted">Noch keine Beziehungen. Füge oben eine hinzu.</p>
                  ) : (
                    <div className="rel-table">
                      <div className="rel-header">
                        <span>Ziel</span><span>Typ</span><span>Stärke</span><span>Notizen</span><span />
                      </div>
                      {relItems.map((r, i) => (
                        <div className="rel-row" key={i}>
                          <select className="input" value={r.toId ?? ''} onChange={e=>editRelRow(i, { toId: Number(e.target.value)||null })}>
                            {candidateChars.length===0 && <option value="">(keine weiteren Charaktere)</option>}
                            {candidateChars.map(c => <option key={c.id} value={c.id}>{c.name || `#${c.id}`}</option>)}
                          </select>

                          <select className="input" value={r.type} onChange={e=>editRelRow(i, { type: e.target.value })}>
                            <option>Freund</option><option>Feind</option><option>Familie</option>
                            <option>Mentor</option><option>Schüler</option>
                            <option>Liebe</option><option>Kollege</option><option>Kennt</option>
                          </select>

                          <input className="input" value={String(r.strength ?? 3)} onChange={e=>editRelRow(i,{ strength: clampInt(e.target.value,1,5) })} />

                          <input className="input" placeholder="Notizen" value={r.notes||''} onChange={e=>editRelRow(i, { notes: e.target.value })} />

                          <button className="icon-btn" title="Entfernen" onClick={()=>removeRelRow(i)}>🗑</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {tab === 'notes' && (
                <div className="tab-body">
                  <textarea className="editor" placeholder="Freie Notizen …" value={description} onChange={e => onChangeField('description', e.target.value)} />
                </div>
              )}
            </div>
          )}
        </section>
      </div>

      {showGraph && (
        <GraphModal projectId={pid} onClose={()=>setShowGraph(false)} />
      )}
    </main>
  )
}

// utils
function clampInt(v, min, max){
  const n = Number(String(v).replace(/[^\d]/g,'')) || min
  return Math.max(min, Math.min(max, n))
}

/* ---------- Kleine, eigenständige Tag-Input Komponente ---------- */
function TagInput({ value = [], onChange, placeholder }) {
  const [text, setText] = useState('')

  function emit(arr){
    // Duplikate (case-insensitive) entfernen, leere ignorieren
    const norm = []
    const seen = new Set()
    for (const raw of arr) {
      const t = String(raw || '').trim()
      if (!t) continue
      const key = t.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key); norm.push(t)
    }
    onChange?.(norm)
  }

  function addFromString(str){
    const parts = String(str).split(/[,\n;]+/).map(s=>s.trim()).filter(Boolean)
    if (parts.length === 0) return
    emit([...(value || []), ...parts])
    setText('')
  }

  function onKeyDown(e){
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addFromString(text)
    } else if (e.key === 'Backspace' && text === '' && value.length > 0) {
      // letzte Kachel löschen, wenn Feld leer
      const next = value.slice(0, -1)
      emit(next)
    }
  }

  function onPaste(e){
    const s = e.clipboardData?.getData('text') || ''
    if (/[,\n;]/.test(s)) {
      e.preventDefault()
      addFromString(s)
    }
  }

  function removeAt(i){
    const next = (value || []).filter((_, idx) => idx !== i)
    emit(next)
  }

  function onBlur(){
    if (text.trim()) addFromString(text)
  }

  return (
    <div className="tag-input">
      <input
        className="input"
        value={text}
        onChange={e=>setText(e.target.value)}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      <div className="tags">
        {(value || []).map((t, i) => (
          <span className="tag" key={`${t}-${i}`}>
            {t}
            <button className="tag-x" aria-label={`„${t}“ entfernen`} onClick={()=>removeAt(i)}>×</button>
          </span>
        ))}
      </div>
    </div>
  )
}

```

### `frontend\src\pages\Dashboard.jsx`
```jsx
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  listProjects,
  createProject,
  updateProject,
  deleteProject
} from '../lib/api.js'
import logo from '../assets/brand/logo.png'
import '../dashboard.css'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [projects, setProjects] = useState([])

  const [newTitle, setNewTitle] = useState('')
  const [creating, setCreating] = useState(false)

  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const data = await listProjects()
        setProjects(data || [])
      } catch (e) {
        console.error(e); setError('Projekte konnten nicht geladen werden.')
      } finally { setLoading(false) }
    })()
  }, [])

  async function onCreate() {
    const title = (newTitle || '').trim() || 'Neues Projekt'
    setCreating(true)
    try {
      const p = await createProject({ title })
      setProjects(prev => [p, ...prev])
      setNewTitle('')
    } catch { alert('Projekt konnte nicht angelegt werden.') }
    finally { setCreating(false) }
  }

  async function onDelete(id) {
    if (!confirm('Projekt wirklich löschen?')) return
    try {
      await deleteProject(id)
      setProjects(prev => prev.filter(p => p.id !== id))
    } catch { alert('Löschen fehlgeschlagen.') }
  }

  function startEdit(p) {
    setEditingId(p.id)
    setEditTitle(p.title || '')
  }

  async function saveEdit(p) {
    const title = (editTitle || '').trim()
    setEditingId(null)
    if (!title || title === p.title) return
    try {
      const upd = await updateProject(p.id, { title })
      setProjects(prev => prev.map(x => x.id === p.id ? { ...x, ...upd } : x))
    } catch { alert('Umbenennen fehlgeschlagen.') }
  }

  function fmt(dt) {
    if (!dt) return '–'
    const d = new Date(dt)
    return d.toLocaleDateString() + ', ' + d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
  }

  if (loading) return <main className="content"><p>Lade…</p></main>

  return (
    <>
      {/* TOP NAV nur mit Logo */}
      <header className="topnav">
        <div className="topnav-inner">
          <div className="nav-left">
            <Link
              to="/"
              className="brand"
              aria-label="Roman"
              style={{ display:'inline-flex', alignItems:'center', padding:0, borderRadius:0, marginRight:12 }}
            >
              <img src={logo} alt="Roman" style={{ height:22, width:'auto', display:'block', borderRadius:0 }} />
            </Link>
          </div>

          <div className="nav-right">
            <div className="nav-search">
              <input
                placeholder="Titel"
                value={newTitle}
                onChange={e=>setNewTitle(e.target.value)}
              />
              <button className="btn primary" style={{marginLeft:8}} onClick={onCreate} disabled={creating}>
                {creating ? '…' : '➕ Neues Projekt'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <main className="content dashboard">
        <div className="page-head" style={{marginTop:8}}>
          <div className="page-crumbs"><h2 style={{margin:'0 0 2px 0'}}>Projekte</h2></div>
        </div>

        {error && <p style={{color:'crimson'}}>{error}</p>}

        <section className="proj-grid">
          {projects.map((p) => (
            <article key={p.id} className="proj-card">
              {/* Cover – 2:3 und klickbar */}
              <button
                className="cover"
                onClick={() => navigate(`/project/${p.id}`)}
                title="Öffnen"
              >
                <div className="cover-inner">
                  <span className="cover-mark">BUCH-COVER</span>
                </div>
              </button>

              {/* Inhalt der Kachel */}
              <div className="proj-meta">
                <div className="proj-header">
                  {editingId === p.id ? (
                    <input
                      className="title-input"
                      value={editTitle}
                      onChange={e=>setEditTitle(e.target.value)}
                      onKeyDown={(e)=>{ if (e.key==='Enter') saveEdit(p); if (e.key==='Escape') setEditingId(null) }}
                      onBlur={()=>saveEdit(p)}
                      autoFocus
                    />
                  ) : (
                    <h3
                      className="proj-title"
                      title={p.title || 'Unbenannt'}
                      onDoubleClick={()=>startEdit(p)}
                    >
                      {p.title || 'Unbenannt'}
                    </h3>
                  )}
                  <button className="icon-btn rename" title="Umbenennen" onClick={()=>startEdit(p)}>✎</button>
                </div>

                <div className="proj-sub">Zuletzt geändert: {fmt(p.updated_at)}</div>

                <div className="proj-actions">
                  <Link className="btn" to={`/project/${p.id}`}>Öffnen</Link>
                  <button className="btn" onClick={()=>onDelete(p.id)}>Löschen</button>
                </div>
              </div>
            </article>
          ))}

          {projects.length === 0 && (
            <div className="empty-hint">
              Noch keine Projekte – gib oben einen <em>Titel</em> ein und klicke <strong>„Neues Projekt“</strong>.
            </div>
          )}
        </section>
      </main>
    </>
  )
}

```

### `frontend\src\pages\Preview.jsx`
```jsx
import React, { useMemo, useRef } from 'react'
import { useParams } from 'react-router-dom'
import '../preview.css'

// kleine Helper
const escapeHtml = (s = '') =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

// Plaintext -> <p>…</p> (optional Dropcap im ersten Absatz)
function paragraphsHTML(text, firstIsDropcap = false) {
  const parts = (text || '')
    .split(/\n\s*\n/)
    .map(s => s.trim())
    .filter(Boolean)
  return parts
    .map((p, i) => {
      const cls = firstIsDropcap && i === 0 ? ' class="dropcap"' : ''
      return `<p${cls}>${escapeHtml(p).replace(/\n+/g, ' ')}</p>`
    })
    .join('\n')
}

// Kapitel-Heading ohne Dopplung „Kapitel …“
const chapterHeading = (no, title = '') => {
  const t = (title || '').trim()
  return /^kapitel\b/i.test(t) ? t : `Kapitel ${no}${t ? ' — ' + escapeHtml(t) : ''}`
}

export default function Preview() {
  const { id } = useParams()
  const pid = Number(id)
  const iframeRef = useRef(null)

  const [book, setBook] = React.useState(null)
  const [err, setErr] = React.useState('')

  React.useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(`/api/projects/${pid}/book`)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        setBook(await res.json())
      } catch (e) {
        console.error(e)
        setErr('Konnte Buchdaten nicht laden.')
      }
    })()
  }, [pid])

  // gesamtes Dokument für das Iframe bauen (Paged.js läuft isoliert darin)
  const srcDoc = useMemo(() => {
    if (!book)
      return '<!doctype html><html><head><meta charset="utf-8"></head><body>Loading…</body></html>'

    const { project, chapters } = book

    let chNo = 0
    const chaptersHTML = chapters
      .map(ch => {
        chNo += 1
        const scenes = ch.scenes || []
        // keine Szenen-Titel in der Vorschau – nur Inhalte
        const scenesHTML = scenes
          .map((sc, idx) => paragraphsHTML(sc.content || '', idx === 0))
          .join('\n')
        return `
          <section>
            <h1 class="chapter-title">${chapterHeading(chNo, ch.title || '')}</h1>
            ${scenesHTML}
          </section>
        `
      })
      .join('\n')

    return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Crimson+Pro:wght@400;600&display=swap" rel="stylesheet">
<style>
  :root{--book-font:"EB Garamond","Georgia",serif;--font-size:11pt;--lh:1.42;--zoom:1}
  html,body{margin:0;padding:0;background:#fff;overflow-x:hidden}
  .book{font-family:var(--book-font);font-size:var(--font-size);line-height:var(--lh);color:#111}

  /* 6×9" Taschenbuch mit angenehmen Rändern */
  @page{size:152.4mm 228.6mm;margin:20mm 18mm 24mm 18mm}
  @page{
    @top-center{content: string(running-chapter); font-family: var(--book-font); font-size:10pt; color:#444}
    @bottom-center{content: counter(page); font-family: var(--book-font); font-size:10pt; color:#444}
  }

  /* Typografie */
  h1.chapter-title{
    break-before: page;
    font-weight:600;font-size:18pt;text-align:center;margin:0 0 10mm;
    string-set: running-chapter content(text);
  }
  .book p{text-align:justify;margin:0 0 3.2mm;text-indent:1.2em;widows:2;orphans:2}
  .book h1 + p{ text-indent:0 }
  .dropcap:first-letter{ float:left;font-size:3.2em;line-height:0.8;padding-right:.1em }

  /* Seiten in der Bildschirmvorschau – automatisch an Breite anpassen */
  .pagedjs_pages{
    transform: scale(var(--zoom));
    transform-origin: top center;
  }
  /* Abstände bei Zoom anpassen, damit es hübsch bleibt */
  .pagedjs_page{box-shadow:0 10px 28px rgba(0,0,0,.10);margin: calc(16px / var(--zoom)) auto;border-radius:6px}
  .pagedjs_area, .pagedjs_pages { background: transparent !important; }
</style>

<script>
  // Paged.js automatisch starten
  window.PagedConfig = { auto: true };

  // Nach dem Rendern skalieren wir die Seiten so,
  // dass sie möglichst die verfügbare Breite nutzen (ohne Scrollbalken).
  function fitToWidth(){
    const first = document.querySelector('.pagedjs_page');
    if(!first) return;
    const margin = 32; // etwas Luft an den Seiten
    const viewport = window.innerWidth - margin;
    const pageWidth = first.getBoundingClientRect().width;
    if(!pageWidth) return;
    const desired = Math.min(1.8, Math.max(1.0, viewport / pageWidth));
    document.documentElement.style.setProperty('--zoom', desired.toFixed(2));
  }
  window.addEventListener('pagedjs:rendered', fitToWidth);
  window.addEventListener('resize', fitToWidth);
</script>
<script src="https://unpkg.com/pagedjs@0.4.3/dist/paged.polyfill.js"></script>
</head>
<body>
  <div class="book">
    <section style="break-before:page;text-align:center;margin-top:35mm">
      <h1 style="font-family:'EB Garamond',Georgia,serif;font-size:28pt;margin:0 0 3mm">
        ${escapeHtml(project?.title || 'Buch')}
      </h1>
      <div style="font-family:'Crimson Pro',Georgia,serif;font-size:12pt;color:#555">Roman – Vorschau</div>
    </section>
    ${chaptersHTML}
  </div>
</body>
</html>`
  }, [book])

  const printIframe = () => {
    const w = iframeRef.current?.contentWindow
    if (w) w.print()
  }

  if (err) {
    return (
      <main className="content content--fluid">
        
        <p>{err}</p>
      </main>
    )
  }

  return (
    <main className="content content--fluid">
     

      <div className="preview-toolbar">
        <strong>{book?.project?.title || 'Buch'}</strong>
        <button className="btn" onClick={printIframe}>Als PDF drucken</button>
      </div>

      {/* Große, volle Breite – zentriert dargestellt */}
      <div className="preview-wrap">
        <div className="preview-stage">
          <iframe
            ref={iframeRef}
            title="Book Preview"
            className="preview-frame"
            srcDoc={srcDoc}
          />
        </div>
      </div>
    </main>
  )
}

```

### `frontend\src\pages\ProjectView.jsx`
```jsx
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../layout-2col.css'
import '../projectview.css'

export default function ProjectView() {
  const { id } = useParams()
  const pid = Number(id)

  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const [project, setProject]   = useState(null)
  const [chapters, setChapters] = useState([])

  const [activeChapterId, setActiveChapterId] = useState(null)
  const [activeSceneId, setActiveSceneId]     = useState(null)

  const [sceneTitle, setSceneTitle]     = useState('')
  const [sceneContent, setSceneContent] = useState('')

  const [query, setQuery] = useState('')

  const [saveState, setSaveState] = useState('idle')
  const [lastSavedAt, setLastSavedAt] = useState(null)

  const saveTimer = useRef(null)
  const textareaRef = useRef(null)
  const debounce = (fn) => { clearTimeout(saveTimer.current); saveTimer.current = setTimeout(fn, 600) }

  const postJSON = (url, body) => fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const putJSON  = (url, body) => fetch(url, { method:'PUT',  headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) })
  const del      = (url)      => fetch(url, { method:'DELETE' })

  const activeChapter = useMemo(
    () => chapters.find(c => c.id === activeChapterId) || null,
    [chapters, activeChapterId]
  )
  const activeScene = useMemo(
    () => (activeChapter?.scenes || []).find(s => s.id === activeSceneId) || null,
    [activeChapter, activeSceneId]
  )
  const inChapterOverview = !!activeChapter && !activeScene

  const metrics = useMemo(() => {
    const words = (sceneContent || '').trim().split(/\s+/).filter(Boolean).length
    const chars = (sceneContent || '').length
    const minutes = Math.max(1, Math.round(words / 200))
    return { words, chars, minutes }
  }, [sceneContent])

  const filteredChapters = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return chapters
    return chapters.filter(ch => {
      if ((ch.title || '').toLowerCase().includes(q)) return true
      return (ch.scenes || []).some(sc => (sc.title || '').toLowerCase().includes(q))
    })
  }, [chapters, query])

  // Szenen für Kapitel laden (Lazy)
  async function loadScenes(chId) {
    const ch = chapters.find(c => c.id === chId)
    if (ch && ch._loaded) return
    const res = await fetch(`/api/chapters/${chId}/scenes`)
    if (!res.ok) return
    const list = await res.json()
    setChapters(prev => prev.map(c => c.id === chId ? { ...c, scenes: list, _loaded: true } : c))
  }

  // Initial load
  useEffect(() => {
    (async () => {
      setLoading(true); setError('')
      try {
        const res = await fetch(`/api/projects/${pid}`)
        if (!res.ok) throw new Error('HTTP ' + res.status)
        const data = await res.json()
        setProject({ id: data.id, title: data.title })
        // Alle Kapitel initial "zu": scenes=[], _loaded:false
        const chs = (data.chapters || []).map(ch => ({ ...ch, scenes: [], _loaded: false }))
        setChapters(chs)
        const ch0 = chs[0]
        if (ch0) {
          setActiveChapterId(ch0.id)   // -> nur dieses klappt auf
          setActiveSceneId(null)
          await loadScenes(ch0.id)
        }
      } catch (e) { console.error(e); setError('Projekt konnte nicht geladen werden.') }
      finally { setLoading(false) }
    })()
  }, [pid])

  // Editor state setzen wenn Szene wechselt
  useEffect(() => {
    if (!activeScene) return
    setSceneTitle(activeScene.title || '')
    setSceneContent(activeScene.content || '')
    setSaveState('idle')
  }, [activeSceneId]) // eslint-disable-line

  // Flush-Save (für Navigationswechsel/Blur)
  const flushingRef = useRef(false)
  async function flushSceneSaveNow() {
    if (!activeSceneId || flushingRef.current) return
    clearTimeout(saveTimer.current)
    flushingRef.current = true
    try {
      setSaveState('saving')
      const res = await putJSON(`/api/scenes/${activeSceneId}`, { title: sceneTitle, content: sceneContent })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      setSaveState('saved'); setLastSavedAt(new Date())
    } catch (e) { console.error('Flush save failed:', e) }
    finally { flushingRef.current = false }
  }

  useEffect(() => {
    const onBeforeUnload = (e) => {
      if (activeSceneId) {
        flushSceneSaveNow()
        e.preventDefault()
        e.returnValue = ''
      }
    }
    const onVisibilityChange = () => { if (document.visibilityState === 'hidden') flushSceneSaveNow() }
    window.addEventListener('beforeunload', onBeforeUnload)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      flushSceneSaveNow()
    }
  }, [activeSceneId, sceneTitle, sceneContent])

  // Kapitel/Szenen – Navigation & CRUD
  async function goToChapterOverview(chId) {
    await flushSceneSaveNow()
    setActiveChapterId(chId)    // nur dieses öffnet
    setActiveSceneId(null)
    await loadScenes(chId)
  }
  async function openScene(chId, scId) {
    await loadScenes(chId)
    await flushSceneSaveNow()
    setActiveChapterId(chId)    // nur dieses öffnet
    setActiveSceneId(scId)
  }

  async function addChapter() {
    const title = `Kapitel ${chapters.length + 1}`
    const res = await postJSON(`/api/projects/${pid}/chapters`, { title })
    if (!res.ok) return alert('Kapitel konnte nicht angelegt werden.')
    const ch = await res.json()
    const newCh = { ...ch, scenes: [], _loaded: false }
    setChapters(prev => [...prev, newCh])
    await flushSceneSaveNow()
    setActiveChapterId(newCh.id)  // öffnet das neue Kapitel
    setActiveSceneId(null)
    setChapters(prev => prev.map(c => c.id === newCh.id ? { ...c, _loaded: true } : c))
  }
  async function removeChapter(chId) {
    if (!confirm('Kapitel wirklich löschen?')) return
    const res = await del(`/api/chapters/${chId}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setChapters(prev => prev.filter(c => c.id !== chId))
    if (activeChapterId === chId) {
      await flushSceneSaveNow()
      const first = chapters.find(c => c.id !== chId)
      setActiveChapterId(first?.id || null)
      setActiveSceneId(null)
      if (first) await loadScenes(first.id)
    }
  }
  async function renameChapter(chId, title) {
    setChapters(prev => prev.map(c => c.id === chId ? { ...c, title } : c))
    debounce(async () => { await putJSON(`/api/chapters/${chId}`, { title }) })
  }
  async function addScene(chId) {
    const res = await postJSON(`/api/chapters/${chId}/scenes`, { title:'Neue Szene', content:'' })
    if (!res.ok) return alert('Szene konnte nicht angelegt werden.')
    const sc = await res.json()
    setChapters(prev => prev.map(c => c.id === chId ? { ...c, scenes:[...c.scenes, sc], _loaded: true } : c))
    await flushSceneSaveNow()
    setActiveChapterId(chId)
    setActiveSceneId(sc.id)
  }
  async function removeScene(scId) {
    if (!confirm('Szene wirklich löschen?')) return
    const res = await del(`/api/scenes/${scId}`)
    if (!res.ok) return alert('Löschen fehlgeschlagen.')
    setChapters(prev => prev.map(c => ({ ...c, scenes:c.scenes.filter(s => s.id !== scId) })))
    if (activeSceneId === scId) setActiveSceneId(null)
  }

  function onChangeSceneTitle(e) {
    const val = e.target.value
    setSceneTitle(val)
    setSaveState('saving')
    setChapters(prev => prev.map(c => c.id !== activeChapterId ? c : ({
      ...c,
      scenes: c.scenes.map(s => s.id === activeSceneId ? { ...s, title: val } : s)
    })))
    debounce(async () => {
      await putJSON(`/api/scenes/${activeSceneId}`, { title: val })
      setSaveState('saved'); setLastSavedAt(new Date())
    })
  }
  function onChangeSceneContent(e) {
    const val = e.target.value
    setSceneContent(val)
    setSaveState('saving')
    setChapters(prev => prev.map(c => c.id !== activeChapterId ? c : ({
      ...c,
      scenes: c.scenes.map(s => s.id === activeSceneId ? { ...s, content: val } : s)
    })))
    debounce(async () => {
      await putJSON(`/api/scenes/${activeSceneId}`, { content: val })
      setSaveState('saved'); setLastSavedAt(new Date())
    })
  }

  function insertAroundSelection(prefix, suffix = prefix) {
    const ta = textareaRef.current; if (!ta) return
    const start = ta.selectionStart ?? 0
    const end   = ta.selectionEnd ?? 0
    const before = sceneContent.slice(0, start)
    const selected = sceneContent.slice(start, end)
    const after = sceneContent.slice(end)
    const next = before + prefix + selected + suffix + after
    setSceneContent(next)
    setSaveState('saving')
    debounce(async () => { await putJSON(`/api/scenes/${activeSceneId}`, { content: next }); setSaveState('saved'); setLastSavedAt(new Date()) })
    requestAnimationFrame(() => { ta.focus(); const pos = start + prefix.length + selected.length; ta.setSelectionRange(pos, pos) })
  }
  function insertLine(prefix) {
    const ta = textareaRef.current; if (!ta) return
    const start = ta.selectionStart ?? 0
    const before = sceneContent.slice(0, start)
    const after = sceneContent.slice(start)
    const nl = before.endsWith('\n') ? '' : '\n'
    const next = before + nl + prefix + '\n' + after
    setSceneContent(next)
    setSaveState('saving')
    debounce(async () => { await putJSON(`/api/scenes/${activeSceneId}`, { content: next }); setSaveState('saved'); setLastSavedAt(new Date()) })
    requestAnimationFrame(() => { ta.focus(); const pos = (before + nl + prefix + '\n').length; ta.setSelectionRange(pos, pos) })
  }

  function wordsOf(scene) {
    if (!scene?.content) return 0
    return scene.content.trim().split(/\s+/).filter(Boolean).length
  }
  function snippetOf(scene) {
    const txt = (scene?.content || '').replace(/\s+/g,' ').trim()
    return txt.length > 140 ? txt.slice(0, 140) + '…' : txt
  }

  if (loading) return <main className="content"><p>Lade…</p></main>
  if (error)   return <main className="content"><p>{error}</p></main>

  const sceneCount = activeChapter?.scenes?.length ?? 0

  return (
    <main className="content">

      {/* Kopf über beiden Spalten */}
      <div className="page-head">
        <div className="page-crumbs">
          <div className="crumb">{project?.title || 'Projekt'}</div>
          <span className="crumb sep">/</span>
          <div className="crumb strong">{activeChapter?.title || 'Kapitel'}</div>
        </div>
        <div className="page-meta">
          <span className="chip">{sceneCount} Szenen</span>
        </div>
      </div>

      <div className="two-col equalize">

        {/* LEFT: Kapitel-Liste */}
        <aside className="two-col__sidebar">
          <div className="panel fill">
            <div className="panel-title row" style={{justifyContent:'space-between'}}>
              <span>Kapitel</span>
              <div className="row" style={{gap:6}}>
                <div className="ksearch">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2"/></svg>
                  <input placeholder="Suchen…" value={query} onChange={e=>setQuery(e.target.value)} />
                </div>
                {/* Schönes Icon: ➕ */}
                <button className="btn xsm primary" onClick={addChapter}>➕ Neu</button>
              </div>
            </div>

            <ul className="chap-cards">
              {filteredChapters.map((ch, idx) => {
                const isActive = activeChapterId === ch.id
                const count = ch.scenes?.length || 0
                return (
                  <li key={ch.id} className={'chap-card' + (isActive ? ' active' : '')}>
                    <div
                      className="chap-head"
                      onClick={() => goToChapterOverview(ch.id)}
                    >
                      <div className="chap-meta">
                        <span className="chap-num">{String(idx + 1).padStart(2,'0')}</span>
                        <span className="chap-title-text" title={ch.title || 'Kapitel'}>{ch.title || 'Kapitel'}</span>
                      </div>
                      <div className="chap-actions">
                        <span className="scene-count">{count}</span>
                        <button className="icon-btn" title="Szene hinzufügen" onClick={(ev)=>{ev.stopPropagation(); addScene(ch.id)}}>＋</button>
                        <button className="icon-btn" title="Kapitel löschen" onClick={(ev)=>{ev.stopPropagation(); removeChapter(ch.id)}}>🗑</button>
                        {/* Auf/Zu-Button pro Kapitel entfernt */}
                      </div>
                    </div>

                    {/* Nur das aktive Kapitel klappt auf */}
                    {isActive && (
                      <ul className="scene-list">
                        {(ch.scenes || []).map(sc => (
                          <li key={sc.id} className={'scene-item' + (activeSceneId === sc.id ? ' current' : '')}>
                            <button className="scene-link" onClick={() => openScene(ch.id, sc.id)}>
                              <span className="dot" />
                              <span className="text">{sc.title || 'Neue Szene'}</span>
                            </button>
                            <button className="scene-del" title="Löschen" onClick={()=>removeScene(sc.id)}>🗑</button>
                          </li>
                        ))}
                        <li><button className="scene-add" onClick={() => addScene(ch.id)}>+ Neue Szene</button></li>
                      </ul>
                    )}
                  </li>
                )
              })}
              {filteredChapters.length === 0 && (
                <li className="empty-hint">Keine Treffer. Suchbegriff anpassen.</li>
              )}
            </ul>
          </div>
        </aside>

        {/* RIGHT: Übersicht ODER Editor */}
        <section className="two-col__main">
          <div className="stack fill">
            {inChapterOverview ? (
              <>
                <div className="panel">
                  <div className="panel-title row">
                    <span>Kapitel</span>
                    <span className="muted">ID {activeChapter?.id ?? '-'}</span>
                  </div>
                  <input
                    className="title-input"
                    placeholder="Kapitelname …"
                    value={activeChapter?.title || ''}
                    onChange={(e) => renameChapter(activeChapterId, e.target.value)}
                  />
                </div>

                <div className="panel">
                  <div className="panel-title row">
                    <span>Szenen in diesem Kapitel</span>
                    <button className="btn sm primary" onClick={() => addScene(activeChapterId)}>+ Neue Szene</button>
                  </div>

                  {(activeChapter?.scenes?.length || 0) === 0 ? (
                    <div className="empty-hint" style={{padding:'12px 0'}}>Noch keine Szenen. Lege die erste Szene an!</div>
                  ) : (
                    <ul className="scene-grid">
                      {activeChapter.scenes.map(sc => (
                        <li key={sc.id} className="scene-card">
                          <div className="scene-card-top">
                            <button className="scene-card-title" onClick={() => openScene(activeChapter.id, sc.id)}>
                              {sc.title || 'Neue Szene'}
                            </button>
                            <button className="icon-btn" title="Szene löschen" onClick={()=>removeScene(sc.id)}>🗑</button>
                          </div>
                          <p className="scene-card-snippet">{snippetOf(sc)}</p>
                          <div className="scene-card-meta">
                            <span className="chip">{wordsOf(sc)} Wörter</span>
                            <button className="btn xsm" onClick={() => openScene(activeChapter.id, sc.id)}>Öffnen</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="panel">
                  <div className="panel-title row">
                    <span>Szenentitel</span>
                    <span className="muted">Kapitel-ID {activeChapter?.id ?? '-'} · Szene-ID {activeScene?.id ?? '-'}</span>
                  </div>
                  <input
                    className="title-input"
                    placeholder="Titel der Szene …"
                    value={sceneTitle}
                    onChange={onChangeSceneTitle}
                  />
                </div>

                <div className="panel grow">
                  <div className="editor-toolbar">
                    <div className="tools-left">
                      <Tool onClick={() => insertAroundSelection('**')} label="Fett" icon="B" />
                      <Tool onClick={() => insertAroundSelection('_')} label="Kursiv" icon="I" />
                      <div className="tool-sep" />
                      <Tool onClick={() => insertLine('## Überschrift')} label="H2" icon="H2" />
                      <Tool onClick={() => insertLine('> Zitat')} label="Zitat" icon="❝" />
                      <Tool onClick={() => insertLine('- Liste')} label="Liste" icon="•" />
                    </div>
                    <div className="tools-right">
                      <SaveChip state={saveState} time={lastSavedAt} />
                      <span className="chip">{metrics.words} Wörter</span>
                      <span className="chip">{metrics.chars} Zeichen</span>
                      <span className="chip">⏱ {metrics.minutes} min</span>
                    </div>
                  </div>

                  <textarea
                    ref={textareaRef}
                    className="editor"
                    placeholder="Hier schreiben …"
                    value={sceneContent}
                    onChange={onChangeSceneContent}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

/* ---------- kleine UI-Subkomponenten ---------- */
function Tool({ icon, label, onClick }) {
  return (
    <button className="tool-btn" onClick={onClick} title={label}>
      <span className="tool-ico">{icon}</span>
    </button>
  )
}
function SaveChip({ state, time }) {
  if (state === 'saving') return <span className="chip saving">Speichern…</span>
  if (state === 'saved')  return <span className="chip saved">Gespeichert · {time ? time.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : ''}</span>
  return <span className="chip">Bereit</span>
}

```

### `frontend\src\pages\World.jsx`
```jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProject, listWorldItems, createWorldItem, updateWorldItem, deleteWorldItem } from '../lib/api.js'
import GraphModal from '../components/GraphModal.jsx'
import '../projectview.css'
import '../layout-2col.css'

const REL_TYPES = [
  'Teil von','Hat Teil','Ort in','Beherbergt','Regiert','Wird regiert von',
  'Hauptstadt von','Hat Hauptstadt','Mitglied von','Hat Mitglied',
  'Übergeordnet','Untergeordnet','Verbündet','Konkurriert','Handelt mit'
]
const KINDS = ['Allgemein','Organisation','Kirche','Gilde','Beruf','Königreich','Land','Region','Stadt','Ort','Rang/Titel']

export default function World(){
  const { id } = useParams()
  const pid = Number(id)

  const [project, setProject] = useState(null)
  const [list, setList] = useState([])
  const [activeId, setActiveId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showGraph, setShowGraph] = useState(false)

  // Tabs
  const [tab, setTab] = useState('general') // 'general' | 'relations'

  // form
  const [name, setName] = useState('')
  const [kind, setKind] = useState('Allgemein')
  const [description, setDescription] = useState('')
  const [relations, setRelations] = useState([])
  const [relSaving, setRelSaving] = useState(false)

  const active = useMemo(()=>list.find(x => x.id === activeId) || null,[list,activeId])

  const debounceRef = useRef(null)
  const debounce = useCallback((fn, ms=600) => { clearTimeout(debounceRef.current); debounceRef.current = setTimeout(fn, ms) }, [])
  const relSkipNextSave = useRef(false)
  const relDeb = useRef(null)

  useEffect(()=>{
    (async ()=>{
      setLoading(true); setError('')
      try{
        const p = await getProject(pid); setProject(p)
        const items = await listWorldItems(pid); setList(items)
        if(items[0]){ setActiveId(items[0].id); hydrate(items[0]) }
      }catch(e){ console.error(e); setError('Elemente konnten nicht geladen werden.') }
      finally{ setLoading(false) }
    })()
  },[pid])

  useEffect(()=>{ if(active) hydrate(active) },[activeId]) // eslint-disable-line

  function hydrate(it){
    setName(it.name || '')
    setKind(it.kind || 'Allgemein')
    setDescription(it.description || '')
    // Beziehungen hydratisieren, ohne sofort zu speichern
    relSkipNextSave.current = true
    setRelations(Array.isArray(it.relations)? it.relations.map(r=>({...r})) : [])
  }

  async function addItem(){
    try{
      const created = await createWorldItem(pid,{ name:'Neues Element', kind:'Allgemein', description:'', relations:[], props:{} })
      setList(prev => [...prev, created]); setActiveId(created.id)
    }catch{ alert('Anlegen fehlgeschlagen.') }
  }

  async function removeItem(id){
    if(!confirm('Welt-Element wirklich löschen?')) return
    try{
      await deleteWorldItem(id)
      setList(prev => prev.filter(x => x.id !== id))
      if(activeId === id){
        const first = list.find(x => x.id !== id)
        setActiveId(first?.id || null)
      }
    }catch{ alert('Löschen fehlgeschlagen.') }
  }

  function onField(field, value){
    if(!activeId) return
    if(field==='name') setName(value)
    if(field==='kind') setKind(value)
    if(field==='description') setDescription(value)

    setList(prev => prev.map(x => x.id === activeId ? { ...x, [field]: value } : x))

    debounce(async ()=>{
      try{ await updateWorldItem(activeId, { name, kind, description, [field]: value }) }
      catch(e){ console.error(e) }
    })
  }

  // ----- Beziehungen (Autosave) -----
  const candidates = useMemo(()=> list.filter(x => x.id !== activeId), [list,activeId])

  function addRel(){
    setRelations(prev => [...prev, {
      toId: candidates[0]?.id ?? null,
      type: 'Teil von',
      strength: 3,
      notes: ''
    }])
  }
  function editRel(i, patch){ setRelations(prev => prev.map((r,idx)=> idx===i ? { ...r, ...patch } : r)) }
  function delRel(i){ setRelations(prev => prev.filter((_,idx)=> idx!==i)) }

  useEffect(()=>{
    if(!activeId) return
    if(relSkipNextSave.current){ relSkipNextSave.current = false; return }
    const canSave = relations.every(r => typeof r.toId === 'number' && !Number.isNaN(r.toId))
    if(!canSave) return
    setRelSaving(true)
    clearTimeout(relDeb.current)
    relDeb.current = setTimeout(async ()=>{
      try{
        const updated = await updateWorldItem(activeId, { relations })
        setList(prev => prev.map(x => x.id === updated.id ? updated : x))
        // Gegenseite direkt aktualisieren
        const fresh = await listWorldItems(pid)
        setList(fresh)
      }catch(e){ console.error(e) }
      finally{ setRelSaving(false) }
    }, 700)
  },[relations, activeId, pid])

  return (
    <main className="content">
      <div className="page-head">
        <div className="page-crumbs">
          <span className="crumb strong">{project?.title || 'Projekt'}</span>
          <span className="sep">·</span>
          <span className="crumb">Welt</span>
        </div>
        <div className="page-meta">
          <span className="chip">{list.length} Einträge</span>
          <button className="btn sm ghost" style={{marginLeft:8}} onClick={()=>setShowGraph(true)}>Graph</button>
        </div>
      </div>

      {error && <p style={{color:'crimson', marginTop:0}}>{error}</p>}

      <div className="two-col equalize">
        <aside className="two-col__sidebar">
          <div className="panel fill">
            <div className="panel-title row">
              <span>Welt-Elemente</span>
              <button className="btn sm" onClick={addItem}>+ Neu</button>
            </div>
            {loading ? (
              <div className="empty"><p className="muted">Lade…</p></div>
            ) : list.length===0 ? (
              <div className="empty">
                <p className="muted">Du hast noch keine Welt-Elemente.</p>
                <button className="btn" onClick={addItem}>+ Erstes Element anlegen</button>
              </div>
            ) : (
              <ul className="klist slim">
                {list.map((it, idx)=>(
                  <li key={it.id} className={'kitem tile '+(activeId===it.id?'active':'')}>
                    <div className="krow tile-head" onClick={()=>setActiveId(it.id)} role="button" tabIndex={0}>
                      <span className="ordinal">{String(idx+1).padStart(2,'0')}</span>
                      <span className="ktitle" title={it.name || 'Unbenannt'}>{it.name?.trim() || 'Unbenannt'}</span>
                      <div className="kactions">
                        <button className="icon-btn" title="Löschen" onClick={(ev)=>{ev.stopPropagation(); removeItem(it.id)}}>🗑</button>
                      </div>
                    </div>
                    {activeId===it.id && (
                      <div className="tile-body subtle">
                        <div className="dot-row"><span className="dot"/><span className="muted">{it.kind || '–'}</span></div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        <section className="two-col__main">
          {list.length===0 || !active ? (
            <div className="panel grow empty center">
              <h3 style={{margin:0}}>Kein Element ausgewählt</h3>
              <p className="muted" style={{marginTop:4}}>Lege links ein Element an oder wähle eines aus.</p>
            </div>
          ) : (
            <div className="panel grow">
              <div className="row" style={{gap:8, marginBottom:10, alignItems:'center'}}>
                <input className="input" style={{flex:1}} placeholder="Name" value={name} onChange={e=>onField('name', e.target.value)} />
                <select className="input" style={{width:220}} value={kind} onChange={e=>onField('kind', e.target.value)}>
                  {KINDS.map(k => <option key={k} value={k}>{k}</option>)}
                </select>
              </div>

              <div className="tabs">
                <button className={'tab-btn ' + (tab==='general'?'active':'')} onClick={()=>setTab('general')}>Allgemein</button>
                <button className={'tab-btn ' + (tab==='relations'?'active':'')} onClick={()=>setTab('relations')}>Beziehungen</button>
              </div>

              {tab === 'general' && (
                <div className="tab-body">
                  <textarea className="editor" placeholder="Beschreibung …" value={description} onChange={e=>onField('description', e.target.value)} />
                </div>
              )}

              {tab === 'relations' && (
                <div className="tab-body">
                  <div className="row" style={{justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
                    <h4 style={{margin:0}}>Beziehungen</h4>
                    <div className="row" style={{gap:8, alignItems:'center'}}>
                      <span className="muted" style={{fontSize:12}}>{relSaving ? 'Speichert…' : 'Alle Änderungen gespeichert'}</span>
                      <button className="btn sm ghost" onClick={addRel}>+ Beziehung hinzufügen</button>
                    </div>
                  </div>

                  {relations.length===0 ? (
                    <p className="muted">Noch keine Beziehungen.</p>
                  ) : (
                    <div className="rel-table">
                      <div className="rel-header">
                        <span>Ziel</span><span>Typ</span><span>Stärke</span><span>Notizen</span><span/>
                      </div>
                      {relations.map((r,i)=>(
                        <div className="rel-row" key={i}>
                          <select className="input" value={r.toId ?? ''} onChange={e=>editRel(i, { toId:Number(e.target.value)||null })}>
                            {candidates.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                          </select>
                          <select className="input" value={r.type} onChange={e=>editRel(i, { type:e.target.value })}>
                            {REL_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                          <input className="input" value={String(r.strength ?? 3)} onChange={e=>editRel(i, { strength: clamp(e.target.value,1,5) })} />
                          <input className="input" placeholder="Notizen" value={r.notes||''} onChange={e=>editRel(i, { notes:e.target.value })} />
                          <button className="icon-btn" title="Entfernen" onClick={()=>delRel(i)}>🗑</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </section>
      </div>

      {showGraph && <GraphModal projectId={pid} path="world-graph" onClose={()=>setShowGraph(false)} />}
    </main>
  )
}

function clamp(v,min,max){
  const n = Number(String(v).replace(/[^\d]/g,'')) || min
  return Math.max(min, Math.min(max, n))
}

```

### `frontend\src\preview.css`
```css
/* ===== Buchvorschau � �u�eres Layout (App-Seite) ===== */

/* volle Breite der App-Spalte nutzen */
.content--fluid {
  max-width: none;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
}

/* schlanke Toolbar */
.preview-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 8px 0 16px;
}

/* keine Karten-Box mehr */
.preview-wrap {
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 0;
  max-width: none;
}

/* B�hne f�r die Seiten � volle Breite, zentriert, weiches BG */
.preview-stage {
  height: calc(100vh - 140px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
  border-radius: 16px;
  background: linear-gradient(180deg, #f8f9fc 0%, #f3f4f8 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.7), 0 1px 2px rgba(0,0,0,.04);
  padding: 12px 16px;
}

/* gro�es, randloses Iframe � f�llt die B�hne */
.preview-frame {
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
}

/* Hinweis: die .pagedjs_page Schatten/Abst�nde werden im Iframe selbst gesetzt. */

```

### `frontend\src\projectview.css`
```css
/* ===== Zwei-Spalten-Layout für die Schreiben-Seite ===== */

.pv-grid {
  display: grid;
  grid-template-columns: 320px 1fr; /* Sidebar fix, rechts flexibel */
  gap: 16px;
  align-items: start;
}

/* Linke Spalte: sticky unter Header+Tabs */
.pv-sidebar {
  position: sticky;
  top: 116px;                     /* Header (~52px) + Tabs (~52px) + etwas Luft */
  max-height: calc(100vh - 140px);
  overflow: auto;
  padding-right: 4px;
}

/* Rechte Spalte füllt den Rest */
.pv-main {
  min-width: 0;                   /* verhindert Layoutsprünge bei langen Zeilen */
}

/* --- Kapitel-/Szenen-Liste (übernimmt deine vorhandenen Styles) --- */
.klist { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.kitem { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 6px; }
.krow { display: flex; align-items: center; gap: 8px; padding: 4px 6px; border-radius: 6px; }
.krow.active { background: #f3f4f6; }
.kinput { flex: 1; border: 1px solid #e5e7eb; border-radius: 6px; padding: 6px 8px; font: inherit; }
.kactions { display: flex; align-items: center; gap: 6px; }
.icon-btn { border: 1px solid #e5e7eb; background: #fff; border-radius: 6px; width: 28px; height: 28px; line-height: 26px; }
.icon-btn:hover { background: #f9fafb; }

.slist { list-style: none; margin: 4px 0 0; padding: 0 0 0 6px; display: flex; flex-direction: column; gap: 4px; }
.sbtn { border: 0; background: #f3f4f6; border-radius: 6px; padding: 6px 8px; cursor: pointer; }
.sbtn.active { background: #e5e7eb; font-weight: 600; }

.btn.xsm { padding: 4px 8px; font-size: 12px; }
.btn.ghost { background: transparent; border: 1px dashed #d1d5db; }
.btn.ghost:hover { background: #f9fafb; }

/* Responsiv: unter 980px stapeln wir auf eine Spalte */
@media (max-width: 980px) {
  .pv-grid { grid-template-columns: 1fr; }
  .pv-sidebar { position: static; max-height: none; overflow: visible; }

}


/* --- Seite Kopf über beiden Spalten --- */
.page-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin:8px 0 12px 0;
}
.page-crumbs{ display:flex; align-items:center; gap:8px; }
.page-crumbs .crumb{ font-weight:500; }
.page-crumbs .crumb.strong{ font-weight:700; }
.page-crumbs .sep{ opacity:.5; }
.page-meta .chip{ margin-left:auto; }

/* --- Gleich hohe Spalten --- */
.two-col.equalize{
  display:grid;
  grid-template-columns: 360px 1fr;
  gap:16px;
  align-items:stretch; /* <- beide Spalten gleiche Höhe */
  min-height: calc(100vh - 180px); /* optisch volle Höhe */
}
.two-col__sidebar, .two-col__main{ display:flex; flex-direction:column; }
.panel.fill{ height:100%; display:flex; flex-direction:column; }
.stack.fill{ min-height:100%; display:flex; flex-direction:column; gap:12px; }
.panel.grow{ flex:1 1 auto; display:flex; flex-direction:column; }
.editor{ flex:1 1 auto; min-height:280px; }

/* 1) Seitenkopf & Toolbar sticky + Blur */
.page-head {
  position: sticky; top: 56px; /* unter deiner Topnav */
  z-index: 5; backdrop-filter: saturate(120%) blur(6px);
  background: color-mix(in srgb, var(--bg, #f6f8fb) 80%, white 20%);
  border-bottom: 1px solid rgba(0,0,0,.04);
  padding: 8px 0; margin: 0 0 12px 0;
}

/* 2) Gleich hohe Spalten + Scroll-Schatten für die linke Liste */
.two-col.equalize { align-items: stretch; }
.two-col__sidebar .panel.fill {
  overflow: auto; /* eigener Scroll */
  box-shadow: inset 0 6px 6px -6px rgba(0,0,0,.05),
              inset 0 -6px 6px -6px rgba(0,0,0,.05);
}

/* 3) Kapitelkarte: kompakter, Actions nur bei Hover */
.chap-card { transition: transform .08s ease; }
.chap-card:hover { transform: translateY(-1px); }
.chap-head { padding: 10px 12px; }
.chap-actions .icon-btn { opacity: 0; transform: translateY(-2px); transition: .12s; }
.chap-card:hover .chap-actions .icon-btn { opacity: 1; transform: translateY(0); }

/* 4) Szenenliste im Kapitel links: pills wie „Subitems“ */
.scene-list { padding: 6px 8px 10px; gap: 6px; }
.scene-item .scene-link { gap: 8px; }
.scene-item.current .scene-link .text { font-weight: 600; }

/* 5) Kartenraster rechts: auto-fit, gleich hohe Karten */
.scene-grid {
  display: grid; gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
.scene-card { display: flex; flex-direction: column; min-height: 150px; }
.scene-card-top { align-items: start; }
.scene-card-snippet { flex: 1 1 auto; }
.scene-card .scene-card-meta { display: flex; justify-content: space-between; align-items: center; }

/* 6) Editor: Toolbar sticky & angenehmer Zeilenabstand */
.editor-toolbar {
  position: sticky; top: 104px; z-index: 4;
  backdrop-filter: blur(6px);
  background: color-mix(in srgb, white 70%, transparent);
  border-bottom: 1px solid rgba(0,0,0,.06);
}
.editor { line-height: 1.7; font-size: 16px; }

/* 7) Chips & Badges – etwas ruhiger */
.chip { background: #eef2ff; color: #3b5bfd; border: 0; }
.chip.saving { background: #fff3cd; color: #c27b00; }
.chip.saved  { background: #eafaf0; color: #17803d; }

/* 8) Buttons: konsistente Höhe + Icon-Abstand */
.btn, .btn.sm, .btn.xsm { gap: 6px; }
.btn.primary { box-shadow: 0 6px 12px -6px rgba(59,91,253,.25); }

/* 9) Scrollbar subtil (Chromium/Safari) */
.panel.fill::-webkit-scrollbar { height: 8px; width: 8px; }
.panel.fill::-webkit-scrollbar-thumb { background: rgba(0,0,0,.12); border-radius: 8px; }

/* 10) Fokus sichtbar aber weich */
:focus-visible { outline: 2px solid #7aa2ff; outline-offset: 2px; border-radius: 8px; }

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 240px;
  text-align: center;
}

.center {
  text-align: center;
}

.muted {
  color: #8a94a6;
}
/* --- Sidebar-Kacheln im Charakter-Menü wie Kapitel --- */

.klist.slim { gap: 10px; }

.kitem.tile {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 0 rgba(16,24,40,.04), 0 1px 2px rgba(16,24,40,.08);
  padding: 6px;
  transition: box-shadow .2s, border-color .2s;
  border: 1px solid rgba(16,24,40,.06);
}

.kitem.tile.active {
  box-shadow: 0 0 0 3px rgba(31, 136, 255, .12), 0 1px 0 rgba(16,24,40,.04);
  border-color: rgba(31, 136, 255, .35);
}

.krow.tile-head {
  display: grid;
  grid-template-columns: 34px 1fr auto auto;
  align-items: center;
  gap: 8px;
  padding: 4px;
  border-radius: 10px;
  cursor: pointer;
}

.ordinal {
  display: inline-flex;
  width: 34px;
  height: 28px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  font-weight: 600;
  font-size: 12px;
  color: #334155;
}

.title-input {
  background: #f8fafc;
  border: 1px solid transparent;
  padding: 8px 10px;
  border-radius: 8px;
  font-weight: 600;
}
.title-input:focus {
  background: #fff;
  border-color: rgba(31,136,255,.35);
  outline: none;
}

.bubble.small {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  background: #f1f5f9;
}

.tile-body.subtle {
  padding: 6px 8px 8px 42px; /* eingerückt unter der Ordinal */
}

.dot-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #94a3b8;
  display: inline-block;
}

.kactions .icon-btn {
  opacity: .75;
}
.krow:hover .kactions .icon-btn { opacity: 1; }

/* Empty-State */
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 240px;
  text-align: center;
}
.center { text-align: center; }
.muted { color: #8a94a6; }

/* Sidebar-Kacheln wie Kapitel */
.klist.slim { gap: 10px; }

.kitem.tile {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 0 rgba(16,24,40,.04), 0 1px 2px rgba(16,24,40,.08);
  padding: 6px;
  transition: box-shadow .2s, border-color .2s;
  border: 1px solid rgba(16,24,40,.06);
}
.kitem.tile.active {
  box-shadow: 0 0 0 3px rgba(31,136,255,.12), 0 1px 0 rgba(16,24,40,.04);
  border-color: rgba(31,136,255,.35);
}

.krow.tile-head {
  display: grid;
  grid-template-columns: 34px 1fr auto auto;
  align-items: center;
  gap: 8px;
  padding: 4px;
  border-radius: 10px;
  cursor: pointer;
}

.ordinal {
  display: inline-flex;
  width: 34px;
  height: 28px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  font-weight: 600;
  font-size: 12px;
  color: #334155;
}

/* Nur Anzeige, kein Input */
.ktitle {
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 8px 4px;
}

.bubble.small {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  background: #f1f5f9;
}

.tile-body.subtle {
  padding: 6px 8px 8px 42px;
}

.dot-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}
.dot {
  width: 8px; height: 8px; border-radius: 999px; background: #94a3b8; display: inline-block;
}

.kactions .icon-btn { opacity: .75; }
.krow:hover .kactions .icon-btn { opacity: 1; }

/* Empty-State */
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 240px;
  text-align: center;
}
.center { text-align: center; }
.muted { color: #8a94a6; }
/* Modal */
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(15,23,42,.45);
  display: flex; align-items: center; justify-content: center; z-index: 60;
}
.modal {
  width: min(860px, 92vw); background: #fff; border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,.25); overflow: hidden;
  display: flex; flex-direction: column;
}
.modal-head, .modal-foot {
  padding: 12px 16px; display:flex; align-items:center; justify-content: space-between;
  border-bottom: 1px solid rgba(16,24,40,.06);
}
.modal-foot { border-top: 1px solid rgba(16,24,40,.06); border-bottom: none; }
.modal-body { padding: 16px; max-height: 70vh; overflow: auto; }
.editor.sm { min-height: 90px; }

/* Wizard steps */
.steps { display:flex; gap:8px; padding: 8px 16px; border-bottom:1px solid rgba(16,24,40,.06); }
.step {
  padding:6px 10px; border-radius:999px; background:#f1f5f9; font-size:12px; font-weight:600; color:#334155;
}
.step.active { background:#dbeafe; color:#1e40af; }

/* Drawer */
.drawer-backdrop { position: fixed; inset:0; background: rgba(15,23,42,.35); z-index: 50; }
.drawer {
  position: absolute; right:0; top:0; height:100%; width: min(520px, 96vw); background:#fff;
  box-shadow: -10px 0 30px rgba(0,0,0,.15); display:flex; flex-direction:column;
}
.drawer-head, .drawer-foot { padding:12px 16px; display:flex; align-items:center; justify-content: space-between; border-bottom:1px solid rgba(16,24,40,.06); }
.drawer-foot { border-top:1px solid rgba(16,24,40,.06); border-bottom:none; margin-top:auto; }
.drawer-body { padding: 12px 16px; overflow:auto; }
.rel-row { display:grid; grid-template-columns: 1fr 1fr 90px 1fr auto; gap:8px; align-items:center; }

/* Utilities */
.vstack { display:flex; flex-direction:column; }
.btn.ghost { background:#f1f5f9; }

/* Graph im Modal */
/* ---- Graph Modal nutzt die verfügbare Fläche besser ---- */
.modal.graph-modal {
  width: min(1200px, 96vw);
  height: 88vh;             /* mehr Höhe */
  display: flex;
  flex-direction: column;
}

.graph-body {
  padding: 0;               /* Rahmenloser Canvas */
  flex: 1 1 auto;
  overflow: hidden;         /* kein Scroll im Body */
}

.graph-frame {
  width: 100%;
  height: 100%;             /* füllt den gesamten Body */
  border: 0;
  display: block;
  background: #fff;
}

/* Tabs */
.tabs { display:flex; gap:6px; border-bottom:1px solid rgba(16,24,40,.08); margin-bottom:10px; }
.tab-btn { padding:8px 12px; border-radius:10px 10px 0 0; background:#f1f5f9; color:#334155; font-weight:600; border:none; cursor:pointer; }
.tab-btn.active { background:#e2e8f0; color:#0f172a; }
.tab-body { padding-top:6px; }

/* Grid helpers */
.grid { display:grid; }
.grid.two { grid-template-columns: 1fr 1fr; }
.gap16 { gap:16px; }

/* Avatar placeholder box (rechts oben im Tab "Allgemein") */
.avatar-box { display:flex; flex-direction:column; gap:8px; align-items:center; justify-content:flex-start; }
.avatar-img, .avatar-ph {
  width: 140px; height: 140px; border-radius: 12px; object-fit: cover; background:#e2e8f0;
  display:flex; align-items:center; justify-content:center; font-size:48px; color:#64748b; font-weight:700;
}

/* Existing graph modal sizing */
.modal.graph-modal { width: min(1200px, 96vw); height: 88vh; display:flex; flex-direction:column; }
.graph-body { padding: 0; flex: 1 1 auto; overflow: hidden; }
.graph-frame { width:100%; height:100%; border:0; display:block; background:#fff; }

/* Small helpers */
.editor.sm { min-height: 90px; }
.bullets { padding-left: 18px; }

/* Beziehungen-Tab */
.rel-table { display: grid; gap: 8px; }
.rel-header {
  display: grid;
  grid-template-columns: 1fr 180px 100px 1fr 32px;
  gap: 8px;
  font-weight: 600;
  color: #334155;
}
.rel-row {
  display: grid;
  grid-template-columns: 1fr 180px 100px 1fr 32px;
  gap: 8px;
  align-items: center;
}
.rel-row .icon-btn { justify-self: end; }

/* Graph Modal (bereits vorhanden; hier der Vollständigkeit halber) */
.modal.graph-modal { width: min(1200px, 96vw); height: 88vh; display:flex; flex-direction:column; }
.graph-body { padding: 0; flex: 1 1 auto; overflow: hidden; }
.graph-frame { width:100%; height:100%; border:0; background:#fff; }

/* Avatar (Allgemein-Tab) */
.avatar-box { display:flex; flex-direction:column; gap:8px; align-items:center; justify-content:flex-start; }
.avatar-img, .avatar-ph {
  width: 140px; height: 140px; border-radius: 12px; object-fit: cover; background:#e2e8f0;
  display:flex; align-items:center; justify-content:center; font-size:48px; color:#64748b; font-weight:700;
}
/* ----- Tag Input / Chips für Fähigkeiten ----- */
.tag-input { display: flex; flex-direction: column; gap: 10px; }
.tag-input .input { width: 100%; }

.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #f1f5f9;
  border: 1px solid rgba(15, 23, 42, 0.08);
  font-weight: 600;
  color: #0f172a;
}
.tag-x {
  appearance: none;
  border: none;
  background: transparent;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  color: #475569;
}
.tag-x:hover { color: #0f172a; }

```

### `frontend\src\styles.css`
```css
/* ===================== THEME ===================== */
:root{
  --bg: #f5f7fb;
  --text: #0f172a;
  --muted: #64748b;

  --surface: #ffffff;
  --surface-2: #f8fafc;
  --border: #e5e7eb;
  --hover: #eef2f7;

  --primary: #2563eb;
  --primary-600: #1d4ed8;
  --accent: #22c55e;
  --ring: rgba(37,99,235,.22);

  --radius: 14px;

  --topnav-h: 64px;
  --content-w: 1280px;

  --sticky-offset: calc(var(--topnav-h) + 14px);
}

*{box-sizing:border-box;}
html,body{height:100%}
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
  line-height: 1.45;
}

.content{ max-width: var(--content-w); padding: 14px 20px 28px; margin: 0 auto; }
.row{ display:flex; align-items:center; gap:10px; }

/* ===================== TOP NAV ===================== */
.topnav{
  position: sticky; top: 0; z-index: 100;
  height: var(--topnav-h);
  background: #0b1220; color:#e5e7eb;
  border-bottom: 1px solid #0f172a;
  box-shadow: 0 4px 20px rgba(2,6,23,.18);
}
.topnav-inner{ height:100%; max-width: var(--content-w); margin:0 auto; display:flex; align-items:center; justify-content:space-between; padding:0 20px; }
.brand{ display:flex; align-items:center; gap:10px; }
.brand-logo{ width:16px; height:16px; display:grid; place-items:center; background:#16a34a; color:#0b1220; border-radius:4px; font-size:10px; font-weight:800; }
.brand-name{ color:#fff; font-weight:700; letter-spacing:.2px; }
.nav-left{ display:flex; align-items:center; gap:14px; }
.nav-links{ display:flex; align-items:center; gap:6px; }
.nav-link{ position:relative; display:flex; align-items:center; gap:8px; height:36px; padding:0 12px; color:#cbd5e1; text-decoration:none; border-radius:10px; transition: background .15s ease, color .15s ease; }
.nav-link:hover{ background: rgba(255,255,255,.06); color:#fff; }
.nav-link.active{ color:#fff; }
.nav-link .nav-ico{ width:18px; height:18px; opacity:.95; }
.nav-link .active-bar{ content:''; position:absolute; left:10px; right:10px; bottom:-8px; height:3px; background: var(--accent); border-radius:99px; transform: scaleX(0); transition: transform .18s ease; }
.nav-link.active .active-bar{ transform: scaleX(1); }

.nav-right{ display:flex; align-items:center; gap:8px; }
.nav-search{ display:flex; align-items:center; gap:6px; height:34px; padding:0 10px; border-radius:10px; background: rgba(255,255,255,.06); color:#e5e7eb; border:1px solid rgba(255,255,255,.08); }
.nav-search input{ width:180px; border:0; outline:0; background:transparent; color:#e5e7eb; font:inherit; }
.nav-search input::placeholder{ color:#94a3b8; }
.icon-btn{ width:32px; height:32px; display:inline-flex; align-items:center; justify-content:center; border-radius:10px; background: rgba(255,255,255,.06); color:#e5e7eb; border:1px solid rgba(255,255,255,.08); cursor:pointer; }
.icon-btn:hover{ background: rgba(255,255,255,.12); }
.nav-user{ display:flex; align-items:center; gap:8px; padding-left:4px; color:#e5e7eb; }
.avatar{ width:28px; height:28px; border-radius:999px; background:#1f2937; display:grid; place-items:center; color:#cbd5e1; font-weight:700; }
.uname{ font-size:14px; color:#e5e7eb; }

/* ===================== BASICS ===================== */
.btn{ display:inline-flex; align-items:center; justify-content:center; height:34px; padding:0 12px; background:#fff; color:#111; border:1px solid var(--border); border-radius:10px; cursor:pointer; transition: background .15s ease, border-color .15s ease, box-shadow .15s ease; }
.btn:hover{ background: var(--hover); }
.btn.primary{ background: var(--primary); color:#fff; border-color: var(--primary); }
.btn.primary:hover{ background: var(--primary-600); }
.btn.sm{ height:30px; padding:0 10px; font-size:14px; }
.btn.xsm{ height:26px; padding:0 8px; font-size:12px; }
.btn.ghost{ background: transparent; border-style: dashed; }
.input, input[type="text"], input[type="number"], textarea{ width:100%; border:1px solid var(--border); background:#fff; color:var(--text); border-radius:10px; padding:8px 10px; font:inherit; outline:none; transition: border-color .15s ease, box-shadow .15s ease; }
.input::placeholder, textarea::placeholder{ color:#94a3b8; }
.input:focus, textarea:focus{ border-color: var(--primary); box-shadow: 0 0 0 4px var(--ring); }

.panel{ background: var(--surface); border:1px solid var(--border); border-radius: var(--radius); padding:10px; box-shadow: 0 1px 0 rgba(255,255,255,.9), 0 8px 30px rgba(15,23,42,.06); }
.panel + .panel{ margin-top: 10px; }
.panel-title{ display:flex; align-items:center; justify-content:space-between; padding:6px 4px 8px; border-bottom:1px solid var(--border); margin-bottom:8px; font-weight:600; }

.editor{ width:100%; min-height:500px; resize:vertical; border-radius:12px; padding:12px 14px; line-height:1.55; font-size:15px; }
.editor-head{ margin:6px 0 10px; }
.crumb{ color: var(--muted); font-size:14px; }
.crumb.strong{ color: var(--text); font-weight:600; }
.crumb.sep{ opacity:.6; }

.title-input{ width:100%; border:1px solid var(--border); background:#fff; border-radius:12px; padding:10px 14px; font-size:18px; font-weight:600; }
.title-input::placeholder{ color:#94a3b8; }

.editor-toolbar{ display:flex; align-items:center; justify-content:space-between; gap:10px; padding:6px 6px 10px; margin:-6px -6px 8px; border-bottom:1px solid var(--border); }
.tools-left{ display:flex; align-items:center; gap:4px; }
.tools-right{ display:flex; align-items:center; gap:10px; color: var(--muted); font-size:13px; }
.tool-btn{ height:30px; padding:0 10px; border-radius:9px; border:1px solid var(--border); background:#fff; cursor:pointer; }
.tool-btn:hover{ background: var(--hover); }
.tool-ico{ font-weight:700; font-size:13px; }
.tool-sep{ width:1px; height:22px; background: var(--border); margin:0 4px; }
.muted{ color: var(--muted); }
.dot{ width:4px; height:4px; background:#cbd5e1; border-radius:999px; display:inline-block; }

.chip{ display:inline-flex; align-items:center; padding:2px 8px; border-radius:999px; font-size:12px; color:#334155; background:#eef2ff; border:1px solid #e0e7ff; }
.chip.saving{ background:#fff7ed; border-color:#fed7aa; color:#9a3412; }
.chip.saved{ background:#ecfdf5; border-color:#a7f3d0; color:#065f46; }

/* ===================== Kapitel-Liste (links) ===================== */
.chapter-panel .panel-title .ksearch{
  display:flex; align-items:center; gap:6px; height:30px; padding:0 10px; border:1px solid var(--border);
  border-radius:8px; background:#fff; color:#64748b;
}
.ksearch input{ border:0; outline:0; background:transparent; width:140px; font:inherit; color: var(--text); }
.ksearch input::placeholder{ color:#94a3b8; }

.chap-cards{ list-style:none; margin:8px 0 0; padding:0; display:flex; flex-direction:column; gap:10px; }
.chap-card{
  border:1px solid var(--border); background:#fff; border-radius:12px; padding:8px;
  box-shadow: 0 1px 0 rgba(255,255,255,.9), 0 4px 16px rgba(15,23,42,.04);
}
.chap-card.active{ outline: 2px solid rgba(37,99,235,.20); }

.chap-head{ display:flex; align-items:center; justify-content:space-between; gap:8px; padding:2px 2px 6px; cursor:pointer; user-select:none; }
.chap-meta{ display:flex; align-items:center; gap:10px; min-width:0; }
.chap-num{
  width:26px; height:26px; border-radius:8px; background:#eef2ff; border:1px solid #e0e7ff;
  display:grid; place-items:center; font-size:12px; color:#334155; font-weight:700;
}
.chap-title-text{ font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

.chap-actions{ display:flex; align-items:center; gap:6px; }
.scene-count{
  min-width:24px; height:24px; border-radius:999px; background:#f1f5f9; border:1px solid #e2e8f0;
  display:grid; place-items:center; font-size:12px; color:#475569;
}
.collapse-btn{ width:26px; height:26px; border-radius:8px; border:1px solid var(--border); background:#fff; cursor:pointer; transform: rotate(0deg); }
.collapse-btn.is-collapsed{ transform: rotate(-90deg); }

.scene-list{ list-style:none; margin:6px 0 0; padding:4px 2px 2px 2px; display:flex; flex-direction:column; gap:6px; border-top:1px dashed var(--border); }
.scene-item{ display:flex; align-items:center; justify-content:space-between; gap:6px; padding:4px 6px; border-radius:8px; background:#f8fafc; border:1px solid #eef2f7; }
.scene-item.current{ background:#eef2ff; border-color:#e0e7ff; }
.scene-link{ display:flex; align-items:center; gap:8px; background:transparent; border:0; cursor:pointer; text-align:left; flex:1; }
.scene-link .dot{ width:6px; height:6px; background:#94a3b8; }
.scene-item.current .dot{ background:#2563eb; }
.scene-link .text{ overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.scene-del{ visibility:hidden; background:#fff; border:1px solid var(--border); border-radius:6px; width:26px; height:26px; cursor:pointer; }
.scene-item:hover .scene-del{ visibility:visible; }
.scene-add{ width:100%; text-align:center; background:#fff; border:1px dashed var(--border); border-radius:8px; padding:6px 8px; cursor:pointer; }
.scene-add:hover{ background:#f9fafb; }

/* ===================== Kapitel-�bersicht (rechts) ===================== */
.scene-grid{
  list-style:none; margin:8px 0 0; padding:0;
  display:grid; gap:12px;
  grid-template-columns: repeat( auto-fill, minmax(260px, 1fr) );
}
.scene-card{
  border:1px solid var(--border); background:#fff; border-radius:12px; padding:10px;
  display:flex; flex-direction:column; gap:8px;
  box-shadow: 0 1px 0 rgba(255,255,255,.9), 0 6px 18px rgba(15,23,42,.06);
}
.scene-card-top{ display:flex; align-items:center; justify-content:space-between; }
.scene-card-title{
  background:transparent; border:0; padding:0; cursor:pointer;
  font-weight:700; text-align:left;
}
.scene-card-snippet{ margin:0; color: var(--muted); font-size:14px; line-height:1.45; min-height: 42px; }
.scene-card-meta{ display:flex; align-items:center; justify-content:space-between; }

/* Responsive */
@media (max-width: 980px){
  .content { padding-left:14px; padding-right:14px; }
  .nav-search input{ width:120px; }
  .editor-toolbar{ flex-direction:column; align-items:flex-start; }
  .ksearch input{ width:110px; }
}

```

### `frontend\src\ui\AppHeader.jsx`
```jsx
import React from 'react'

export default function AppHeader() {
  return (
    <>
      <div className="brand">Roman Writing MVP</div>
      <div className="header-actions">
        <a className="link-muted" href="#" title="Docs">Docs</a>
      </div>
    </>
  )
}

```

### `frontend\src\ui\Editor.jsx`
```jsx
import React from 'react'

export default function Editor({ value, onChange }) {
  return (
    <textarea
      className="textarea"
      style={{minHeight: '60vh', lineHeight: '1.6'}}
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      placeholder="Hier schreiben... (MVP: einfacher Texteditor)"
    />
  )
}

```

### `frontend\src\ui\ProjectNav.jsx`
```jsx
import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

export default function ProjectNav() {
  const { id } = useParams()
  const { pathname } = useLocation()
  const base = `/project/${id}`
  const tabs = [
    { to: base, label: 'Schreiben' },
    { to: `${base}/characters`, label: 'Charaktere' },
    { to: `${base}/world`, label: 'Welt' },
    { to: `${base}/preview`, label: 'Vorschau' },  
  ]
  return (
    <div className="tabs">
      {tabs.map(t => (
        <Link key={t.to} className={`tab ${pathname === t.to ? 'active' : ''}`} to={t.to}>
          {t.label}
        </Link>
      ))}
    </div>
  )
}

```

### `frontend\vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true
      }
    }
  }
})

```

### `make-snapshot.ps1`
```powershell
param(
  [string]$OutFile = "code-snapshot.md",
  [int]$MaxKB = 150
)

$root = Get-Location
$project = Split-Path -Leaf $root

function WriteLine($text="") {
  $text | Out-File -FilePath $OutFile -Append -Encoding utf8
}

function IsExcludedFile($path) {
  $name = [System.IO.Path]::GetFileName($path)
  $ext  = [System.IO.Path]::GetExtension($path).ToLowerInvariant()

  $excludeDirs  = @('node_modules','.git','dist','build','.venv','venv','__pycache__','.idea','.vscode','coverage','.cache','.next','.turbo')
  $excludeFiles = @('package-lock.json','yarn.lock','pnpm-lock.yaml','app.db','*.sqlite','*.sqlite3','.env*','*.png','*.jpg','*.jpeg','*.gif','*.webp','*.ico','*.pdf','*.ttf','*.otf','*.woff','*.woff2','*.zip')

  foreach($d in $excludeDirs)  { if ($path -like "*\$d\*") { return $true } }
  foreach($f in $excludeFiles) { if ($name -like $f)      { return $true } }

  $whitelistExt = @('.js','.jsx','.ts','.tsx','.json','.css','.scss','.md','.yml','.yaml','.html','.py','.txt','.sql','.ini','.toml','.cfg','.conf','.bat','.ps1')
  if ($whitelistExt -notcontains $ext) { return $true }

  return $false
}

$map = @{
  '.js'='javascript'; '.jsx'='jsx'; '.ts'='ts'; '.tsx'='tsx'; '.json'='json';
  '.css'='css'; '.scss'='scss'; '.md'='markdown'; '.yml'='yaml'; '.yaml'='yaml';
  '.html'='html'; '.py'='python'; '.txt'='text'; '.sql'='sql'; '.ini'='ini';
  '.bat'='bat'; '.ps1'='powershell'; '.toml'='toml'; '.cfg'='ini'; '.conf'='ini'
}

# Header
$header = "<!-- Generated " + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss') + " -->`n# " + $project + " - Code Snapshot`n"
Set-Content -Path $OutFile -Value $header -Encoding utf8

WriteLine "## Projektstruktur"
WriteLine '```'
$tree = & cmd /c "tree /F /A"
WriteLine $tree
WriteLine '```'
WriteLine ""

WriteLine "## Dateien"
WriteLine ""

Get-ChildItem -Recurse -File | Sort-Object FullName | ForEach-Object {
  $full = $_.FullName
  if (IsExcludedFile $full) { return }

  $rel   = $full.Substring($root.Path.Length + 1)
  $ext   = [System.IO.Path]::GetExtension($full).ToLowerInvariant()
  $lang  = $map[$ext]; if (-not $lang) { $lang = "" }
  $sizeKB = [int][math]::Ceiling($_.Length / 1KB)

  # Inline-Code: zwei Backticks schreiben einen echten Backtick
  WriteLine ("### ``" + $rel + "``")

  if ($sizeKB -gt $MaxKB) {
    WriteLine ("_Datei groesser als " + $MaxKB + " KB, ausgelassen._")
    WriteLine ""
  } else {
    WriteLine ('```' + $lang)
    Get-Content -Raw -Encoding utf8 $full | Out-File -FilePath $OutFile -Append -Encoding utf8
    WriteLine '```'
    WriteLine ""
  }
}

Write-Host ("Fertig: " + $OutFile)

```

### `README.md`
```markdown
# Roman Writing MVP (ohne KI)

Minimaler Prototyp zum Schreiben und Organisieren von Romanen.

## Schnellstart
1. **Backend starten**
```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
API: http://127.0.0.1:5000

2. **Frontend starten (neues Terminal)**
```powershell
cd frontend
npm install
npm run dev
```
Frontend: http://127.0.0.1:5173

## Features
- Projekte anlegen, umbenennen, löschen
- Kapitel erstellen, auswählen, löschen
- Einfacher Texteditor mit Autosave (Debounce)
- SQLite-Datenbank (Datei: `backend/app.db`)
- Vite-Proxy `/api` → Flask (kein CORS-Ärger)

## Nächste Schritte
- Charaktere & Orte als Tabs in der Projektansicht
- Markdown-Preview
- Export als `.md` oder `.docx`
- Reorder per Drag&Drop

```

### `snapshot.md`
_Datei groesser als 200 KB, ausgelassen._

